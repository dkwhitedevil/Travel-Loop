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

function CarRentalScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carType: "Sedan",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
    insurance: "None",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Car Rental Details:", formData);
    Alert.alert("Success", "Car rental booked successfully!");
    // Logic to send formData to the server can be added here
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <Text style={styles.heading}>Book Your Car Rental</Text>

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

      {/* Email Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(value) => handleChange("email", value)}
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

      {/* Car Type Picker */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Car Type:</Text>
        <Picker
          selectedValue={formData.carType}
          onValueChange={(value) => handleChange("carType", value)}
          style={styles.picker}
        >
          <Picker.Item label="Sedan" value="Sedan" />
          <Picker.Item label="SUV" value="SUV" />
          <Picker.Item label="Hatchback" value="Hatchback" />
          <Picker.Item label="Electric" value="Electric" />
        </Picker>
      </View>

      {/* Pickup Location Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Pickup Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter pickup location"
          value={formData.pickupLocation}
          onChangeText={(value) => handleChange("pickupLocation", value)}
        />
      </View>

      {/* Dropoff Location Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Dropoff Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter dropoff location"
          value={formData.dropoffLocation}
          onChangeText={(value) => handleChange("dropoffLocation", value)}
        />
      </View>

      {/* Pickup Date Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Pickup Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={formData.pickupDate}
          onChangeText={(value) => handleChange("pickupDate", value)}
        />
      </View>

      {/* Dropoff Date Input */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Dropoff Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={formData.dropoffDate}
          onChangeText={(value) => handleChange("dropoffDate", value)}
        />
      </View>

      {/* Insurance Picker */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Insurance:</Text>
        <Picker
          selectedValue={formData.insurance}
          onValueChange={(value) => handleChange("insurance", value)}
          style={styles.picker}
        >
          <Picker.Item label="None" value="None" />
          <Picker.Item label="Basic Coverage" value="Basic" />
          <Picker.Item label="Full Coverage" value="Full" />
        </Picker>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Book Car</Text>
      </TouchableOpacity>

      {/* Add space below the button */}
      <View style={styles.spaceBelow}></View>
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
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
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
  spaceBelow: {
    marginBottom: 30, // Adjust space as needed
  },
});

export default CarRentalScreen;
