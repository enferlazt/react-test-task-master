import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, withRouter } from 'react-router';
import {connect, disconnect} from '../../services';
import TickerChart from './ticker-chart/TickerChart';
import TickerList from './ticker-list/TickerList';
import PropTypes from 'prop-types';

const TickerCard = (props) => {
    const dispatch = useDispatch();
    const { symbol } = useParams();

    useEffect(() => {
        connect(symbol, dispatch);
        return disconnect;
    }, [props.location]);

    return (
        <section className="ticker-card">
            <TickerList/>
            <TickerChart/>
        </section>
    );
};

TickerCard.propTypes = {
    location: PropTypes.object,
};

export default withRouter(TickerCard);
