import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  // return (
  //   <>
  //     <Text>header</Text>
  //     <Slot />
  //     <Text>footer</Text>
  //   </>
  // );

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
