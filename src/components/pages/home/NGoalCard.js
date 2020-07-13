import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { LinearProgress, Typography, Grid, Tooltip } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { NCard } from '../../NCard';

export function NGoalCard(props) {
    const classes = useStyles();
    const [lowValue, setLowValue] = React.useState(0);
    const [highValue, setHighValue] = React.useState(10);

    useEffect(() => {
        var newLowValue = 0;
        var newHighValue = 10;
        while (newHighValue<=props.amount) {
            newLowValue=newHighValue;
            newHighValue*=2.5;
            if (newHighValue<=props.amount) {
                newLowValue=newHighValue;
                newHighValue*=2;
            }
            if (newHighValue<=props.amount) {
                newLowValue=newHighValue;
                newHighValue*=1.5;
            }
            if (newHighValue<=props.amount) {
                newLowValue=newHighValue;
                newHighValue*=4/3;
            }
        }
        setLowValue(newLowValue);
        setHighValue(newHighValue);
    }, [props.amount]);

    return (
        <NCard isDarkTheme={props.isDarkTheme}>
            <Grid container alignItems="center">
                <Grid item className={classes.titleContainer}>
                    <Typography variant="subtitle1">
                        {lowValue+'€'}
                    </Typography>
                </Grid>
                <Grid item className={classes.barContainer}>
                    <Tooltip open={true} title={props.amount+'€'} arrow>
                        <div style={{position: 'absolute', left: 'calc('+Math.round((props.amount-lowValue)/(highValue-lowValue)*100)+'% - 1px)'}}/>
                    </Tooltip>
                    <LinearProgress variant="determinate" value={Math.round((props.amount-lowValue)/(highValue-lowValue)*100)} style={{borderRadius: 5, height: 7}}/>
                </Grid>
                <Grid item className={classes.titleContainer}>
                    <Typography variant="subtitle1">
                        {highValue+'€'}
                    </Typography>
                </Grid>
            </Grid>
        </NCard>
    );
}

export function NGoalCardLoading(props) {
    const classes = useStyles();

    return (
        <NCard isDarkTheme={props.isDarkTheme}>
            <Grid container alignItems="center">
                <Grid item className={classes.titleContainer}>
                    <Typography variant="subtitle1">
                        <Skeleton>
                            <span>
                                $50
                            </span>
                        </Skeleton>
                    </Typography>
                </Grid>
                <Grid item className={classes.barContainer}>
                    <LinearProgress variant="determinate" value={0} style={{borderRadius: 5, height: 7}}/>
                </Grid>
                <Grid item className={classes.titleContainer}>
                    <Typography variant="subtitle1">
                        <Skeleton>
                            <span>
                                $50
                            </span>
                        </Skeleton>
                    </Typography>
                </Grid>
            </Grid>
        </NCard>
    );
}

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        padding: theme.spacing(2),
    },
    barContainer: {
        flex: 1,
        position: 'relative',
    }
}));