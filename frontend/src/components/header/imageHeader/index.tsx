import styles from './index.module.scss';



const ImageHeader = () => {
    return (
        <div className={styles.image_header}>
            <div className={styles.fundo_preto}>
                <h2 className={styles.h2}>O lugar onde seu sonho se torna realidade</h2>
            </div>
        </div>
    )
}

export default ImageHeader;