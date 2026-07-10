import { commonStyles } from "@/styles/commonStyle";
import { styles } from "@/styles/formStyle";
import { Text } from "react-native";
import { SafeScreen } from "./SafeScreen";

type ErrorProps = {
    message?: string;
};

export default function ErrorScreen({ message }: ErrorProps) {
    if (!message) return "Something went wrong";

    return <SafeScreen>
        <Text style={[styles.error, commonStyles.centeredText]}>{message}</Text>
    </SafeScreen>;
}

