module.exports = app => {
  const { existsOrError } = app.api.validations.validations;
  
  const fields = ['id', 'name', 'iso2', 'iso3', 'statusId', 'created', 'updated'];
  const table = 'countries';

  const save = async (req, res) => {
    const country = {...req.body }
    if (req.params.id) country.id = req.params.id;
    try {
      existsOrError(country.id, 'Código não informado!');
      existsOrError(country.name, 'Nome não informado!');
      existsOrError(country.iso2, 'ISO 2 não informado!');
      existsOrError(country.iso3, 'ISO 3 não informado!');
      existsOrError(country.statusId, 'Status não informado!');
    } catch(msg) {
      return res.status(400).send(msg);
    }

    const countryFromDB = await app.db(table).where({ id: country.id }).first();

    if (countryFromDB) {
      country.updated = new Date;
      app.db(table)
        .update(country)
        .where({ id: country.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      country.created = new Date;
      country.updated = new Date;
      app.db(table)
        .insert(country)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }

  const get = async (req, res) => {
    app.db(table)
      .select(fields)
      .then(countries => res.json(countries))
      .catch(err => res.status(500).send(err));
  }

  const getById = async (req, res) => {
    const countryId = req.params.id;
    if (countryId) {
      app.db(table)
        .select(fields)
        .where({ id: countryId })
        .then(countries => res.json(countries))
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send(`${table} não encontrado!`);
    }
  }

  const del = async (req, res) => {
    const country = {...req.body }
    if (country.id) {
      app.db(table)
        .delete(country)
        .where({ id: country.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send(`${table} não encontrado!`);
    }
  }

  return { save, get, del, getById }  
};
