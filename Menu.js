import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome to Eatmates 🍔</Text>
      <Text style={styles.subtitle}>Find your favorite food</Text>

      
      <TextInput style={styles.searchBox} placeholder='🔍 Search food...' />

      <Image 
        source={require('./assets/Girl.png')} 
        style={styles.image} 
        resizeMode="contain"
      />

      
      <View style={styles.categoryRow}>
        <TouchableOpacity style={styles.category}>
          <Text>🍕</Text>
          <Text>Pizza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text>🍔</Text>
          <Text>Burger</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text>🍟</Text>
          <Text>Snacks</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Explore Menu
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    top:100
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    bottom:20
  },

  subtitle: {
    color: "#777",
    fontWeight: "bold",
    marginBottom: 18,

  },

  searchBox: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 250,
  },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  category: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 80,
  },

  button: {
    backgroundColor: "#187498",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
});