<template>
    <section class="pupularposts py-10 ">
            <div class="container mx-auto xs:px-2">
                <div class="title my-5 flex justify-between">
                     <h4 class="text-lg text-gray-800 font-medium dark:text-gray-100">Popular this week</h4>
                     <div class="flex items-center">
                         <button class="dark:text-gray-100 font-poppins">See All</button>
                     </div>
                 </div>
                 <div class="cards grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 gap-20">
                     <div class="card p-2 bg-gray-50 dark:bg-gray-900 shadow border dark:border-gray-700" v-for="post in posts" :key="post.img">
                         <div class="card_img">
                             <img :src="post.img" alt="img" class="w-full rounded"/>
                         </div>
                         <div class="card_text">
                             <h4 class=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">{{post.title}} </h4>
                             <p class="text-sm text-gray-400">{{post.description}}</p>
                             <div class="card_social flex items-center mt-4">
                                  <div class="flex items-center mr-7">
                                     <i class="bi bi-chat-left-dots text-gray-400 text-xl mr-3"></i>
                                      <span class="text-gray-400 text-lg">3</span>
                                  </div>
                                  <div class="flex items-center">
                                      <i class="bi bi-eye text-gray-400 text-xl mr-3"></i>
                                      <span class="text-gray-400 text-lg">12.4k</span>
                                  </div>
                             </div>
                         </div>
                     </div>
                     
                   
                 </div>
            </div>
        </section>
</template>
<script>
export default {
   name: "PopularPosts" ,
   data(){
       return{
           posts:[
               {
                    img: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
                {
                    img: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
                {
                    img: 'https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
                {
                    img: 'https://images.pexels.com/photos/2541310/pexels-photo-2541310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
           ]
       }
   }
}
</script>
<style>
    
</style>