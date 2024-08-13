import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function LinkItem({closeModal}) {
    return (
        <div className='modal-container'>
            <div className="modal-header">
                <h1>Link Encurtado</h1>
                <button onClick={closeModal}>
                    <FiX size={28} color="#101010" />
                </button>
            </div>

            <span>
                https://www.meusite.com.br
            </span>

            <button className='modal-link'>
                https://bit.ly/12900
                <FiClipboard size={18} color="#fafafa" />
            </button>
        </div>
    )
} 