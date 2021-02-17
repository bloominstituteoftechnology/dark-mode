import React from "react";
import "./Stats.css";

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
    width: 500,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
    marginBottom: 20,
    opacity: ".95"
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

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // from: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  }); // helper JS to format numbers

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="card-container">
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
          <Button size="small"><a href="https://www.coingecko.com/en">Go To Coin Gecko</a></Button>
        </CardActions>
    </Card>
    </div>
  );
};

export default Stats;