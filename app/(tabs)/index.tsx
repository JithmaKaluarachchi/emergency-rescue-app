import { View, Text, StyleSheet, ScrollView } from "react-native";
import AlertCard from "../../components/AlertCard";
import Colors from "../../constants/Colors";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🚨 Emergency Rescue Team</Text>
      <Text style={styles.subHeader}>Critical Alert System</Text>

      <AlertCard />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Response Priority: HIGH
        </Text>
        <Text style={styles.footerText}>
          ETA: 5 minutes
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 15,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.white,
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: Colors.card,
    borderRadius: 10,
  },
  footerText: {
    color: Colors.white,
    fontSize: 14,
  },
});
