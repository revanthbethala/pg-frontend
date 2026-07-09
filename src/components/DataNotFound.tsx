import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@/styles/colors'
import { commonStyles } from '@/styles/commonStyle'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        fontWeight: 600,
        color: colors.text
    }
})

export const DataNotFound = ({ message = "No Data found" }: { message: string }) => {
    return (
        <View style={commonStyles.container}>
            <Text style={styles.container}>{message}</Text>
        </View>
    )
}
