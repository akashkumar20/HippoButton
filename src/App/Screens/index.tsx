import React from 'react';
import Hippo from './Hippo';

class Container extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Hippo />
        );
    }
}
export default Container;
