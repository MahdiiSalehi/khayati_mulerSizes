// In the name of ALLAH!
// Mahdi Salehi


import { db } from "./createTable"
import { usersTableName } from "./config"


export const updateUser = (id : number, name : string, nums : number[]) => {
  db.transaction(tx => {
    let now = Date.now()

    tx.executeSql(
      `UPDATE ${usersTableName}
        SET name = ?, nums = ?, updatedAt = ?
        WHERE id=?
      ;`,
      [name, nums.join(','), now, id],
      () => {},
      err => console.warn(`Error Update user by id(${id}):`, err)
    )
  })
}