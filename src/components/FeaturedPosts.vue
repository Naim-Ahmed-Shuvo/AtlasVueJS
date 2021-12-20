<template>
   <section class="featuredposts py-10">
            <div class="container mx-auto xs:px-2">
                 <div class="title my-5 flex justify-between">
                     <h4 class="text-lg text-gray-800 font-medium dark:text-gray-100">Featured posts</h4>
                     <div class="flex items-center">
                         <i class="bi bi-arrow-left mr-4 text-gray-300"></i>
                          <i class="bi bi-arrow-right"></i>
                     </div>
                 </div>

                 <div class="cards grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 gap-20" >
                     <div class="card p-2 bg-gray-50 dark:bg-slate-900 shadow border dark:border-slate-700" v-for="post in posts" :key="post.img">
                         <div class="card_img">
                             <img :src="post.img" class="w-full"  alt="img" />
                         </div>
                         <div class="card_text">
                             <h4 class=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">{{post.title}}</h4>
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
    name: "FeaturedPosts",
    data(){
        return{
            posts: [
                {
                    img: 'https://images.pexels.com/photos/374815/pexels-photo-374815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
                {
                    img: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
                {
                    img: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
                {
                    img: 'https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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