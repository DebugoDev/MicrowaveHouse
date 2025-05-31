import { Helmet } from "react-helmet-async";

const Localization = () => {
      
    return (
        <>
            <Helmet>
            <title>Onde Estamos | Casa do Micro-Ondas</title>
                <meta name="description" content="Entre em contato com a Casa do Micro-Ondas para consertos e serviços." />

                <meta property="og:title" content="Fale Conosco - Casa do Micro-Ondas" />
                <meta property="og:description" content="Estamos prontos para te atender. Veja nossos canais de contato." />
                <meta property="og:url" content="https://www.casadomicroondas.com.br/onde-estamos" />
                <meta property="og:type" content="website" />
            </Helmet>
        </>
    );
};

export default Localization;