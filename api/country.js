module.exports = app => {
  const { existsOrError } = app.api.validations.validations;

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
    
    const countryFromDB = await app.db('countries').where({ id: country.id }).first();
    
    if (countryFromDB) {
      country.updated = new Date;
      app.db('countries')
        .update(country)
        .where({ id: country.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      country.created = new Date;
      country.updated = new Date;
      app.db('countries')
        .insert(country)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }
  
  const get = async (req, res) => {
    app.db('countries')
      .select('id', 'name', 'iso2', 'iso3', 'statusId', 'created', 'updated')
      .then(countries => res.json(countries))
      .catch(err => res.status(500).send(err));
  }

  const getById = async (req, res) => {
    const countryId = req.params.id;
    if (countryId) {
      app.db('countries')
        .select('id', 'name', 'iso2', 'iso3', 'statusId', 'created', 'updated')
        .where({ id: countryId })
        .then(countries => res.json(countries))
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send('País não encontrado!');        
    }
  }
  
  const del = async (req, res) => {
    const country = {...req.body }
    if (country.id) {
      app.db('countries')
        .delete(country)
        .where({ id: country.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send('País não encontrado!');        
    }
  }
  
  return { save, get, del, getById }  
}
