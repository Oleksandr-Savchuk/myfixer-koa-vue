const jwt = require('jwt-simple');
const config = require('../config/config');

const refresh = {
    requestNewAccessToken: (jwtToken) => {
        const accessToken = jwt.decode(jwtToken, config.AUTH.SECRET_KEY);

        console.log(accessToken, jwtToken)

        const refreshToken = jwt.decode(accessToken.refreshToken, config.AUTH.SECRET_KEY_REFRESH);

        if (refreshToken.expireDate <= new Date().getTime()) {
            return { isExpired: true, message: 'Refresh token is expired.' };
        }

        accessToken.expireDate =  new Date().setTime(new Date().getTime() + 1000 * 60 * 60 * 8) // + 1000 * 60 * 60 * 1), // 1h

        const credentials = {
            accessToken: jwt.encode(accessToken, config.AUTH.SECRET_KEY)        
        };

        return credentials;
    }
}

module.exports = refresh;