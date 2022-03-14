import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SectionList } from "react-native";

const DATA = [
  {
    title: "Promoted",
    data: ["Alexa", "Cortona"],
  },
  {
    title: "All",
    data: [
      "Siri",
      "Google Assistant",
      "Bixby",
      "SegaEmulator",
      "BOB",
      "Samantha",
      "Chris",
      "Mike",
      "Taylor",
    ],
  },
];

export const AssistantShopScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        renderItem={({ item }) => (
          <Text
            style={styles.item}
            onPress={() => navigation.navigate("SingleProgram")}
          >
            {item}
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  sectionHeader: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});
