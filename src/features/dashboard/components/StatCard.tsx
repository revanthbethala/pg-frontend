import { Text, View } from "react-native";
import { styles } from "@/features/dashboard/styles/dashboard.styles";

type StatCardProps = {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    fullWidth?: boolean;
};

export function StatCard({
    title,
    value,
    icon,
    fullWidth,
}: StatCardProps) {
    return (
        <View style={[styles.card, fullWidth && styles.fullWidth]}>
            <View style={styles.iconContainer}>{icon}</View>

            <Text style={styles.cardTitle}>{title}</Text>

            <Text style={styles.cardValue}>{value}</Text>
        </View>
    );
}
