const refresh = require('../auth/refresh.token');

const TokenController = {
    refreshToken: (ctx, next) => {
        const response = refresh.requestNewAccessToken(ctx.request.body.accessToken)

        if (response.isExpired) {
            ctx.status = 401;
            ctx.body = response.message;
        } else {
            ctx.status = 200;
            ctx.body = response;
        }

    }
}

module.exports = { TokenController }