import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

interface SingUpProps {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [form, setform] = useState<SingUpProps>({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white font-semibold mt-10 text-semibold">
            Sign up to Aora
          </Text>
          <FormField
            title="Username"
            placeholder="Enter your username"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="flex-row gap-2 pt-5 justify-center">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/(auth)/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
