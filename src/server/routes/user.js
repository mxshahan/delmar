import expressPromiseRouter from 'express-promise-router';
import passport from 'passport';
import cors from 'cors';
import { LoginUser, SignupUser, myProfile, updateProfile, checkUser } from './../controllers/user';
import { isAuth } from '../mid/auth';
// const passportJWT = passport.authenticate('jwt', { session: false });
const router = expressPromiseRouter();

router.route('/login')
  .options(cors())
  .post(LoginUser)
router.route('/signup')
  .options(cors())
  .post(SignupUser)
router.route('/')
  .options(cors())
  .get(isAuth, myProfile)
  .put(isAuth, updateProfile)
router.route('/check')
  .get(checkUser)
  

export default router;