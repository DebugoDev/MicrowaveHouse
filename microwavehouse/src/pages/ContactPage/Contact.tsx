import React, { forwardRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';

const Contact = forwardRef<HTMLDivElement, {}>((_props, ref) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error('Preencha todos os campos!');
            return;
        }

        setLoading(true);

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            toast.success('E-mail enviado com sucesso!');
            setName('');
            setEmail('');
            setMessage('');
        } catch {
             toast.success('E-mail enviado com sucesso!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contato | Casa do Micro-Ondas</title>
                <meta name="description" content="Entre em contato com a Casa do Micro-Ondas para consertos e serviços." />

                <meta property="og:title" content="Fale Conosco - Casa do Micro-Ondas" />
                <meta property="og:description" content="Estamos prontos para te atender. Veja nossos canais de contato." />
                <meta property="og:url" content="https://casadomicroondas.vercel.app/contato" />
                <meta property="og:type" content="website" />
            </Helmet>

            <section ref={ref} id="contato" className="py-20 bg-gray-50 mt-7">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-primary mb-10">
                        Fale Conosco
                    </h1>
                    <div className="bg-white rounded-3xl shadow-2xl p-10 space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Seu nome"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Seu e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Sua mensagem"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl w-full font-semibold hover:bg-accent transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading && <Loader2 className="animate-spin w-5 h-5" />}
                                {loading ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>
                        </form>
                        <p className="text-center text-sm text-gray-500">
                            Retornaremos o mais breve possível. :)
                        </p>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
});

export default Contact;
