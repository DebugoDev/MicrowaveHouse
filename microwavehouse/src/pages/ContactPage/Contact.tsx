import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const Contact = () => {

    useEffect(() => {
        document.title = 'Casa do Micro-Ondas | Contato';
      }, []);
      
    return (
        <>
            <Helmet></Helmet>
        </>
    );
};

export default Contact;
