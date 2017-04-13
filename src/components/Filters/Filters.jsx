import React, { Component } from 'react';

class Filters extends Component {
    render () {
        const { label, children } = this.props;
        return (
            <div className="App-filters">
                <h3 className="Filters-label">{label}</h3>
                <div className="Filters">
                    {children}
                    <button className="Filters-button">
                        Filter
                    </button>
                </div>
            </div>
        )
    }
}

export default Filters
