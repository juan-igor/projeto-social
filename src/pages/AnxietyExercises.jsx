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

class AnxietyExercises extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.title = "Exercícios de Ajuda | Sobre Ansiedade";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {

        const { classes } = this.props;

        return (
            <Layout pageTitle="Exercícios de Ajuda" maxWidth={'lg'}>
                <Grid container spacing={3} className={classes.grid}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            <p>Aqui estão alguns exercícios para lhe ajudar a controlar a ansiedade.</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Layout >
        );
    }

}

AnxietyExercises.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnxietyExercises);