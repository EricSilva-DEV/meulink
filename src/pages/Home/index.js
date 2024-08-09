import { FiLink } from 'react-icons/fi';
import "./home.css";

export default function Home() {
  return (
    <div className='container-home'>
      <div className='logo'>
        <img src='/logo.png' alt='Logo meus links' />
        <h1>UP Links</h1>
        <span>Cole seu link para encutar👇🏻</span>
      </div>

      <div className='area-input'>
        <div>
          <FiLink size={24} color='#fafafa' />
          <input
            placeholder='Cole seu link aqui...'
          />
        </div>

        <button>Encutar link</button>
      </div>

    </div>
  );
}
