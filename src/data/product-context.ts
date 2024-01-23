import React from "react";

export interface Product{
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface Cart{
    idCart: string;
    items: Product;
    count: number;
}

export interface Wishlist{
    wishes: Product;
}

export interface Invoice{
    invoiceId: string;
    itemList: Cart[];
    totalPrice: number;
}

interface Context{
    products: Product[];
    shoppingCart: Cart[];
    wishlist: Product[];
    invoice: Invoice[];
    badge: number[];
    addToCart: (item: Product) => void;
    deleteFromCart: (item: Cart) => void;
    updateItemCount: (item: Cart, increment:Boolean) => void;
    addToWishlist: (item: Product) => void;
    deleteFromWishlist: (item: Product) => void;
    createInvoice: (total:number) => void;
}

const ProductsContext = React.createContext<Context>({
    products:[],
    shoppingCart:[],
    wishlist:[],
    invoice:[],
    badge:[],
    addToCart:()=>{},
    deleteFromCart:()=>{},
    updateItemCount:()=>{},
    addToWishlist:()=>{},
    deleteFromWishlist:()=>{},
    createInvoice: () => {}
});

export default ProductsContext;