import React, { useEffect, useState } from "react";
import ProductsContext, { Cart, Invoice, Product, Wishlist } from "./product-context"

type propsType = {
    children: React.ReactNode;
  };

const ProductsContextProvider:React.FC<propsType> = (props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [shoppingCart, setShoppingCart] = useState<Cart[]>([]);
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const [invoice, setInvoice] = useState<Invoice[]>([]);
    const [badge, setBadge] = useState<number[]>([]);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    useEffect(() => {
        const api = async () => {
            const data = await fetch("https://fakestoreapi.com/products", {
            method: "GET"
            });
            const jsonData = await data.json();
            setProducts(jsonData);
        };

        api();
    }, []);

    const addToCart = (item:Product) => {
        const newEntry:Cart = ({idCart:item.id, items:item, count:1});
        var found:Boolean = false;
        var totalCount:number = 0;
        shoppingCart.forEach(cartItem => {
            if(cartItem.idCart == item.id){
                cartItem.count += 1;
                found = true;
            }
        });
        if(!found){
            setShoppingCart([...shoppingCart, newEntry])
            shoppingCart.forEach(cartItem => {
                totalCount += cartItem.count;
                console.log(totalCount);
            })
            setBadge([totalCount+1])
            console.log(badge)
        }
        else {
            found = false;
            shoppingCart.forEach(cartItem => {
                totalCount += cartItem.count
                console.log(totalCount);
            })
            setBadge([totalCount])
            console.log(badge)
            return;
        }
    }

    const deleteFromCart = (item:Cart) => {}

    const updateItemCount = (item:Cart, increment:Boolean) => {
        console.log(item.idCart);
        var updateCart:Cart[] = [...shoppingCart];
        var totalCount:number = 0;
        updateCart.forEach(cartItem => {
            console.log(cartItem.idCart) 
            if(cartItem.idCart == item.idCart && increment){
                cartItem.count += 1;
            }
            else if(cartItem.idCart == item.idCart && !increment){
                cartItem.count -= 1;
                if(cartItem.count == 0){
                    updateCart = updateCart.filter(prevCart => prevCart.idCart !== cartItem.idCart)
                }
            }
            else{
                console.log("not found")
            }
        })
        setShoppingCart(updateCart) 
        shoppingCart.forEach(cartItem => {
            totalCount += cartItem.count;
            console.log(totalCount);
        })
        setBadge([totalCount])
        console.log(badge)
    }

    const addToWishlist = (item:Product) => {
        if(wishlist.includes(item))return;
        else
        setWishlist([...wishlist, item])
    }

    const deleteFromWishlist = (item:Product) => {
        const updateWishlist:Product[] = wishlist;
        setWishlist(updateWishlist.filter(prevList => prevList.id !== item.id));
    }

    const createInvoice = (total:number) => {
        const randomId = () => {
            var result = '';
            for(var i=0; i<3; i++){
                result += characters.charAt(Math.floor(Math.random()*characters.length));
            }
            for(var i=0; i<3; i++){
                result += numbers.charAt(Math.floor(Math.random()*numbers.length));
            }
            return result;
        }

        const itemList:Cart[] = [...shoppingCart];
        const newInvoice:Invoice = ({invoiceId:randomId(), itemList:itemList, totalPrice:total})
        const invoices:Invoice[] = [...invoice, newInvoice]
        setInvoice(invoices);
        setShoppingCart([]);
        setBadge([]);
    }

    return(
        <ProductsContext.Provider value={{
            products, shoppingCart, wishlist, invoice, badge,
            addToCart, deleteFromCart, updateItemCount, 
            addToWishlist, deleteFromWishlist,
            createInvoice
        }}>{props.children}</ProductsContext.Provider>
    );
}

export default ProductsContextProvider;