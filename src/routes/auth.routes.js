import express from "express";
import jwt from "jsonwebtoken";
const authRouter = express.Router();

const secretKey = 'ym666'

authRouter.use(express.urlencoded({ extended: true }))
    .use(express.json())

    // acceso a datos (ejemplo )
    // en esta parte va la ruta ala cual se le dara acceso
    //una vez autentiado
    .get('/data', validateToken, (req, res) => {
        res.json({
            username: req.user,
            tuits: [
                {
                    id: 0,
                    tet: 'Estes es mi primer tuit',
                    username: 'vidamrr'
                },
                {
                    id: 1,
                    tet: 'Estes es el mejor lenguaje',
                    username: 'yair'
                },
                {
                    id: 2,
                    tet: 'Escrito desde visual Code',
                    username: 'hector'
                }
            ]
        });
    })
    // ruta login 
    .get('/login', (req, res) => {
        res.send("Login")
    })
    // ruta de autenticacion
    .post('/auth', (req, res) => {
        const { username } = req.body;

        const user = { username: username };


        const accessToken = generateAccessToken(user);
        console.log(accessToken)

        res.header('authorization', accessToken).json({
            message: "Usuario autenticado",
            token: accessToken
        })
    });

// Funcion que genera token de acceso 
function generateAccessToken(user) {
    return jwt.sign(user, secretKey, { expiresIn: '10m' })
}

// midelware
function validateToken(req, res, next) {
    const accessToken = req.headers['authorization'] || req.query.accesstoken;
    if (!accessToken) res.send("!access denied");

    jwt.verify(accessToken, secretKey, (err, user) => {
        if (err) res.send('access denied, token was expired or incorrect')
        res.user = user;

        next();
    })
}
export default authRouter;