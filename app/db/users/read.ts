// In the name of ALLAH!
// Mahdi Salehi


import jalaali from "jalaali-js"

import { db } from "./createTable"
import { usersTableName } from "./config"


export interface User {
  id: number
  name: string
  nums: number[]
  updatedAt: string
}


export const getAllUsers = () : Promise<User[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT id, name, nums, updatedAt FROM ${usersTableName};`,
        [],
        (tx, result) => {
          const users : User[] = []

          for (let i = 0; i < result.rows.length; i ++) {
            let curr = result.rows.item(i)            
            formatUser(curr)

            users.push(curr)
          }

          resolve(users)
        },
        err => {
          console.warn("Error getAllUsers:", err)
          reject(err)
        }
      )
    })
  })
}


export const getUser = (id : number) : Promise<User | null> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT id, name, nums, updatedAt FROM ${usersTableName}
          WHERE id=?;
        `,
        [id],
        (tx, result) => {
          if (result.rows.length === 0) {
            resolve(null)
          }
          let curr = result.rows.item(0)
          formatUser(curr)

          resolve(curr)
        },
        err => {
          console.warn(`Error getUser id(${id}): ${err}`)
          reject(err)
        }
      )
    })
  })
}


function formatUser(item : any) {
  let updatedAtDate = new Date(+item.updatedAt)
  let jalaaliDate = jalaali.toJalaali(updatedAtDate)

  item.updatedAt = Object.values(jalaaliDate).join('/')
  item.nums = item.nums.split(',')
}