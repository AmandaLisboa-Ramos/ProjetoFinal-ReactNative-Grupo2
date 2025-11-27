import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
  },

  title: {
    fontSize: 45,
    fontFamily: "MountainsofChristmas_700Bold",
    marginBottom: 8,
    color: "#ff9d00ff",
    textShadowColor: "#8B4513",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 1,
  },

  subtitle: {
    fontSize: 20,
    color: "#ff9d00ff",
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "MountainsOfChristmas_400Regular",
  },
  resultContainer: {
    backgroundColor: "#5196347b",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
  },
  card: {
    width: "80%",
    borderRadius: 14,
    padding: 16,
    marginBottom: 40,
    backgroundColor: "rgba(0,0,0,0.0)",
  },

  cardTitle: {
    fontSize: 24,
    color: "#FF0000",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#154d1aff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },

  scoreLabel: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  scoreValue: {
    fontSize: 22,
    color: "#FFB300",
    fontWeight: "bold",
  },

  button: {
    width: "75%",
    backgroundColor: "#154d1aff",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
