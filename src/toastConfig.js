import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const toastConfig = {
  success: ({ text1 }) => (
    <View style={styles.success}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  ),
  error: ({ text1 }) => (
    <View style={styles.error}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  ),
  info: ({ text1 }) => (
    <View style={styles.info}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  success: {
    height: 45,
    width: '90%',
    backgroundColor: '#28a745',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  error: {
    height: 45,
    width: '90%',
    backgroundColor: '#dc3545',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  info: {
    height: 45,
    width: '90%',
    backgroundColor: '#17a2b8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 8
  }
});
