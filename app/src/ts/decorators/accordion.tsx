import React from 'react';

interface IAccordion {
    articles: any[];
}

export default (OriginalComponent:any) => class Accordion extends React.Component<IAccordion> {

    state = {
        currentId: null
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