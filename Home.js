import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Welcome Suraj </Text>

      <View style={styles.card}>
        <Text style={styles.cardText}> You are successfully logged in!</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("nav")}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.logout}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  heading: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 40,
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    width: "100%",
  },

  cardText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  logout: {
    marginTop: 10,
  },

  logoutText: {
    color: "#f87171",
    fontSize: 16,
    fontWeight: "bold",
  },
});