import { createStore } from 'vuex'
import router from '../router';
export default createStore({
  state: {
    user: {},
    loggedIn:false,
    carts:[],
    showModal: false,
    theme:'light'
  },
  mutations: {
     //for syncronous task
     signIn: (state,user) => {
        console.log(user);
        state.user = user;
        router.push('/');
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
     },
     closeModal: (state) => {
        state.showModal = false
     },
     openModal: (state) => {
        state.showModal = true
     },
     addDarkTheme: (state) => {
       state.theme = 'dark';
       console.log(state.theme);
       document.querySelector("html").classList.add(state.theme)
     },
     addLightTheme: (state) => {
      state.theme = 'light'
      console.log(state.theme);
      document.querySelector("html").classList.remove("dark")
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
    },
    getSignedUser: ()=> {
      let user = localStorage.getItem("USER");
      return user;
    },
    getCurrentTheme: (state) =>  state.theme
  }
})
