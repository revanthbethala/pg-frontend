import { commonStyles } from '@/styles/commonStyle'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeScreen = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            {children}
        </SafeAreaView>
    )
}

export { SafeScreen }