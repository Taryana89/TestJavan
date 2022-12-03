const intialization = {
    cart: [],
    message: ""
}


export const cartReducer = (state = intialization, {type, payload}) =>{
    console.log(payload)
    switch(type){
        case "GET_CART_SUCCES":
            return{
                ...state,
                cart: payload
            }
        case "ADD_SUCCESS":
            return{
                ...state,
                message: "Add Success"
            }
            
        case "MIN_SUCCESS":
            return{
                ...state,
                message: "Min Success"
            }
            
        case "DELETE_SUCCESS":
            return{
                ...state,
                message: "Delete Success"
            }
        default:
            return state
    }
}

