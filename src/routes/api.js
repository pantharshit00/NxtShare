import express from 'express';
import User from '../models/user';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { jwtStrategy } from '../config/passport';

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

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.json({
            "status": "ok",
            "isAuthenticated": false,
            "error": "Please provide required data"
        })
    }
    else {
        User.findOne({
            where: {
                email
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
                    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 2592000 })
                    res.json({
                        "status": "ok",
                        "isAuthenticated": true,
                        token
                    })
                }
            }
        })
            .catch(err => res.json({ "status": "no" }))
    }
})

router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    if ((!name || !email || !password || !password2) || (password !== password2) || !validateEmail(email)) {
        res.status(403).json({
            registered: false,
            err: "Bad Data",
            errField: "all"
        })
    }
    else {
        User.findOne({
            where: {
                email
            }
        }).then((user) => {
            if (user !== null) {
                res.json({
                    registered: false,
                    err: "Email already in user",
                    errField: "email"
                })
            }
            else {
                let newUser = {
                    name,
                    email,
                    password: hashPassword(password)
                }
                User.create(newUser).then(() => {
                    res.json({
                        registered: true,
                        err: null,
                        errField: null
                    })
                })
                .catch((err)=> res.json({
                    registered: false,
                    err,
                    errField: "unknown"
                }))
            }
        })
    }
})

router.get('/test_auth',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.json({success:true})
})


export default router;