import './erro.css';
import { Link } from 'react-router-dom';

export default function Erro() {
    return (
        <div className='conatiner-error'>
            <img src="/notfound.png" alt="Erro 404" />
            <h1>Página não encontrada</h1>
            <Link to='/'>
                Voltar para Home
            </Link>
        </div>
    );
}