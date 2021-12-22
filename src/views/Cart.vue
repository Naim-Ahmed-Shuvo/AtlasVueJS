<template>
     <section class="recentposts py-10 xs:px-2 mt-36">
                    <div class="container mx-auto">
                        <div class="title my-5 flex justify-between">
                                <h4 class="text-lg text-gray-800 font-medium dark:text-gray-100">Cart Items</h4>

                                <p class="dark:text-gray-200"><b>Subtotal: </b> ${{subTotal}}</p>
                            </div>
                            <div class="cards grid lg:grid-cols-2 xs:grid-cols-1 gap-10">
                                 <div class="card flex xs:flex-col sm:flex-row  border dark:border-slate-600 p-5" v-for="(item,idx) in carts" :key="idx">
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

                                <div class='text-center text-gray-800 dark:text-slate-100 border col-span-12 py-5 dark:border-slate-600 md:col-span-12 xs:col-span-1' v-if="carts.length==0">
                                        <h4>No Cart Items...</h4>
                                        <router-link to="shop">

                                        <button class='flex justify-center items-center mx-auto py-3 px-3 bg-blue-500 text-slate-50 my-5 rounded'> 
                                           <span class='ml-4 text-gray-50'>Please Buy Some Products</span> 
                                        </button>
                                        </router-link>
                                    </div>  

                            </div>
                                <button className='bg-blue-500 px-3 py-2  text-slate-50 flex items-center mx-auto mt-10 rounded' v-if="!carts.length==0"> 
                                    <router-link to="/checkout">
                                         <span className='mr-3 text-white'>Check Out</span>
                                          <i class="bi bi-arrow-right text-white "></i>

                                    </router-link>
                                   
                                    
                            </button>
                           <!-- {
                               cart.length !== 0&&
                                    <Link href={'/checkout'} passHref>
                                    <button class='bg-blue-500 px-3 py-2  text-slate-50 flex items-center mx-auto mt-10 rounded'> <span class='mr-3'>Check Out</span> <BsArrowRight/></button>
                                    </Link>
                           } -->
                    </div>
            </section>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    name: "Cart",
    methods:{
        removeFromCart(id){
            this.$store.commit('removeFromCart',id)
        }
    },
    computed:{
        ...mapGetters({carts: 'getCarts',subTotal: 'getSubTotal'})
    }
}
</script>
<style>
    
</style>