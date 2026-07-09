import {
    Building2,
    LayoutDashboard,
    Users
} from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/styles/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const tabs = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Branches", icon: Building2 },
    { name: "Profile", icon: Users },
];


export default function TabBar({ state, navigation }: Pick<BottomTabBarProps, "state" | "navigation">) {
    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => {
                const focused = state.index === index;
                const Icon = tab.icon;
                return (
                    <View
                        key={tab.name}
                        style={styles.tabItem}
                    >
                        <Pressable
                            onPress={() => navigation.navigate(tab.name)}
                            style={[styles.tab, focused && styles.activeTab]}>
                            <Icon size={22} color={focused ? colors.primary : colors.inactive} />

                        </Pressable>
                        <Text style={[styles.label]}>
                            {tab.name}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: 16,
        marginBottom: 16,
        padding: 6,
        backgroundColor: colors.surface,
        borderRadius: 40,
        elevation: 8,
    },
    tabItem: {
        flex: 1,
        alignItems: "center",
    },
    tab: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 50,
    },
    activeTab: {
        backgroundColor: colors.background,
    },
    label: {
        marginTop: 4,
        color: colors.inactive,
        fontSize: 12,
        fontWeight: 500
    },
});