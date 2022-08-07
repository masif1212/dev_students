import React from "react";
import {
  Text,
  Dimensions,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const edges = useSafeAreaInsets();

  return (
    <View style={{ backgroundColor: "#ffffff", height: "100%" }}>
      <ScrollView>
        <View
          style={{
            paddingRight: 0,
            paddingTop: edges.top + 0,
            paddingBottom: 25,
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/spologo.png")}
              style={{
                width: Dimensions.get("window").width - 80,
                height: 220,
                borderRadius: 15,
                marginTop: 20,
              }}
            ></Image>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.loginText}>Login With Your Credential</Text>
          </View>

          <View
            style={{
              marginTop: 0,
            }}
          >
            <View style={{ margin: 10 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AdminLogin", { screen: "AdminLogin" })
                }
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                  width: "100%",
                  marginVertical: 5,
                  borderRadius: 50,
                  marginBottom: 0,
                  fontWeight: "bold",
                  backgroundColor: "#307C26",
                  elevation: 2,
                  marginTop: 50,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                    textShadowColor: "rgba(0, 0, 0, 0.50)",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
                  }}
                >
                  Super Admin
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("UserLogin", { screen: "UserLogin" })
                }
                // onPress={() => navigation.navigate("TeacherLandingPage", { screen: "TeacherLandingPage" }) }

                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                  width: "100%",
                  marginVertical: 5,
                  borderRadius: 50,
                  marginBottom: 50,
                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  elevation: 1,
                  marginTop: 50,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                    textShadowColor: "rgba(0, 0, 0, 0.20)",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
                  }}
                >
                  Admin
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TeacherLoginScreen", {
                    screen: "TeacherLoginScreen",
                  })
                }
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                  width: "100%",

                  borderRadius: 50,

                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  elevation: 1,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                    textShadowColor: "rgba(0, 0, 0, 0.20)",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
                  }}
                >
                  Teacher
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    margin: 20,
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 35,
    paddingBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.50)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  loginText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#696969",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttonStyle: {
    backgroundColor: "#5062BD",
  },
});
