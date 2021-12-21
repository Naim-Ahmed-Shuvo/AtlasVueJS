<template lang="">
     <section className=' mt-32 xs:px-2'>
                <div className='container mx-auto'>
                    <router-link to="/blog">
                       <button className='flex justify-center items-center mx-auto py-3 px-3 bg-blue-500 text-slate-50 my-5 rounded'><i class="bi bi-arrow-left text-gray-100">{{id}}</i>
</button>
                    </router-link>
                    <div className="card p-2 bg-gray-50 dark:bg-slate-900 shadow border dark:border-slate-700" >

                        <div className="card_text">
                            
                            <div v-if="post">
                                <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100 capitalize"> {{post.title}}</h4>
                                <p className="text-sm text-gray-400"> {{post.body}}</p>
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
                            <div className='border p-5 mt-5 dark:border dark:border-slate-700'>
                                <h3>POsted By</h3>
                                <h4 className='text-sm font-medium'>Name: {{user.name}}</h4>
                                <span className='text-gray-800 dark:text-gray-200 text-sm block'>Email: {{user.email}}</span>
                                <span className='text-gray-800 dark:text-gray-200 text-sm block'>Phone: {{user.phone}}</span>
                            </div>
                            <div className='border p-5 mt-5 dark:border dark:border-slate-700'>
                                <h3>POsted comments</h3>
                                <div v-for="(comment, index) in comments" :key="index" className='my-2 border border-slate-300 p-4 dark:border dark:border-slate-700'>
                                    <span className='text-gray-800 dark:text-gray-200 text-sm block'>Comment by: <b>{{comment.name}}</b></span>
                                    <p className='text-gray-800 dark:text-gray-200 text-sm block my-3'>
                                        comment: 
                                        <code className='overflow-scroll block'>{{comment.body}}</code>
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                   
                </div>
            </section>
</template>
<script>
export default {
    name: "BlogDetails",
    props: ['id'],
    data(){
        return{
            post:{},
            comments:[],
            userId:null,
            user: {}
        }
    },
    methods:{
        async getPost(){
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            const post = await res.json()
            console.log(post)
            this.post = post
            this.getPostUser(post.userId)
        },
        async getPostUser(userId){
            console.log("user id: ",userId)
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const user = await res.json()
            console.log("user: ",user)
            this.user = user
           
        },
        async getPostComments(){
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`)
            const comments = await res.json()
            console.log("comments: ",comments)
            this.comments = comments
        }
    },
    mounted(){
        console.log(this.id)
        this.getPost()
        this.getPostComments()
        // this.getPostUser()
    }

}
</script>
<style lang="">
    
</style>