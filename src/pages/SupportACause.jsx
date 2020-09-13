import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid} from '@material-ui/core'

import Layout from '../layouts/MainLayout'

const styles = (theme) => ({
    grid: {
        paddingTop: theme.spacing(3),
    },
    homeText: {
        fontFamily: "'Sofia', cursive",
    }
});

class SupportACause extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.title = "Apoie uma Causa | Sobre Ansiedade";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {

        const { classes } = this.props;

        return (
            <Layout pageTitle="Apoie uma Causa" maxWidth={'lg'}>
                <Grid container spacing={3} className={classes.grid}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            <p>Apoie uma Causa,</p>
                            <p>Se nós te ajudamos, ajude outras pessoas também!</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Layout >
        );
    }

}

SupportACause.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SupportACause);