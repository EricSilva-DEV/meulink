import './links.css';
import { FiArrowDownLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
export default function Links() {
  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to='/'>
          <FiArrowDownLeft size={38} color='#fafafa' />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className='links-item'>
        <button className='link'>
          <FiLink size={18} color='#fafafa' />
          https://www.google.com.br
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color='#ff5454' />
        </button>
      </div>

      <div className='links-item'>
        <button className='link'>
          <FiLink size={18} color='#fafafa' />
          https://www.google.com.br
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color='#ff5454' />
        </button>
      </div>
    </div>
  );
}
