import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import HomePage from './pages/HomePage.vue'


createApp(App)
    .use(VueRouter.createRouter({
        history: VueRouter.createWebHistory(process.env.BASE_URL),
        routes: [{
            path: '/',
            component: HomePage
        },
        {
            path: '/cart',
            component: ShoppingCartPage
        },
        {   path: '/products',
            component: ProductsPage
        },
        {
            // path: '/products/:productID', should be using productId instead 
            path: '/products/:productId',
            component: ProductDetailPage
        },
        {
            /* We want to make sure that this path matches everything, except for paths above. 
               Vue make this easy by checking this path if one of these routes has not already matched. 
               Vue uses a regular expression to makes sure it matches this path on all other routes. */
            path: '/:pathMatch(.*)*',  
            component: NotFoundPage
        }
        ]
    }))
.mount('#app')
