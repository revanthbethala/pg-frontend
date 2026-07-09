import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  form: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 12,
    gap: 15,
  },
  authForm: {
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
  },

  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 15,
    borderRadius: 14,
  },

  error: {
    color: colors.error,
    fontWeight: '600',
  },

  redirect: {
    flexDirection: 'row',
    gap: 4,
    marginVertical: 5,
  },

  redirectText: {
    color: colors.primary,
    fontWeight: '600',
  },

  switchContainer: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  switchLabel: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },

  submitBtn: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    color: 'white',
    textAlign: 'center',
    padding: 15,
  },

  submitBtnText: {
    color: colors.surface,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
});
