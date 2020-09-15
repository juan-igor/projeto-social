import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'

import {
  CssBaseline, Drawer, IconButton, Container, Grid, Fab,
  Zoom, useScrollTrigger,
} from '@material-ui/core'
import { KeyboardArrowUpRounded, PlayArrowRounded, PauseRounded, MusicNoteRounded } from '@material-ui/icons'
import { withStyles, ThemeProvider, createMuiTheme, darken } from '@material-ui/core/styles'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import Sidebar from '../components/interface/Sidebar'
import Navbar from '../components/interface/Navbar'
import Footer from '../components/interface/Footer'

import Logo from '../assets/images/ansiedade_logo.png'
import LogoFullMin from '../assets/images/ansiedade_logo_full.png'
import LogoFull from '../assets/images/ansiedade_logo_full2.png'

// import { isMobileDevice } from '../functions/utils/general'

// Cores para combater o estresse
// const color1 = '#F2D7E0'; // Rosa
// const color2 = '#C4BFE7'; // Roxo
// const color3 = '#78ABC6'; // Azul
// const color4 = '#B8D8B3'; // Verde
// const color5 = '#C6C9D0'; // Cinza

export const primary_color = '#e6b2c3';
export const secondary_color = '#776bc7';
export const music_url = 'https://juan-general-public-bucket.s3-sa-east-1.amazonaws.com/musicas/musica_tranquilizante.mp3';

const ocheTheme = createMuiTheme({
  palette: {
    primary: {
      main: primary_color
    },
    secondary: {
      main: secondary_color
    }
  }
});

// primary: lightBlue[700],
// secondary: "#00774C",
// error: red[900],
// warning: yellow[800],
// success: green[600]

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
  audioButton: {
    color: 'white',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: secondary_color,
    backgroundColor: 'white',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  backToTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  buttonNav: {
    color: 'inherit',
    boxSizing: 'border-box',
    transition: '0.4s',
    '&::before': {
      background: secondary_color,
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 0,
      height: '3px',
      transition: '0.4s',
    },
    '&:hover': {
      color: darken(secondary_color, 0.2),
      '&::before': {
        width: '50%',
      }
    }
  },
  buttonNavSelected: {
    color: darken(secondary_color, 0.2),
    '&::before': {
      width: '50%',
    }
  },
  content: {
    padding: 0,
    margin: 0,
    flexGrow: 1,
    minHeight: '100vh',
    overflow: 'auto',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  container: {
    padding: 0,
    margin: 0,
  },
  drawerHeader: {
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  musicControl: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(3),
    color: secondary_color,
  },
  menuButtonHidden: {
    display: 'none',
  },
  profileMenu: {
    marginTop: theme.spacing(6),
  },
  profileName: {
    padding: theme.spacing(1)
  },
  profileMenuName: {
    padding: theme.spacing(2),
    maxWidth: '200px',
    textAlign: 'center'
  },
  profileMenuDivider: {
    marginBottom: theme.spacing(1)
  },
  toolbar: {
    paddingRight: theme.spacing(3), // keep right padding when drawer closed
  },
  toolbarLogo: {
    marginRight: theme.spacing(4),
    maxHeight: '40px',
    '@media (min-width:0px) and (orientation: landscape)': {
      maxHeight: '32px',
    },
    '@media (min-width:600px)': {
      maxHeight: '48px',
    },
    '&:hover': {
      cursor: 'pointer'
    }
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
});

let minWidthSidebarClosed = 883;

function ScrollTop(props) {
  const trigger = useScrollTrigger({
    target: document.getElementById('content-scroller') || window,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div role="presentation" {...props} />
    </Zoom>
  );
}

function setPageHeightResponsive() {
    let pageHeight = window.innerHeight - 54;
  
    if (window.matchMedia("(min-width:600px)").matches) {
      pageHeight = window.innerHeight - 64;
    } else if (window.matchMedia("(min-width:0px) and (orientation: landscape)").matches) {
      pageHeight = window.innerHeight - 44;
    }
  
    document.getElementById('page-content').style.minHeight = pageHeight + 'px';
  }

class MainLayout extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      ableToOpen: window.innerWidth <= this.props.sidebarMinWidth,
      open: false,
      navbarLogo: LogoFull,
      audio: null,
    };
  }

  setDrawerStateResponsive = () => {
    if (window.innerWidth <= this.props.sidebarMinWidth) {
      this.setState({ ...this.state, ableToOpen: true });
    } else {
      this.setState({ ...this.state, ableToOpen: false, open: false });
    }
  };

  setNavbarLogoResponsive = () => {
    if(window.innerWidth <= 339){
      this.setState({ ...this.state, navbarLogo: Logo });
    } else {
      if(window.innerWidth <= 1026){
        this.setState({ ...this.state, navbarLogo: LogoFullMin });
      } else {
        this.setState({ ...this.state, navbarLogo: LogoFull });
      }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setDrawerStateResponsive);
    window.addEventListener('resize', this.setNavbarLogoResponsive);
    window.addEventListener('resize', setPageHeightResponsive);
    setPageHeightResponsive();

    $(() => {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', music_url);

      this.setState({
        ...this.state,
        audio: audioElement
      });

      $('#music-pause-button').css('display', '');
      $('#music-play-button').css('display', 'none');
    
      this.state.audio.addEventListener('ended', () => {
          this.play();
      }, false);

      this.state.audio.addEventListener("canplay",() => {
        this.state.audio.play();
      });

      $('#music-play-button').on('click', () => {
        this.state.audio.play();
        $('#music-play-button').css('display', 'none');
        $('#music-pause-button').css('display', '');
      });

      $('#music-pause-button').on('click', () => {
        this.state.audio.pause();
        $('#music-pause-button').css('display', 'none');
        $('#music-play-button').css('display', '');
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDrawerStateResponsive);
    window.removeEventListener('resize', this.setNavbarLogoResponsive);
    window.removeEventListener('resize', setPageHeightResponsive);

    $(() => {
      this.state.audio.pause();
      this.state.audio.remove();
    });
  }

  handleDrawerOpen = () => {
    this.setState({
      ...this.state,
      open: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      ...this.state,
      open: false
    });
  };

  render() {

    const { classes, pageTitle } = this.props;
    const { open, ableToOpen, navbarLogo } = this.state;

    return (
      <ThemeProvider theme={ocheTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <Navbar logo={navbarLogo} classes={classes} pageTitle={pageTitle} iconButtonAction={this.handleDrawerOpen} openState={open} ableToOpen={ableToOpen} />
          <Drawer
            variant={'temporary'}
            classes={{
              paper: classes.drawerPaper,
            }}
            open={open}
            onClick={(event) => { if (event.target.classList.contains('MuiBackdrop-root')) this.handleDrawerClose(); }}
          >
            <div className={classes.drawerHeader}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <img src={open ? LogoFullMin : null} alt="" style={{ maxWidth: "130px", width: "100%", margin: "10px 0px" }}></img>
              </Grid>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Sidebar activePage={pageTitle} logo={open ? null : Logo} openState={open} />
          </Drawer>
          <main className={classes.content} id="page-main">
            <div className={classes.drawerHeader} />
            <Container className={classes.container} maxWidth={false} style={this.props.pageBackground && { backgroundImage: 'url('+ this.props.pageBackground +')', backgroundPosition: 'center' }}>
                <Container id="page-content" className={!this.props.maxWidth ? classes.container : ''} maxWidth={this.props.maxWidth || false} style={(this.props.pageBackground && this.props.pageBackgroundOpacity) ? { backgroundColor: 'rgba(255, 255, 255, '+ this.props.pageBackgroundOpacity +')' } : {}}>
                  {this.props.children}
                </Container>
                <Footer />
                <ScrollTop className={classes.backToTop} onClick={() => { $('html, body').animate({ scrollTop: 0 }, 400) }}>
                    <Fab color="secondary" size="small" aria-label="Voltar ao início da página" >
                        <KeyboardArrowUpRounded />
                    </Fab>
                </ScrollTop>
                <div id="music-buttons" role="presentation" className={classes.musicControl}>
                  <Fab color="secondary" variant="extended" size="small" aria-label="Controlar Música" component={React.forwardRef((props, ref) => (<div {...props} ref={ref} />) )}>
                    <IconButton color="primary" disabled>
                      {/* <i className="fas fa-music"></i> */}
                      <MusicNoteRounded fontSize="large" />
                    </IconButton>
                    {/* <IconButton color="primary" className={classes.audioButton}>
                      <i id="music-backward-button" class="fas fa-backward"></i>
                    </IconButton> */}
                    <IconButton id="play-pause-button" color="primary" className={classes.audioButton}>
                      <PlayArrowRounded id="music-play-button" fontSize="large" />
                      <PauseRounded id="music-pause-button" fontSize="large" />
                      {/* <i id="music-play-button" className="fas fa-play"></i>
                      <i id="music-pause-button" className="fas fa-pause"></i> */}
                    </IconButton>
                    {/* <IconButton color="primary" className={classes.audioButton}>
                      <i id="music-forward-button" class="fas fa-forward"></i>
                    </IconButton> */}
                  </Fab>
                </div>
            </Container>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
  sidebarOpened: PropTypes.bool,
  sidebarMinWidth: PropTypes.number,
  pageBackground: PropTypes.any,
  pageBackgroundOpacity: PropTypes.number,
};

MainLayout.defaultProps = {
  sidebarMinWidth: minWidthSidebarClosed,
}

// export default React.memo(withStyles(styles)(MainLayout));
export default withRouter(withStyles(styles)(MainLayout));