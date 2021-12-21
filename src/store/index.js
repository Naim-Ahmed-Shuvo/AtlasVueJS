import { createStore } from 'vuex'
import router from '../router';
export default createStore({
  state: {
    user: "I am user",
    isLoggedIn:false,
    carts:[]
  },
  mutations: {
     //for syncronous task
     login: (state) => {
        // console.log("login");
        state.isLoggedIn = true;
        router.push('/home');
     },
     addToCart: (state,item) => {
      //  console.log(item);
       state.carts.push(item)
      //  console.log(state.carts);
     },
     removeFromCart: (state,id) => {
       console.log(id);
       let index = state.carts.findIndex(item=>item.id==id)
       let newcart = [...state.carts]
       if(index>=0){
         newcart.splice(index,1)
       } else{
         alert("no item with this id")
       }
       state.carts = newcart;
     }
  },
  actions: {
     // for asyncronous task
  },
  modules: {
  },
  getters:{
    getUser: state => state.user,
    totalCartItems: state=> state.carts.length,
    getCarts: state=> state.carts,
    getSubTotal: state => {
      const total =  state.carts?.reduce((amount, item) => parseInt(item.price) + amount, 0);
      console.log(total)
      return total;
      // state.carts?.map(item=>console.log(item))
      //  return 30;
    }
  }
})
