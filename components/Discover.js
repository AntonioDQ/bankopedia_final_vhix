import React, {useState} from 'react';
import { View, StyleSheet, Keyboard, SafeAreaView, TouchableWithoutFeedback, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";
import { useLinkProps } from '@react-navigation/native';

const HideKeyboard = ({ children }) => (
  <React.Fragment>
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
  </React.Fragment>
);


export default function Discover({ navigation }) {
  return (
    <React.Fragment>
    <HideKeyboard>
    <SafeAreaView style={styles.container}>
          <View style={styles.homeContainer} >
            <TouchableOpacity onPress={() => navigation.navigate("Homepage_page")}>

              <Image source={require('../assets/arrow.png')} style={{ width: 25, height: 30 }} />
            </TouchableOpacity>
            <Text style={styles.homeText} onPress={() => navigation.navigate("Homepage_page")}>{'Home'}</Text>
          </View>

          <Text style={styles.titleText}>{'DISCOVER'}</Text>

          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <View style={styles.firstBox}>
                <Text style={styles.text}>{'Blossoming Companies'}</Text>
                <View style={styles.container1}>
                  <View style={styles.container2}>
                    <View style={styles.roundBox}>
                      <Text style={styles.smallText}>{'Revolut'}</Text>
                    </View>
                    <View style={styles.textBox1}>
                      <Text style={styles.bodyText}>{'Revolut has been evaluated as one of the most valuable Fintech startups on the plane with a shocking $1.7B in funding'}</Text>
                    </View>
                    <View style={styles.textBox2}>
                      <Text style={styles.bodyText2}>{'October 23rd, 2022'}</Text>
                    </View>
                  </View>
                  <View style={styles.container3}>
                    <Image source={require('../assets/phone.png')} style={styles.img} />
                  </View>
                </View>
              </View>
              <View style={styles.secondBox}>
                <Text style={styles.text}>{'Recommended Contacts'}</Text>
                <ScrollView horizontal={true} style={{width: "100%", flexDirection: "row", top: 15, marginLeft: 0}}>
                  <View style={styles.scrollBox}>
                    <View style={styles.box}>
                      <TouchableOpacity style={styles.contact}>
                        <Image source={require('../assets/portrait1.jpg')} style={styles.contactImage} />
                      </TouchableOpacity>
                      <Text style={styles.smallText2}>Vanessa</Text>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity style={styles.contact}>
                        <Image source={require('../assets/portrait2.jpg')} style={styles.contactImage} />
                      </TouchableOpacity>
                      <Text style={styles.smallText2}>Henry</Text>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity style={styles.contact}>
                        <Image source={require('../assets/portrait3.jpg')} style={styles.contactImage} />
                      </TouchableOpacity>
                      <Text style={styles.smallText2}>Jacky</Text>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity style={styles.contact}>
                        <Image source={require('../assets/portrait4.jpg')} style={styles.contactImage} />
                      </TouchableOpacity>
                      <Text style={styles.smallText2}>Brandon</Text>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity style={styles.contact}>
                        <Image source={require('../assets/portrait5.jpg')} style={styles.contactImage} />
                      </TouchableOpacity>
                      <Text style={styles.smallText2}>Antonio</Text>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity style={styles.contact}>
                        <Image source={require('../assets/portrait6.jpg')} style={styles.contactImage} />
                      </TouchableOpacity>
                      <Text style={styles.smallText2}>Adam</Text>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity style={styles.contact}>
                        <Image source={require('../assets/portrait7.jpg')} style={styles.contactImage} />
                      </TouchableOpacity>
                      <Text style={styles.smallText2}>Frank</Text>
                    </View>
                    <View style={styles.box}>
                      <TouchableOpacity style={styles.contact}>
                        <Image source={require('../assets/portrait8.jpg')} style={styles.contactImage} />
                      </TouchableOpacity>
                      <Text style={styles.smallText2}>Sarah</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
      </SafeAreaView>
    </HideKeyboard>
    </React.Fragment>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    
    homeContainer: {
      position: 'absolute',
      top: 60,
      left: 12,
      flexDirection: 'row',
    },

    container1: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'space-evenly',
    },

    box: {
      width: 75,
      height: 100,
      marginRight: 15,
      alignItems: 'center'
    },

    container2: {
      flex: 1,
      justifyContent: 'space-evenly',
      backgroundColor: '#2D2D2D',
    },

    contact: {
      height: 75,
      width: 75,
      marginBottom: 5,
      backgroundColor: '#00D8FE',
      display: 'flex',
      borderRadius: 75,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#171717',
      shadowOffset: { width: 0, height: 0},
      shadowOpacity: 0.8,
      shadowRadius: 5,
    },

    contactImage: {
      height: 67,
      width: 67,
      borderRadius: 65,
    },

    container3: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#2D2D2D',
      justifyContent: 'space-evenly',
    },

    scrollView: {
      width: "100%",
      display: 'flex',
      marginTop: 75
    },

    titleText: {
      position: 'absolute',
      top: 90,
      left: 15,
      fontSize: 30,
      fontWeight: "bold",
      color: 'white',
      shadowColor: '#171717',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 5,

    },

    homeText: {
      fontSize: 15,
      marginTop: 6,
      marginLeft: 3,
      color:'lightgrey'
    },

    scrollBox: {
      flexDirection: 'row',
    },

    text: {
      fontSize: 20,
      marginBottom: 5,
      color: 'white'
    },

    firstBox: {
      flex: 1,
      height: 200,
      width: 360,
      marginTop: 5,
      backgroundColor: '#2D2D2D',
      borderRadius: 15,
      display: 'flex',
      padding: 15,
      paddingTop: 10,
      shadowColor: '#171717',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
    },

    secondBox: {
      flex: 1,
      height: 180,
      width: 360,
      backgroundColor: '#2D2D2D',
      borderRadius: 15,
      display: 'flex',
      padding: 15,
      marginTop: 90,
      shadowColor: '#171717',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
    },

    roundBox: {
      flex: 0.8,
      width: 60,
      backgroundColor: 'white',
      borderRadius: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5,
      shadowColor: '#171717',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
    },

    roundBox2: {
      height: 20,
      width: 60,
      backgroundColor: 'white',
      borderRadius: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5
    },

    textBox1: {
      flex: 4,
      marginBottom: 5
    },

    textBox2: {
      flex: 1,
    },

    button3: {
        fontSize: 10,
        flexDirection: "row",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
        height: 30,
        width: 200,
    },

    smallText: {
      fontSize: 12,
    },

    smallText2: {
      fontSize: 12,
      color: 'white',
    },

    bodyText: {
      fontSize: 13,
      color: 'white'
    },

    bodyText2: {
      fontSize: 12,
      color: 'gray'
    },

    button_style: {
        margin: 10,
    },

    img: {
      marginTop: 100,
      width: 130,
      height: 240,
      transform: [{ rotate: '10deg' }],
      shadowColor: '#171717',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
    },
  });