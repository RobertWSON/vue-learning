
<template>     
    <!-- <h1>Products Page</h1> Initially used Products Page for Heading --> 
    <h1>Products</h1>
    <!-- Now using grid-wrap div with its contents in ProductsList as a reusable component. -->
    <ProductsList :products="products"/>
    <!-- <div class="grid-wrap">
        <div 
            class="product-item"
            v-for="product in products"
            :key="product.id"
        >
            <img :src="product.imageName" />
            <h3 class="product-name">{{ product.name}}</h3>
            <p class="product-price">{{ product.price }}</p>

            <router-link :to="'/products/' + product.id">
                <button>View Details</button>
            </router-link>

        </div> 
    </div> -->
</template>

<script>
import ProductsList from '../components/ProductsList.vue'
import { products } from '../temp-olive_oil-data'

export default  {
    name: "ProductsPage",
    components: {
        ProductsList
    },
    data()  {
        return  {
            products,
        }
    }
}
</script>