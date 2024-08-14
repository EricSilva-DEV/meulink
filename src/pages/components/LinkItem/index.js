import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function LinkItem({closeModal, content}) {
    
    async function copyLink() {
        await navigator.clipboard.writeText(content.link)
        alert('Deu certo!')
        
    }
    
    return (
        <div className='modal-container'>
           
            <div className="modal-header">
                <h1>Link Encurtado</h1>
                <button onClick={closeModal}>
                    <FiX size={28} color="#101010" />
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={18} color="#fafafa" />
            </button>
        </div>
    )
} 