<template lang="">
    <div class="fixed  inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full px-3 z-50 lg:invisible">
        <!--modal content-->
<div
	class="relative top-20 mx-auto p-5"
>
	<div class="mt-3 text-center">
		<div
			class="mx-auto flex items-center justify-center cursor-pointer p-4"
            @click="closeModal"
		>
			<i class="bi bi-x-circle text-red-500 text-xl"></i>

		</div>
		<ul class="">
            <li class="py-5">
                 <router-link to="/">
                <span class="text-white text-3xl  hover:text-blue-400">Home</span>
            </router-link>
            </li>
            <li class="py-5">  <router-link to="/blog">
                <span class=" text-white text-3xl hover:text-blue-600">Blog</span>
            </router-link></li>
            <li class="py-5"> <router-link to="/shop">
                <span class=" text-white text-3xl hover:text-blue-600">Shop</span>
            </router-link></li>
            <li class="py-5"> <router-link to="/cart">
                <span class=" text-white text-3xl hover:text-blue-600">Cart</span>
            </router-link></li>
            <li class="py-5"> <router-link to="/profile">
                <span class=" text-white text-3xl hover:text-blue-600">Profile</span>
            </router-link></li>
           
          
           
           
           
        </ul>
	</div>
</div>
    </div>
</template>
<script>
export default {
    name: "Modal",
    methods: {
        closeModal(){
            // alert()
            this.$store.commit('closeModal')
        }
    }
}
</script>
<style lang="">
    
</style>