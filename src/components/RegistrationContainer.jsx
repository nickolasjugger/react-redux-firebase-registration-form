import React from 'react';
import { connect } from 'react-redux';
import { sendUserData, setUsernameIsUnique } from '../store/actions/registrationActions';
import Registration from './Registration';

class RegistrationContainer extends React.Component {
    render() {
        return <Registration 
                    usernameIsUnique={this.props.usernameIsUnique} 
                    submitDisabled={this.props.submitDisabled} 
                    sendUserData={this.props.sendUserData} 
                    setUsernameIsUnique={this.props.setUsernameIsUnique} 
                />;
    }
}

const mapStateToProps = state => {
    return {
        usernameIsUnique: state.registration.usernameIsUnique,
        submitDisabled: state.registration.submitDisabled
    };
};

const mapDispatchToProps = {
    sendUserData,
    setUsernameIsUnique
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
