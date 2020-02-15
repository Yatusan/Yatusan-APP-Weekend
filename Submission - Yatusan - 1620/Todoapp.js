import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity, Button, Image} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';


export default class App extends React.Component {

  state = {
    inputValue: '',
    todos: []
  };

  changeText = value=> {
    this.setState({
      inputValue: value
    });
  };

  addItem = () => {
    if(this.state.inputValue !== ''){
      this.setState(prevState=> {
        const newToDo = {
          title: this.state.inputValue,
          createdAt: Date.now(),
        };

        var todos = this.state.todos.concat(newToDo);

        this.setState({
          todos: todos,
        });
      });
    }
  };

  render() {
    const todos = this.state.todos.reverse().map((todo,key)=>
    <View style={styles.background}>
      <TouchableOpacity style={{
        width: 20,
        height: 20,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'white',
        margin: 15
      }}>
      </TouchableOpacity>

      <Text style={{paddingLeft: 5, marginTop: 10, fontSize: 28, color: 'red'}}>{todo.title}</Text>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
    </View>
    );
    


    return (
      <LinearGradient colors={['#0A273E','#FF3E00']} style={{flex:1}}>
        <StatusBar barStyle="light-content" />
       
  
        <View> 
          <TextInput
          
            style={styles.input}
            onSubmitEditing={this.addItem}
            onChangeText={this.changeText}
            placeholder = "Type here to add a Todo"
            value={this.state.inputValue}
            placeholderTextColor = {'#757575'}
            multiline={true}
            autoCapitalize="sentences"
            underlineColorAndroid = "transparent"
            selectionColor = {'white'}
            maxLength = {30}
            returnKeyType="done"
            autoCorrect={false}
            blurOnSubmit={true}
          />
        </View>

        <View>
        {todos}
        </View>

        
      </LinearGradient>
      
      
    );
  }
}

const styles={
  input:
  {
    marginTop: 30,
    paddingTop:10,
    paddingRight : 15,
    paddingLeft: 15,
    fontSize: 25,
    color: 'white',
    fontWeight: '500'
  },


background:
{
  flexDirection: 'row',
  marginTop: 20
}
}