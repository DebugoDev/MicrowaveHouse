import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Home | Casa do Micro-Ondas</title>
                <meta name="description" content="Entre em contato com a Casa do Micro-Ondas para consertos e serviços." />

                <meta property="og:title" content="Fale Conosco - Casa do Micro-Ondas" />
                <meta property="og:description" content="Estamos prontos para te atender. Veja nossos canais de contato." />
                <meta property="og:url" content="https://casadomicroondas.vercel.app/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <section id="home" className="py-20 bg-gray-50 mt-7 flex flex-col items-center">
                <div className="max-w-4xl mx-auto px-4 flex flex-col mb-10 items-center">
                    <h1 className="text-4xl font-bold text-center text-primary w-fit">
                        Assistência Técnica para as Melhores Marcas
                    </h1>
                    <h2 className="text-2xl font-bold text-center text-secondary w-fit">
                        Conserto com peças e acessórios originais
                    </h2>
                    <p className="text-center text-sm text-gray-500">
                        Contate-nos, buscamos e entregamos seu aparelho. Ligue 98516-3600 ou 98516-3602.
                    </p>
                </div>
                <div className="w-fit flex flex-wrap gap-5 items-center justify-center bg-primary p-3.5 mb-10">
                    <img className="w-32" title="Conserto de microondas em Curitiba" src="https://www.casadomicroondas.com.br/images/site/conserto-curitiba.jpg" alt="Conserto de microondas em Curitiba" />
                    <img className="w-32" title="Conserto de forno elétrico" src="https://www.casadomicroondas.com.br/images/site/conserto-forno-eletrico-curitiba.jpg" alt="conserto de forno elétrico" />
                    <img className="w-32" title="Reformas de microondas em Curitiba" src="https://www.casadomicroondas.com.br/images/site/reformas.jpg" alt="Reformas de microondas em Curitiba" />
                    <img className="w-32" title="Acessórios microondas Curitiba" src="https://www.casadomicroondas.com.br/images/site/acessorio-microondas.jpg" alt="Acessórios microondas Curitiba" />
                    <img className="w-32" title="Microondas novos e usados" src="https://www.casadomicroondas.com.br/images/site/novosusados.jpg" alt="Microondas novos e usados" />
                    <img className="w-32" title="Serviço de busca e entrega" src="https://www.casadomicroondas.com.br/images/site/busca-entrega.jpg" alt="Serviço de busca e entrega" />
                </div>
                <div className="max-w-4xl mx-auto px-4 flex flex-col mb-10 items-center">
                    <h2 className="text-2xl font-bold text-center text-secondary w-fit">
                        Casa do Microondas Curitiba — Com estacionamento próprio
                    </h2>
                    <p className="text-center text-sm text-gray-500">
                        Nosso lema: “Atender bem para atender sempre”.
                    </p>
                </div>
                <div className="w-full max-w-5xl mx-auto px-4 flex flex-col mb-10 items-center">
                    <iframe
                        src="https://www.youtube.com/embed/oZ0rHe4Ovgs?rel=0&amp;showinfo=0"
                        className="w-full h-screen"
                        frameBorder={0}
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="max-w-4xl mx-auto px-4 flex flex-col mb-10 items-center">
                    <h2 className="text-2xl font-bold text-center text-secondary w-fit">
                        Peça já seu orçamento!
                    </h2>
                    <p className="text-center text-sm text-gray-500">
                        Contate-nos, buscamos e entregamos seu aparelho. Conserto de Microondas em Curitiba.
                    </p>
                    <p className="text-center text-sm text-gray-500">
                        Muito obrigado pela sua visita!
                    </p>
                </div>
                <div className="max-w-4xl mx-auto px-4 flex flex-col mb-10 items-center">
                    <p className="text-center text-sm text-primary font-bold">
                        (41) 3332-8000 - Opção 01 - Rebouças | Opção 02 - Santa Felicidade
                    </p>
                    <p className="text-center text-sm text-gray-500">
                        Atendemos em Curitiba.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Home;