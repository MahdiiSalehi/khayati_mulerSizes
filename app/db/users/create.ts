// In the name of ALLAH!
// Mahdi Salehi


import { db } from "./createTable"
import { usersTableName } from "./config"


export const insertNewUser = (name : string, nums : number[]) => {
  db.transaction(tx => {
    let now = Date.now()

    tx.executeSql(
      `INSERT INTO ${usersTableName}
        (name, nums, createdAt, updatedAt)
        VALUES (?, ?, ?, ?)
      ;`,
      [name, nums.join(','), now, now],
      () => {},
      err => console.warn("Error insert user:", err)
    )
  })
}