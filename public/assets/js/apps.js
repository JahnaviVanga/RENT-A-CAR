import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarList from './components/CarList';

function App() {
    return (
        <Router>
            <Route path="/" component={CarList} exact />
        </Router>
    );
}

export default App;
