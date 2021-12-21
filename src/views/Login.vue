<template lang="">
   <div className=" h-screen w-full bg-slate-200 flex items-center justify-center">
            <div className="bg-gray-100  w-80 h-80 mx-auto flex items-center justify-center">
                <button className="bg-blue-500 text-white p-4 rounded font-poppins" @click="login">Sign In By Google</button>
            </div>
        </div>
</template>
<script>

import { getAuth, signInWithPopup, GoogleAuthProvider } from '../firebase'


//The vue instance
export default {
    name:"Login",
    methods:{
        login(){
            const provider = new GoogleAuthProvider();
            const auth = getAuth()

            signInWithPopup(auth,provider).then(res=>{
                console.log(res)
                 localStorage.setItem("USER",JSON.stringify({
                        name: res.user.displayName,
                        email: res.user.email,
                        image: res.user.photoURL
                 }));

                 this.$router.push('/');

            }).catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>
<style lang="">
 
</style>