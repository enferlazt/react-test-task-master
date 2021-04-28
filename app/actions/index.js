import { ADD_TICKER, CLEAR_TICKERS } from './types';

export function addTicker(payload) {
    return {
        type: ADD_TICKER,
        payload
    };
}

export function clearTickers() {
    return {
        type: CLEAR_TICKERS
    };
}
