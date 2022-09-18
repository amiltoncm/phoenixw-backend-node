module.exports = app => {
  const { existsOrError } = app.api.validations.validations;
  
  const fields = ['id', 'code', 'name', 'stateId', 'statusId', 'created', 'updated'];
  const table = 'cities';

  const save = async (req, res) => {
    const city = {...req.body }
    if (req.params.id) city.id = req.params.id;
    try {
      
      existsOrError(city.code, 'Código não informado!');
      existsOrError(city.name, 'Nome não informado!');
      existsOrError(city.stateId, 'Estado não informado!');
      existsOrError(city.statusId, 'Status não informado!');

      if(city.id) {
        const cityFromDB = await app.db(table).where({ id: city.id }).first();
        if(!city.id) {
          notExistsOrError(cityFromDB, `${table} já cadastrado!`);
        }
      }

    } catch(msg) {
      return res.status(400).send(msg);
    }

    if (city.id) {
      city.updated = new Date;
      app.db(table)
        .update(city)
        .where({ id: city.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      city.created = new Date;
      city.updated = new Date;
      app.db(table)
        .insert(city)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }

  const get = async (req, res) => {
    app.db(table)
      .select(fields)
      .then(cities => res.json(cities))
      .catch(err => res.status(500).send(err));
  }

  const getById = async (req, res) => {
    const cityId = req.params.id;
    if (cityId) {
      app.db(table)
        .select(fields)
        .where({ id: cityId })
        .then(cities => res.json(cities))
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send(`${table} não encontrado!`);
    }
  }

  const del = async (req, res) => {
    const city = {...req.body }
    if (city.id) {
      app.db(table)
        .delete(city)
        .where({ id: city.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send(`${table} não encontrado!`);
    }
  }

  return { save, get, del, getById }
};
