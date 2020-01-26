import React from 'react';
import Container from './Screens';
import './scss/App.scss';

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container />
        );
    }
}

export default App;
