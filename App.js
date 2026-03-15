import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome To Singup Page</Text>
      
      <View style={styles.from}>
        <Text style={styles.label}> USERNAME </Text>
        <TextInput style={styles.input} placeholder='Enter The Name' />
        <Text style={styles.label}> E-mail </Text>
        <TextInput style={styles.input} placeholder='Enter The E-Mail'  />
        <Text style={styles.label}> Contact </Text>
        <TextInput style={styles.input} placeholder='Enter The Number' />
        <Text style={styles.label}> PASSWORD </Text>
        <TextInput style={styles.input} placeholder='Strong Password'  />

         <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

      <Text>Already have an account??
        
      </Text>

      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea7d7d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  from:{
    width: '85%',
    padding:'30',
    backgroundColor:'white',
    borderRadius: 50,
  },
  heading:{
    fontSize:25,
    fontWeight:'600',
    marginBottom:20,
  },
  label:{
  fontSize:20,
  marginTop:10, 
  marginBottom:10,
  fontWeight:'bold'
 },
 input:{
  borderWidth:2,
  padding:10,
  borderRadius:15,
  borderColor:"blue"
 },
button:{
  backgroundColor:"red",
  padding:12,
  borderRadius:8,
  alignItems:"center",
  marginTop:15
},
buttonText:{
  color:"#fff",
  fontSize:16,
  fontWeight:"bold"
}

});       
