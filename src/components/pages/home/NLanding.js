import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typist from 'react-typist';
import { goToAnchor } from 'react-scrollable-anchor';

import { Typography, Grid, useMediaQuery, Fade, Button, SvgIcon, Fab } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { NMainButton, NMainButtonLoading } from '../../NMainButton';
import { NLogo, NLogoLoading } from './NLogo';
import { NDonations } from '../../NConsts';

export function NLanding(props) {
    const { t } = useTranslation();
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const xs = useMediaQuery(theme.breakpoints.down("xs"));

    const [slideIndex, setSlideIndex] = React.useState(0);

    function NRenderTypist(param) {
        switch(slideIndex) {
            case 0:
                return (
                    <Typist className={classes.typist} cursor={{show: false}} onTypingDone={() => setSlideIndex(1)}>
                        {t('RahNeil_N3.Irus.Landing.Headline.Poverty')}
                        <Typist.Backspace count={t('RahNeil_N3.Irus.Landing.Headline.Poverty').length} delay={4000} />
                    </Typist>
                );
            case 1:
                return (
                    <Typist className={classes.typist} cursor={{show: false}} onTypingDone={() => setSlideIndex(2)}>
                        {t('RahNeil_N3.Irus.Landing.Headline.Deforestation')}
                        <Typist.Backspace count={t('RahNeil_N3.Irus.Landing.Headline.Deforestation').length} delay={4000} />
                    </Typist>
                );
            default:
                return (
                    <Typist className={classes.typist} cursor={{show: false}} onTypingDone={() => setSlideIndex(0)}>
                        {t('RahNeil_N3.Irus.Landing.Headline.War')}
                        <Typist.Backspace count={t('RahNeil_N3.Irus.Landing.Headline.War').length} delay={4000} />
                    </Typist>
                );
        }
    }
    
    return (
        <>
            {xs?null:
                <Fab
                    variant="extended"
                    size="medium"
                    color={props.isDarkTheme?"primary":"secondary"}
                    aria-label="Scroll"
                    className={classes.fab}
                    onClick={() => goToAnchor('donate')}
                >
                    {t('RahNeil_N3.Irus.Scroll')}
                    <ExpandMoreIcon/>
                </Fab>
            }

            <NLogo isDarkTheme={props.isDarkTheme} />

            <div className={classes.viewsContainer}>
                <Fade in={slideIndex===0} timeout={1000} appear={false}>
                    <div style={{backgroundImage: `url(${"/header1.png"})`}} className={classes.views} />
                </Fade>
                <Fade in={slideIndex===1} timeout={1000}>
                    <div style={{backgroundImage: `url(${"/header2.png"})`}} className={classes.views} />
                </Fade>
                <Fade in={slideIndex===2} timeout={1000}>
                    <div style={{backgroundImage: `url(${"/header3.png"})`}} className={classes.views} />
                </Fade>
                <div className={classes.viewsBackdrop} />
            </div>
            <Grid container alignItems='center' justify='center' direction='column' className={classes.headlineContainer} spacing={5}>
                <Grid item>
                    <Typography variant={xs?"h3":"h2"} className={classes.headline}>
                        <span>{t('RahNeil_N3.Irus.Landing.Headline.Title')}</span>
                    </Typography>
                    {sm?<br/>:null}
                    <Typography variant={xs?"h3":"h2"} className={classes.headline}>
                        &nbsp;<NRenderTypist/>&nbsp;
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container alignItems='center' justify='center' className={classes.headlineButtons} spacing={3}>
                        <Grid item>
                            {NDonations()?
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    disableElevation
                                    startIcon={<YouTubeIcon/>}
                                    className={classes.trailerButton}
                                    onClick={() => history.push("/trailer")}
                                >
                                    {t('RahNeil_N3.Irus.Trailer')}
                                </Button>
                            :
                                <NMainButton
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    disableElevation
                                    startIcon={<YouTubeIcon/>}
                                    onClick={() => history.push("/trailer")}
                                    translation='RahNeil_N3.Irus.Trailer'
                                />
                            }
                        </Grid>
                        {NDonations()?
                            <Grid item>
                                <NMainButton
                                    variant="contained"
                                    size="large"
                                    disableElevation
                                    startIcon={
                                        <SvgIcon>
                                            <path fill="currentColor" d="M12.75,3.94C13.75,3.22 14.91,2.86 16.22,2.86C16.94,2.86 17.73,3.05 18.59,3.45C19.45,3.84 20.13,4.3 20.63,4.83C21.66,6.11 22.09,7.6 21.94,9.3C21.78,11 21.22,12.33 20.25,13.27L12.66,20.86C12.47,21.05 12.23,21.14 11.95,21.14C11.67,21.14 11.44,21.05 11.25,20.86C11.06,20.67 10.97,20.44 10.97,20.16C10.97,19.88 11.06,19.64 11.25,19.45L15.84,14.86C16.09,14.64 16.09,14.41 15.84,14.16C15.59,13.91 15.36,13.91 15.14,14.16L10.55,18.75C10.36,18.94 10.13,19.03 9.84,19.03C9.56,19.03 9.33,18.94 9.14,18.75C8.95,18.56 8.86,18.33 8.86,18.05C8.86,17.77 8.95,17.53 9.14,17.34L13.73,12.75C14,12.5 14,12.25 13.73,12C13.5,11.75 13.28,11.75 13.03,12L8.44,16.64C8.25,16.83 8,16.92 7.73,16.92C7.45,16.92 7.21,16.83 7,16.64C6.8,16.45 6.7,16.22 6.7,15.94C6.7,15.66 6.81,15.41 7.03,15.19L11.63,10.59C11.88,10.34 11.88,10.11 11.63,9.89C11.38,9.67 11.14,9.67 10.92,9.89L6.28,14.5C6.06,14.7 5.83,14.81 5.58,14.81C5.3,14.81 5.06,14.71 4.88,14.5C4.69,14.3 4.59,14.06 4.59,13.78C4.59,13.5 4.69,13.27 4.88,13.08C7.94,10 9.83,8.14 10.55,7.45L14.11,10.97C14.5,11.34 14.95,11.53 15.5,11.53C16.2,11.53 16.75,11.25 17.16,10.69C17.44,10.28 17.54,9.83 17.46,9.33C17.38,8.83 17.17,8.41 16.83,8.06L12.75,3.94M14.81,10.27L10.55,6L3.47,13.08C2.63,12.23 2.15,10.93 2.04,9.16C1.93,7.4 2.41,5.87 3.47,4.59C4.66,3.41 6.08,2.81 7.73,2.81C9.39,2.81 10.8,3.41 11.95,4.59L16.22,8.86C16.41,9.05 16.5,9.28 16.5,9.56C16.5,9.84 16.41,10.08 16.22,10.27C16.03,10.45 15.8,10.55 15.5,10.55C15.23,10.55 15,10.45 14.81,10.27V10.27Z" />
                                        </SvgIcon>
                                    }
                                    onClick={() => history.push("/donate")}
                                    translation='RahNeil_N3.Irus.Donations.Donate_Now.Title'
                                />
                            </Grid>
                        :null}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export function NLandingLoading(props) {
    const classes = useStyles();
    const theme = useTheme();
    
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const xs = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <>
            {xs?null:
                <Fab
                    variant="extended"
                    size="medium"
                    color={props.isDarkTheme?"primary":"secondary"}
                    aria-label="Scroll"
                    className={classes.fab}
                    onClick={() => goToAnchor('donate')}
                >
                    <Skeleton>
                        <span>
                            Scroll
                        </span>
                    </Skeleton>
                    <ExpandMoreIcon/>
                </Fab>
            }

            <NLogoLoading isDarkTheme={props.isDarkTheme} />

            <div className={classes.viewsContainer}>
                <div style={{backgroundImage: `url(${"/header1.png"})`}} className={classes.views} />
                <div className={classes.viewsBackdrop} />
            </div>
            <Grid container alignItems='center' justify='center' direction='column' className={classes.headlineContainer} spacing={5}>
                <Grid item>
                    <Typography variant="h2" className={classes.headline}>
                        <Skeleton>
                            <span>
                                Stand against
                            </span>
                        </Skeleton>
                    </Typography>
                    {sm?<br/>:null}
                    <Typography variant="h2" className={classes.headline}>
                        <Skeleton>
                            <span>
                                &nbsp;poverty&nbsp;
                            </span>
                        </Skeleton>
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container alignItems='center' justify='center' className={classes.headlineButtons} spacing={3}>
                        <Grid item>
                            {NDonations()?
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    disableElevation
                                    startIcon={<YouTubeIcon/>}
                                    className={classes.trailerButton}
                                >
                                    <Skeleton>
                                        <span>
                                            Trailer
                                        </span>
                                    </Skeleton>
                                </Button>
                            :
                                <NMainButtonLoading
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    disableElevation
                                    startIcon={<YouTubeIcon/>}
                                    placeholder='Trailer'
                                />
                            }
                        </Grid>
                        {NDonations()?
                            <Grid item>
                                <NMainButtonLoading
                                    variant="contained"
                                    size="large"
                                    disableElevation
                                    startIcon={
                                        <SvgIcon>
                                            <path fill="currentColor" d="M12.75,3.94C13.75,3.22 14.91,2.86 16.22,2.86C16.94,2.86 17.73,3.05 18.59,3.45C19.45,3.84 20.13,4.3 20.63,4.83C21.66,6.11 22.09,7.6 21.94,9.3C21.78,11 21.22,12.33 20.25,13.27L12.66,20.86C12.47,21.05 12.23,21.14 11.95,21.14C11.67,21.14 11.44,21.05 11.25,20.86C11.06,20.67 10.97,20.44 10.97,20.16C10.97,19.88 11.06,19.64 11.25,19.45L15.84,14.86C16.09,14.64 16.09,14.41 15.84,14.16C15.59,13.91 15.36,13.91 15.14,14.16L10.55,18.75C10.36,18.94 10.13,19.03 9.84,19.03C9.56,19.03 9.33,18.94 9.14,18.75C8.95,18.56 8.86,18.33 8.86,18.05C8.86,17.77 8.95,17.53 9.14,17.34L13.73,12.75C14,12.5 14,12.25 13.73,12C13.5,11.75 13.28,11.75 13.03,12L8.44,16.64C8.25,16.83 8,16.92 7.73,16.92C7.45,16.92 7.21,16.83 7,16.64C6.8,16.45 6.7,16.22 6.7,15.94C6.7,15.66 6.81,15.41 7.03,15.19L11.63,10.59C11.88,10.34 11.88,10.11 11.63,9.89C11.38,9.67 11.14,9.67 10.92,9.89L6.28,14.5C6.06,14.7 5.83,14.81 5.58,14.81C5.3,14.81 5.06,14.71 4.88,14.5C4.69,14.3 4.59,14.06 4.59,13.78C4.59,13.5 4.69,13.27 4.88,13.08C7.94,10 9.83,8.14 10.55,7.45L14.11,10.97C14.5,11.34 14.95,11.53 15.5,11.53C16.2,11.53 16.75,11.25 17.16,10.69C17.44,10.28 17.54,9.83 17.46,9.33C17.38,8.83 17.17,8.41 16.83,8.06L12.75,3.94M14.81,10.27L10.55,6L3.47,13.08C2.63,12.23 2.15,10.93 2.04,9.16C1.93,7.4 2.41,5.87 3.47,4.59C4.66,3.41 6.08,2.81 7.73,2.81C9.39,2.81 10.8,3.41 11.95,4.59L16.22,8.86C16.41,9.05 16.5,9.28 16.5,9.56C16.5,9.84 16.41,10.08 16.22,10.27C16.03,10.45 15.8,10.55 15.5,10.55C15.23,10.55 15,10.45 14.81,10.27V10.27Z" />
                                        </SvgIcon>
                                    }
                                    placeholder='Donate Now'
                                />
                            </Grid>
                        :null}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    views: {
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'fixed',
        zIndex: -1,
    },
    viewsContainer: {
        width: '100%',
        height: '100vh',
    },
    viewsBackdrop: {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        backgroundColor: '#0004',
        zIndex: -1,
    },
    typist: {
        display: 'inline',
        borderBottom: '4px solid',
        borderBottomColor: '#6617cb',
    },
    headline: {
        color: theme.palette.common.white,
        textShadow: '2px 2px'+theme.palette.grey[800],
    },
    headlineContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        textAlign: 'center',
        width: '100%',
        margin: 0,
        marginTop: theme.spacing(4),
    },
    headlineButtons: {
        width: 'auto',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1,
    },
    trailerButton: {
        height: 48,
        padding: '0 30px',
        borderRadius: 3,
        border: 0,
    }
}));