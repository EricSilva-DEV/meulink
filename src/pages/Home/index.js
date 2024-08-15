import { useState} from 'react';
import { FiLink } from 'react-icons/fi';
import "./home.css";

import Menu from '../components/Menu'
import LinkItem from '../components/LinkItem';

import api from '../../services/api';
import { getLinksSave, saveLink} from '../../services/storeLinks';

export default function Home() {
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  
 async function handleShortLink(){
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);
      
      saveLink('@encurtalink', response.data)

      setLink('')

      }catch{
        alert("Ops parece que algo deu errado!");
        setLink('');
    }
    }

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
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Encutar link</button>
      </div>

      <Menu />

      {showModal && (
        <LinkItem
        closeModal={ () => setShowModal(false) }
        content={data}
        />
      )}
    </div>
  )
}
