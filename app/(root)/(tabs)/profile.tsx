import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useClerk } from "@clerk/clerk-expo";
import CustomButton from "@/components/CustomButton";

const Profile = () => {
  const { signOut } = useClerk();
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <View className="my-8">
        <CustomButton title="Sign Out" bgVariant={"danger"} onPress={signOut} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
