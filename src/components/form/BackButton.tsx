import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { commonStyles } from '@/styles/commonStyle'
import { showConfirmAlert } from '@/utils/confirmAlert'

const BackButton = ({ onClose, isDirty }: { onClose: () => void, isDirty: boolean }) => {
    const handlePress = () => {
        if (isDirty) {
            showConfirmAlert({
                title: 'Leave',
                message: 'You have unsaved changes. Do you want to leave?',
                confirmText: 'Leave',
                cancelText: 'Stay',
                onConfirm: onClose,
            });
        }
        else {
            onClose()
        }
    }
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={handlePress}
        >
            <Text style={[commonStyles.actionText, commonStyles.actionDestructive, commonStyles.centeredText]}>
                Cancel
            </Text>
        </TouchableOpacity>
    )
}

export { BackButton }

