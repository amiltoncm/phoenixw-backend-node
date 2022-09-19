module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validations.validations;
  
  const fields = ['id', 'name'];
  const table = 'public_places';

  const save = async (req, res) => {
    const publicPlace = {...req.body }
    if (req.params.id) publicPlace.id = req.params.id;
    try {
      existsOrError(publicPlace.name, 'Nome não informado!');
      if(req.params.id) { 
        const publicPlaceFromDB = await app.db(table).where({ id: publicPlace.id }).first();
        if(!publicPlace.id) {      
          notExistsOrError(publicPlaceFromDB, `${table} já cadastrado!`);
        }
      }
    } catch(msg) {
      return res.status(400).send(msg);
    }

    if (req.params.id) {
      app.db(table)
      .update(publicPlace)
      .where({ id: publicPlace.id })
      .then(_ => res.status(204).send())
      .catch(err => res.status(500).send(err));
    } else {
      app.db(table)
        .insert(publicPlace)
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
    const publicPlace = {...req.body }
    if (publicPlace.id) {
      app.db(table)
        .delete(publicPlace)
        .where({ id: publicPlace.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      res.status(400).send('Padrão inválido para exclusão!');
    }
  }

  return { save, get, del }
};
