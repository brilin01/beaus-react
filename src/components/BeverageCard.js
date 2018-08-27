//TODO: Change to functional component

import React from 'react';

class BeverageCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, name, thumbnailUrl, thumbnailAlt, ctaLabel, handleCtaClick} = this.props;

        return (
            <div className="beverages__card">
                <h2 className="beverages__name">{name}</h2>
                <img className="beverages__thumbnail" src={thumbnailUrl} alt={thumbnailAlt} />
                <button className="beverages__cta" onClick={handleCtaClick} data-id={id}>{ctaLabel}</button>
            </div>
        );
    }
}

export default BeverageCard;
