import React from 'react';
import PropTypes from 'prop-types';

const TickerListRow = ({status, rowData, rowIndex}) => {
    return <>
        {rowIndex !== 0 && <hr className="ticker-delimiter"/>}
        <div key={new Date().valueOf()} className={rowIndex !== 0 ? 'ticker-list__row' : `ticker-list__row ticker-list__row_${status}`}>
            <div className={status === 'increase' ? 'ticker-list__arrow_up' : 'ticker-list__arrow_down'}></div>
            <div>{rowData.ticker}</div>
            <div>{rowData.price}</div>
            <div>{rowData.change}</div>
            <div>{rowData.change_percent}</div>
            <div>{new Date(rowData.last_trade_time).toLocaleTimeString('en-US')}</div>
            <div>{rowData.dividend}</div>
            <div>{rowData.yield}</div>
        </div>
    </>;
};

TickerListRow.propTypes = {
    status: PropTypes.string,
    rowData: PropTypes.object,
    rowIndex: PropTypes.number
};

export default TickerListRow;
