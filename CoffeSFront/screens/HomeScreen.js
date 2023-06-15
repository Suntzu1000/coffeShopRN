import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { themeColors } from "../theme";
import { StatusBar } from "expo-status-bar";
import {MapPinIcon} from "react-native-heroicons/solid"
import {BellIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"

export class HomeScreen extends Component {
  render() {
    return (
      <View className="flex-1 relative bg-white">
        <StatusBar />
        <Image
          source={require("../assets/images/beansBackground1.png")}
          className="w-full absolute -top-5 opacity-10"
          style={{ height: 220 }}
        />
        <SafeAreaView className="flex-1" >
        <View className="px-4 flex-row justify-between items-center">
            <Image
            source={require("../assets/images/avatar.png")}
            className="h-9 w-9 rounded-full" />
            <View className="flex-row items-center space-x-2" >
                <MapPinIcon size="25" color={themeColors.bgLight}/>
                <Text className="text-base font-semibold">Brazil, Goiás</Text>
            </View>
            <BellIcon size="27" color="black" />
        </View>

        <View className="mx-5 mt-14" >
            <View className="flex-row justify-center rounded-full p-1 bg-[#e6e6e6" >
                <TextInput placeholder="Procurar" className="p-4 flex-1 font-semibold text-gray-700"/>
                <TouchableOpacity className="rounded-full p-2" style={{backgroundColor: themeColors.bgLight}} >
                    <MagnifyingGlassIcon size="25" strokeWidth={2} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;
