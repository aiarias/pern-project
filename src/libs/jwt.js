import jwt from "jsonwebtoken";


// payload datos que se van a encriptar como el id del usuario
export const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, 
            "xyz123", 
            { expiresIn: "1d" },
             (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });

}