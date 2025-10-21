import './Content.css';

import { Routes, Route } from "react-router-dom";

import Home from '../../views/examples/Home';
import About from '../../views/examples/About';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content = () => (
    <aside className="Content">
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/param/:id' element={ <Param />} />
            <Route path='*' element={ <NotFound />} />
        </Routes>
    </aside>
)

export default Content