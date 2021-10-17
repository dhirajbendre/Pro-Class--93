import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'





export default class AddComplaint extends React.Component{
constructor(props){
  super(props);
  this.state={
    title:'',
    complainee:'',
    complaint:'',
  }
}
 
 submitComplaint =() =>{
   db.collection("complaints").add({
     title:this.state.title,
     complainee:this.state.complainee,
     compalint:this.state.complaint
   })
   this.setState({
     title:'',
     complainee:'',
     complaint:'',
   })
 }
  render(){
    return(
    <View>
      <Text style={styles.header}>Add Complain</Text>
      <Text style={styles.parag}>Add Complain</Text>
      <TouchableOpacity style={styles.backb} onPress={() => {this.props.navigation.navigate('HomeScreen')}}>
        <Text>Back</Text>
      </TouchableOpacity>

                    <TextInput 
                    placeholder="Title"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>


                  <TextInput 
                    placeholder="Complainee"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            complainee: text
                        })
                    }}
                    value={this.state.complainee}
                    style={styles.title}/>

                    
<TextInput 
                    placeholder="Complaint"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            complaint: text
                        })
                    }}
                    value={this.state.complaint}
                    style={styles.title}
                    multiline={true} />


                 <TouchableOpacity
                    style={styles.submitButton}
                   onPress = {this.submitQuery}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

    </View>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor:'blue',
    justifyContent:'center',
    textAlign:'center',
    height:50,
    textAlignVertical:'center',
    fontSize:30,
    fontWeight:'bold',
  },
complaint:{
  height: 250,
  borderWidth: 2,
  margin: 10, 
  padding: 6,
},

complainee:{
  height: 250,
  borderWidth: 2,
  margin: 10, 
  padding: 6,
},
  submitButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#1D3557',
    width: 80,
    height: 40,color:'black',
},
  parag:{ 
    marginTop:20,
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    marginLeft:5,
    marginRight:5
  },
  backb:{
    marginTop:100,
    backgroundColor:'blue',
    width:50,
    height:20,
    textAlign:'center',
    borderRadius:10
  },
  title:{
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color:'black',
    padding: 6,

},
buttonText: {
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
  color:'white',
}
})