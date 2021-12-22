<template>
    <section class=" hero bg-cover bg-no-repeat py-52 xs:py-44">
            <div class='container mx-auto xs:px-2  text-center'>
                <div class="hero_info px-8">
                    <h5 class="text-sm text-blue-400 uppercase">welcome to my blog</h5>
                    <h2 class=" text-6xl xs:text-4xl font-semibold text-gary-700 capitalize  my-5 dark:text-gray-300">we all owe death a life</h2>
                    <p class=" text-gray-400 text-lg xs:text-sm capitalize max-w-sm mx-auto">
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    </p>
                </div>
                <div class=" bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-400 flex rounded overflow-hidden p-1 mt-7 max-w-sm mx-auto">
                    <input placeholder="Email" type="email" class=" outline-none border-0 bg-transparent p-2 w-full placeholder:text-sm"/>
                    <button class=" bg-blue-500 border border-blue-500 px-7 xs:px-5 rounded text-gray-100 dark:text-gray-100">Subscribe</button>
                </div>
            </div>
        </section>
</template>
<script>
import bgUrl from '../assets/hero.svg';
export default {
    name: "Hero",
    data(){
       return {
          bgUrl
       }
    }
}
</script>
<style scoped>    
</style>