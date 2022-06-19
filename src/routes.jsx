import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Cat from './pages/Cat/Cat';

import Nav from "./components/Nav/Nav";

export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cats' element={<Cat />} />
            </Routes>
        </BrowserRouter>
    )
}