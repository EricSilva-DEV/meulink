import { useState, useEffect } from 'react';
import './links.css';
import { FiArrowDownLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { getLinksSave, deleteLink } from '../../services/storeLinks';
import LinkItem from '../components/LinkItem';

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptList, setEmptList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('@encurtalink');

      if (Array.isArray(result) && result.length === 0) {
        setEmptList(true);
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id);

    if (result.length === 0) {
      setEmptList(true);
  }

    setMyLinks(result)
  }

  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to='/'>
          <FiArrowDownLeft size={38} color='#fafafa' />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptList && (
        <div className="links-item">
          <h2 className='empt-text'>Sua lista está vazia...</h2>
        </div>
      )}

      {myLinks.map((link) => (
        <div key={link.id} className='links-item'>
          <button className='link' onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color='#fafafa' />
            {link.long_url}
          </button>
          <button className='link-delete' onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color='#ff5454' />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem closedModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
