import React from 'react';
import PropTypes from 'prop-types'
import {
    Form, FormControl, Button, ControlLabel, ProgressBar
} from 'react-bootstrap';
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { username: "", password: "" };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, val) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    login(event) {
        event.preventDefault();
        const cred = { username: this.state.username, password: this.state.password };
        this.props.actions.startAuth(cred);
    }

    render() {
        return (
            <div className="row topOffset">
                <div className="col-sm-4"></div>
                <div className="col-sm-4" >
                    <Form horizontal onSubmit={this.login} className="form-login topOffset" role="form">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl name="username" required onChange={this.handleChange}
                            autoFocus value={this.state.username} />
                        <br />
                        <ControlLabel>Password</ControlLabel>
                        <FormControl name="password" type="password" value={this.state.password}
                            onChange={this.handleChange} required />
                        <br />
                        <Button bsStyle="primary pull-right"
                            disabled={(this.props.authData.authenticated === -1) ? true : false}
                            type="submit">Log in</Button>
                        <br />
                        <br />
                        {this.props.authData.error ? <div className="alert alert-danger">{this.props.authData.error_description}</div> : null}
                        {this.props.authData.authenticated === -1 ? <ProgressBar active now={100} /> : null}
                    </Form>
                </div>
                <div className="col-sm-4"></div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    actions: PropTypes.object.isRequired,
    authData: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        authData: state.authenticationData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
