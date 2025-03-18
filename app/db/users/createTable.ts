// In the name of ALLAH!
// Mahdi Salehi


import SQLite from "react-native-sqlite-storage"
import { DBName, usersTableName } from "./config"

export const db = SQLite.openDatabase({
  name: DBName,
  location: "default"
},
  () => {},
  err => console.warn("DB Error:", err)
)

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ${usersTableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        nums VARCHAR(255),
        createdAt TEXT,
        updatedAt TEXT
      );`,
      [],
      () => {},
      err => console.warn("Exec SQL:", err)
    )
  },
    err => console.warn("TSX Error:", err))
}