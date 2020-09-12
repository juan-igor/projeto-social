import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withRouter, Link } from 'react-router-dom';

import { Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';

import routes from '../../routes';

class Sidebar extends PureComponent {

    render() {
        const props = this.props;

        return (
            <React.Fragment>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <img src={props.logo} alt="" style={{ maxWidth: "100px", width: "70%", margin: "10px 0px" }}></img>
                </Grid>

                {routes.map((item, key) => (
                    <List key={key}>
                        {item.header !== '' && props.openState && <ListSubheader inset>{item.header}</ListSubheader>}
                        {item.content.map((item, key) => (
                            <ListItem
                                key={key}
                                button
                                selected={props.activePage === item.name}
                                component={React.forwardRef((props, ref) => {
                                    if (item.path === undefined) {
                                        //eslint-disable-next-line
                                        return (<a href={item.url} target="_blank" rel="noopener noreferrer" {...props} ref={ref} />)
                                    } else {
                                        return (<Link to={item.path} {...props} ref={ref} />)
                                    }
                                })}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        ), { props: props })}
                    </List>
                ), { props: props })}
            </React.Fragment>
        )
    }
}

Sidebar.propTypes = {
    activePage: PropTypes.string.isRequired,
    logo: PropTypes.any,
    openState: PropTypes.bool.isRequired
};

export default withRouter(Sidebar);