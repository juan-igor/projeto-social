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

class AboutAnxiety extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.title = "Sobre Ansiedade";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {

        const { classes } = this.props;

        return (
            <Layout pageTitle="Sobre Ansiedade" maxWidth={'lg'}>
                <Grid container spacing={3} className={classes.grid}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            <p>Que tal conhecer um pouco mais sobre ansiedade?</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Layout >
        );
    }

}

AboutAnxiety.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutAnxiety);