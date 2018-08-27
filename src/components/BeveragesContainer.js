import React from 'react';
import BeverageCard from './BeverageCard';
import BeverageDetailsPopup from './BeverageDetailsPopup';
import './Beverages.css';

class BeveragesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            beverages: [],
            stores: [],
            showPopup: false,
            popupId: null,
            // offset: 1,
        };

        this.handleCtaClick = this.handleCtaClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        // this.handleLoadClick = this.handleLoadClick.bind(this);
    }

    componentDidMount() {
        this.getBeverages();
    }

    async getBeverages() {
        try {
            const url = 'https://cors.io/?http://lcboapi.com/products?q=beaus&where=is_seasonal&where_not=is_discontinued&per_page=30&page=1';
            const request = new Request(url, {method: 'GET'});
            const fetchResult = fetch(request);
            const response = await fetchResult;

            if (response.ok) {
                const jsonData = await response.json();
                this.setState(prevState => ({
                    beverages: [...prevState.beverages, ...jsonData.result]
                }));
            } else {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getStores() {
        try {
            const url = `https://cors.io/?http://lcboapi.com/stores?product_id=${this.state.popupId}&where_not=is_dead&per_page=100&page=1`;
            const request = new Request(url, {method: 'GET'});
            const fetchResult = fetch(request);
            const response = await fetchResult;

            if (response.ok) {
                const jsonData = await response.json();
                this.setState({stores: jsonData.result});
            } else {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleCtaClick = (event) => {
        this.setState({
            showPopup: true,
            popupId: event.target.getAttribute('data-id')
        });
    }

    handleCloseClick = (event) => {
        this.setState({showPopup: false});
    }

    // handleLoadClick = (event) => {
    //     this.setState(prevState => ({
    //         offset: prevState.offset++
    //     }));

    //     this.getBeverages();
    // }

    openPopup() {
        const beverage = this.state.beverages.filter(beverage => beverage.id == this.state.popupId);

        this.getStores();

        return (
            <BeverageDetailsPopup 
                description={beverage[0].description}
                tastingNote={beverage[0].tasting_note}
                servingSuggestion={beverage[0].serving_suggestion}
                stores={this.state.stores}
                closeLabel="Close"
                handleCloseClick={this.handleCloseClick}
            />
        );
    }

    render() {
        const {beverages, showPopup} = this.state;

        return (
            <section className="beverages">
                <h1 className="beverages__headline">Seasonal Beverages</h1>
                <div className="beverages__list">
                {beverages.map((beverage, i) => (
                    <BeverageCard
                        key={i}
                        id={beverage.id}
                        name={beverage.name}
                        thumbnailUrl={beverage.image_thumb_url}
                        thumbnailAlt={beverage.name}
                        ctaLabel="View"
                        handleCtaClick={this.handleCtaClick}
                    />
                ))}
                </div>
                {/* <button className="beverages__load" onClick={this.handleLoadClick}>Load More</button> */}
                {showPopup ? this.openPopup() : null}
            </section>
        );
    }
}

export default BeveragesContainer;
