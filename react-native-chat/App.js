import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login'
import Menu from './src/screens/Menu'

const MainNavigator = StackNavigator({
    Login: { screen: Login },
    Menu: { screen: Menu }
});

class App extends Component {
    render() {
        return (
            <MainNavigator />
        )
    }
}

export default App;