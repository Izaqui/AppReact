import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import {Login} from '../Pages/Login';
import {Cadastro} from '../Pages/CadastroUsuario/index';
import Header from '../components/Header';
// import { Container } from './styles';

const {Navigator, Screen} = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator 
            screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}>
                <Screen 
                    name="Login" 
                    component={Login}/>
                <Screen 
                    name="Cadastro" 
                    component={Cadastro}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Cadastro' showX={false}/>
                    }}/>
            </Navigator>
        </NavigationContainer>
    );
}