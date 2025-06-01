import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/HomePage/Home';
import Localization from '../pages/LocalizationPage/Localization';
import Photos from '../pages/PhotosPage/Photos';
import Contact from '../pages/ContactPage/Contact';
import Footer from '../components/Footer';
import Layout from '../layouts/Layout';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />   
                    <Route path="/onde-estamos" element={<Localization />} />
                    <Route path="/fotos" element={<Photos />} />
                    <Route path="/contato" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
