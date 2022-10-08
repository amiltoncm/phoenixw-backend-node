const bcrypt = require('bcrypt-node');

module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validations.validations;

  const fields = [
    'id',
    'name',
    'password',
    'profile',
    'status',
    'created',
    'updated',
    'deleted'
  ];

  const table = 'users'

  const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  const save = async (req, res) => {
    const user = {...req.body }
    if (req.params.id) user.id = req.params.id;
    try {
      existsOrError(user.name, 'Nome não informado!');
      existsOrError(user.password, 'Senha não informada!');
      existsOrError(user.confirmPassword, 'Confirmação da senha não informada!');
      equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem!')

      const userFromDB = await app.db(table).where({ name: user.name }).first();
      if(!user.id) {
        notExistsOrError(userFromDB, `${table} já cadastrado!`);
      }
    } catch(msg) {
      return res.status(400).send(msg);
    }
    user.statusId = user.statusId ? user.statusId : 1;
    user.profileId = user.profileId ? user.profileId : 1;
    user.password = encryptPassword(user.password);

    delete user.confirmPassword;

    if (user.id) {
      user.updated = new Date;
      app.db(table)
        .update(user)
        .where({ id: user.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    } else {
      user.created = new Date;
      user.updated = new Date;
      app.db(table)
        .insert(user)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }

  const get = (req, res) => {

    app.db({a: 'users', b: 'profiles', c: 'status'})
      .select({
        id: 'a.id', 
        name: 'a.name',
        profileId: 'a.profile_id',
        profile: 'b.name',
        statusId: 'a.status_id',
        status: 'c.name',
        created: 'a.created',
        updated: 'a.updated',
        deleted: 'a.deleted'
      })
      .whereRaw('?? = ??', ['a.profile_id', 'b.id'])
      .whereRaw('?? = ??', ['a.status_id', 'c.id'])
      .whereRaw('?? = 1', ['a.status_id'])
      .whereRaw('?? > 0', ['a.id'])
      .orderBy('name', 'asc')
      .then(users => 
        res.json(users))
      .catch(err => res.status(500).send(err));
  }

  const del = (req, res) => {
    const user = {...req.body }
    if (user.id) {
      user.updated = new Date;
      user.deleted = new Date;
      user.statusId = 0;

      app.db(table)
        .update(user)
        .where({ id: user.id })
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err));
    }
  }

  return { save, get, del }
};
