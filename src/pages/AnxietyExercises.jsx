import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid} from '@material-ui/core'

import Layout from '../layouts/MainLayout'

const styles = (theme) => ({
    grid: {
        '& > div:not(:last-child)': {
            paddingBottom: theme.spacing(3)
        },
    },
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
                <Grid container spacing={0} className={classes.grid}>
                    <Typography>
                        Exercícios de Ajuda
                    </Typography>
                </Grid>
            </Layout >
        );
    }

}

AnxietyExercises.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnxietyExercises);