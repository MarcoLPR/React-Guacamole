import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import { GlobalContextProvider } from './provider/GlobalContextProvider';

const App = (): JSX.Element => (
    <GlobalContextProvider>
        <Router>
            <Route exact={true} path="/customer/" component={Dashboard} />
            <Route path="/customer/:id" component={Dashboard} />
        </Router>
    </GlobalContextProvider>
);

export default App;
