import React, { PureComponent } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'

import { AppBar, Toolbar, IconButton, Grid, Button } from '@material-ui/core';

import { Menu as MenuIcon } from '@material-ui/icons';

import routes from '../../routes';

class Navbar extends PureComponent {
    render() {
        const { classes, openState, iconButtonAction, ableToOpen, logo } = this.props;

        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    {ableToOpen === true &&
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={iconButtonAction}
                            className={clsx(classes.menuButton, openState && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                    }
                    <img src={logo} alt="" className={classes.toolbarLogo} onClick={() => { this.props.history.push('/'); }}></img>
                    {ableToOpen === false &&
                        <Grid container spacing={2} alignItems="center" justify="flex-end" wrap="nowrap">
                            {routes.map((item, key) => (
                                item.content.map((item, key) => (
                                    <Grid item key={key}>
                                        <Button
                                            component={React.forwardRef((props, ref) => {
                                                if (item.path === undefined) {
                                                    //eslint-disable-next-line
                                                    return (<a href={item.url} target="_blank" rel="noopener noreferrer" {...props} ref={ref} />)
                                                } else {
                                                    return (<Link to={item.path} {...props} ref={ref} />)
                                                }
                                            })}
                                            startIcon={item.icon}
                                            className={clsx(classes.buttonNav, (this.props.pageTitle === item.name) && classes.buttonNavSelected)}
                                        >
                                            {item.name}
                                        </Button>
                                    </Grid>
                                ))
                            ))}
                        </Grid>
                    }
                    {ableToOpen === true &&
                        <Grid container spacing={2} alignItems="center" justify="flex-end" wrap="nowrap">
                            <Grid item>
                                {routes.map(item => (
                                    item.content.map((item, key) => {
                                        if (this.props.pageTitle === item.name) {
                                            return (
                                                <Button
                                                    component={React.forwardRef((props, ref) => {
                                                        if (item.path === undefined) {
                                                            //eslint-disable-next-line
                                                            return (<a href={item.url} target="_blank" rel="noopener noreferrer" {...props} ref={ref} />)
                                                        } else {
                                                            return (<Link to={item.path} {...props} ref={ref} />)
                                                        }
                                                    })}
                                                    startIcon={item.icon}
                                                    className={clsx(classes.buttonNav, classes.buttonNavSelected)}
                                                    key={`button-nav-${key}`}
                                                >
                                                    {item.name}
                                                </Button>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })
                                ))}
                            </Grid>
                        </Grid>
                    }
                </Toolbar>
            </AppBar>
        )
    }
}

Navbar.propTypes = {
    openState: PropTypes.bool.isRequired,
    pageTitle: PropTypes.string,
    user: PropTypes.object.isRequired,
    iconButtonAction: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    logo: PropTypes.any.isRequired,
};

export default withRouter(Navbar);