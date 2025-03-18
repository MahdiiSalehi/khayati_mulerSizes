// In the name of ALLAH!
// Mahdi Salehi

import { db } from "./createTable"
import { usersTableName } from "./config"


type response = {
  success: boolean
}


export const deleteUser = (id : number) : Promise<response> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM ${usersTableName} WHERE id=?;`,
        [id],
        () => {
          resolve({success: true})
        },
        err => {
          console.warn("Error deletion:", err)
          reject(err)
        }
      )
    })
  })
}