import React, { useState } from 'react';
import { useHistory } from 'react-router';


const InputTickerSymbol = () => {
    const history = useHistory();
    const [inputField, setInputField] = useState('');

    function redirectTo() {
        if (inputField !== '') {
            history.push(`/${inputField}`);
        }
    }

    function enterHandler(e) {
        if (e.key === 'Enter') {
            redirectTo();
        }
    }

    return (
        <section className="ticker-input-block">
            <input className="ticker-input-block__input" value={inputField} onChange={(e) => setInputField(e.target.value)} onKeyDown={enterHandler} placeholder="Enter the valid ticker symbol"/>
            <button className="ticker-input-block__button" onClick={redirectTo}>Go To</button>
        </section>
    );
};

export default InputTickerSymbol;
