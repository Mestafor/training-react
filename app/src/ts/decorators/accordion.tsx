import React from 'react';
import { articles } from '../components/data';

interface IAccordion {
    articles?: any[];
}

export default (OriginalComponent:any) => class Accordion extends React.Component<IAccordion> {

    state = {
        currentId: this.props.articles && this.props.articles[0].id
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} openAccordion = {this.openAccordion}/>
    }

    openAccordion = (currentId:any) => (ev:any) => {
        console.log(this);
        this.setState({
            currentId: currentId === this.state.currentId ? null : currentId
        });
    }
}