module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validations.validations;
  
  const save = async (req, res) => {
    const profile = {...req.body }
    if (req.params.id) profile.id = req.params.id;
    try {
      existsOrError(profile.name, 'Nome não informado!');

      if (req.params.id) {
        const profileFromDB = await app.db('profiles').where({ id: profile.id }).first();
        if(!profile.id) {
          notExistsOrError(profileFromDB, 'Perfil já cadastrado!');
        }
      }
    } catch(msg) {
      return res.status(400).send(msg);
    }
    
    if (profile.id) {
      profile.updated = new Date;
      app.db('profiles')
        .update(profile)
        .where({ id: profile.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      profile.created = new Date;
      profile.updated = new Date;
      app.db('profiles')
        .insert(profile)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }
  
  const get = async (req, res) => {
    app.db('profiles')
      .select('id', 'name', 'statusId', 'created', 'updated')
      .then(profiles => res.json(profiles))
      .catch(err => res.status(500).send(err));
  }

  const getById = async (req, res) => {
    const profileId = req.params.id;
    if (profileId) {
      app.db('profiles')
        .select('id', 'name', 'statusId', 'created', 'updated')
        .where({ id: profileId })
        .then(profiles => res.json(profiles))
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send('Perfil não encontrado!');        
    }
  }
  
  const del = async (req, res) => {
    const profile = {...req.body }
    if (profile.id) {
      app.db('profiles')
        .delete(profile)
        .where({ id: profile.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }
  
  return { save, get, del, getById }  
}
