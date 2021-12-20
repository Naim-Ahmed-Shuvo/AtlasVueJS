<template>
     <nav class="w-full z-50 bg-blue-50 dark:bg-gray-800" style="position: fixed; top:0%;width: 100%">
            <div class="container mx-auto py-5  xs:px-2 sm:px-2 flex items-center justify-between ">

                <div class="nav__logo__links flex items-center">
                    <router-link :to="{name: 'home'}">


                        <div class=" logo flex items-center cursor-pointer">
                                <div class=" h-10  w-10 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                                    <span class="h-3  w-3 bg-white "></span>
                                </div>
                                <h4 class=" text-gray-800 dark:text-blue-100 font-bold">ATLAS</h4>
                        </div>
                    </router-link>
                        <div class="links flex items-center ml-10 xs:hidden lg:flex">
                    
                            <span class="flex items-center mx-3">
                                <!-- <Link href={'/blog'}>Blog</Link> -->
                                <router-link :to="{name: 'blog'}">
                                Blog
                                </router-link>
                            </span>
                            <span class="flex items-center mx-3">
                            <router-link :to="{name: 'shop'}">
                                Shop
                                </router-link>
                            </span>
                        </div>
                </div>

                <div class="nav_right_links  items-center xs:hidden  sm:hidden lg:flex ">
                    <div class="searchbox flex items-center border rounded overflow-hidden px-2 mr-8 dark:border-gray-400">
                        <i class="bi bi-search text-gray-400 dark:text-gray-500"></i>

                        
                        <input type="text" placeholder="Search..." class=" border-0 outline-none p-2 bg-transparent"/>
                    </div>
                    <div class="links flex items-center">
                       
                       <router-link :to='{name: "cart"}'>

                        <a class="mx-3 cursor-pointer relative">
                            <i class="bi bi-cart text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"></i>
                            <span class=" absolute bottom-3 left-3 text-red-500">0</span>
                        </a>
                       </router-link>
                        <router-link :to='{name: "profile"}'>

                        <a class="mx-3 cursor-pointer">
                            <i class="bi bi-person text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"></i>

                            
                        </a>
                        </router-link>
                       
                        <a class="mx-3 cursor-pointer">
                            
                            <i class="bi bi-moon-stars-fill text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"></i>

                        </a>
                    </div>
                </div>
                <div class=" cursor-pointer lg:hidden flex items-center">
                   <div class="relative cursor-pointer">
                        <i class="bi bi-cart sm:text-lg"></i>
                     
                       <span class=" absolute bottom-1 left-3 text-red-500">0</span>
                   </div>
                    <a class="mx-3 cursor-pointer">
                            <i class="bi bi-moon-stars-fill text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"></i>
                              
                        </a>
                        <i class="bi bi-list sm:text-lg"></i>

                   
                </div>
            </div>
        </nav>
</template>
<script>
export default {
    name: "Nav",
}
</script>
<style lang="">
    
</style>