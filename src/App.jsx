import React from 'react';
import { connect } from 'react-redux';
import RegistrationContainer from './components/RegistrationContainer';

class App extends React.Component {
    render() {
        const { usernameIsUnique, username } = this.props;

        return (
            <div className="container">
                {
                    usernameIsUnique === true ?
                    <h2>{username}</h2> :
                    <RegistrationContainer />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.registration.user.username,
        usernameIsUnique: state.registration.usernameIsUnique
    };
};

export default connect(mapStateToProps)(App);
