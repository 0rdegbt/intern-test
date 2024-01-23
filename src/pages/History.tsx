import { IonBadge, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { cartOutline } from "ionicons/icons";
import { useContext } from "react";
import ProductsContext from "../data/product-context";
import './Home.css';

const History:React.FC = () => {
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
            {productCtx.invoice.length > 0?
            <IonContent>
            <IonGrid><IonRow><IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonGrid>
                    {productCtx.invoice.map(history => (
                        <IonRow key={history.invoiceId}>
                            <IonCol>
                            <IonCard className="ion-padding">
                                <IonCardHeader>
                                    <IonCardTitle>Transaction Code: {history.invoiceId}</IonCardTitle>
                                    <IonCardTitle className="ion-padding" style={{ fontWeight:'bold' }}>Total: ${history.totalPrice}</IonCardTitle>
                                    <IonButton routerLink={`/history/${history.invoiceId}`}>Detail</IonButton>
                                </IonCardHeader>
                            </IonCard>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
                </IonCol></IonRow></IonGrid>
            </IonContent>:
            <IonContent><IonGrid><IonRow><IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonCard style={{ width:'100%', height:'20rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IonCardTitle style={{ fontSize:'2rem', fontWeight:'bold' }}>No recent purchases found</IonCardTitle>
                </IonCard>
            </IonCol></IonRow></IonGrid></IonContent>}
        </IonPage>
    )
}

export default History;