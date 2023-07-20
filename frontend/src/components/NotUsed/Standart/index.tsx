import { Outlet } from 'react-router-dom';
import Header from '../../header';

type props = {
    children: React.ReactNode
}

const Standart = ({ children }: props) => {
    return (
        <main>
            <Header />
            <Outlet />
            {children}
        </main>
    )
};

export default Standart;
