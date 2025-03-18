// In the name of ALLAH!
// Mahdi Salehi

import React, { createContext, ReactNode, useState } from "react"


interface UserContextValues {
  id: number | null,
  name: string,
  bust: number,
  waist: number,
  hips: number,
  height: number,
  tableIsShown: boolean,
}

interface UserContextValue {
  values: UserContextValues,
  setValues: React.Dispatch<React.SetStateAction<UserContextValues>>
}


export const UserContext = createContext<UserContextValue | undefined>(undefined)

export const defaultValues = {
  id: null,
  name: '',
  bust: 0,
  waist: 0,
  hips: 0,
  height: 0,
  tableIsShown: false,
}


const UserProvider : React.FC<{children : ReactNode}> = ({ children }) => {

  const [values, setValues] = useState<UserContextValues>(defaultValues)

  return (
    <UserContext.Provider value={{values, setValues}}>
      {children}
    </UserContext.Provider>
  )
}


export default UserProvider