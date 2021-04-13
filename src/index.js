import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 class="heading">Welcome to Issaquah Girls Who Code's Music App</h1>
                <p>What does this app do? We display your mood based on the latest songs you've been listening to on Spotify! </p>
                
                <h1 class="heading">Login with Spotify:</h1>
                <button id="startButton" class="t3">START</button>
            </div>
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    
    render (){
        return (   
            <div>
                <button 
                ref={this.myRef}
                onClick={this.onClick.bind(this)}>START</button>
                
            </div>
        )
    }
    
    onClick() {
         window.location.href = '/login';
         this.myRef.current.value = "/login";
       
    }
}

/*
  <script>
    // Start button
    document.getElementById("startButton").onclick = function() {
      window.location.href = '/login';
    };
    </script>

    <button id="startButton">START</button>
     <!--<a href="/login">Login</a>-->
*/

// ====================

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);