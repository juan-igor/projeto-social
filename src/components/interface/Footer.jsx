import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { withStyles, darken } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'

import { secondary_color } from '../../layouts/MainLayout'

const styles = (theme) => ({
    bottomGrid: {
        padding: theme.spacing(3, 8),
        // backgroundColor: '#fafafa',
        background: darken(secondary_color, 0.8),
    },
    bottomLeft: {
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        }
    },
    bottomRight: {
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginTop: theme.spacing(1),
        }
    },
    developerLink: {
        color: 'black',
        textDecoration: 'none',
        transition: 'color .5s',
        '&:hover': {
            color: darken(secondary_color, 0.2),
            textDecoration: 'none',
        }
    },
    footerDiv: {
        // borderTop: '3px ' + theme.palette.grey['300'] + ' solid',
        borderTop: '4px '+ secondary_color +' solid',
        marginTop: '0',
        minWidth: '100%',
        background: darken(secondary_color, 0.6),
    },
    footerText: {
        color: 'white',
        // fontFamily: "'Comfortaa', sans-serif",
        // fontFamily: "'Dancing Script', cursive",
        fontFamily: "'Sofia', cursive",
    },
    footerBottomText: {
        color: 'white',
        // fontFamily: "'Comfortaa', sans-serif",
    },
    innerGrid: {
        minWidth: '100%',
        '& > div': {
            textAlign: 'center',
        }
    },
    mainItem: {
        padding: theme.spacing(5),
    },
    mainGrid: {
        padding: theme.spacing(5),
        borderBottom: '4px '+ secondary_color +' solid',
    },
    mediaButtons: {
        color: 'white',
        transition: 'color .3s ease-in, background-color, .6s ease-out',
        '&:hover': {
            color: darken(secondary_color, 0.6),
            backgroundColor: 'white',
        }
    }
});

class InterfaceFooter extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.footerDiv}>
                <Grid container spacing={0} alignContent="center" alignItems="flex-start" justify="center" className={classes.mainGrid}>
                    <Grid item xs={12} md={6} className={classes.mainItem}>
                        <Grid container spacing={1} alignContent="center" alignItems="center" justify="center" className={classes.innerGrid}>
                            <Grid item xs={12} style={{ maxWidth: '500px' }}>
                                <Typography component="p" variant="h4" className={classes.footerText}  style={{ marginBottom: '20px' }}>
                                    Sobre Ansiedade
                                </Typography>
                                <Typography component="p" variant="h5" className={classes.footerText}>
                                    Um projeto social para auxiliar quem sofre de ansiedade, com exercícios e informações sobre o assunto.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: '20px' }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<i class="fas fa-hand-holding-heart"></i>}
                                    component={React.forwardRef((props, ref) => (<Link to="/apoie-uma-causa" {...props} ref={ref} />))}
                                >
                                    Apoie uma Causa
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.mainItem}>
                        <Grid container spacing={0} alignContent="center" alignItems="center" justify="center" className={classes.innerGrid}>
                            <Grid item style={{ maxWidth: '500px' }}>
                                <Typography component="p" variant="h4" className={classes.footerText} style={{ textAlign: 'center', marginBottom: '30px' }}>
                                    Precisa de Ajuda?
                                </Typography>
                                <Typography component="p" variant="h5" className={classes.footerText} style={{ textAlign: 'center' }}>
                                    Disque <strong>188</strong>. É uma ligação gratuita para o Centro de Valorização da Vida (CVV), alguém irá lhe atender e irá lhe ajudar.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={0} alignContent="space-between" alignItems="center" justify="center" className={classes.bottomGrid}>
                    <Grid item xs={12} md={6}>
                        <Typography component="p" variant="body1" className={clsx(classes.footerBottomText, classes.bottomLeft)}>
                            &copy; {new Date().getFullYear()}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component="p" variant="body1" className={clsx(classes.footerBottomText, classes.bottomRight)}>
                            Criado com <i class="fas fa-heart"></i> por alunos do IFCE - Campus Fortaleza
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

InterfaceFooter.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(InterfaceFooter);