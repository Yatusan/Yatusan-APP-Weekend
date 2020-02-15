import * as React from 'react';
import { Text, View, StyleSheet, Image, Style, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         Petta - Action (Tamil)
        </Text>
      <Image source={require('./petta 3.jpg')} style={{width: '250px', height: '300px'}}  />
       <Button
          title="BUY TICKETS"
          
          onPress={() => Alert.alert('Booking Successful!')}
        />
      </View>
    
      
      )}
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
