import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

import { styles } from "@/styles/formStyle";
import { colors } from "@/styles/colors";

type SubmitButtonProps = {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

export default function SubmitButton({
  title,
  loading = false,
  disabled = false,
  onPress,
}: SubmitButtonProps) {
  const isDisabled = loading || disabled;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.submitBtn,
        isDisabled && { opacity: 0.6 },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.surface} />
      ) : (
        <Text style={styles.submitBtnText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}