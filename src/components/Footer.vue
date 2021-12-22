<template>
   <footer class="container mx-auto py-4 mt-14 xs:px-2">
           <div class="footer_top flex items-center justify-between">
                <div class=" logo flex items-center">
                    <div class=" h-8  w-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                        <span class="h-2  w-2 bg-white "></span>
                    </div>
                     <h4 class=" text-gray-800 dark:text-blue-100 font-bold">ATLAS</h4>
                </div>

                <button class="flex items-center p-2 border-slate-700 bg-white dark:bg-blue-500 rounded">
                    <span class="text-gray-700 dark:text-gray-100 text-sm mr-4">Contact Me</span>
                    <i class="bi bi-arrow-right text-gray-500 dark:text-gray-100 text-sm"></i>
 
                </button>
            </div>
            <div class="footer_mid  items-center mt-8 md:flex-row md:justify-between xs:flex xs:flex-col xs:px-2">
                <div class="footer_links flex  sm:justify-start basis-1/2">
                     <div class="links_left">
                         <h4 class=" font-medium text-gray-700 dark:text-gray-200 xs:text-sm">ATLAS</h4>
                         <p class="text-gray-500 dark:text-gray-300 text-sm my-2">Homepage</p>
                         <p class="text-gray-500 dark:text-gray-300 text-sm my-2">About</p>
                         <p class="text-gray-500 dark:text-gray-300 text-sm my-2">Contact</p>
                         <p class="text-gray-500 dark:text-gray-300 text-sm my-2">Article</p>
                     </div>
                     <div class="links_right ml-36 xs:ml-20">
                         <h4 class=" font-medium text-gray-700 dark:text-gray-200">Template</h4>
                         <p class="text-gray-500 dark:text-gray-300 text-sm my-2">Style GUid</p>
                         <p class="text-gray-500 dark:text-gray-300 text-sm my-2">Getting Started</p>
                         <p class="text-gray-500 dark:text-gray-300 text-sm my-2">ChangeLog</p>
                        
                     </div>
                </div>

                <div class="footer_news_letter xs:flex xs:flex-col sm:flex-row justify-end xs:mt-5">
                    <div class="icon mr-10">
                        <i class="bi bi-mailbox dark:text-gray-100"></i>

                       
                    </div>
                    <div class="info">
                       <h4 class=" capitalize text-lg font-medium text-gray-800 dark:text-gray-300">join the news letter and read the new posts first</h4>
                       <p class=" text-gray-500 dark:text-gray-400 text-sm max-w-xs my-3">
                           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                       </p>
                       <div class=" bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-400 flex rounded overflow-hidden p-1 mt-7">
                           <input placeholder="Email" type="email" class=" outline-none border-0 bg-transparent p-2 w-full placeholder:text-sm"/>
                           <button class=" bg-blue-500 border border-blue-500 px-7 rounded text-gray-100 dark:text-gray-100">Subscribe</button>
                       </div>
                    </div>
                </div>
            </div>

            <div class="footer_bottom xs:grid xs:grid-cols-1 sm:grid-cols-2 mt-32">
                  <div class="copy_right">
                      <p class=" text-gray-400 text-sm dark:text-slate-500"> @ 2021 | all rights reserved</p>
                  </div>
                  <div class="links flex items-center justify-end">
                     <a class="mx-3 cursor-pointer">
                         <i class="bi bi-twitter text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"></i>
                     </a>
                     <a class="mx-3 cursor-pointer">
                         <i class="bi bi-facebook text-gray-500 dark:text-gray-400 text-lg font-popppins dark:hover:text-gray-200"></i>
                     </a>
                     <a class="mx-3 cursor-pointer">
                         <i class="bi bi-instagram text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"></i>
                     </a>
                     <a class="mx-3 cursor-pointer">
                         <i class="bi bi-pinterest text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"></i>
                     </a>
                     <a class="mx-3 cursor-pointer">
                         <i class="bi bi-youtube text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200" ></i>
                        
                     </a>
                </div>
            </div>
    </footer>
</template>
<script>
export default {
    name:"Footer"
}
</script>
<style>
    
</style>