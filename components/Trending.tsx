import {
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Video, ResizeMode } from "expo-av";
import React, { useRef, useState } from "react";
import { icons } from "@/constants";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut: any = {
  1: {
    scale: 1,
  },
  0: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }: any) => {
  const [play, setPlay] = useState(false);
  console.log(activeItem, item.$id);
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Text className="text-white">Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          className="relative justify-center items-center"
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] 
            overflow-hidden my-5 shadow-lg shadow-black-40"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }: any) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  const video = useRef(null);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems?.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  const offset: any = { x: 170 };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={offset}
      onViewableItemsChanged={onViewableItemsChanged}
      horizontal
    />
  );
};

export default Trending;
