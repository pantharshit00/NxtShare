import express from 'express';
import User from '../models/user';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import {jwtStrategy} from '../config/passport';

const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());
jwtStrategy(passport);

function hashPassword(password) {
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
    return [salt, hash].join("$");
}

function compareHash(string, original) {
    let originalHash = original.split("$");
    let hash = crypto.pbkdf2Sync(string, originalHash[0], 2048, 32, 'sha512').toString('hex')
    if (originalHash[1] == hash)
        return true;
    else
        return false;
}

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.json({
            "status": "ok",
            "isAuthenticated": false,
            "error": "Please provide required data"
        })
    }
    else {
        User.findOne({
            where: {
                username
            }
        }).then((user) => {
            if (user == null) {
                res.json({
                    "status": "ok",
                    "isAuthenticated": false,
                    "error": "Username/Password is incorrect"
                })
            }
            else {
                if (!compareHash(password, user.password)) {
                    res.json({
                        "status": "ok",
                        "isAuthenticated": false,
                        "error": "Username/Password is incorrect"
                    })
                }
                else {
                    const token = jwt.sign({id:user.id},process.env.secret,{ expiresIn: 2592000 })
                    res.json({
                        "status": "ok",
                        "isAuthenticated": true,
                        token
                    })
                }
            }
        })
        .catch(err => res.json({"status":"no"}))
    }
})

router.get('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.send("HELLO PROTECTED");
})


export default router;