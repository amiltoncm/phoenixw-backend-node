module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validations.validations;
  
  const fields = ['id', 'name', 'statusId', 'created', 'updated'];
  const table = 'profiles';
  
  const save = async (req, res) => {
    const profile = {...req.body }
    if (req.params.id) profile.id = req.params.id;
    try {
      existsOrError(profile.name, 'Nome não informado!');

      if (req.params.id) {
        const profileFromDB = await app.db(table).where({ id: profile.id }).first();
        if(!profile.id) {
          notExistsOrError(profileFromDB, `${table} já cadastrado!`);
        }
      }
    } catch(msg) {
      return res.status(400).send(msg);
    }

    if (profile.id) {
      profile.updated = new Date;
      app.db(table)
        .update(profile)
        .where({ id: profile.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      profile.created = new Date;
      profile.updated = new Date;
      app.db(table)
        .insert(profile)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }

  const get = async (req, res) => {
    app.db(table)
      .select(fields)
      .then(profiles => res.json(profiles))
      .catch(err => res.status(500).send(err));
  }

  const getById = async (req, res) => {
    const profileId = req.params.id;
    if (profileId) {
      app.db(table)
        .select(fields)
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
      app.db(table)
        .delete(profile)
        .where({ id: profile.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      return res.status(400).send(`${table} não encontrado!`);
    }
  }

  return { save, get, del, getById }
};
