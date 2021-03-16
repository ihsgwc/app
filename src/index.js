import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 class="heading">Welcome to Issaquah Girls Who Code's Music App</h1>
                <p>What does this app do? .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                
                <h1 class="heading">Login with Spotify:</h1>
            </div>
        );
    }
}

// ====================

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);