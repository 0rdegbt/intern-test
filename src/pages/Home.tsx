import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useContext, useState } from 'react';
import ProductsContext from '../data/product-context';
import ProductSwiper from '../components/ProductSwiper';
import { addOutline, cartOutline, star, starOutline } from 'ionicons/icons';

const Home: React.FC = () => {
    const productCtx = useContext(ProductsContext);

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
            <IonContent className='ion-padding'>
            <IonGrid><IonRow><IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonTitle style={{ width:"100%", fontWeight:"bold", marginTop:"1rem", marginLeft:"1rem", marginRight:"1rem",fontSize:"2rem" }}>Welcome to U-Store!</IonTitle>
                <IonText style={{ width:"100%", padding:"2rem"}}>Our products are sourced and made locally with high quality materials to deliver the best products for our customers</IonText>
                <ProductSwiper/>
                <IonGrid>
                    <IonRow>
                        <IonTitle style={{ paddingTop:'1rem' }}>Our Products</IonTitle>
                    </IonRow>
                    <IonRow>
                    {productCtx.products.map(product => (
                    <IonCol size="12" size-sm="6" size-md="3" key={product.id}>
                        <IonCard  style={{ height: '24rem' }}>
                            <IonCardHeader>
                                <IonImg src={product.image} style={{width:'100%', height:'10rem', padding:'1rem', background:'white', margin:'auto', borderRadius:'3%'}}/>
                                <IonCardSubtitle className='ion-nowrap'><div className="productTitle" >{product.title}</div></IonCardSubtitle>
                                <IonCardTitle style={{ fontWeight:'bold' }}>${product.price}</IonCardTitle>
                            </IonCardHeader>
                            {productCtx.wishlist.includes(product)?
                            <IonButton fill='clear' size='large' style={{position: 'absolute', bottom:'0', left:'0'}} onClick={() => {productCtx.deleteFromWishlist(product)}}>
                            <IonIcon icon={star} color='warning'/>
                            </IonButton>:
                            <IonButton fill='clear' size='large' style={{position: 'absolute', bottom:'0', left:'0'}} onClick={() => {productCtx.addToWishlist(product)}}>
                            <IonIcon icon={starOutline}/>
                            </IonButton>}
                            <IonButton fill='clear' size='large' style={{position: 'absolute', bottom:'0', right:'0'}} onClick={() => {productCtx.addToCart(product)}}>
                                <IonIcon icon={addOutline}/>
                            </IonButton>
                        </IonCard>
                    </IonCol>
                    ))}
                    </IonRow>
                </IonGrid>
            </IonCol></IonRow></IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Home;
