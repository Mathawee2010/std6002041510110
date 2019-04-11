
import Login from './Login';
import Me from './me';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Me: Me
    }, {
        initialRouteName: "Me"
    }
);

export default createAppContainer(AppNavigator);