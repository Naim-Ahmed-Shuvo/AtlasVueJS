<template>
  <section className="recentposts py-10 xs:px-2 mt-36">
                    <div className="container mx-auto">
                        <div className="title my-5 flex justify-between">
                                <h4 className="text-lg text-gray-800 font-medium dark:text-gray-100">Checkout Items</h4>

                                <p class="dark:text-gray-200"><b>Subtotal: </b> ${{subTotal}}</p>
                            </div>
                           <div class="cards grid lg:grid-cols-2 xs:grid-cols-1 gap-10">
                                 <div class="card flex xs:flex-col sm:flex-row  border dark:border-gray-600 p-5" v-for="(item,idx) in carts" :key="idx">
                                        <div class="card-img  xs:flex  xs:justify-center">
                                        <img :src="item.image" alt="img" height='140' width='200'/>
                                        </div>
                                        <div class="card_content ml-7">
                                            <h2 class=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">{{item.name}}</h2>
                                            <p class="text-sm text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, maxime.</p>
                                            <div class="card_social flex items-center justify-between mt-4">
                                                <span class="dark:text-gray-200">$ {{item.price}}</span>
                                                <i class="bi bi-cart-x text-gray-400 text-xl mr-3 cursor-pointer" @click="removeFromCart(item.id)"></i> 
                                            </div>
                                        </div>
                                </div> 

                                <div class='text-center text-gray-800 dark:text-gray-100 border col-span-12 py-5 dark:border-gray-600 md:col-span-12 xs:col-span-1' v-if="carts.length==0">
                                        <h4>No Checkout Items...</h4>
                                        <router-link to="shop">

                                        <button class='flex justify-center items-center mx-auto py-3 px-3 bg-blue-500 text-slate-50 my-5 rounded'> 
                                           <span class='ml-4 text-gray-50'>Please Buy Some Products</span> 
                                        </button>
                                        </router-link>
                                    </div>  

                            </div>

                         
                           
                            <div className='mt-48' v-if="carts.length!==0">
                                <router-link :to="{name: 'payment'}">
                                    <button type="submit" role="link" className='bg-blue-500 px-3 py-2  text-gray-50 flex items-center mx-auto mt-10 rounded font-poppins'>
                                       Make Payment
                                    </button>
                                </router-link>
                            </div>
                           
                    </div>
            </section>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    methods:{
        removeFromCart(id){
            this.$store.commit('removeFromCart',id)
        },
        handleClick(){
            alert('Dedicated Backend Api Needed')
        }
    },
    computed:{
        ...mapGetters({carts: 'getCarts',subTotal: 'getSubTotal'})
    }
}
</script>
<style>
    
</style>