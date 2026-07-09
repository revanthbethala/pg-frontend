import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const profileStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.surface,
  },

  subHeading: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },

  label: {
    fontSize: 16,
    color: colors.text,
  },

  value: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },

  actionsSection: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginTop: 20,
    overflow: 'hidden',
  },

  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.error,
  },

  actionButton: {
    paddingHorizontal: 18,
    paddingVertical: 16,
  },

  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  actionText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  destructiveText: {
    fontSize: 16,
    color: colors.error,
    fontWeight: '500',
  },
});
