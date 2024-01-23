import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookmarkOutline, cartOutline, newspaperOutline, personOutline } from 'ionicons/icons';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CartPage from './pages/Cart';
import History from './pages/History';
import Wishlist from './pages/Wishlist';
import ProductsContextProvider from './data/ProductContextProvider';
import HistoryDetail from './pages/HistoryDetail';
import ToggleDark from './components/DarkMode';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="home">
        <IonHeader></IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink='/home'>
                <IonTitle>U-Store</IonTitle>
              </IonItem>
              <IonItem button routerLink='/wishlist'>
                <IonIcon slot='start' icon={bookmarkOutline}/>
                <IonLabel>Wishlist</IonLabel>
              </IonItem>
              <IonItem button routerLink='/history'>
                <IonIcon slot='start' icon={newspaperOutline}/>
                <IonLabel>History</IonLabel>
              </IonItem>
              <ToggleDark/>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <ProductsContextProvider>
        <IonRouterOutlet id="home">
          <Route exact path='/home' component={Home}/>
          <Route path='/cart' component={CartPage}/>
          <Route path='/wishlist' component={Wishlist}/>
          <Route path='/history' component={History}/>
          <Route path='/history/:transactionid' component={HistoryDetail}/>
          <Redirect exact from="/" to="/home"/>
        </IonRouterOutlet>
      </ProductsContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
