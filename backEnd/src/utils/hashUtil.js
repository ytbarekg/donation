import bcrypt from "bcrypt"

class HashUtil {
    async hashPassword(password) {
        return bcrypt.hash(password, Number.parseInt(process.env.SALT_ROUNDS));
    }

    async comparePassword(password, hash) {
        return bcrypt.compare(password, hash);
    }
}
export default new HashUtil();