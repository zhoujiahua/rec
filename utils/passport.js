const { Strategy, ExtractJwt } = require("passport-jwt");
const { SECRET_KEY } = $re('/config/secure.js');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;

module.exports = (passport, { User }) => {
    passport.use(new Strategy(opts, async (payload, done) => {
        console.log('--------------JWT Payload-------------', payload);
        try {
            const user = await User.findById(payload.id);
            if (!user) return done(null, false);
            return done(null, user);
        } catch (error) {
            throw error;
        }
    }));
};