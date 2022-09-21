import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavrBarRender from './components/navBarComponent';
import Main from './components/mainComponent';
import Footer from './components/footerComponent';

function App() {
    return (
        <BrowserRouter>
            <NavrBarRender />

            {/*******ROUTES*********/}
            <div className="container bg-light">
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </div>

            {/*******FOOTER*********/}
            <Footer />
        </BrowserRouter>
    );
}

export default App;
