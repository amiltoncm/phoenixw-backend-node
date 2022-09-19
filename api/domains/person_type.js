module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validations.validations;
  
  const fields = ['id', 'name'];
  const table = 'person_type';

  const save = async (req, res) => {
    const personType = {...req.body }
    if (req.params.id) personType.id = req.params.id;
    try {
      existsOrError(personType.name, 'Nome não informado!');
      const personTypeFromDB = await app.db(table).where({ id: personType.id }).first();
      if(!req.params.id) {      
        notExistsOrError(personTypeFromDB, `${table} já cadastrado!`);
      }
    } catch(msg) {
      return res.status(400).send(msg);
    }

    if (req.params.id) {
      app.db(table)
      .update(personType)
      .where({ id: personType.id })
      .then(_ => res.status(204).send())
      .catch(err => res.status(500).send(err));
    } else {
      app.db(table)
        .insert(personType)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }

  const get = (req, res) => {
    app.db(table)
      .select(fields)
      .then(status => res.json(status))
      .catch(err => res.status(500).send(err))
  }

  const del = (req, res) => {
    const personType = {...req.body }
    if (personType.id) {
      app.db(table)
        .delete(personType)
        .where({ id: personType.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      res.status(400).send('Padrão inválido para exclusão!');
    }
  }

  return { save, get, del }
};
