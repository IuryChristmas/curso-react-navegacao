import './Content.css';

import { Routes, Route } from "react-router-dom";

import Home from '../../views/examples/Home';
import About from '../../views/examples/About';

const Content = () => (
    <aside className="Content">
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </aside>
)

export default Content