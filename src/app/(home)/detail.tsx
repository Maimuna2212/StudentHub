import React, {useState} from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';

export default function DetailsScreen(){
    const[modelVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Digital ID Card</Text>
            <Image source = {require('../../../assets/images/profile.png')} style={styles.image} />
            <Text style = {styles.text}>Name: Enter your name here</Text>
            <Text style = {styles.text}>Student ID: Enter your ID here</Text>
            <Text style = {styles.text}>Course: Mobile Application Development</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {flex:1, padding:20, alignItems: 'center'},
    title: {fontWeight:'bold', marginBottom:100, marginTop:40},
    text: {fontSize:18, marginBottom:10},
    image: {width:200, height:200, resizeMode:'contain',marginBottom:20},
});