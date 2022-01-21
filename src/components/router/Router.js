
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../../appRoutes';
import Home from '../../pages/home/Home';
import Favorites   from '../../pages/favorites/Favorites';

const ApplicationRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    exact element={<Home />}
                    path={routes.home} />
                <Route 
                    exact element={<Favorites />}
                    path={routes.favorites} />
            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationRouter;