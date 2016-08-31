import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FlatButton from 'material-ui/FlatButton';


import {fullWhite, lightBlue500} from 'material-ui/styles/colors';

import '../styles/dashboard.scss';


export default class Dashboard extends Component {

	render() {
		const { onSecretQuoteClick, data, onLogoutClick } = this.props;

		return (
			<MuiThemeProvider>
			<div>
				<div className='logo'>
					Auxcare
				</div>
				<div className='menu'>
				</div>
				<div className='topmenu'>
					<Badge style={styles.badge} badgeContent={10} secondary={true} badgeStyle={{top: 12, right: 12}}>
						<IconButton tooltip='Notifications'>
						<NotificationsIcon color={fullWhite}/>
						</IconButton>
					</Badge>
					<FlatButton style={styles.logout} label='Logout' backgroundColor={lightBlue500} onClick={() => onLogoutClick()} />
				</div>
				<div className='main'>
					<FlatButton label='Secret Quote' backgroundColor={lightBlue500} onClick={() => onSecretQuoteClick('protected/doctor/doctor1@gmail.com', true)} />
					{data &&
					<div>
						<blockquote>{data.quotes}</blockquote>
					</div>
					}
				</div>
			</div>
			</MuiThemeProvider>
		);
	}
}


const styles = {
	badge: {
		position: 'absolute',
		top: 0,
	},
	logout: {
		position: 'absolute',
		right: 15,
		top: 17,
	},
};

Dashboard.propTypes = {
	onLogoutClick: PropTypes.func.isRequired,
	onSecretQuoteClick: PropTypes.func.isRequired,
	data: PropTypes.object
};
