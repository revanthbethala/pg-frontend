import { Alert } from 'react-native';

type ConfirmAlertProps = {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
};

export const showConfirmAlert = ({
  title = 'Confirmation',
  message,
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}: ConfirmAlertProps) => {
  Alert.alert(title, message, [
    {
      text: cancelText,
      onPress: onCancel,
    },
    {
      text: confirmText,
      onPress: onConfirm,
    },
  ]);
};
