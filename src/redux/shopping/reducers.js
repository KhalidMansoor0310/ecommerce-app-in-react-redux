const initialState ={
    products:[
        {
            id: 1,
            name: 'Laptop',
            price: 24000,
            image:'https://images.unsplash.com/photo-1648737964978-597655dd82b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=330&q=60',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
        {
            id: 2,
            name: 'Iphone',
            price: 110000,
            image:'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
    ],
    cart:[],
    cartItem:null
}
const shopReducer=(state=initialState , action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            const item = state.products.find((prod)=> prod.id === action.payload.id);
            // if item is already in cart 
            const inCart  = state.cart.find((item)=> item.id === action.payload.id ? true : false)

            return {
                ...state,
                cart:inCart ? state.cart.map((item)=> item.id === action.payload.id ? 
                {...item , qty:item.qty+1} : item) 
                : [...state.cart, {...item , qty:1}]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart : state.cart.filter((item)=> item.id !== action.payload.id)
            }
        case "ADJUST_QUANTITY":
            return {
                ...state,
                cart : state.cart.map(item => item.id === action.payload.id 
                ? {...item , qty:action.payload.qty} : item)
            }
        case "LOAD_CURRENT_ITEMS":
            return {
                ...state,
                cartItem:action.payload
            }

        default:
            return state;
        }
}

export default shopReducer;