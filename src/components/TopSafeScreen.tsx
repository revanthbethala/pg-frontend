import { colors } from '@/styles/colors'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const TopSafeScreen = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView edges={["top"]} style={[screenStyles.container]}>
            {children}
        </SafeAreaView>
    )
}

const screenStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        marginBottom: 20,
        flex: 1
    }
})