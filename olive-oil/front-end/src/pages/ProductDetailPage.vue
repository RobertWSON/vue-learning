
<template>
    <!-- Initially used Product Detail Page for Heading 
    <h1>Product Detail Page</h1> Remove this and Display name of product -->
    <div v-if="product">  <!-- Only show if we have a matching product -->
        <div class="img-wrap">
            <img :src="product.imageName" />
        </div>

        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    </div>  

    <!-- <div v-if="!product"> Show not found 404 page, if we do not have a matching product -->
    <div v-else>   <!-- Use v-else Vue directive instead to make sure that one of 2 conditions 
                        gets displayed and for better code logic. -->
        <NotFoundPage />  <!-- A component that has code to show not found 404 page. -->
    </div>  
</template> 

<script>
import { products } from '../temp-olive_oil-data'
import NotFoundPage from './NotFoundPage.vue' 

export default  {
    name: 'ProductDetailPage',
    data()  {
        return  {
            product: products.find(product => product.id === this.$route.params.productId),
        }
    }, /* Add Components property to our object below, that tells us we want to show 
          NotFoundPage Component inside our div in template above. */
    components: {       
        NotFoundPage
    },
}
</script>