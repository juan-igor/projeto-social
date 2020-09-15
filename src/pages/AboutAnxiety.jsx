import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button } from '@material-ui/core'
import { InfoOutlined, AssignmentOutlined } from '@material-ui/icons'

import Layout from '../layouts/MainLayout'

const styles = (theme) => ({
    grid: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(20),
    },
    homeText: {
        fontFamily: "'Sofia', cursive",
    },
    infoText: {
        fontFamily: "'Nunito', sans-serif",
        textAlign: 'justify',
        margin: 'auto'
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
            <Layout pageTitle="Sobre Ansiedade" maxWidth={'md'}>
                <Grid container spacing={3} className={classes.grid}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            <p>Que tal conhecer um pouco mais sobre ansiedade?</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3} alignItems="center" justify="center">
                            <Grid item xs={12} sm={6} md={6} style={{ textAlign:'center' }}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    startIcon={<InfoOutlined />}
                                    onClick={() => {
                                        $('html, body').animate({
                                            scrollTop: $('#o-que-e').offset().top - 80
                                          }, 600);
                                    }}
                                    fullWidth
                                >
                                    O que é?
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} style={{ textAlign:'center' }}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    startIcon={<InfoOutlined />}
                                    onClick={() => {
                                        $('html, body').animate({
                                            scrollTop: $('#causas').offset().top - 80
                                          }, 600);
                                    }}
                                    fullWidth
                                >
                                    Quais as causas?
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} style={{ textAlign:'center' }}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    startIcon={<InfoOutlined />}
                                    onClick={() => {
                                        $('html, body').animate({
                                            scrollTop: $('#como-identificar').offset().top - 80
                                          }, 600);
                                    }}
                                    fullWidth
                                >
                                    Como Identificar?
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} style={{ textAlign:'center' }}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    startIcon={<InfoOutlined />}
                                    onClick={() => {
                                        $('html, body').animate({
                                            scrollTop: $('#tipos').offset().top - 80
                                          }, 600);
                                    }}
                                    fullWidth
                                >
                                    Tipos de Ansiedade
                                </Button>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign:'center' }}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    startIcon={<InfoOutlined />}
                                    onClick={() => {
                                        $('html, body').animate({
                                            scrollTop: $('#teste-ansiedade').offset().top - 80
                                          }, 600);
                                    }}
                                    fullWidth
                                >
                                    Teste de Ansiedade
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography id="o-que-e" align="center" variant="h4" className={classes.homeText}>
                            Mas afinal, o que é ansiedade?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.infoText}>
                        <p>Ansiedade é um sentimento ligado a preocupação, nervosismo e medo intensos.</p>
                        <br/>
                        <p>Esse sinal de alerta é uma reação natural do corpo para ajudar em novos desafios e situações de perigo. Todos nós sentimos ansiosos antes de uma grande apresentação ou uma prova importante.</p>
                        <br/>
                        <p>Porém, quando passa a atrapalhar nossa rotina, a ansiedade pode ser considerada um distúrbio e ela própria o desafio a ser superado.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography id="causas" align="center" variant="h4" className={classes.homeText}>
                            Quais suas causas?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.infoText}>
                            Não se sabe ao certo as causas de ansiedade, mas há fatores que podem influenciar uma pessoa a desenvolver ou estar mais predisposta a esse distúrbio:
                        </Typography>
                        <br/>
                        <Typography variant="h6" className={classes.infoText} style={{ textAlign: 'left' }}>
                            <p><i className="fas fa-brain"></i>&nbsp; Genética: Histórico de transtorno de ansiedade na família;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Traumas passados: Como perda de um ente querido e acidentes marcantes;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Problemas na infância;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Problemas cardíacos como as arritmias;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Doenças hormonais como hipertireoidismo e hiperadrenocorticismo;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Problemas respiratórios como doença pulmonar obstrutiva crônica;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Abuso de drogas, álcool ou medicação, como os benzodiazepínicos;</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography id="como-identificar" align="center" variant="h4" className={classes.homeText}>
                            Como identificar?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.infoText}>
                            Os sintomas da ansiedade ocorrem tanto em manifestações físicas, quanto emocionais – indo de tensão nos músculos a excesso de medo. Veja as duas listas abaixo:
                        </Typography>
                        <br/>
                        <Typography variant="h6" className={classes.infoText} style={{ textAlign: 'left' }}>
                            <p style={{ textAlign: 'center' }}>Sintomas Físicos:</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Respiração ofegante e falta de ar;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Palpitações e dores no peito;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Fala acelerada;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Sensação de tremor e vontade de roer as unhas;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Agitação de pernas e braços;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Tensão muscular;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Tontura e sensação de desmaio;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Enjoo e vômitos;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Irritabilidade;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Enxaquecas;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Boca seca e hipersensibilidade de paladar;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Insônia;</p>
                        </Typography>
                        <br/>
                        <Typography variant="h6" className={classes.infoText} style={{ textAlign: 'left' }}>
                            <p style={{ textAlign: 'center' }}>Sintomas Psicológicos:</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Preocupação excessiva;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Dificuldade de concentração;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Nervosismo;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Medo constante;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Sensação de que pode-se perder o controle ou que algo ruim vai acontecer;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Desequilíbrio dos pensamentos;</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography id="tipos" align="center" variant="h4" className={classes.homeText}>
                            Quais são os tipos de ansiedade?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.infoText}>
                            Existem 5 tipos principais de ansiedade, são eles:
                        </Typography>
                        <br/>
                        <Typography variant="h6" className={classes.infoText} style={{ textAlign: 'left' }}>
                            <p><i className="fas fa-brain"></i>&nbsp; Transtorno de ansiedade generalizada;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Transtorno do pânico;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Fobia social;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Transtorno obsessivo-compulsivo;</p>
                            <br/>
                            <p><i className="fas fa-brain"></i>&nbsp; Transtorno de estresse pós-traumático;</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography id="teste-ansiedade" align="center" variant="h4" className={classes.homeText}>
                            Teste de Ansiedade
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.infoText}>
                            O reconhecimento e diagnóstico de ansiedade nem sempre são simples. 
                            Se você quer saber o seu nível de ansiedade, clique no link teste de ansiedade. 
                            Faça o questionário de 7 perguntas que tem duração de menos de 1 minuto. 
                            O teste é adaptado do teste científico Americano criado pelo Dr. Spitzer e Dr William (GAD – Generalized Anxiety Disorder 7).
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Button
                            color="secondary"
                            variant="contained"
                            startIcon={<AssignmentOutlined />}
                            size="large"
                            fullWidth
                            //eslint-disable-next-line
                            component={React.forwardRef((props, ref) => (<a aria-label="Teste de Ansiedade" href="https://zenklub.com.br/teste-ansiedade/" target="_blank" rel="noopener noreferrer" {...props} ref={ref} />))}
                        >
                            Realizar Teste
                        </Button>
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