import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  media: {
    height: '50px',
    width: '50px',
    marginRight: 'auto',
    marginLeft: 'auto',
    // padding: '20%', // 16:9
  },
  title: {
    marginBottom: 12,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
  },
});


const Stats = ({ coinObj }) => {

  // helper JS to format numbers from: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
  


  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {coinObj.name} Price & Market Stats
      </Typography>
      <CardMedia
        className={classes.media}
        image={coinObj.image}
        title="Bitcoin"
      />
      <br/>
      <Typography variant="h5" className={classes.title} component="h2">
        {coinObj.name}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Current Price: ${formatter.format(coinObj.current_price)}
      </Typography>

      <Typography className={classes.pos} color="textSecondary">
        Market Cap: {formatter.format(coinObj.market_cap)}
      </Typography>

      <Typography className={classes.pos} color="textSecondary">
        Trading Volume: ${formatter.format(coinObj.total_volume)}
      </Typography>

      <Typography className={classes.pos} color="textSecondary">
        Volume / Market Cap: {(coinObj.total_volume / coinObj.market_cap).toFixed(4)}
      </Typography>

      <Typography className={classes.pos} color="textSecondary">
        24h Low / 24h High: {formatter.format(coinObj.low_24h)} / {formatter.format(coinObj.high_24h)}
      </Typography>

      <Typography className={classes.pos} color="textSecondary">
        Market Cap Rank: #{coinObj.market_cap_rank}
      </Typography>


    </CardContent>
    <CardActions>
      <Button size="small"><a href="https://www.coingecko.com/en">Learn More</a></Button>
    </CardActions>
  </Card>
  );
};

export default Stats;

// ath: 50350
// ath_change_percentage: -2.45537
// ath_date: "2021-02-16T12:38:10.386Z"
// atl: 67.81
// atl_change_percentage: 72329.59052
// atl_date: "2013-07-06T00:00:00.000Z"
// circulating_supply: 18630662
// current_price: 49110
// fully_diluted_valuation: 1031324204557
// high_24h: 50350
// id: "bitcoin"
// image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
// last_updated: "2021-02-16T23:32:30.201Z"
// low_24h: 47380
// market_cap: 914964412739
// market_cap_change_24h: 16128758642
// market_cap_change_percentage_24h: 1.79441
// market_cap_rank: 1
// max_supply: 21000000
// name: "Bitcoin"
// price_change_24h: 873.14
// price_change_percentage_24h: 1.81013
// roi: null
// sparkline_in_7d: {price: Array(168)}
// symbol: "btc"
// total_supply: 21000000
// total_volume: 64096059414