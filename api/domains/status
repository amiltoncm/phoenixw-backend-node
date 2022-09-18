module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validations.validations;
  
  const fields = ['id', 'name'];
  const table = 'status';

  const save = async (req, res) => {
    const status = {...req.body }
    if (req.params.id) status.id = req.params.id;
    try {
      existsOrError(status.name, 'Nome não informado!');

      const statusFromDB = await app.db(table).where({ id: status.id }).first();
      if(!status.id) {      
        notExistsOrError(statusFromDB, `${table} já cadastrado!`);
      }
    } catch(msg) {
      return res.status(400).send(msg);
    }

    if (status.id) {
      app.db(table)
        .update(status)
        .where({ id: status.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      app.db(table)
        .insert(status)
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
    const status = {...req.body }
    if (status.id) {
      app.db(table)
        .delete(status)
        .where({ id: status.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      res.status(400).send('Padrão inválido para exclusão!');
    }
  }

  return { save, get, del }
};
