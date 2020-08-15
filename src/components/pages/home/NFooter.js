import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { goToTop } from 'react-scrollable-anchor';

import { Fab, Typography, Grid, useMediaQuery } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export function NFooter() {
    const { t } = useTranslation();
    const classes = useStyles();
    const theme = useTheme();

    const xs = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Typography gutterBottom variant='subtitle1' color='inherit' className={classes.staff}>
                    {t('RahNeil_N3.Irus.Footer.Staff')}
                </Typography>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant='body1' color='inherit'>
                    {t('RahNeil_N3.Irus.Footer.Copyright')}
                </Typography>
                <Typography variant='body2' color='inherit'>
                    {t('RahNeil_N3.Irus.Footer.Minecraft')}
                </Typography>
                <Typography variant='body2' color='inherit'>
                    {t('RahNeil_N3.Irus.Footer.Affiliation')}
                </Typography>
            </Grid>
            {xs?null:
                <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label={t('RahNeil_N3.Irus.Footer.Top')}
                    className={classes.fab}
                    onClick={() => goToTop()}
                >
                    {t('RahNeil_N3.Irus.Footer.Top')}
                    <ExpandLessIcon/>
                </Fab>
            }
        </Grid>
    );
}

export function NFooterLoading() {
    const classes = useStyles();
    const theme = useTheme();

    const xs = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Typography gutterBottom variant='subtitle1' color='inherit' className={classes.staff}>
                    <Skeleton className={classes.inline}>
                        <span>
                            Made by ❤️ by the Creative Olympics Staff
                        </span>
                    </Skeleton>
                </Typography>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant='body1' color='inherit'>
                    <Skeleton className={classes.inline}>
                        <span>
                            Copyright © 2020 Rahmouni Neïl
                        </span>
                    </Skeleton>
                </Typography>
                <Typography variant='body2' color='inherit'>
                    <Skeleton className={classes.inline}>
                        <span>
                            "Minecraft"™ is a trademark of Mojang Synergies AB.
                        </span>
                    </Skeleton>
                </Typography>
                <Typography variant='body2' color='inherit'>
                    <Skeleton className={classes.inline}>
                        <span>
                            This website as well as the Creative Olympics are not affiliated in any way of form with Mojang nor Discord.
                        </span>
                    </Skeleton>
                </Typography>
            </Grid>
            {xs?null:
                <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="Top"
                    className={classes.fab}
                    onClick={() => goToTop()}
                >
                    <Skeleton>
                        <span>
                            Top
                        </span>
                    </Skeleton>
                    <ExpandLessIcon/>
                </Fab>
            }
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        padding: theme.spacing(4),
    },
    staff: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2),
    },
    fab: {
        margin: theme.spacing(2),
        position: "absolute",
        right: 0,
        top: 0,
    },
    inline: {
        maxWidth: 'none',
        display: 'inline',
    },
}));