export const initialState ={
 cart:[],
};


export const getCartTotal= (cart)=> cart?.reduce((amount ,item)=> item.price + amount ,0);

const reducer=(state, action)=>{
  console.log(action);
 switch(action.type){

  case "ADD_TO_CART":
    return {
      ...state,
      cart:[...state.cart,action.item],
    };
  
  case"REMOVE_FROM_CART":
let newCart =[...state.cart];
const index = state.cart.findIndex((CartItem)=>CartItem.id===action.id);
if(index >= 0){
  newCart.splice(index,1);
  
}else{
  console .warn('cant find id')
}
  return {...state ,cart: newCart};
 
  default:
   return state;

 }
}
export default reducer;