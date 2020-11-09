import jwt from 'jsonwebtoken'
import { User } from '../models/user.js'

export const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, '5867jgtfju5252')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(400).send({ error: 'please authenticate' })
    }
}