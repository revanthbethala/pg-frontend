import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const guestFormStyles = StyleSheet.create({
  avatarSection: {
    alignItems: 'center',
    gap: 12,
  },
  imageActions: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    color: colors.text,
  },
  addressInput: {
    minHeight: 90,
    borderRadius: 20,
  },
});
