import jsonwebtoken from "jsonwebtoken";

class JwtUtil {
    verify(token) {
        return jsonwebtoken.verify(token, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION});
    }

    sign(data) {
        return jsonwebtoken.sign(data, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION});
    }
}

export default new JwtUtil();