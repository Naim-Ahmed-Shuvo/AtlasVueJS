<template lang="">
    <div className="card p-2 bg-gray-50 dark:bg-slate-900 shadow border dark:border-slate-700">
        <div className="card_img">
            <img :src="image" alt="name" className="w-full rounded h-60"/>
        </div>
        <div className="card_text">
            <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">{{name}}</h4>
            <p className="text-sm text-gray-400">{{description}} </p>
            <div className="card_social flex items-center justify-between mt-4">
                <span className="text-gray-400 text-lg">${{price}}</span>
                <i class="bi bi-cart-plus text-gray-400 text-xl mr-3 cursor-pointer" @click="addToCart(id)"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Product",
    props:["name",
            "image",
            "price",
            "description",
            "id"
        ],

    methods:{
        addToCart(id){
        //    console.log(id);
        let  item = {
                name: this.name,
                image: this.image,
                description: this.description,
                price: this.price,
                id: this.id
            }
           this.$store.commit('addToCart',item)
        }
    }    
}
</script>
<style lang="">
    
</style>