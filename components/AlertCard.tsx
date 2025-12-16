import { View, Text, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";
import Colors from "../constants/Colors";

export default function AlertCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>HIGH SEVERITY CRASH</Text>

      <Text style={styles.item}>📍 Location: 6.9271° N, 79.8612° E</Text>
      <Text style={styles.item}>🏠 Address: Colombo</Text>
      <Text style={styles.item}>🚗 Vehicle: Car</Text>
      <Text style={styles.item}>👥 Passengers: 3</Text>
      <Text style={styles.item}>⏰ Time: 19:10</Text>

      <View style={styles.buttonRow}>
        <ActionButton text="Dispatch Unit" />
        <ActionButton text="View Location" secondary />
      </View>

      <View style={styles.buttonRow}>
        <ActionButton text="Call Vehicle" />
        <ActionButton text="Medical Priority" secondary />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 15,
  },
  title: {
    color: Colors.danger,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    color: Colors.white,
    fontSize: 14,
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
