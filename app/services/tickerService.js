import io from 'socket.io-client';
import { addTicker, clearTickers } from '../actions';

let socket = null;

export const connect = (stockSymbol, dispatch) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        socket.on(stockSymbol, (data) => {
            const payload = JSON.parse(data);
            dispatch(addTicker(payload));
        });
        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        dispatch(clearTickers());
    });
};

export const disconnect = () => socket.disconnect();
