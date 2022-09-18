module.exports = app => {
  const { existsOrError } = app.api.validations.validations;
  
  const fields = ['id', 'code', 'abbreviation', 'name', 'countryId', 'statusId', 'created', 'updated'];
  const table = 'states';

  const save = async (req, res) => {
    const state = {...req.body }
    if (req.params.id) state.id = req.params.id;
    try {
      
      existsOrError(state.code, 'Código não informado!');
      existsOrError(state.abbreviation, 'Abreviatura não informada!');
      existsOrError(state.name, 'Nome não informado!');
      existsOrError(state.countryId, 'País não informado!');
      existsOrError(state.statusId, 'Status não informado!');

      if(state.id) {
        const stateFromDB = await app.db(table).where({ id: state.id }).first();
        if(!state.id) {
          notExistsOrError(stateFromDB, `${table} já cadastrado!`);
        }
      }

    } catch(msg) {
      return res.status(400).send(msg);
    }

    
    if (state.id) {
      state.updated = new Date;
      app.db(table)
        .update(state)
        .where({ id: state.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      state.created = new Date;
      state.updated = new Date;
      app.db(table)
        .insert(state)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }

  const get = async (req, res) => {
    app.db(table)
      .select(fields)
      .then(states => res.json(states))
      .catch(err => res.status(500).send(err));
  }

  const getById = async (req, res) => {
    const stateId = req.params.id;
    if (stateId) {
      app.db(table)
        .select(fields)
        .where({ id: stateId })
        .then(states => res.json(states))
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send(`${table} não encontrado!`);
    }
  }

  const del = async (req, res) => {
    const state = {...req.body }
    if (state.id) {
      app.db(table)
        .delete(state)
        .where({ id: state.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send(`${table} não encontrado!`);
    }
  }

  return { save, get, del, getById }
};
