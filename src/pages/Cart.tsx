import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { addOutline, cartOutline, removeOutline } from "ionicons/icons";
import { useContext, useEffect, useRef } from "react";
import ProductsContext, {Cart} from "../data/product-context";
import './Home.css';

const CartPage:React.FC = () => {
    const productCtx = useContext(ProductsContext);
    var currTotal:number = 0;
    const priceCalc = (price:number, count:number) => {
        currTotal += (price*count)
        currTotal = Math.round(currTotal*100)/100;
        return Math.round((price*count)*100)/100;
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
            {productCtx.shoppingCart.length > 0? 
            <IonContent>
                <IonGrid><IonRow><IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonGrid>
                    {productCtx.shoppingCart.map(cartItem => (
                        <IonItem className="ion-padding">
                        <IonRow key={cartItem.idCart}>
                            <IonCol size='10rem'>
                                <IonImg src={cartItem.items.image} style={{width:'10rem', height:'10rem', padding:'1rem', background:'white', margin:'auto', borderRadius:'3%'}}/>
                            </IonCol>
                            <IonCol className="cartItemTitle">
                                <IonTitle class='ion-padding'>{cartItem.items.title}</IonTitle>
                                <IonText class='ion-padding'>Price: ${cartItem.items.price}</IonText>
                                <IonItem style={{ width:'100%', height:'2rem' }}>Amount:
                                <IonButton fill="clear"
                                onClick={()=>{productCtx.updateItemCount(cartItem, false)}}>
                                    <IonIcon icon={removeOutline}/>
                                </IonButton>
                                <IonText>{cartItem.count}</IonText>
                                <IonButton fill='clear'
                                onClick={()=>{productCtx.updateItemCount(cartItem, true)}}>
                                    <IonIcon icon={addOutline}/>
                                </IonButton>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        </IonItem>
                    ))}
                </IonGrid>
                
                <IonCard>
                    <IonCardHeader className="ion-padding">
                    {productCtx.shoppingCart.map(cartItem => (
                        <IonCardSubtitle key={cartItem.idCart} className="ion-padding-start">
                            {cartItem.items.title} ({cartItem.count}x) : ${priceCalc(cartItem.items.price,cartItem.count)}
                        </IonCardSubtitle>
                        ))}
                    </IonCardHeader>
                    {productCtx.shoppingCart.length > 0? 
                    <IonCardContent>
                        <IonGrid>
                            <IonRow class="ion-padding">
                                <IonCardTitle> Total: ${currTotal} </IonCardTitle>
                            </IonRow>
                            <IonRow><IonButton routerLink='/history' onClick={()=>{productCtx.createInvoice(currTotal)}} className="ion-padding-start">Checkout</IonButton></IonRow>
                        </IonGrid>
                    </IonCardContent>
                    : <IonText/>}
                </IonCard>
                </IonCol></IonRow></IonGrid>
            </IonContent>:
            <IonContent><IonGrid><IonRow><IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonCard style={{ width:'100%', height:'20rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IonCardTitle style={{ fontSize:'2rem', fontWeight:'bold' }}>Your cart is empty!</IonCardTitle>
                </IonCard>
            </IonCol></IonRow></IonGrid></IonContent>}
        </IonPage>
    )
}

export default CartPage;