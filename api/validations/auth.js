const { authSecret } = require('../../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-node');

const expirationTime = (60 * 60 * 24);

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.name || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!');
        }

        const user = await app.db('users')
            .where({ name: req.body.name })
            .first();

        if (!user) return res.status(400).send('Usuário não encontrado!');

        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if (!isMatch) return res.status(401).send('Usuário/Senha inválidos!');

        const now = Math.floor(Date.now() / 1000);

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            profileId: user.profileId,
            iat: now,
            exp: now + expirationTime
        };

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        });
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true);
                }
            }
        } catch(e) {
            // problema com o token
        }

        res.send(false)
    };

    return { signin, validateToken };
}
