import { Component } from 'react';
import '../../scss/hippo.scss';
declare class Hippo extends Component<any, any> {
    interval: number;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    earUpdate(): void;
    updateEyePosition(e: any): void;
    render(): JSX.Element;
}
export default Hippo;
