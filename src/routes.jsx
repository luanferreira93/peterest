import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Cat from './pages/Cat/Cat';
import Dog from './pages/Dog/Dog';
import Favorites from "./pages/Favorites/Favorites";

import Nav from "./components/Nav/Nav";

export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cats' element={<Cat />} />
                <Route path='/dogs' element={<Dog />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    )
}