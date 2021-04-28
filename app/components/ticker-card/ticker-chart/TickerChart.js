import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const TickerChart = ({ tickers }) => {
    const [chartData, setChartData] = useState({});
    const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
    const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

    const chart = () => {
        setChartData({
            labels: tickers.map(el => new Date(el.last_trade_time).toLocaleTimeString('en-US')),
            datasets: [{
                label: 'price',
                data: tickers.map(el => el.price),
                borderColor: 'rgb(17, 206, 48)',
                segment: {
                    borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(255, 0, 0)'),
                    borderDash: ctx => skipped(ctx, [6, 6]),
                }
            }],
            options: {
                responsive: true
            }
        });
    };
    useEffect(() => {
        chart();
    }, [tickers]);
    return <Line data={chartData} />;
};

TickerChart.propTypes = {
    tickers: PropTypes.array
};

const mapStateToProps = state => {
    return {
        tickers: [...state.stockTicker.tickers]
    };
};

export default connect(mapStateToProps)(TickerChart);
