import axios from 'axios'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhcnlhbmEyNTI1QGdtYWlsLmNvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICIsInJvbGUiOiJzZWxsZXIiLCJpZCI6ImM2MTU2ZTdlLWQ3MDktNGRiOS1iMWZlLWViMWRlN2Q1OTE5MCIsImlhdCI6MTY3MDE3NDkwNiwiZXhwIjoxNjcwNzc5NzA2LCJpc3MiOiJ0b2tva3UifQ.YFe31bPTOgenBAj4V2K59iDft8UDRXuijw9f6Rd0mZA
'
export const getCart = () => async(dispatch) =>{
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_BACKEND}cart`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const cart = res.data
        console.log(cart)
        dispatch({type: "GET_CART_SUCCES", payload: cart})


    } catch (error) {
        console.log(error)
    }
}

export const addQty = (id) => (dispatch) =>{
    try {
        axios.put(`${process.env.REACT_APP_API_BACKEND}cart/add/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() =>{
            dispatch({type: 'ADD_SUCCESS'})
        })
        

    } catch (error) {
        console.log(error)
    }
}
export const minQty = (id) => (dispatch) =>{
    try {
        axios.put(`${process.env.REACT_APP_API_BACKEND}cart/min/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() =>{
            dispatch({type: 'MIN_SUCCESS'})
        })
        

    } catch (error) {
        console.log(error)
    }
}
export const deleteCart = (id) => (dispatch) =>{
    try {
        axios.delete(`${process.env.REACT_APP_API_BACKEND}cart/${id}`)
        .then(() =>{
            dispatch({type: 'DELETE_SUCCESS'})
        })
    } catch (error) {
        console.log(error)
    }
}
