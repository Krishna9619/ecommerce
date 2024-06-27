import React, {createContext, useEffect, useState} from "react";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart ={};
    for (let index=0; index < 300+1; index++){
        cart[index]=0;
    }
    return cart;
    }

const ShopContextProvider =(props)=>{
    
    const [all_product,setAll_Product]= useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch("https://ecommerce123-fae48795630f.herokuapp.com/allproducts")
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem("auth-token")){
            fetch("https://ecommerce123-fae48795630f.herokuapp.com/getcart",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "content-type": "application/json",
                },
                body:"",
            })
            .then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])


    const addToCart =(itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]:prev[itemId]+1}));
        if(localStorage.getItem("auth-token")){
            fetch("https://ecommerce123-fae48795630f.herokuapp.com/addtocart",{
                method:"POST",
                headers:{
                    Accept:"application/form",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "content-type": "application/json",
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]:prev[itemId]-1}));
        if(localStorage.getItem("auth-token")){
            fetch("https://ecommerce123-fae48795630f.herokuapp.com/removefromcart",{
                method:"POST",
                headers:{
                    Accept:"application/form",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "content-type": "application/json",
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount =() =>{
        let totalAmount= 0;
        for(const item in cartItems){
            if( cartItems[item]>0){
                let itemInfo= all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price *cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalItems= ()=>{
        let totalItem=0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalItems};


    return(
        <ShopContext.Provider value ={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;