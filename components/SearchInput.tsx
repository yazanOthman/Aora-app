import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface SearchInputProps {
  value: string;
  handleChangeText: (e: string) => void;
}

const SearchInput = ({ value, handleChangeText }: SearchInputProps) => {
  return (
    <View className="w-full h-16 border-2 border-black-200 px-4 bg-black-100 rounded-xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="flex-1 text-white font-semibold text-base mt-0.5 font-pregular"
        placeholder="Search for a video topic"
        value={value}
        onChangeText={handleChangeText}
        placeholderTextColor="#7b7b8b"
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
