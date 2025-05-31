import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Photos = () => {

    useEffect(() => {
        document.title = 'Casa do Micro-Ondas | Fotos';
      }, []);

    return (
        <>
            <Helmet></Helmet>
        </>
    );
};

export default Photos;