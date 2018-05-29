import sqlite3 from 'sqlite3';
const sqlite = sqlite3.verbose();

export default class DB {
  constructor(){
    this.db = new sqlite.Database('hrent.db', (err) => {
      if (err) {
        return console.error(err.message)
      }
      console.log('Connect to the Database successfully')
    });
  }
  
  create(query){
    return new Promise((resolve, reject) => {
      this.db.run(query, (err) => {
        if(err) reject(err)
      })
    })
  }

  insert(query){
    return new Promise((resolve, reject) => {
      this.db.run(query, (err) => {
        if(err) reject(err);
      })
    })
  }

  select(query){
    return new Promise((resolve, reject) => {
      this.db.all(query, (err, rows) => {
        if(err) reject(err);
        resolve(rows)
      })
    })
  }

  selectOne(query){
    return new Promise((resolve, reject) => {
      this.db.each(query, (err, rows) => {
        if(err) reject(err);
        resolve(rows)
      })
    })
  }

  delete(query){
    return new Promise((resolve, reject) => {
      this.db.each(query, (err, rows) => {
        if(err) reject(err);
        resolve(rows)
      })
    })
  }
  
  update(query){
    return new Promise((resolve, reject) => {
      this.db.each(query, (err, rows) => {
        if(err) reject(err);
        resolve(rows)
      })
    })
  }

  close(){
    this.db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });
  }
}