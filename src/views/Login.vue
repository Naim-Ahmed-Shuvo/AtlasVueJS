<template lang="">
   <div className=" h-screen w-full bg-slate-200 flex items-center justify-center">
            <div className="bg-gray-100  w-80 h-80 mx-auto flex items-center justify-center">
                <button className="bg-blue-500 text-white p-4 rounded font-poppins flex items-center" @click="login"><span>Sign In By Google</span> <span v-if="loading" class="loader ml-2"></span></button>
            </div>
        </div>
</template>
<script>

import { getAuth, signInWithPopup, GoogleAuthProvider } from '../firebase'



//The vue instance
export default {
    name:"Login",
    data(){
        return{
           loading: false
        }
    },
    methods:{
        login(){
            const provider = new GoogleAuthProvider();
            const auth = getAuth()
            this.loading = true
            signInWithPopup(auth,provider).then(res=>{
                // console.log(res)
                 localStorage.setItem("USER",JSON.stringify({
                        name: res.user.displayName,
                        email: res.user.email,
                        image: res.user.photoURL
                 }));
                 this.$store.commit("signIn",{
                        name: res.user.displayName,
                        email: res.user.email,
                        image: res.user.photoURL
                 })
                 this.loading = false
                 this.$router.push('/');

            }).catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>
<style scoped>
.loader {
  
  border-radius: 50%;
  border-top: 1px solid rgb(250, 250, 250);
  border-bottom: 1px solid rgb(255, 255, 255);
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>