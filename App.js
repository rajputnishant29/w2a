import {useState} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  ToastAndroid,
  TextInput,
  ActivityIndicator,
  Switch,
  StatusBar,
  Image,
} from 'react-native';

const App = () => {
  const sum = () => {
    ToastAndroid.show('press again to exit the app', ToastAndroid.LONG);
  };

  const [name, setName] = useState('0');
  const [darkMode, setdarkMode] = useState(false);

  return (
    <View
      style={{backgroundColor: darkMode == true ? 'gray' : 'white', flex: 1}}>
      {/* <Text style={{
        color:"red",
        fontSize:23,
        fontWeight:"900",
        fontStyle:"italic",
      }} >
        KILLER IN THE WILLOWSJust do it, so the T-shirts say. Just pick up the
        gun, pull the trigger—but maybe aim first, aim at the upper sternum and
        then pull the trigger, congratulating yourself that at last, in your
        long, passive life, you have shot somebody dead. So she did, and thus
        she became a murderer. She slipped through the night after that and
        disappeared into the willows to wash off any blood that spattered onto
        her clothing. The willows were thickl...
      </Text>

      <Button title='Buy Now' color="black" onPress={sum}/>
 */}
      {/* <Button
        title="click me !"
        onPress={ () => {
          console.log(name);
        }
      }
      />
      <TextInput
        placeholder="Enter your Email"
        style={{
          color: 'red',
          fontSize: 23,
          borderWidth: 2,
          borderColor: 'red',
          margin: 50,
        }}
        keyboardType="default"
        maxLength={10}
        // autoCapitalize={true}
        // secureTextEntry={true}
        value={name}
        onChangeText={value => {
          setName(value)
        }}
      /> */}

      <Switch
        value={darkMode}
        onChange={() => {
          setdarkMode(!darkMode);
        }}
      />

      <StatusBar barStyle={darkMode ? 'dark-content' : 'light-content'} />

      {/* <Image source={require('./img1.png')} style={{
        width:300,
        height:500,
        resizeMode:"contain"
      }}/> */}

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyZGVufGVufDB8fDB8fHww',
        }}
        style={{
          width: 300,
          height: 500,
          resizeMode: 'contain',
        }}
      />

      {/* <ActivityIndicator color="red" size={64}/> */}
    </View>
  );
};

export default App;