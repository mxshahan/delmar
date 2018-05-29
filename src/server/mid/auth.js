const passport = require('passport');
//find the user from token 
const JWTStrategy = require('passport-jwt').Strategy;
//this is for get token frn header
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config/config');
const User = require('../models/user_model');


//JSON WEB TOKEN STRATEGY (authenticate using token)
passport.use("jwt", new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('auth'),
    secretOrKey: config.JWT_SECRET
}, async(payload, done) => {
    try {
        const user = await User.findById(payload.sub, "_id");
        if (!user) {
            return done(null, false);
        }
        done(null, user);
    } catch (err) {
        done(err, false)
    }
}));

passport.use("local", new LocalStrategy({
    usernameField: 'email'
}, async(email, password, done) => {
    let isMatch;
    let user;
    try {
        user = await User.findOne( {email} );
    } catch (error) {
        done(error, false);
    } finally {
        if (!user) {
            return done(null, false)
        }
        isMatch = await user.isValidPassword(password);
        if (!isMatch) {
            console.log('Not Match')
            return done(null, false)
        }
        done(null, user)
    }
}));