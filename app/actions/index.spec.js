import * as actions from './index';
import * as types from './types';

describe('actions', () => {
    it('add new ticker', () => {
        const payload = {
            "ticker": "AAPL",
            "exchange": "NASDAQ",
            "price": "116.60",
            "change": "-0.46",
            "change_percent": "-0.39",
            "last_trade_time": "Oct 21, 4:00PM EDT",
            "dividend": "0.57",
            "yield": "1.96"
        }
        const expectedAction = {
            type: types.ADD_TICKER,
            payload
        }
        expect(actions.addTicker(payload)).toEqual(expectedAction)
    })

    it('clear tickers array', () => {
        const expectedAction = {
            type: types.CLEAR_TICKERS
        }
        expect(actions.clearTickers()).toEqual(expectedAction)
    })
})