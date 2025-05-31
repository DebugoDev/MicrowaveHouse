import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Localization = () => {

    useEffect(() => {
        document.title = 'Casa do Micro-Ondas | Onde Estamos';
      }, []);
      
    return (
        <>
            <Helmet></Helmet>
        </>
    );
};

export default Localization;