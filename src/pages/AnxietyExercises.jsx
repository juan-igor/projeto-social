import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid} from '@material-ui/core'

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
            <Layout pageTitle="Exercícios de Ajuda" maxWidth={'md'}>
                <Grid container spacing={3} className={classes.grid}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            <p>Aqui estão alguns exercícios para lhe ajudar a controlar a ansiedade.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            1. Abdominal
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.infoText}>
                            <p>
                                Já reparou que podemos observar a movimentação do abdômen facilmente na respiração dos cães e dos bebês? 
                                Isso acontece pelo simples fato de que, quando estamos tranquilos, tendemos a inspirar e expirar lentamente, o que evidencia a extensão e a contração do abdômen. 
                                Então experimente parar e respirar com mais tranquilidade e profundidade, colocando a mão sobre o abdômen para senti-lo se movimentar.
                            </p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            2. Exercício de Respiração - Quadrada
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.infoText}>
                            <p>
                                Nesse tipo de respiração, a cada inspiração e expiração, existe uma pausa. 
                                Inspire pelo nariz por contando lentamente até quatro, depois segure o ar nos pulmões por mais quatro. 
                                Expire lentamente pela boca enquanto por quatro segundos e, após "esvaziá-los", mantenha-se assim por mais quatro. 
                                É como se você, ao final, estivesse formando um quadrado respiratório, com quatro segundos em cada passo, daí o nome da técnica.
                            </p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            3. Exercício de Respiração - Expiração Alongada
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.infoText}>
                            <p>
                                A prática é semelhante à anterior, no entanto, enquanto você inspira por quatro segundos (pelo nariz), a recomendação é expulsar o ar pela boca durante dobro do tempo (isto é, por oito segundos). 
                                Ela é benéfica porque enquanto a inalação está relacionada ao sistema nervoso simpático (SNS), que controla o mecanismo de luta e fuga, a expiração está relacionada ao sistema nervoso parassimpático (SNP), que influencia a nossa capacidade de relaxamento.
                            </p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '40px' }}>
                        <Typography align="center" variant="h4" className={classes.homeText}>
                            4. Alterne as Narinas
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.infoText}>
                            <p>
                                Com a ajuda do dedo indicador, inspire por uma narina e expire pela outra. 
                                Na sequência, a narina que "puxou" o ar deve ser usada para "soltá-lo". 
                                Assim como todas as anteriores, essa técnica acalma porque faz com que você se concentre no momento presente.
                            </p>
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