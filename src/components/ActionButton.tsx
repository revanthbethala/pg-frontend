import { colors } from '@/styles/colors'
import { commonStyles } from '@/styles/commonStyle'
import { ArrowRight } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type ActionButtonProps = {
    onPress: () => void,
    title: string
}

const ActionButton = ({ onPress, title }: ActionButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={commonStyles.actionContainer}>
                <Text style={commonStyles.actionText}>{title} </Text>
                <ArrowRight color={colors.primary} size={18} />
            </View>
        </TouchableOpacity>
    )
}

export default ActionButton