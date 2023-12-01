// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'
// Secret key to sign and verify the token
const SECRET_KEY = 'your_secret_key';

// Payload information (claims)
// const payload = {
//     user_id: 123,
//     username: 'john_doe',
//     exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 // Token expiration time in seconds
// };

// Encode (create) a JWT token
// const token = jwt.sign(payload, SECRET_KEY, { algorithm: 'HS256' });

export const codeToken = (payload) => {
    const token = jwt.sign(payload, SECRET_KEY, { algorithm: 'HS256' });
    return token;
}

// console.log(`Generated Token: ${token}`);

// Decode (verify) a JWT token
export const decodeToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                console.error('Invalid token:', err.message);
                reject(err);
            } else {
                console.log('Decoded Payload:', decoded);
                resolve(decoded);
            }
        });
    });
};

