import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>ℂ𝕠𝕞𝕡𝕝𝕒𝕚𝕟 𝔸𝕡𝕡</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
  },
  text:{
    color: 'white',
    padding: 4,
    fontSize: 25,
 
    textAlign: 'center',
    
  }
});

export default AppHeader;