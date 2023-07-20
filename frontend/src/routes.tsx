import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';
import LandingPage from './pages/LandingPage';

function App() {


  return (
    <>
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/noticias' element={<p>As noticias em geral são exibidas aqui</p>} />
                <Route path='/noticias/:id' element={<p>Noticias em especifico</p>}></Route>
                <Route path='*' element={<p>Páginas que não existem</p>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
