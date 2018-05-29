import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { AppRegistry, StyleSheet, ScrollView, Image, Text } from 'react-native';
import ReactCenter from 'react-center';
import logo from './logo.svg';
import './App.css';


const Title = (props) => {
    const {text} = props;
    return React.createElement('h2', null, text);
};

const styles = ({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    colorDiv: {
        // backgroundColor: 'pink',
        width: 200,
        height: 200,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
});

const colorDiv = (color) => {
    return {
        backgroundColor: color,
        margin: 2,
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#838383',
        alignContent:"center",
        alignItems:"center",

        display: 'inline-flex',
        // display:"flex",
        boxSizing:"border-box",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"center",
    }
};

const ColorDiv = (props) => {


    const {color} = props;

    // return React.createElement('div', {className: 'colorDiv', style: colorDiv(color) }, <ReactCenter>Background colors!</ReactCenter>);
    return React.createElement('div', {className: 'colorDiv', style: colorDiv(color) }, <ReactCenter>Background colors!</ReactCenter>);

    // return React.createElement('div', {className: 'colorDiv', style: {backgroundColor: {color},}}, 'Background colors!');
};
//     // return React.createElement('h1', null, 'Hardcoded Title! Boo!');
//     var title = "this is the title";
//     return React.createElement('h1', null, title);
// }
const Capp = (props) => {
    // return React.createElement(Title, null);
    // return React.createElement(Title, { text: "Dynamic content here!"});
    // return React.createElement('div', null,
    //     React.createElement(Title, {text: 'Title one!'}),
    //     React.createElement(Title, {text: "T2 and better!"}),
    //     React.createElement(Title, {text: "The things in life!!!"}))

    return React.createElement('div',null,
        React.createElement(ColorDiv, {color: "pink", style: styles.colorDiv}),
        React.createElement(ColorDiv, {color: "blue", style: styles.colorDiv}),
        React.createElement(ColorDiv, {color: "green", style: styles.colorDiv}),
        )

};


function theTime() {
    var now = new Date();
    let hours = now.getHours();
    let minutes = adjustDigits(now.getMinutes());
    let seconds = adjustDigits(now.getSeconds());
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    var t = setTimeout(theTime, 1000);

}

function adjustDigits(timeVar) {
    if (timeVar < 10) {
        timeVar = "0" + timeVar;
    }
    return timeVar;
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          < Capp/>
      </div>
    );
  }
}

// ReactDOM.render(
//     <ReactCenter className="center">
//         baller
//         <div className="center" style={{backgroundColor: 'red', width: 200, height: 200, alignContent:"center",alignItems:"center",boxSizing:"border-box",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"center"}}>darns</div>
//         <div className="center">darns</div>
//         <div className="center">darns</div>
//     </ReactCenter>,
//     document.getElementById('thingPlace')
// );

export default App;
