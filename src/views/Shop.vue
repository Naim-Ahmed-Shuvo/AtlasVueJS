<template>
    <section className="featuredposts py-10 mt-36">
        <div className="container mx-auto xs:px-2">
            <div className="title my-5 flex justify-between">
                <h4 className="text-lg text-gray-800 font-medium dark:text-gray-100">Products</h4>
                
            </div>

            <div className="cards grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 gap-20" >
                    <Product v-for="(item, index) in products" :key="index" :name='item.name'
                            :image='item.image'
                            :description='item.description'
                            :price='item.price'
                            :id="item.id"
                     /> 
            </div>
        </div>
    </section>
</template>
<script>
import { products } from "../store/products";
import Product from "../components/Product.vue";
export default {
    name: "Shop",
    components: {
        Product,
    },
    data() {
        return {
            products,
        };
    },
};
</script>
<style>
</style>