import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    login: {
        // backgroundColor:'blue',
        width: '100%',
        // padding: 10,
        // marginTop: '30%',
        // justifyContent:'center',
        flex:1
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
        height: 60,
        width:'80%',
        alignSelf:'center'
    },
    username: {
    },
    password: {},
    loginButton:{
        width:'45%',
        height:60,
        backgroundColor: '#43a367',
        borderRadius: 10,
        alignSelf:'center',
        padding: 15,
        marginTop: 15,
        justifyContent:'center'
    },
    loginText:{
        textAlign:'center',
        color:'white',
        alignSelf:'center'
    },
    logo2:{
        margin: 30,
        marginTop: 100,
        width: 275,
        height:150,
        resizeMode:'stretch'
    }

    
});
