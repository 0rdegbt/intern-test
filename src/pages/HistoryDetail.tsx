import { IonBadge, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { cartOutline } from "ionicons/icons";
import { useContext } from "react";
import ProductsContext from "../data/product-context";
import { useParams } from "react-router";
import './Home.css';

const HistoryDetail:React.FC = () => {
    const transactionID = useParams<{transactionid: string}>().transactionid;
    const productCtx = useContext(ProductsContext);
    const selectTransaction = productCtx.invoice.find(transaction => transaction.invoiceId === transactionID);
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
            <IonContent>
            <IonGrid><IonRow><IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle class='ion-padding'>Code: {selectTransaction?.invoiceId}</IonCardTitle>
                        <IonCardSubtitle class='ion-padding-start'>Products: </IonCardSubtitle>
                        {selectTransaction?.itemList.map(item => (
                            <IonCardSubtitle class='ion-padding-start'>{selectTransaction.itemList.findIndex(list => list === item)+1}. {item.items.title} ({item.count}x) = ${(item.items.price*item.count)}</IonCardSubtitle>
                        ))}
                        <IonCardTitle class='ion-padding'>Total: ${selectTransaction?.totalPrice}</IonCardTitle>
                    </IonCardHeader>
                </IonCard>
                </IonCol></IonRow></IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default HistoryDetail;