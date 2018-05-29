import DB from './db';


export default (app) => {
  app.get('/tbcreate', async (req, res) => {
    try {
      const db = new DB();
      await db.create(`CREATE TABLE IF NOT EXISTS user(
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
        name TEXT, 
        phone TEXT, 
        username TEXT UNIQUE, 
        email TEXT UNIQUE, 
        password TEXT, 
        address TEXT, 
        rental_address TEXT
      )`);
    } catch (e) {
      res.status(404).json({message: 'cannot create'})
    } finally {
      db.close();
      res.json({message: 'Table Created Successfully'})
    }
  })
}