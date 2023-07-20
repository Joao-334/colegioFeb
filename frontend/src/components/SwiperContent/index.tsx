import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


import { FcCalendar } from 'react-icons/fc'
import { Pagination } from 'swiper/modules';

const SwiperContent = () => {
    return (
        <section className={styles.swiper_Section}>
            <Swiper className={styles.swiper_Content}
                rewind={true}
                slidesPerView={2}
                pagination={{ dynamicBullets: true }}
                modules={[Pagination]}
            >
                <SwiperSlide className={styles.swiper}>
                    <div className={styles.swiper_card}>
                        <h2 className={styles.card_title}>Caléndario 2023</h2>
                        <span><FcCalendar></FcCalendar></span>
                        <button className={styles.card_button}>Clique aqui!</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper}><div className={styles.swiper_card}>
                        <h2 className={styles.card_title}>Notas Escolares</h2>
                        <button className={styles.card_button}>Clique aqui!</button>
                    </div></SwiperSlide>
                <SwiperSlide className={styles.swiper}><div className={styles.swiper_card}>
                        <h2 className={styles.card_title}>Testando</h2>
                        <button className={styles.card_button}>Clique aqui!</button>
                    </div></SwiperSlide>
                <SwiperSlide className={styles.swiper}><div className={styles.swiper_card}>
                        <h2 className={styles.card_title}>Testando</h2>
                        <button className={styles.card_button}>Clique aqui!</button>
                    </div></SwiperSlide>
                <SwiperSlide className={styles.swiper}><div className={styles.swiper_card}>
                        <h2 className={styles.card_title}>Testando</h2>
                        <button className={styles.card_button}>Clique aqui!</button>
                    </div></SwiperSlide>
                <SwiperSlide className={styles.swiper}><div className={styles.swiper_card}>
                        <h2 className={styles.card_title}>Testando</h2>
                        <button className={styles.card_button}>Clique aqui!</button>
                    </div></SwiperSlide>
                <SwiperSlide className={styles.swiper}><div className={styles.swiper_card}>
                        <h2 className={styles.card_title}>Testando</h2>
                        <button className={styles.card_button}>Clique aqui!</button>
                    </div></SwiperSlide>
                <SwiperSlide className={styles.swiper}><div className={styles.swiper_card}>
                        <h2 className={styles.card_title}>Testando</h2>
                        <button className={styles.card_button}>Clique aqui!</button>
                    </div></SwiperSlide>
                <SwiperSlide className={styles.swiper}><div className={styles.swiper_card}>
                        <h2 className={styles.card_title}>Testando</h2>
                        <button className={styles.card_button}>Clique aqui!</button>
                    </div></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default SwiperContent