import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<></>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
