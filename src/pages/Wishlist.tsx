import { IonBadge, IonButtons, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { cartOutline, trash } from "ionicons/icons";
import { useContext, useRef } from "react";
import ProductsContext, { Product } from "../data/product-context";
import './Home.css';

const Wishlist:React.FC = () => {
    const productCtx = useContext(ProductsContext);
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const wishToCart = (item:Product) =>{
        productCtx.addToCart(item);
        productCtx.deleteFromWishlist(item);
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonItem button routerLink='/home'>
                        <IonTitle>U-Store</IonTitle>
                    </IonItem>
                    <IonButtons slot="end">
                        <IonItem button routerLink='/cart'>
                        <IonIcon icon={cartOutline} />
                        {productCtx.shoppingCart.length>0?
                            <IonBadge id="cartItemCount" color="danger">{productCtx.badge[0]}</IonBadge>
                            :''
                            }
                        </IonItem>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            {productCtx.wishlist.length > 0?
            <IonContent>
            <IonGrid><IonRow><IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonList>
                    {productCtx.wishlist.map(wishItem => (
                        <IonItemSliding key={wishItem.id} ref={slidingOptionsRef}>
                            <IonItemOptions side="start">
                                <IonItemOption color='danger' onClick={()=>{productCtx.deleteFromWishlist(wishItem)}}>
                                    <IonIcon slot='icon-only' icon={trash}/>
                                </IonItemOption>
                            </IonItemOptions>
                                <IonItem lines="full">
                                    <IonImg class='product_img' src={wishItem.image} style={{width:'10rem', height:'10rem', padding:'1rem', background:'white', margin:'auto'}}/>
                                    <IonTitle class='ion-padding'>{wishItem.title}</IonTitle>
                                    <IonText class='ion-padding'>Price: ${wishItem.price}</IonText>
                                </IonItem>
                                <IonItemOptions side="end">
                                    <IonItemOption color="success" onClick={()=>{wishToCart(wishItem)}}>
                                        <IonIcon slot='icon-only' icon={cartOutline}/>
                                    </IonItemOption>
                                </IonItemOptions>
                        </IonItemSliding>
                    ))}
                </IonList>
            </IonCol></IonRow></IonGrid>
            </IonContent>:
            <IonContent><IonGrid><IonRow><IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonCard style={{ width:'100%', height:'20rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IonCardTitle style={{ fontSize:'2rem', fontWeight:'bold' }}>Your wishlist is empty!</IonCardTitle>
                </IonCard>
            </IonCol></IonRow></IonGrid></IonContent>}
        </IonPage>
    )
}

export default Wishlist;