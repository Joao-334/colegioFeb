import { forwardRef } from 'react';
import Link from '../../Link';
import styles from './index.module.scss';



const Mobile = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <div className={styles.mobiles_link_desactive} ref={ref}>
            <ul className={styles.links}>
                <Link url='/noticias'>Notícias</Link>
                <Link url='https://unifeb.edu.br/colegiofeb/assets/docs/EDITAL-DAS-BOLSAS-2023.pdf'>Edital</Link>
                <Link url='http://unifeb.edu.br/colegiofeb/inscricao.html'>Gabaritos</Link>
                <Link url='https://corpore.feb.br/FrameHTML/web/app/edu/PortalEducacional/login/'>Portal do Aluno</Link>
            </ul>
        </div>
    )
});

export default Mobile