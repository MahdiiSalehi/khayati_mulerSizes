// In the name of ALLAH!
// Mahdi Salehi

import { useContext } from "react"
import { UserContext } from "../../../context/UserProvider"


type SizeType = "tight" | "normal" | "loose" 
type ClothesType = "shirt"  | "coat" | "overcoat"

interface CallbacksType {
  shirt: CallbackType
  coat: CallbackType
  overcoat: CallbackType
}

interface CallbackType {
  tight: Function
  normal: Function
  loose: Function
}


function clothesValueHandler(clothes : ClothesType, size : SizeType, callBacks : CallbacksType) {
  switch (clothes) {
    case "shirt":
      return sizeValueHandler(size, callBacks["shirt"])
    case "coat":
      return sizeValueHandler(size, callBacks["coat"])
    case "overcoat":
      return sizeValueHandler(size, callBacks["overcoat"])
  }
}

function sizeValueHandler(size : SizeType, callBacks : CallbackType) {
  switch (size) {
    case "tight":
      return callBacks["tight"]()
    case "normal":
      return callBacks["normal"]()
    case "loose":
      return callBacks["loose"]()
  }
}



const useSizeValues = () => {
  const {
    values
  } = useContext(UserContext)

  const {
    bust,
    waist,
    hips,
    height,
  } = values

  const bodyFitInfo : any = [
    {
      fitLabel: "کارور پیش",
      getBodyFit: () => bust/4 - 4,
      getClothesValue (clothes : ClothesType, size : SizeType) {
        return clothesValueHandler(clothes, size, {
          shirt: {
            tight: () => this.getBodyFit() + 1,
            normal: () => this.getBodyFit() + 1.5,
            loose: () => this.getBodyFit() + 1.5,
          },
          coat: {
            tight: () => this.getBodyFit() + 1.5,
            normal: () => this.getBodyFit() + 2,
            loose: () => this.getBodyFit() + 2,
          },
          overcoat: {
            tight: () => this.getBodyFit() + 2,
            normal: () => this.getBodyFit() + 3,
            loose: () => this.getBodyFit() + 3.5,
          },
        })
      },
    },
    {
      fitLabel: "کارور پشت",
      getBodyFit: () => bust/8 + 5.5,
      getClothesValue (clothes : ClothesType, size : SizeType) {
        return clothesValueHandler(clothes, size, {
          shirt: {
            tight: () => this.getBodyFit() + 0.5,
            normal: () => this.getBodyFit() + 1,
            loose: () => this.getBodyFit() + 1.5,
          },
          coat: {
            tight: () => this.getBodyFit() + 1,
            normal: () => this.getBodyFit() + 1,
            loose: () => this.getBodyFit() + 1,
          },
          overcoat: {
            tight: () => this.getBodyFit() + 1,
            normal: () => this.getBodyFit() + 1.5,
            loose: () => this.getBodyFit() + 2,
          },
        })
      },
    },
    {
      fitLabel: "گشادی کف حلقه",
      getBodyFit: () => bust/8 - 1.5,
      getClothesValue (clothes : ClothesType, size : SizeType) {
        return clothesValueHandler(clothes, size, {
          shirt: {
            tight: () => this.getBodyFit() + 1,
            normal: () => this.getBodyFit() + 1.5,
            loose: () => this.getBodyFit() + 1.5,
          },
          coat: {
            tight: () => this.getBodyFit() + 1.5,
            normal: () => this.getBodyFit() + 2,
            loose: () => this.getBodyFit() + 2.5,
          },
          overcoat: {
            tight: () => this.getBodyFit() + 2.5,
            normal: () => this.getBodyFit() + 3,
            loose: () => this.getBodyFit() + 3.5,
          },
        })
      },
    },
    {
      fitLabel: "بلندی کف حلقه",
      getBodyFit: () => bust/10 + 10.5,
      getClothesValue (clothes : ClothesType, size : SizeType) {
        return clothesValueHandler(clothes, size, {
          shirt: {
            tight: () => this.getBodyFit() + 0.5,
            normal: () => this.getBodyFit() + 1,
            loose: () => this.getBodyFit() + 1.5,
          },
          coat: {
            tight: () => this.getBodyFit() + 2,
            normal: () => this.getBodyFit() + 2,
            loose: () => this.getBodyFit() + 2.5,
          },
          overcoat: {
            tight: () => this.getBodyFit() + 3,
            normal: () => this.getBodyFit() + 3,
            loose: () => this.getBodyFit() + 3.5,
          },
        })
      },
    },
    {
      fitLabel: "پشت یقه",
      getBodyFit: () => bust/20 + 2,
      getClothesValue (clothes : ClothesType, size : SizeType) {
        return clothesValueHandler(clothes, size, {
          shirt: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          coat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          overcoat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
        })
      },
    },
    {
      fitLabel: "فاصله سینه",
      getBodyFit: () => bust/10 + 0.5,
      getClothesValue (clothes : ClothesType, size : SizeType) {
        return clothesValueHandler(clothes, size, {
          shirt: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          coat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          overcoat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
        })
      },
    },
    {
      fitLabel: "بلندی سینه",
      getBodyFit: () => bust/4 + 4,
      getClothesValue (clothes : ClothesType, size : SizeType) {
        return clothesValueHandler(clothes, size, {
          shirt: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          coat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          overcoat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
        })
      },
    },
    {
      fitLabel: "بالاتنه پشت",
      getBodyFit: () => height/4 - 1,
      getClothesValue (clothes : ClothesType, size : SizeType) {
        return clothesValueHandler(clothes, size, {
          shirt: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          coat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          overcoat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
        })
      },
    },
    {
      fitLabel: "بالاتنه جلو",
      getBodyFit: () => {
        let backWaistObj = bodyFitInfo.find((item : any) => item.fitLabel.includes("بالاتنه پشت"))
        return backWaistObj.getBodyFit() + bust/20
      },
      getClothesValue (clothes : ClothesType, size : SizeType) {
        return clothesValueHandler(clothes, size, {
          shirt: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          coat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
          overcoat: {
            tight: () => '-',
            normal: () => '-',
            loose: () => '-',
          },
        })
      },
    },
  ]


  return bodyFitInfo
}


export default useSizeValues