import React, { Component } from 'react';
import BeveragesContainer from './BeveragesContainer';
import './App.css';

class App extends Component {
    render() {
        return (
            [
            // TODO: Move header to component
            <header>
                <div className="logo">
                    <span className="logo__text">Beau's</span>
                </div>
            </header>,
            <main>
                <BeveragesContainer />
            </main>,
            // TODO: Move footer to component
            <footer>
                <div className="copyright">
                    <span className="copyright__text">© Beau's All Natural Brewing Company 2018</span>
                </div>
            </footer>
            ]
        );
    }
}

export default App;
