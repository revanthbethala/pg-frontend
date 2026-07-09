import { StyleSheet, TouchableOpacity, View } from 'react-native';



import { LucideProvider, Plus } from 'lucide-react-native';
import React from 'react';
import { colors } from '@/styles/colors';

type FloatingButtonProps = {
    onOpen: () => void;
    children?: React.ReactNode;
};

export const FloatingButton = ({ onOpen, children }: FloatingButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={floatingBtnStyle.container}
            onPress={onOpen}>
            <LucideProvider size={24} color={colors.surface}>
                <View style={floatingBtnStyle.iconContainer}>
                    {children ??
                        <Plus size={20} color={colors.surface} />
                    }
                    {children && <View style={floatingBtnStyle.badge}>
                        <Plus size={8} strokeWidth={6} color={colors.primary} />
                    </View>}
                </View>

            </LucideProvider>
        </TouchableOpacity>
    )
}




const floatingBtnStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1000,
        bottom: 25,
        right: 25,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    button: {
        padding: 12,
        paddingHorizontal: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.surface,
        textAlign: 'center',
        elevation: 10
    },
    iconContainer: {
        position: 'relative',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
    },

});