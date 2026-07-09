import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
  },

  card: {
    width: '47%',
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 18,
  },

  fullWidth: {
    width: '100%',
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 14,
    color: colors.inactive,
    marginBottom: 6,
  },

  cardValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
});
