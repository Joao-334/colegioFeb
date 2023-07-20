import styles from './index.module.scss';
import { useRef, useLayoutEffect } from 'react';
import Navbar from './navbar';
import ImageHeader from './imageHeader';


const Header = () => {

    const hamburguerRef = useRef<HTMLDivElement>(null);
    const linksMobileRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        hamburguerRef.current?.firstChild?.addEventListener('click', () => linksMobileRef.current?.classList.toggle(styles.mobiles_link_active));

    });

    return (
        <header className={styles.header}>
            <Navbar />
            <ImageHeader />


        </header>
    )
}

export default Header;
