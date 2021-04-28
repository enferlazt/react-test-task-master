import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { ADD_TICKER, CLEAR_TICKERS } from '../actions/types';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    stockTicker: (state = {
        tickers: []
    }, action) => {
        switch (action.type) {
            case ADD_TICKER:
                return {
                    ...state,
                    tickers: [...state.tickers, action.payload]
                };
            case CLEAR_TICKERS:
                return {
                    ...state,
                    tickers: []
                };
            default:
                return state;
        }
    }
});

export default createRootReducer;
