
import { StyleSheet,Text, TextInput, View, TouchableOpacity } from "react-native";


export default function Login(){

    return(

        <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Login Page</Text>
         <View style={styles.from}>
        <Text style={styles.label}>E-Mail</Text>
        <TextInput style={styles.input} placeholder="Enter The E-Mail"  />
         <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter The Password"  />
        
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text>Create New Account??{''}
            
        </Text>
        </View>

        </View>
    
    )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#8689f5',
    alignItems: 'center',
    justifyContent: 'center',
    },
      from:{
    width: '85%',
    padding:30,
    backgroundColor:'white',
    borderRadius: 50,
  },
  heading:{
    fontSize:25,
    fontWeight:600,
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
  borderColor:"red"
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
})