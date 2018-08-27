//TODO: Change to functional component

import React from 'react';

class BeverageDetailsPopup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {description, tastingNote, servingSuggestion, stores, closeLabel, handleCloseClick} = this.props;

        return (
            <div className="beverages__popup">
                <button className="beverages__close" onClick={handleCloseClick}>{closeLabel}</button>
                {description &&
                <p className="beverages__description">{description}</p>
                }
                {tastingNote &&
                <p className="beverages__description">{tastingNote}</p>
                }
                {servingSuggestion &&
                <p className="beverages__description">{servingSuggestion}</p>
                }
                <hr />
                {/* TODO: Move stores to component */}
                <div className="beverages__stores">
                    <h2 className="beverages__stores-headline">Stores</h2>
                    <ul className="beverages__stores-list">
                    {stores.map(store => 
                    <li className="beverages__stores-item">
                        <h3 className="beverages__stores-name">{store.name}</h3>
                        <div>{`${store.address_line_1} ${store.address_line_2}`}</div>
                        <div>{`${store.city} ${store.postal_code}`}</div>
                        <div>{store.telephone}</div>
                    </li>
                    )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default BeverageDetailsPopup;
