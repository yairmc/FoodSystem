import config from '../../config.js'
import jwt from 'jsonwebtoken'

export function generateAccessToken(user) {
    return jwt.sign(user, config.secretKey, {expiresIn: '50m'});
}