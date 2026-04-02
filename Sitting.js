import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Setting() {
  return (
    <View style={styles.container}>

   
      <Text style={styles.heading}>Account Settings</Text>

     
      <View style={styles.card}>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="person-outline" size={22} color="#555" />
          <Text style={styles.text}>Personal information</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="bag-outline" size={22} color="#555" />
          <Text style={styles.text}>Lifestyle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="cash-outline" size={22} color="#555" />
          <Text style={styles.text}>Payments and payouts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="language-outline" size={22} color="#555" />
          <Text style={styles.text}>Language and currency</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="notifications-outline" size={22} color="#555" />
          <Text style={styles.text}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="hand-left-outline" size={22} color="#555" />
          <Text style={styles.text}>Privacy and sharing</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    top:100
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    elevation: 3, 
    top:20
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    gap: 15,
  },

  text: {
    fontSize: 16,
    color: "#333",
  },
});