module.exports = app => {
  
  const save = async (req, res) => {
    const profile = {...req.body }
    if (req.params.id) profile.id = req.params.id;
    try {
      existsOrError(profile.name, 'Nome não informado!');
      
      const profileFromDB = await app.db('profiles').where({ prf_name: profile.name }).first();
      if(!profile.id) {
        notExistsOrError(profileFromDB, 'Perfil já cadastrado!');
      }
    } catch(msg) {
      return res.status(400).send(msg);
    }

    if (profile.id) {
      profile.updated = new Date;
      app.db('profiles')
        .update(profiles)
        .where({ prf_id: profile.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      app.db('profiles')
        .insert(profiles)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }
  
  const get = async (req, res) => {
    app.db('profiles')
      .select('prf_id', 'prf_name', 'dst_id', 'prf_created', 'prf_updated')
      .then(profiles => res.json(profiles))
      .catch(err => res.status(500).send(err));
  }

  const del = async (req, res) => {
    if (profile.id) {
      app.db('profiles')
        .delete(profile)
        .where({ prf_id: profile.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }
  
  return { save, get, del }  
}
