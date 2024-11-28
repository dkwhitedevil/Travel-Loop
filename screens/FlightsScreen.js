import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

function FlightsScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    departure: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelClass: "Economy",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Booking Details:", formData);
    Alert.alert("Success", "Flight booked successfully!");
    // Logic to send formData to the server can be added here
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <Text style={styles.heading}>Book Your Flight Ticket</Text>

      {/* Name Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(value) => handleChange("name", value)}
        />
      </View>

      {/* Phone Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(value) => handleChange("phone", value)}
        />
      </View>

      {/* Departure Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Departure:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter departure location"
          value={formData.departure}
          onChangeText={(value) => handleChange("departure", value)}
        />
      </View>

      {/* Destination Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Destination:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter destination location"
          value={formData.destination}
          onChangeText={(value) => handleChange("destination", value)}
        />
      </View>

      {/* Departure Date Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Departure Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={formData.departureDate}
          onChangeText={(value) => handleChange("departureDate", value)}
        />
      </View>

      {/* Return Date Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Return Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={formData.returnDate}
          onChangeText={(value) => handleChange("returnDate", value)}
        />
      </View>

      {/* Travel Class Picker */}
      <View style={styles.formGroup}>
  <Text style={styles.label}>Travel Class:</Text>
  <View style={styles.pickerContainer}>
    <Picker
      selectedValue={formData.travelClass}
      onValueChange={(value) => handleChange("travelClass", value)}
      style={styles.picker}
    >
      <Picker.Item label="Economy" value="Economy" />
      <Picker.Item label="Business" value="Business" />
      <Picker.Item label="First Class" value="First" />
    </Picker>
  </View>
</View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Book Flight</Text>
      </TouchableOpacity>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FlightsScreen;
