import React from 'react';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home';

const App = () => {
  const [loaded] = useFonts({
    "georgia-regular" : require('./src/assets/fonts/georgia-regular.ttf'),
    "roboto-700" : require('./src/assets/fonts/roboto-700.ttf'),
    "roboto-regular" : require('./src/assets/fonts/roboto-regular.ttf'),
})

if(!loaded){
return null;
}
  
  return (
   <Home/>
  )
}

export default App;