<template>
    <!-- Initially used Shopping Cart Page for Heading 
    <h1>Shopping Cart Page</h1> -->
    <h1>Shopping Cart</h1>
    <!-- Now using cart items divs with their contents in CartList as a reusable component. -->
    <CartList :cartItems="cartItems" />
    <!-- <div v-if="cartItems.length > 0">
        <div class="product-container" v-for="product in cartItems" :key="product.id">
            <img class="product-image" :src="product.imageName" />
            <div class="details-wrap">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
            </div>
            <button class="remove-button">Remove from Cart</button>
        </div>
        <button class="checkout-button">Proceed to Checkout</button>
    </div>
    <div v-if="cartItems.length === 0">
        You currently have no items in your cart !
    </div> -->
</template>

<script>
import CartList from '../components/CartList.vue'
import { cartItems } from '../temp-olive_oil-data'

export default  {
    name: 'ShoppingCartPage',
    components: {
        CartList
    },
    data()  {
        return  {
            cartItems
        }
    }
}
</script>