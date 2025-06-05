import { Helmet } from "react-helmet-async";

const Photos = () => {

    return (
        <>
            <Helmet>
                <title>Fotos | Casa do Micro-Ondas</title>
                <meta name="description" content="Entre em contato com a Casa do Micro-Ondas para consertos e serviços." />

                <meta property="og:title" content="Fale Conosco - Casa do Micro-Ondas" />
                <meta property="og:description" content="Estamos prontos para te atender. Veja nossos canais de contato." />
                <meta property="og:url" content="https://www.casadomicroondas.com.br/fotos" />
                <meta property="og:type" content="website" />
            </Helmet>

            <section id="home" className="py-20 bg-gray-50 mt-7 flex flex-col items-center">
                <div className="max-w-4xl mx-auto px-4 flex flex-col mb-10 items-center">
                    <h1 className="text-4xl font-bold text-center text-primary w-fit">
                        Fotos da Casa do Microondas
                    </h1>
                </div>

                <div className="w-fit flex flex-wrap gap-5 items-center justify-center bg-primary p-3.5 mb-10">
                    <img className="h-48" src="https://www.casadomicroondas.com.br/images/casa-do-microondas/casa-do-microondas-curitiba01.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/a75b99c480eba47634840697bc7fdf49.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/bfad98e78b7995c96f849703acd7df48.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/085857f33d616f2c91a4cdc2081f755c.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/e07c8a724934ded53dfded5c9b950225.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/043afc48a04759294e5ffa46d4018010.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/a526924e01f98d4ffc96b0920a025f91.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/cf40b7ca09c034ba9f987944873d31cb.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/0bca1465ea663f8ae8f5ab2322a9c5da.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/14642521cfdeaac06e1a5630c03d72cf.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/ae0397f615bfa4ef7099bc16d56d6763.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/fc7253e982094f2f73b897115193b3c1.jpg" />
                    <img className="h-48" src="https://www.casadomicroondas.com.br/cache/preview/cb16213413741f0331a0e0754f1dfbaa.jpg" />
                </div>

                <div className="max-w-4xl mx-auto px-4 flex flex-col mb-10 items-center">
                    <p className="text-center text-sm text-gray-500">
                        Conheça a Casa do Microondas!
                    </p>
                </div>
            </section>
        </>
    );
};

export default Photos;