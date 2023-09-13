import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const handlePress = () => {
    const url = 'https://www.youtube.com/watch?v=GEDOKU_YhzQ&ab_channel=TV2Play';
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      {/* Text */}
      <Text style={styles.title}>Magnum Classic</Text>

      {/* Italian flag */}
      <View style={styles.flagContainer}>
        <View style={styles.greenFlag}></View>
        <View style={styles.whiteFlag}></View>
        <View style={styles.redFlag}></View>
      </View>

      {/* Bicycle icon */}
      <Icon name="bicycle" size={80} color="#007AFF" style={styles.icon} />

      {/* Custom button */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press for Magnum</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 40,  // Increased padding
  },
  title: {
    color: '#333333',
    fontSize: 40,  // Increased font size
    fontWeight: '700',  // Bold weight
    textAlign: 'center',
    marginBottom: 40,  // Increased margin
  },
  flagContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,  // Increased margin
  },
  greenFlag: {
    flex: 1,
    height: 200,
    backgroundColor: "green",
  },
  whiteFlag: {
    flex: 1,
    height: 200,
    backgroundColor: "white",
  },
  redFlag: {
    flex: 1,
    height: 200,
    backgroundColor: "red",
  },
  icon: {
    color: '#333333',  // Changed to iOS blue color
    marginBottom: 40,  // Increased margin
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 20,  // Increased padding
    borderRadius: 12,  // Slightly more rounded corners
    borderWidth: 2,  // Thicker border
    borderColor: '#333333',
  },
  buttonText: {
    color: '#333333',
    fontSize: 18,  // Increased font size
    fontWeight: '600',  // Medium-bold weight
    textAlign: 'center',
  },
});
