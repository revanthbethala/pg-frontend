import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import { capitalize } from '@/utils/capitalize';
import { colors } from '@/styles/colors';

interface ScreenHeaderProps {
    title: string;
    canGoBack?: boolean;
    shouldCapitalize?: boolean;
    onBackPress?: () => void;
}

export function ScreenHeader({ title, shouldCapitalize = true, canGoBack = true, onBackPress }: ScreenHeaderProps) {
    const navigation = useNavigation();

    const handleBack = () => {
        if (onBackPress) {
            onBackPress();
        } else if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    const formattedTitle = shouldCapitalize ? capitalize(title) : title;

    return (
        <View style={styles.rowContainer} >
            <Pressable onPress={handleBack}>
                {canGoBack && <ArrowLeft size={20} strokeWidth={5} color={colors.text} />}
            </Pressable >
            <Text style={styles.containerTitle}>{formattedTitle}</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingBottom: 16,
        elevation: 8
    },
    containerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.text,
    },
});
