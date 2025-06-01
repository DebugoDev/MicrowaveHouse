import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
    const whatsappNumber = '+5541985163602';
    const message = encodeURIComponent('Olá, gostaria de mais informações!');

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-4 shadow-lg z-50"
            aria-label="Contato via WhatsApp"
        >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
    );
};

export default WhatsAppButton;
