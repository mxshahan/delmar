import bcrypt, { compareSync } from 'bcryptjs';
import { generateJwt } from '../services/auth';
import DB from '../config/db';


let token;
let user;
let updatedUser;

export const LoginUser = async (req, res) => {
  let VerifyUser;
  let { username, password } = req.body;
  console.log(username, password)
  const db = new DB();
  try {
    user = await db.selectOne(`SELECT username, password FROM user WHERE username='${username}'`);
  } catch (e) {
    res.status(406).json({
      error: e,
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
  console.log(req.body)
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
        error: e,
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
    await db.dbclose();
  }
}

export const myProfile = async (req, res) => {
  const db = new DB();
  try {
    user = await db.selectOne(`SELECT * FROM user WHERE username='${req.user.username}'`);
  } catch (e) {
    res.status(404).json({
      error: e,
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
  let { email, password, address_id, acc_type } = req.body;
  if(password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    password = hash;
  }
  try {
    user = await db.selectOne(`SELECT * FROM user WHERE username='${req.user.username}'`);
    updatedUser = await db.update(`UPDATE user
      SET
        email = '${email ? email : user.email ? user.email : ''}',
        password = '${password ? password : user.password}',
        address_id = '${address_id ? address_id : user.address_id ? user.address_id : ''}',
        acc_type = '${acc_type ? acc_type : user.acc_type ? user.acc_type : 'ordinary'}'
      WHERE username='${req.user.username}'`
    );
  } catch (e) {
    res.status(404).json({
      error: e,
      message: 'Cannot Update!'
    })
  } finally {
    try {
      user = await db.selectOne(`SELECT * FROM user WHERE username='${req.user.username}'`);
    } catch (e) {
      res.status(404).json({
        error: e,
        message: 'Cannot Update!'
      })
    }
    res.status(200).json({
      success: true,
      user
    })
    await db.dbclose();
  }
}

export const approveUser = async (req, res) => {
  const db = new DB();
  const { status } = req.body;
  console.log(status )
  try {
    user = await db.selectOne(`SELECT * FROM user WHERE username='${req.user.username}'`);
    if (user.acc_type === 'admin') {
      updatedUser = await db.update(`UPDATE user
        SET
          status = ${status ? status : null}
        WHERE username='${req.params.username}'`
      );
    } else {
        res.status(406).json({
          error: e,
          message: 'You don\'t have proper right'
        })
    }
  } catch (e) {
    res.status(406).json({
      error: e,
      message: 'Not Found'
    })
  } finally {
    user = await db.select(`SELECT * FROM user`);
    res.status(201).json({
      success: true,
      user,
      message: 'successfully approved'      
    })
    db.dbclose();
  }
}

export const getUser = async (req, res) => {
  const db = new DB();
  try {
    user = await db.selectOne(`SELECT * FROM user WHERE username='${req.params.username}'`);
    await db.dbclose()
  } catch (e) {
    res.status(406).json({
      error: e,
      message: 'Not Found'
    })
  } finally {
    res.status(200).json({
      success: true,
      user
    })
  }
}

export const getAllUser = async (req, res) => {
  const db = new DB();
  try {
    user = await db.select(`SELECT * FROM user`);
  } catch (e) {
    res.status(406).json({
      error: e,
      message: 'Not Found'
    })
  } finally {
    res.status(200).json({
      success: true,
      user
    })
  }
}

export const checkUser = async (req, res) => {
  const db = new DB();
  try {
    user = await db.selectOne(`SELECT username FROM user WHERE username='${req.headers.username}'`);
  } catch (e) {
    res.status(404).json({
      error: e,
      message: 'Username not exist',
      success: true
    })
  } finally {
    res.status(200).json({
      success: false,
      message: 'Username already exists'
    })
  }
}
