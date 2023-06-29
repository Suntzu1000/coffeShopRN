import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeftIcon,
  ArrowLeftCircleIcon,
  HeartIcon,
  StarIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

export default function ProductScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [size, setSize] = useState("pp");
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
      <SafeAreaView className="space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className="rounded-full border-2 border-white p-2">
            <HeartIcon size="24" strokeWidth={1.2} color="white" />
          </TouchableOpacity>
        </View>

        <View
          className="flex-row justify-center"
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}
        >
          <Image source={item.image} className="h-60 w-60 " />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgLight }}
          className="flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90"
        >
          <StarIcon size="15" color="white" />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="mx-4 flex-row justify-between items-center ">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {item.name}
          </Text>
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-semibold"
          >
            {item.price}
          </Text>
        </View>
        <View className="mx-4  space-y-2">
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold"
          >
            Tamanho de Café
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => setSize("pp")}
              className="px-8 p-3 rounded-full"
              style={{
                backgroundColor:
                  size === "pp" ? themeColors.bgLight : "rgba(0.0.0.0.07",
              }}
            >
              <Text className={size == "pp" ? "text-white" : "text-gray-700"}>
                Pequeno
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSize("mm")}
              className="px-8 p-3 rounded-full"
              style={{
                backgroundColor:
                  size === "m" ? themeColors.bgLight : "rgba(0.0.0.0.07",
              }}
            >
              <Text className={size == "m" ? "text-white" : "text-gray-700"}>
                Médio
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSize("gg")}
              className="px-8 p-3 rounded-full"
              style={{
                backgroundColor:
                  size === "gg" ? themeColors.bgLight : "rgba(0.0.0.0.07",
              }}
            >
              <Text className={size == "gg" ? "text-white" : "text-gray-700"}>
                Grande
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mx-4 space-y-4 h-28">
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold"
          >
            Sobre
          </Text>
          <Text className="text-gray-600">{item?.desc}</Text>
        </View>
        <View className="flex-row justify-between items-center mx-4 mb-2">
          <View className="flex-row items-center space-x-1">
            <Text className="text-base text-gray-700 font-semibold opacity-60">
              Volume
            </Text>
            <Text className="text-base text-gray-700 font-semibold">
              {item.volume}
            </Text>
          </View>
          <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
            <TouchableOpacity>
              <MinusIcon size="20" strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
            <Text
              color={{ color: themeColors.text }}
              className="font-extrabold text-lg"
            >
              2
            </Text>
            <TouchableOpacity>
              <PlusIcon size="20" strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between items-center mx-4">
          <TouchableOpacity className="p-4 rounded-full border border-gray-400">
            <ShoppingBagIcon size="30" color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgLight }}
            className="p-5 rounded-full flex-1 ml-3"
          >
            <Text className="text-center text-base font-semibold text-white">
              Comprar
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
