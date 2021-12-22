<template>
      <section class="recentposts py-10 xs:px-2">
            <div class="container mx-auto">
                <div class="title my-5 flex justify-between">
                     <h4 class="text-lg text-gray-800 font-medium dark:text-gray-100">Recent posts</h4>
                 </div>
                 <div class="cards grid lg:grid-cols-2 xs:grid-cols-1 gap-10">
                       <div class="card flex xs:flex-col sm:flex-row  border dark:border-gray-700 p-5" v-for="post in posts" :key="post.img">
                             <div class="card-img  xs:flex  xs:justify-center">
                                <img :src="post.img" alt="img"  class="w-full rounded"/>
                             </div>
                             <div class="card_content ml-7">
                                 <h2 class=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">{{post.title}}</h2>
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

                 <div class="pagination mt-10">
                      <div class="pages flex items-center max-w-lg mx-auto justify-center">
                          <span class="px-4 py-1 bg-blue-500 rounded-lg text-gray-100 cursor-pointer">1</span>
                          <span class="mx-4 text-gray-500 text-sm cursor-pointer">2</span>
                          <span class="mx-4 text-gray-500 text-sm cursor-pointer">3</span>
                          <span class="mx-4 text-gray-500 text-sm cursor-pointer">4</span>
                          <span class="mx-4 text-gray-500 text-sm cursor-pointer">...</span>
                          <span class="mx-4 text-gray-500 text-sm cursor-pointer">8</span>
                          <span class="mx-4 text-gray-500 text-sm cursor-pointer">
                              <i class="bi bi-arrow-right"></i>
                          </span>
                      </div>
                 </div>
            </div>
        </section>
</template>
<script>
export default {
    name: "RecentPots",
    data(){
        return{
            posts: [
                 {
                    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
                {
                    img: 'https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
                {
                    img: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'Lorem ipsum, dolor sit amet consectetur',
                    description: 'Sometimes you may want to access a remote img, but still use the built-in Next.js img Optimization API. To do this, leave the loader at its'
                },
                {
                    img: 'https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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