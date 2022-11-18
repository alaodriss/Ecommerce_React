// for add itel to cart


export const addCart = (product) => {
    return {
      type :"ADDITEM",
      payload : product
    }
}


// for delete itel to cart


export const delCart = (product) => {
    return {
      type :"DELITEM",
      payload : product
    }
}