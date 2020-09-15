import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import Layout from '../layouts/MainLayout'

// import Background1 from '../assets/images/backgrounds/back1.jpg'
// import Background2 from '../assets/images/backgrounds/back2.jpg'
import Logo from '../assets/images/ansiedade_logo_full.png'
import Background3 from '../assets/images/backgrounds/back3.jpg'
// import Background4 from '../assets/images/backgrounds/back4.jpg'

const styles = (theme) => ({
    grid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(20),
        '& > div:not(:last-child)': {
            paddingTop: theme.spacing(4),
        },
    },
    homeLogo: {
        width: '100%',
        maxWidth: '700px',
        margin: 'auto',
        filter: 'drop-shadow(2px 2px 5px black)',
    },
    homeText: {
        fontFamily: "'Sofia', cursive",
        maxWidth: '700px',
        margin: 'auto',
    },
    homeText2: {
        fontFamily: "'Nunito', sans-serif",
        maxWidth: '700px',
        margin: 'auto',
    },
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
                <Grid container spacing={0} className={classes.grid} alignItems="center" alignContent="center" justify="center">
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <img src={Logo} alt="Website Logo" aria-hidden={true} className={classes.homeLogo} />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            <p>Olá,</p>
                            <p>Como você está? Espero que esteja bem.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography align="center" variant="h5" className={classes.homeText2}>
                            <p>Este site foi desenvolvido com o intuito de ajudar pessoas a conhecerem um pouco mais <b>Sobre Ansiedade</b> e perceberem que é algo que deve ser levado a sério e que possui tratamento.</p>
                            <br/>
                            <p>Você que sofre de ansiedade também é convidado a conhecer exercícios que podem te ajudar e conhecer um pouco mais sobre este transtorno.</p>
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