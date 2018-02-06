import React, {Component as ReactComponent} from 'react';

interface IToogleOpen {
    isOpen?: boolean;
    article?: {
        title: string;
        text: string;
        comments: any[];
    };
    comments?: any
}

export default (OriginalComponent:any) => class WrappedComponent extends ReactComponent<IToogleOpen> {

    state = {
        isOpen: this.props.isOpen || false
    }

    componentWillReceiveProps(nextProps:any) {
        console.log(nextProps)
    }
    
    componentWillMount() {
        console.log('Will mount');
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen.bind(this)}/>;
    }

    componentDidMount() {
        console.log('Did mount');
    }

    toggleOpen(ev:any) {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
