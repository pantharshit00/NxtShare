import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user';

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = process.env.SECRET;

export function jwtStrategy(passport) {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({
            where: {
                id: jwt_payload.id
            }
        }).then((user) => {
            if (user == null)
                done(null, false)
            else
                done(null, user)
        })
            .catch((err) => done(err, false))
    }))
}