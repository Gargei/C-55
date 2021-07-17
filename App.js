import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av'; 

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay: true}
     )

  }

  render() {
    return (
      <TouchableOpacity style={{
        marginLeft: 100,
        borderWidth: 1,
        borderColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderRadius: 100,
      
      }} onPress={this.playSound}>
      <Text style={{fontWeight: 'bold', 
      fontSize: 20, color: 'blue'}}>Press Me</Text>
      </TouchableOpacity>

     // <Button title="Sound Button" color="red" onPress={this.playSound} />

    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


