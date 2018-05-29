import bcrypt, { compareSync } from 'bcryptjs';
import { generateJwt } from '../services/auth';
import DB from '../config/db';


let token;
let user;
let updatedUser;

export const LoginUser = async (req, res) => {
  let VerifyUser;
  let { username, password } = req.body;
  const db = new DB();
  try {
    user = await db.selectOne(`SELECT username, password FROM user WHERE username='${username}'`);
  } catch (e) {
    res.status(406).json({
      error: e.message,
      message: 'Username or Passowrd Mismatch'
    })
  } finally {
    if (user) {
      VerifyUser = await compareSync(password, user.password);
    }
    if (VerifyUser) {
      token = await generateJwt({
        username
      });
      res.status(200).json({
        success: true,
        token
      });
      db.dbclose();
    } else {
      res.status(406).json({
        message: 'Username or Passowrd Mismatch'
      })
    }
  }

}

export const SignupUser = async (req, res) => {
  const db = new DB();
  let { username, password, cpassword } = req.body;
  if (password === cpassword) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    password = hash;
    try {
      const user = await db.insert(`INSERT INTO user(username, password) VALUES('${username}', '${password}')`);
      token = await generateJwt({
        username
      });
    } catch (e) {
      res.status(406).json({
        error: e.message,
        message: 'Unable To Create Account'
      })
    } finally {
      res.status(200).json({
        success: true,
        token       
      })
      await db.dbclose();
    }
  } else {
    res.status(406).json({
      message: 'Password Mismatch'
    })
  }
}

export const myProfile = async (req, res) => {
  const db = new DB();
  try {
    user = await db.selectOne(`SELECT * FROM user WHERE username='${req.user.username}'`);
  } catch (e) {
    res.status(404).json({
      error: e.message,
      message: 'Unavailable!'
    })
  } finally {
    res.status(200).json({
      success: true,
      user       
    })
    await db.dbclose();
  }
}

export const updateProfile = async (req, res) => {
  const db = new DB();
  let { name, phone, email, password, address, rental_address} = req.body;
  if(password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    password = hash;
  }
  try {
    user = await db.selectOne(`SELECT * FROM user WHERE username='${req.user.username}'`);
    updatedUser = await db.update(`UPDATE user 
      SET 
        name = '${name ? name : user.name}',
        phone = '${phone ? phone : user.phone}',
        email = '${email ? email : user.email}',
        password = '${password ? password : user.password}',
        address = '${address ? address : user.address}',
        rental_address = '${rental_address ? rental_address : user.rental_address}'
      WHERE username='${req.user.username}'`
    );
  } catch (e) {
    res.status(404).json({
      error: e.message,
      message: 'Cannot Update!'
    })
  } finally {
    res.status(200).json({
      success: true,
      message: 'successfully updated'       
    })
    await db.dbclose();
  }
}