/* This is a JavaScript File with an array used for setting up Olive Oil data.
   Note that some of data is temporary, because how it is accessed in this file wll be changed later. */

// Comment imported images for now  
// These image imports are no longer needed, as we are using an image URL on back-end now  
// import basilBottle from './assets/basil-bottle.webp';
// import lemonBottle from './assets/lemon-bottle.webp';
// import garlicBottle from './assets/garlic-bottle.webp';
// import rosemaryBottle from './assets/rosemary-bottle.webp';
// import chiliBottle from './assets/chili-bottle.webp';
// import delicateBottle from './assets/delicate-bottle.webp';
// import mediumBottle from './assets/medium-bottle.webp';
// import boldBottle from './assets/bold-bottle.webp';


export const cartItems = [ '123', '234', '345' ];
    // Try all 3 ids now for Postman
    // In cartItems array add ids for 2 of our items above that correspond to products array. 
    // To avoid repetition, simplify way we store a user shopping cart, so that we only have one single 
    // source of truth for data . 
    // Instead of storing entire objects with products data in cartItems we will 
    // change cartItems array so that it only stores ids of items that are in a user cart.
    // When user wants to see their cart, populate ids. 
    // That finds corresponding products for each of those ids and send a populated array back to user.   

    // Remove repeated products data in cartItems array
    // { id: '123',name: 'Basil',price: '$26.00', // imageName: basilBottle },
    // { id: '234', name: 'Lemon', price: '$26.00', // imageName: lemonBottle },
    // { id: '345', name: 'Garlic', price: '$26.00', // imageName: garlicBottle }]; 

/* export const products = [
    {
        id: '123',
        name: 'Basil',
        price: '$26.00',*/
        // imageName: basilBottle   An Image will work differently on back-end than front-end
        // Change imageName to imageURL on back-end, so that we test for how an image shows with a URL
        /* imageURL: '/images/basil-bottle.webp'
    },
    {
        id: '234',
        name: 'Lemon',
        price: '$26.00', */
        // imageName: lemonBottle   An Image will work differently on back-end than front-end
        // Change imageName to imageURL on back-end, so that we test for how an image shows with a URL
        /* imageURL: '/images/lemon-bottle.webp'
    },
    {
        id: '345',
        name: 'Garlic',
        price: '$26.00', */
        // imageName: garlicBottle   An Image will work differently on back-end than front-end
        // Change imageName to imageURL on back-end, so that we test for how an image shows with a URL
        /* imageURL: '/images/garlic-bottle.webp'
    },
    {
        id: '456',
        name: 'Rosemary',
        price: '$26.00', */
        // imageName: rosemaryBottle   An Image will work differently on back-end than front-end
        // Change imageName to imageURL on back-end, so that we test for how an image shows with a URL
        /* imageURL: '/images/rosemary-bottle.webp' 
    },
    {
        id: '567',
        name: 'Chili',
        price: '$26.00', */
        // imageName: chiliBottle   An Image will work differently on back-end than front-end
        // Change imageName to imageURL on back-end, so that we test for how an image shows with a URL
        /* imageURL: '/images/chili-bottle.webp'
    },
    {
        id: '678',
        name: 'Delicate',
        price: '$24.50', */
        // imageName: delicateBottle   An Image will work differently on back-end than front-end
        // Change imageName to imageURL on back-end, so that we test for how an image shows with a URL
        /* imageURL: '/images/delicate-bottle.webp'
    },
    {
        id: '789',
        name: 'Medium',
        price: '$24.50', */
        // imageName: mediumBottle   An Image will work differently on back-end than front-end
        // Change imageName to imageURL on back-end, so that we test for how an image shows with a URL
        /* imageURL: '/images/medium-bottle.webp'
    },
    {
        id: '890',
        name: 'Bold',
        price: '$24.50', */
        // imageName: boldBottle   An Image will work differently on back-end than front-end
        // Change imageName to imageURL on back-end, so that we test for how an image shows with a URL
        /* imageURL: '/images/bold-bottle.webp'
    }
]; */

/* Products Data Array with No Comments, so Data is all together for Copying and pasting into 
   MongoDB Shell (Mongosh). */
export const products = [
    {
        id: '123',
        name: 'Basil',
        price: '$26.00',
        imageURL: '/images/basil-bottle.webp'
    },
    {
        id: '234',
        name: 'Lemon',
        price: '$26.00',
        imageURL: '/images/lemon-bottle.webp'
    },
    {
        id: '345',
        name: 'Garlic',
        price: '$26.00', 
        imageURL: '/images/garlic-bottle.webp'
    },
    {
        id: '456',
        name: 'Rosemary',
        price: '$26.00', 
        imageURL: '/images/rosemary-bottle.webp' 
    },
    {
        id: '567',
        name: 'Chili',
        price: '$26.00',
        imageURL: '/images/chili-bottle.webp'
    },
    {
        id: '678',
        name: 'Delicate',
        price: '$24.50',  
        imageURL: '/images/delicate-bottle.webp'
    },
    {
        id: '789',
        name: 'Medium',
        price: '$24.50', 
        imageURL: '/images/medium-bottle.webp'
    },
    {
        id: '890',
        name: 'Bold',
        price: '$24.50', 
        imageURL: '/images/bold-bottle.webp'
    }
]; 