import { SafeAreaView } from "react-native-safe-area-context";
import { Register } from "../(auth)/register";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Register />
    </SafeAreaView>
  );
}
