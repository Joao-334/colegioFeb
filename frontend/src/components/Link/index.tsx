import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

type Props = {
    url: string;
    children: React.ReactNode;
    target?: string;
}

const Link = ({url, children, target}: Props) => {
  return (
    <div>
        <NavLink to={url} target={target} className={styles.link}>{children}</NavLink>
        <span></span>
    </div>

  )
}

export default Link
