import styles from './index.module.scss';
import Noticia1 from '../../assets/teste1.png';
import Noticia2 from '../../assets/teste2.png';
import Noticia3 from '../../assets/teste3.png';
import Noticia4 from '../../assets/teste4.png';

const BlocoNoticias = () => {
  return (
    <main className={styles.main}>
        <h2 className={styles.titulo}>Fique por dentro das novidades do colégio!</h2>
        <div className={styles.noticias}>
            <div className={styles.card_noticia}>
                <img src={Noticia1} alt="" className={styles.image_noticia} />
                <p className={styles.titulo_noticia}>Aqui vai o texto de titulo da noticia em questão e agora vou escrever mais coisa para ver se quebra a linha e pleo jeeito ta quebrando</p>
            </div>
            <div className={styles.card_noticia}>
                <img src={Noticia2} alt="" className={styles.image_noticia} />
                <p className={styles.titulo_noticia}>Aqui vai o texto de titulo da noticia em questão e agora vou escrever mais coisa para ver se quebra a linha e pleo jeeito ta quebrando</p>
            </div>
            <div className={styles.card_noticia}>
                <img src={Noticia3} alt="" className={styles.image_noticia} />
                <p className={styles.titulo_noticia}>Aqui vai o texto de titulo da noticia em questão e agora vou escrever mais coisa para ver se quebra a linha e pleo jeeito ta quebrando</p>
            </div>
            <div className={styles.card_noticia}>
                <img src={Noticia4} alt="" className={styles.image_noticia} />
                <p className={styles.titulo_noticia}>Aqui vai o texto de titulo da noticia em questão e agora vou escrever mais coisa para ver se quebra a linha e pleo jeeito ta quebrando</p>
            </div>
        </div>
    </main>
  )
}

export default BlocoNoticias
