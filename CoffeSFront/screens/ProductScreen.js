import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductScreen() {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/beansBackground1.png")}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4" >

      </SafeAreaView>
    </View>
  );
}
