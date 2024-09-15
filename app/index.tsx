import HomeScreenContent from "@/components/home-screen";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreenContent />
    </SafeAreaView>
  );
}
