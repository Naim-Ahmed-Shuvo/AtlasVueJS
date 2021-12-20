<template lang="">
    <main>
        <Hero/>
        <FeaturedPosts/>
        <PopularPosts/>
        <RecentPots/>
    </main>
</template>
<script>

import Hero from "../components/Hero.vue"
import FeaturedPosts from "../components/FeaturedPosts.vue"
import PopularPosts from "../components/PopularPosts.vue"
import RecentPots from "../components/RecentPosts.vue"

export default{
  components:{
  
    Hero,
   FeaturedPosts,
   PopularPosts,
   RecentPots,
}
}
</script>
<style>
    
</style>