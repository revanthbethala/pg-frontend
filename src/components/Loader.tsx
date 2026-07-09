import React from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '@/styles/colors'

const Loader = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' color={colors.primary} />
            <Text>
                Loading
                ...
            </Text>
        </SafeAreaView>
    )
}

export default Loader