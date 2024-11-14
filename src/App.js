import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopMenu from './Components/Top-menu/Top-menu';
import Practical from './Page/Practical/Practical';
import Home from "./Page/Home/Home";
import Conspect from "./Page/Conspect/Conspect";
import Raspisanye from "./Page/Raspisanye/Raspisanye";
import Info from "./Page/Info/Info";

const App = () => {
    return (
        <BrowserRouter>
            <TopMenu />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/practical" element={<Practical />} />
                <Route path="/conspect" element={<Conspect />} />
                <Route path="/raspisanye" element={<Raspisanye />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
