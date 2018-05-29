import { verify, sign } from 'jsonwebtoken';
import config from '../config/config';

const { secret } = config;

const jwtVerify = token => new Promise((resolve, reject) => {
  verify(token.replace('Bearer ', ''), secret, (err, decoded) => {
    if (err || !decoded) {
      reject(err);
    }
    resolve(decoded);
  });
});

const generateJwt = data => new Promise((resolve, reject) => {
  sign(data, secret, { expiresIn: '12h' }, (err, token) => {
    if (err) {
      reject(err);
    }
    resolve(`Bearer ${token}`);
  });
});


export {
  jwtVerify,
  generateJwt
};