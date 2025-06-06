import { Helmet } from "react-helmet-async";

const Localization = () => {

    return (
        <>
            <Helmet>
                <title>Onde Estamos | Casa do Micro-Ondas</title>
                <meta name="description" content="Entre em contato com a Casa do Micro-Ondas para consertos e serviços." />

                <meta property="og:title" content="Fale Conosco - Casa do Micro-Ondas" />
                <meta property="og:description" content="Estamos prontos para te atender. Veja nossos canais de contato." />
                <meta property="og:url" content="https://casadomicroondas.vercel.app/onde-estamos" />
                <meta property="og:type" content="website" />
            </Helmet>

            <section id="home" className="py-20 bg-gray-50 mt-7 flex flex-col items-center">
                <div className="max-w-4xl mx-auto px-4 flex flex-col mb-10 items-center">
                    <h1 className="text-4xl font-bold text-center text-primary w-fit">
                        Nossas Lojas
                    </h1>
                    <h2 className="text-2xl font-bold text-center text-secondary w-fit">
                        Localização das lojas
                    </h2>
                </div>
                <div className="w-full max-w-5xl mx-auto px-4 flex flex-col mb-10 items-center" itemProp="articleBody">
                    <div className="mb-10 w-full">
                        <iframe
                            title="Loja Rebouças"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5494757412584!2d-49.267548484985376!3d-25.45332148377765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48c9ef39769%3A0xef8a017c3ba84507!2sAv.+Pres.+Kennedy%2C+410+-+Rebou%C3%A7as%2C+Curitiba+-+PR!5e0!3m2!1spt-BR!2sbr!4v1497629686263"
                            width="100%"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                        <p className="text-center text-sm text-gray-500">Avenida Presidente Kennedy 410, Rebouças - Curitiba</p>
                    </div>

                    <div className="w-full">
                        <iframe
                            title="Loja Santa Felicidade"
                            src="https://maps.google.com.br/maps?f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Rua+Saturnino+Miranda,+84+-+Santa+Felicidade++-+curitiba&amp;aq=&amp;sll=-25.453343,-49.265397&amp;sspn=0.00838,0.013937&amp;ie=UTF8&amp;hq=&amp;hnear=R.+Saturnino+Miranda,+84+-+Santa+Felicidade,+Curitiba+-+Paran%C3%A1,+82030-320&amp;t=m&amp;z=14&amp;ll=-25.400057,-49.334174&amp;output=embed"
                            width="100%"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                        <p className="text-center text-sm text-gray-500">Rua Saturnino Miranda, 84 - Santa Felicidade - Curitiba</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Localization;