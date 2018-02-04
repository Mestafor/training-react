import React, {Component as ReactComponent} from 'react';

interface IToogleOpen {
    isOpen: boolean
}

export default (OriginalComponent) => class WrappedComponent extends ReactComponent<IToogleOpen> {

    state = {
        isOpen: false
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toogleOpen = {this.toggleOpen}/>;
    }

    toggleOpen(ev) {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
