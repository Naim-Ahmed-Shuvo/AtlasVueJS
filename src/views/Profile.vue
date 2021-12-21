<template lang="">
    <section className="py-32">
               <div className="container mx-auto">
                   <div className="profilemain card border  text-center mx-auto p-6 dark:border dark:border-slate-600" v-if="getUser">
                        <div>
                           <img :src="getUser.image"  alt="img" className="rounded" style="height:200px;width:200px;margin: 0 auto;">
                        </div>

                        <div className="usertext mt-5">
                             <h5 className=" text-gray-700 dark:text-gray-200 font-semibold">{{getUser.name}}</h5>
                             <p className=" text-gray-700 dark:text-gray-200 ">{{getUser.email}}</p>
                             <button className="bg-blue-500 text-white hover:shadow transition-all ease-in-out px-5 py-2 rounded mt-5" @click="signOut">Sign Out</button>
                        </div>
                   </div>
                   <div className="profilemain card border  text-center mx-auto p-6 dark:border dark:border-slate-600" v-else>
                       No user
                   </div>
               </div>
            </section>
</template>
<script>
export default {
    name: "Profile",
    created(){
       console.log("created")
    },
    computed:{
            getUser(){
            console.log("computed")
            const user = JSON.parse(localStorage.getItem("USER"))
            console.log(user)
            return user;
        }
    },
    methods:{
        signOut(){
            localStorage.clear();
           this.$router.push('/login');
           console.log('sign out')
        }
    },
    mounted() {
        console.log("mounted")
    },
}
</script>
<style>
    
</style>