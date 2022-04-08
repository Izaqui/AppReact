import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

interface HeaderProps{
    title: string,
    showX?: boolean
}

const Header: React.FC<HeaderProps> = ({title, showX=true}) => {
    
    const navigation = useNavigation();
    
    function handlerGoToAppHomepage(){
       
    }

    return (

        <View style={styles.container}>
            <BorderlessButton 
                onPress={navigation.goBack}
            >
                <Feather name='arrow-left' size={ 24 } color='#15b6d6'></Feather>
            </BorderlessButton>
            <Text style={styles.title}> { title } </Text>

        {showX ? (
            <BorderlessButton
                onPress={handlerGoToAppHomepage}
            >
                <Feather name='x' size={ 24 } color='#ff669d'></Feather>
            </BorderlessButton>
            ):(
                <View/>
            )
        }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16,
    }
});

export default Header;