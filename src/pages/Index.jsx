import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Team from './Team';
import Agents from './Agents';
import Arsenal from './Arsenal';
import Maps from './Maps';

function Index() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Layout /> } >
                    <Route index element={ <Home /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/team' element={ <Team /> } />
                    <Route path='agents' element={ <Agents /> } />
                    <Route path='arsenal' element={ <Arsenal /> } />
                    <Route path='maps' element={ <Maps /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;