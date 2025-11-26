import { StyleSheet } from "react-native";  

export const questionStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    marginBottom: 20,
  },

  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "#333",
  },

  optionButton: {
    padding: 14,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 10,
  },

  optionText: {
    fontSize: 16,
    color: '#333',
  },

  correctOption:{
    backgroundColor: '#4caf50',
  },
  
  wrongOption:{
    backgroundColor: '#e53935',
  },
});
