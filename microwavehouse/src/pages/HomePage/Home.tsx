import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {

    useEffect(() => {
        document.title = 'Casa do Micro-Ondas | Home';
      }, []);

    return (
        <>
            <Helmet></Helmet>
        </>
    );
};

export default Home;