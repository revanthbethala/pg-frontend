import { Text } from "react-native";
import { styles } from "@/styles/formStyle";

type ErrorTextProps = {
    message?: string;
};

export default function ErrorText({ message }: ErrorTextProps) {
    if (!message) return null;

    return <Text style={styles.error}>{message}</Text>;
}