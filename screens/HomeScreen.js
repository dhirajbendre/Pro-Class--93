import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AppHeader from '../components/AppHeader'
import db from '../config';
import { getDatabase, ref, child, get } from "firebase";

var t = db.ref('isLikePressed/' + 'likePressed' + '/' );

export default class HomeScreen extends React.Component {
constructor(){
  super();
  this.state={
    likes:0,
    dislikes:0
  }
}
likecount=()=>{
  this.setState({likes:this.state.likes+1});
}
dislikecount=()=>{
  this.setState({dislikes:this.state.dislikes+1});
}

isLikedPressed(){
  var like = db.ref('isLikePressed/' + '/').update({
    likePressed:1,
  });
}
disLikedPressed(){
  var dislike = db.ref('disLikePressed/' + '/').update({
    dLikePressed: 1,
  });
}
  render(){
    return(
    <View>
      <AppHeader/>
      
   <TouchableOpacity style={{
     marginTop:20,
     marginLeft:85,
     borderWidth:8,
     borderColor:'#dbe4eb',
     alignItems:'center',
     justifyContent:'center',
     width:160,
     height:160,
     backgroundColor:'#39FF14',
     borderRadius:100,
     strokeWeight:1000,
   }} onPress ={() =>this.props.navigation.navigate('ReadComplain') }   >
   <Text style={[styles.buttonText1]}
   >𝐑𝐞𝐚𝐝 𝐂𝐨𝐦𝐩𝐥𝐚𝐢𝐧</Text>
   </TouchableOpacity>

      <TouchableOpacity style={{
     marginTop:20,
     marginLeft:85,
     borderWidth:8,
     borderColor:'#dbe4eb',
     alignItems:'center',
     justifyContent:'center',
     width:160,
     height:160,
     backgroundColor:'red',
     borderRadius:100,
     strokeWeight:10,
   }} onPress ={()=> this.props.navigation.navigate('AddComplain')} >
   <Text style={[styles.buttonText]}
   >𝐀𝐝𝐝 𝐂𝐨𝐦𝐩𝐥𝐚𝐢𝐧</Text>
   </TouchableOpacity>


    
     
   


<Text style={[styles.buttonText,{marginLeft:120, marginTop:30}]}>Rate Us</Text>
      <TouchableOpacity style={{
        marginTop:20,
        marginLeft:110,
        color:'blue',
      }} onPress={
        this.likecount
  }>
  <Text style={{
          fontSize:30,
      }}>{this.state.likes}</Text>
      <Text style={{
          fontSize:30
      }}>👍</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        marginTop:-75,
        marginLeft:200
      }} onPress={
        this.dislikecount
      } >
      <Text style={{
          fontSize:30
      }}>{this.state.dislikes}</Text>
      <Text style={{
          fontSize:30
      }}>👎</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
 button:{
    backgroundColor:'blue',
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:2,
    borderRadius:15,
    marginTop:50,
    width:200,
    height:50,
    textAlign:'center'
  },
  buttonText:{
    fontSize:19,
    color:'white',
    //fontWeight:'bold'
  },
  buttonText1:{
    fontSize:18,
    color:'blue',
  },

})