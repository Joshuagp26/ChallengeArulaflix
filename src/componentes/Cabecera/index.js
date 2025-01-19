import './cabecera.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Botones from '../Botones';

const Cabecera = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const clickHome = () => {
        navigate('/')
    }

    const clickNuevoVideo = () => {
        navigate('/nuevo-video')
    }

    const paginaHome = location.pathname === '/'
    const paginaNuevoVideo = location.pathname === '/nuevo-video'

    return (
        <header className='cabecera'>
            <img src='/imagens/logo.png' alt='Logotipo da AluraFlix.' />
            <nav className='botones'>
                <Botones
                    colorTexto={paginaHome ? '#2271D1' : '#FFFFFF'}
                    colorborde={paginaHome ? '#2271D1' : '#FFFFFF'}
                    alClick={clickHome}
                    texto='HOME'
                /><img className='agrearIconoH' src='/imagens/Button.png' alt='Logotipo da AluraFlix.' onClick={clickHome}/>
                <Botones
                    className="nvboton"
                    colorTexto={paginaNuevoVideo ? '#2271D1' : '#FFFFFF'}
                    colorborde={paginaNuevoVideo ? '#2271D1' : '#FFFFFF'}
                    alClick={clickNuevoVideo}

                    texto='NUEVO VIDEO'
                /><img className='agrearIcono' src='/imagens/Vector.png' alt='Logotipo da AluraFlix.'  onClick={clickNuevoVideo}/>
            </nav>
        </header>
    )
}

export default Cabecera