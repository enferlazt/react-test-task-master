import '../styles/application.scss';
import React, {PureComponent} from 'react';
import TickerCard from './ticker-card/TickerCard';
import InputTickerSymbol from './input-ticker-symbol/InputTickerSymbol';
import { Route, Switch } from 'react-router';
import NoContent from './no-content/NoContent';

// The below line is here as an example of getting prices
// connect('AAPL');

class App extends PureComponent {
    render() {
        return (
            <main className="stock-ticker">
                <h1 className="stock-ticker__title">Stock Blotter</h1>
                <InputTickerSymbol/>
                <Switch>
                    <Route path="/:symbol" children={<TickerCard/>} />
                    <Route path="/" exact children={<NoContent/>} />
                </Switch>
            </main>
        );
    }
}

export default App;
