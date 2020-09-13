import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import { withStyles, darken } from '@material-ui/core/styles'
import { Typography, Grid, IconButton, Button } from '@material-ui/core'

import Layout, { secondary_color } from '../layouts/MainLayout'

// import Background1 from '../assets/images/backgrounds/back1.jpg'
// import Background2 from '../assets/images/backgrounds/back2.jpg'
import Background3 from '../assets/images/backgrounds/back3.jpg'
// import Background4 from '../assets/images/backgrounds/back4.jpg'

const styles = (theme) => ({
    // grid: {
    //     paddingTop: theme.spacing(3),
    // },
    audioButtonGrid: {
        '& > div:not(:last-child)': {
            paddingRight: theme.spacing(5),
        },
    },
    audioButton: {
        color: 'white',
        fontSize: '40px',
    },
    audioInfoButton: {
        color: 'white',
    },
    homeText: {
        fontFamily: "'Sofia', cursive",
    },
    audioMenu: {
        backgroundColor: darken(secondary_color, 0.6),
        color: 'white',
        minWidth: '100vw',
    }
});

class Home extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.title = "Página Inicial | Sobre Ansiedade";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {

        const { classes } = this.props;

        return (
            <Layout pageTitle="Início" maxWidth={false} pageBackground={Background3} pageBackgroundOpacity={0.6}>
                <Grid container spacing={3} className={classes.grid}>
                    <Grid item xs={12} className={classes.audioMenu}>
                        <Grid container spacing={0} justify="center" alignItems="center">
                            <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
                                <Button
                                    startIcon={<i class="fas fa-music" style={{ fontSize: '40px' }}></i>}
                                    color="primary"
                                    className={classes.audioInfoButton}
                                >
                                    <div style={{ paddingLeft: '30px' }}>
                                        <Typography align="center" variant="h5"  className={classes.homeText}>
                                            Someone Like You
                                        </Typography>
                                        <Typography align="center" variant="h6"  className={classes.homeText}>
                                            Adele
                                        </Typography>
                                    </div>
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
                                <Grid container spacing={0} justify="center" alignItems="center" className={classes.audioButtonGrid}>
                                    <Grid item>
                                        <IconButton color="primary" className={classes.audioButton}>
                                            <i class="fas fa-backward"></i>
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton color="primary" className={classes.audioButton}>
                                            <i class="fas fa-play"></i>
                                        </IconButton>
                                    </Grid>
                                    {/* <Grid item>
                                        <IconButton color="primary" className={classes.audioButton}>
                                            <i class="fas fa-pause"></i>
                                        </IconButton>
                                    </Grid> */}
                                    <Grid item>
                                        <IconButton color="primary" className={classes.audioButton}>
                                            <i class="fas fa-forward"></i>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div data-video="hLQl3WQQoQ0"  
                            data-autoplay="1"         
                            data-loop="1"             
                            id="youtube-audio">
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            <p>Olá,</p>
                            <p>Como você está? Espero que esteja bem.</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Layout >
        );
    }

}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);