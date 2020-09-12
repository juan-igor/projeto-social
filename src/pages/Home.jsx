import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import Layout from '../layouts/MainLayout'

// import Background1 from '../assets/images/backgrounds/back1.jpg'
// import Background2 from '../assets/images/backgrounds/back2.jpg'
import Background3 from '../assets/images/backgrounds/back3.jpg'
// import Background4 from '../assets/images/backgrounds/back4.jpg'

const styles = (theme) => ({
    grid: {
        '& > div:not(:last-child)': {
            paddingBottom: theme.spacing(3)
        },
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
            <Layout pageTitle="Início" maxWidth={false} pageBackground={Background3}>
                <Grid container spacing={0} className={classes.grid}>
                    <Typography>
                        Hello
                    </Typography>
                </Grid>
            </Layout >
        );
    }

}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);