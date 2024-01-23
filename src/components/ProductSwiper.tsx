import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import React, { useContext } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductsContext from '../data/product-context';
import { IonCard, IonCardContent, IonIcon, IonImg, IonText } from '@ionic/react';

const ProductSwiper : React.FC  = () => {
    const productCtx = useContext(ProductsContext);

    return(
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{ marginTop:"1rem" }}
        >
            {productCtx.products.slice(0, 5).map((item) => (
                <SwiperSlide key={item.id}>
                    <IonCard style={{ height: '24rem', width:'100%', background:"white"}}>
                        <IonImg style={{ objectFit: 'contain', objectPosition: 'center', height:'80%', width:'100%', padding:'2rem'}} src={item.image}></IonImg>
                        <IonText style={{ position:'absolute', bottom:'8px', left: '16px', color:'black'}}>
                            <h1 style={{fontSize:'1.2rem', fontWeight:'bold'}}>{item.title}</h1>
                            <h3 style={{fontSize:'1rem'}}>30% off</h3>
                        </IonText>
                    </IonCard>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ProductSwiper;