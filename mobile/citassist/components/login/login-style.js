import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    login: {
        // backgroundColor:'blue',
        width: '100%',
        padding: 10,
        marginTop: '30%',
        alignSelf:'flex-end'
    },
    logo: {
        marginBottom: 50,
        flex: 2,
        resizeMode: 'contain',
        width: 'auto'
    },
    default: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        margin: 15,
        height: '10%'
    },
    username: {},
    password: {},
    loginButton:{
        width:'60%',
        backgroundColor: '#43a367',
        borderRadius: 10,
        alignSelf:'center',
        padding: 15,
        marginTop: 15
    },
    loginText:{
        textAlign:'center',
        color:'white'
    },
    logo2:{
        margin: 30,
        marginTop: 100,
        width: '65%',
        height:'25%',
        resizeMode:'stretch'
    }

    
});
