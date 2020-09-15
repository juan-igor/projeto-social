import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button, Avatar } from '@material-ui/core'

import Layout from '../layouts/MainLayout'

const styles = (theme) => ({
    grid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(20),
    },
    homeText: {
        fontFamily: "'Sofia', cursive",
        margin: 'auto',
    },
    infoText: {
        fontFamily: "'Nunito', sans-serif",
        textAlign: 'justify',
        margin: 'auto',
    },
    gridItemCausesButton: {
        textAlign: 'center',
    },
    largeAvatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: 'auto',
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    },
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
            <Layout pageTitle="Apoie uma Causa" maxWidth={'md'}>
                <Grid container spacing={3} className={classes.grid} alignItems="center" alignContent="center" justify="center">
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            <p>Apoie uma Causa,</p>
                            <p>Se nós te ajudamos, ajude outras pessoas também!</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3} alignItems="center" alignContent="center" justify="center" style={{ marginTop: '40px' }}>
                            <Grid item xs={12}>
                                <Typography align="center" variant="h4" className={classes.homeText}>
                                    Abrigo Animais Aumigos
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Avatar alt="Imagem" className={classes.largeAvatar} src="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/80460164_493942977989104_4334436589456326656_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=s7f_EETM3nAAX_rZ_Ni&oh=b0ba9c807ac0c8157aa87e151eb3ff80&oe=5F8A9948" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" className={classes.infoText}>
                                    Abrigo Animais Aumigos é uma organização sem fins lucrativos. Um abrigo que ajuda/resgata animais em condições diversas na região de Salvador-BA.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.gridItemCausesButton}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    startIcon={<i className="fas fa-hand-holding-heart"></i>}
                                    //eslint-disable-next-line
                                    component={React.forwardRef((props, ref) => (<a aria-label="Apoiar Causa" href="https://www.instagram.com/abrigoanimaisaumigos/?hl=pt-br" target="_blank" rel="noopener noreferrer" {...props} ref={ref} />))}
                                >
                                    Apoiar Causa
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3} alignItems="center" alignContent="center" justify="center" style={{ marginTop: '40px' }}>
                            <Grid item xs={12}>
                                <Typography align="center" variant="h4" className={classes.homeText}>
                                    Vakinha - Ajuda com Terapia
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Avatar alt="Imagem" className={classes.largeAvatar} src="https://static.vakinha.com.br/uploads/vakinha/image/686481/vaquinha_default.png?ims=700x410" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" className={classes.infoText}>
                                    "Estou em tratamento de depressao e crise de ansiedade. Estou desempregada e preciso de uma pequena ajuda de cada um para melhorar o tratamento. Qualquer valor ajuda. 1 real, 5 reais será muito bem vindo. Agradeço desde já e que você receba tudo em dobro <span role="img" aria-label="emojis">🙏❤️</span>"
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.gridItemCausesButton}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    startIcon={<i className="fas fa-hand-holding-heart"></i>}
                                    //eslint-disable-next-line
                                    component={React.forwardRef((props, ref) => (<a aria-label="Apoiar Causa" href="https://www.vakinha.com.br/vaquinha/ajuda-com-terapia" target="_blank" rel="noopener noreferrer" {...props} ref={ref} />))}
                                >
                                    Apoiar Causa
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3} alignItems="center" alignContent="center" justify="center" style={{ marginTop: '40px' }}>
                            <Grid item xs={12}>
                                <Typography align="center" variant="h4" className={classes.homeText}>
                                    Vakinha - Ajuda com Tratamento
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Avatar alt="Imagem" className={classes.largeAvatar} src="https://static.vakinha.com.br/uploads/vakinha/image/50997/PhotoGrid_1461550156551.jpg?ims=700x410" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" className={classes.infoText}>
                                    "Amigos, venho por meio desse texto para fazer um apelo por um ato de solidariedade. Tenho uma companheira que sofre com depressão há 12 anos. Hoje ela está com 24 anos e após a depressão, desenvolveu-se a ansiedade e consequentemente síndrome do pânico. Nascida em uma família humilde, ela depende de uma banca de lanches p/ bancar as dívidas e recebe uma pequena contribuição da mãe cujo vende café na feira. A separação dos pais, relacionamentos conturbados e humilhações fizeram com que o problema agravasse-se."
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.gridItemCausesButton}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    startIcon={<i className="fas fa-hand-holding-heart"></i>}
                                    //eslint-disable-next-line
                                    component={React.forwardRef((props, ref) => (<a aria-label="Apoiar Causa" href="https://www.vakinha.com.br/vaquinha/ajuda-para-tratamento-de-depressao-ansiedade-etc" target="_blank" rel="noopener noreferrer" {...props} ref={ref} />))}
                                >
                                    Apoiar Causa
                                </Button>
                            </Grid>
                        </Grid>
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