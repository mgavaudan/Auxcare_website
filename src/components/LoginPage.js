import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {cyan500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import '../styles/styles.scss';


export default class LoginPage extends Component {


	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		const user = this.refs.email.getValue().trim();
		const pass = this.refs.password.getValue().trim();
		const creds = { email: user, password: pass };
		this.props.onLoginClick(creds);
	}

	render() {

		const { errorMessage } = this.props;

		return (
			<MuiThemeProvider>	
			<div style={styles.main}>
				<h1>React Hack</h1>
				<h2>Login</h2>

				<TextField type='text' ref='email' hintText='Email'/>
				<br/><br/>
				<TextField type='password' ref='password' hintText='Password'/>
				<br/><br/>
				<FlatButton label='Login' backgroundColor={cyan500} onClick={() => this.handleClick()}/>

				{errorMessage &&
					<p>{errorMessage}</p>
				}
			</div>
			</MuiThemeProvider>
		);
	}
	
}

const styles = {
  main: {
    textAlign: 'center',
    paddingTop: 200,
    position: 'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0,
  },
};



LoginPage.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
