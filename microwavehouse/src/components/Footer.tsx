import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from '../assets/LogoMicrowaveHouse.png';

export default function Footer() {
    return (
        <footer className="bg-surface text-secondary">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img src={Logo} alt="Logo" className="w-32 mb-4" />
                    <p className="text-sm leading-relaxed">
                        Somos <strong>a casa do micro-ondas</strong>.<br />
                        Consertamos, reformamos e damos vida nova ao seu micro-ondas e forno elétrico.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" aria-label="Facebook" className="hover:text-primary transition">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-primary transition">
                            <FaInstagram size={18} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-primary transition">
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4 text-primary">Links</h3>
                    <ul className="space-y-2 text-center md:text-left">
                        <li><a href="/" className="hover:text-primary transition">Home</a></li>
                        <li><a href="/onde-estamos" className="hover:text-primary transition">Onde Estamos</a></li>
                        <li><a href="/fotos" className="hover:text-primary transition">Fotos</a></li>
                        <li><a href="/contato" className="hover:text-primary transition">Contato</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4 text-primary">Contato</h3>
                    <ul className="space-y-2 text-sm text-center md:text-left">
                        <li>📍 Avenida Presidente Kennedy 410, Rebouças</li>
                        <li>📍 Rua Saturnino Miranda, 84 - Santa Felicidade</li>
                        <li>📞 (41) 3332-8000</li>
                        <li>📱 (41) 98516-3602</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-secondary">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-xs text-secondary gap-2">
                    <p className="text-center">&copy; {new Date().getFullYear()} Debugo Dev. Todos os direitos reservados.</p>
                    <div className="flex gap-4">
                        <a href="/politica-de-privacidade" className="hover:text-primary transition">
                            Política de Privacidade
                        </a>
                        <a href="/termos-de-uso" className="hover:text-primary transition">
                            Termos de Uso
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
