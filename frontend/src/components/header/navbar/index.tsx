import LogoBranco from '../../../assets/logo-branco.png';
import styles from './index.module.scss';
import Link from '../../Link';

const Navbar = () => {

    return (
        <nav className={styles.nav}>

            <Link url={'/'}>
                <img src={LogoBranco} alt='logo colégio feb' className={styles.image_nav} />
            </Link>
        </nav>
    )
}

export default Navbar;