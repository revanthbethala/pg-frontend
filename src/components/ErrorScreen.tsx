import { commonStyles } from "@/styles/commonStyle";
import { styles } from "@/styles/formStyle";
import { Text, View } from "react-native";

type ErrorProps = {
    message?: string;
};

export default function ErrorScreen({ message }: ErrorProps) {
    if (!message) return "Something went wrong";

    return <View style={commonStyles.container}>
        <Text style={styles.error}>{message}</Text>
    </View>;
}

