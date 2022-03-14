import jsonwebtoken from "jsonwebtoken";

class JwtUtil {
    verify(token) {
        return jsonwebtoken.verify(token, serverConfig.secret, serverConfig.jwtExpires);
    }

    sign(data) {
        return jsonwebtoken.sign(data, serverConfig.secret, serverConfig.jwtExpires);
    }
}

export default new JwtUtil();