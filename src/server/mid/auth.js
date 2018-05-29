import config from '../config/config';
import { jwtVerify } from '../services/auth';

let payload;
let token;

export const isAuth = async (req, res, next) => {
  token = req.headers.auth;
  try {
    payload = await jwtVerify(token);
  } catch (e) {
    throw e.message
  } finally {
    if (!payload) {
      throw { message: 'Token has expired' };
    }
    req.user = payload;
    next();
  }
};