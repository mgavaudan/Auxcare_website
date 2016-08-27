import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {cyan500} from 'material-ui/styles/colors';

export default class Dashboard extends Component {

	render() {
		const { onSecretQuoteClick, data, onLogoutClick } = this.props;

		return (
			<MuiThemeProvider>
			<div>
				<FlatButton label='Logout' backgroundColor={cyan500} onClick={() => onLogoutClick()} />
				<FlatButton label='Secret Quote' backgroundColor={cyan500} onClick={() => onSecretQuoteClick('protected/doctor/doctor1@gmail.com', true)} />

				<div >
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

Dashboard.propTypes = {
	onLogoutClick: PropTypes.func.isRequired,
	onSecretQuoteClick: PropTypes.func.isRequired,
	data: PropTypes.object
};
