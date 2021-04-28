import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TickerListRow from './ticker-list-row/TickerListRow';

const TickerList = ({tickers}) => {
    return (
        <div className="ticker-list">
            <div className="ticker-list__row ticker-list__row_header">
                <div>
                    Status
                </div>
                <div>
                    Ticker
                </div>
                <div>
                    Price
                </div>
                <div>
                    Change
                </div>
                <div>
                    Change Percent
                </div>
                <div>
                    Last Trade Time
                </div>
                <div>
                    Dividend
                </div>
                <div>
                    Yield
                </div>
            </div>
            {tickers.reverse().map((el, index) => {
                if(el.price < tickers[index + 1]?.price) {
                    return <TickerListRow key={index} status="decrease" rowData={el} rowIndex={index}/>;
                }
                return <TickerListRow key={index} status="increase" rowData={el} rowIndex={index}/>;
            })}
        </div>
    );
};

TickerList.propTypes = {
    tickers: PropTypes.array
};

const mapStateToProps = state => {
    return {
        tickers: [...state.stockTicker.tickers]
    };
};

export default connect(mapStateToProps)(TickerList);
