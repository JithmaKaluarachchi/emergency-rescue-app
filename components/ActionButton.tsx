import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function ActionButton({
  text,
  secondary = false,
}: {
  text: string;
  secondary?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        secondary && { backgroundColor: Colors.secondary },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    width: "48%",
  },
  text: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
  },
});
