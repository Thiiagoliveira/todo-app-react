import 'modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import React from "react";

import Menu from '../template/Menu/Menu'
import Routes from '../routes/Routes'

function App(props) {
    return (
        <div className='container'>
            <BrowserRouter>
                <Menu />
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;