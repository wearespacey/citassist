import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    text:{
        fontSize: 25,
        fontWeight:'bold',
        margin: 10
    },
    icon:{
        padding: 5,
        marginHorizontal: 10
    },
    imageSize:{
        width: 60,
        height: 60,
        resizeMode:'stretch',
        borderRadius: 80
    },
    iconView:{
        borderRadius:100,
        backgroundColor:'rgb(47,94,136)',
        width: 60,
        height: 60,
        alignContent:'center',
        justifyContent:'center'
    },
    centerIcon:{
        alignSelf:'center'
    }
});