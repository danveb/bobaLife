# bobaLife 

## Intro 
bobaLife is an e-commerce web app designed for a fictitous boba shop. This app incorporates working cart/checkout process and integration of Stripe mobile payments. 

## Features
- Login/Registration (user state in localStorage)
- Shop/Cart/Checkout functionality 
- Connect frontend with backend to create Stripe Checkout Session and allow mobile payments

## Live App 
- [Netlify](https://bobalife.netlify.app/) - https://bobalife.netlify.app

## Source Code 
- [GitHub](https://github.com/danveb/bobalife)

---
  
## Landing 

<img src="https://media.giphy.com/media/VNUtRvYsWBXPAQvhpc/giphy.gif">

## Add Product to Basket

<img src="https://media.giphy.com/media/cn0urVG9Lx73FqIwmh/giphy.gif">

## Checkout Basket

<img src="https://media.giphy.com/media/dMuzlrS30V9n9IdW8B/giphy.gif">

## Stripe Checkout Session
```sh
Refer to Stripe documentation for card information
```
<img src="https://media.giphy.com/media/28PmCoGvXRmIyWADX0/giphy.gif">

## Stripe Payment (Test CC)
```sh
Refer to Stripe documentation for card information
```
<img src="https://media.giphy.com/media/RMJfo4MUYLHpciQCBx/giphy.gif">

---
## Project structure 

```sh
client (React.js)
server (Node/Express)
```

## React App Initialize

```sh
$ yarn create react-app ./ 
```

## Install client dependencies

```sh
$ yarn add
$ axios 
$ react-router-dom 
$ react-scroll 
$ react-toastify 
$ sass 
$ styled-components
$ react-redux 
$ @reduxjs/toolkit 
$ @emotion/react
$ @emotion/styled
$ @mui/icons-material
$ @mui/material
$ @mui/styled-engine-sc
$ @stripe/react-stripe-js
$ @stripe/stripe-js
```

## Initialize Server 

```sh 
$ yarn init 
```

## Install server dependencies 

```sh 
$ yarn add 
$ bcryptjs 
$ colors 
$ cors 
$ dotenv 
$ express 
$ express-async-handler 
$ jsonwebtoken 
$ mongoose 
$ nodemon 
$ stripe
```

## Credit
- E-commerce products borrowed from Blue Bottle Coffee, Boba Guys, etc. 

## Import Data from seeder.js (products/users)
```sh
$ yarn run data:import 
```

## Delete Data from seeder.js (products/users)
```sh
$ yarn run data:destroy
```

## Start Client/Server

```sh
$ yarn start
```

## Misc. (Server)
- Refer to seeder file 
- Refer to constants directory for data of users & parrillas
- Run script to import or destroy this data on MongoDB

1. seeder.js
```sh
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 
import colors from "colors"; 
import users from "./data/users.js"; 
import products from "./data/products.js"; 
import User from "./models/userModel.js"; 
import Product from "./models/productModel.js"; 
import connectDB from "./config/db.js"; 

dotenv.config(); 

connectDB(); 

const importData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();

        // insert users data into db
        const createdUsers = await User.insertMany(users); 
        // we select the first "admin"
        const adminUser = createdUsers[0]._id; 
        const sampleProducts = products.map(product => {
            return {
                ...product, 
                user: adminUser
            }
        }); 

        await Product.insertMany(sampleProducts); 
        console.log("Data imported".green.inverse); 
        process.exit(); 
    } catch (error) {
        console.error(`${error}.red.inverse`); 
        process.exit(1)
    };
}; 

const destroyData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed".red.inverse); 
        process.exit(); 
    } catch (error) {
        console.error(`${error}`.red.inverse); 
        process.exit(1)
    };
}; 

if(process.argv[2] === "-d") {
    destroyData(); 
} else {
    importData(); 
}
```

2. users.js 
```sh
import bcrypt from "bcryptjs"; 

const users = [
    {
        username: "admin", 
        email: "admin@gmail.com", 
        password: bcrypt.hashSync("admin", 10), // synchronously generate hash with 10 rounds
    }, 
    {
        username: "peach", 
        email: "peach@gmail.com", 
        password: bcrypt.hashSync("peach", 10), // synchronously generate hash with 10 rounds
    }, 
    {
        username: "jojo", 
        email: "jojo@gmail.com", 
        password: bcrypt.hashSync("jojo", 10), // synchronously generate hash with 10 rounds
    }, 
]; 

export default users
```

3. products.js 
```sh
const products = [
    {
        title: "Globo Espresso", 
        description: "Robust Italian espresso blend", 
        image: "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1526404876/gkhxnpntcaonvebez1ys.jpg", 
        price: 28, 
    }, 
    {
        title: "Roaster's Choice Box", 
        description: "Rotating collection of three single origins", 
        image: "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1656526781/mikslgpdx1wadlkcb4xi.jpg", 
        price: 65, 
    }, 
    {
        title: "Nob Hill Boba Blend", 
        description: "All-in-one espresso milk tea kit", 
        image: "https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_576,w_576/v1526404848/r01wlbcqpgdspyszxg0n.jpg", 
        price: 35, 
    }, 
    {
        title: "River Plate Kit", 
        description: "Three of our most well-loved blends", 
        image: "https://images.unsplash.com/photo-1529474944862-bf4949bd2f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80", 
        price: 50, 
    }, 
    {
        title: "But First Boba Sticker", 
        description: "Perfect gift for boba lovers", 
        image: "https://rlv.zcache.com/but_first_boba_sticker-rd05c14d6c830405f8aab5d6f16e67fd8_07caf_736.webp?rlvnet=1", 
        price: 3, 
    }, 
    {
        title: "Boba Milk Tea Sticker", 
        description: "Boba Vibes! Love your boba", 
        image: "https://cdn.shopify.com/s/files/1/0022/9838/0353/products/boba-milk-tea-sticker_1024x.jpg?v=1624004774", 
        price: 3, 
    }, 
    {
        title: "Boba Is Life Sticker", 
        description: "A boba a day keeps the doctor away!", 
        image: "https://ih1.redbubble.net/image.1010597628.6058/st,small,507x507-pad,600x600,f8f8f8.jpg", 
        price: 3, 
    }, 
    {
        title: "You Had Me At Boba Sticker", 
        description: "Boba Best Friends", 
        image: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D1031574701W8333H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/you-had-me-at-boba-tea-sticker.jpg", 
        price: 3, 
    }, 
];

export default products
```