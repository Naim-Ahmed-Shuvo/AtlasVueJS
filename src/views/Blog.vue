<template lang="">
    <section className="pupularposts py-10 mt-14">
            <div className="container mx-auto xs:px-2">
                <div className="title my-5 flex justify-between">
                     <h4 className="text-lg text-gray-800 font-medium dark:text-gray-100">Blogs</h4>
                     
                 </div>
                 <div className="cards grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 gap-20">

                        <div v-if="posts.length===0" class="dark:text-gray-200">
                            Loading....
                        </div>
                       <router-link v-for="(post, index) in posts" :key="index" :to="{name: 'blogDetails',params:{id: post.id}}" v-else>
                           <div className="card p-2 bg-gray-50 dark:bg-gray-900 shadow border dark:border-gray-700 cursor-pointer" >
                                
                                <div className="card_text">
                                    <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">{{post.title}}</h4>
                                    <p className="text-sm text-gray-400">{{post.body}}</p>
                                    <div className="card_social flex items-center mt-4">
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
                       </router-link>
                 </div>
            </div>
        </section>
</template>
<script>
export default {
    name: "Blog",
    data(){
        return {
            posts:[]
        }
    },
    methods:{
       async getPosts(){
          const res = await fetch('https://jsonplaceholder.typicode.com/posts')
          const posts = await res.json()
          this.posts = posts
        //   console.log(posts);
       }
    },
    created(){
      this.getPosts()
    }
}
</script>
<style>
    
</style>