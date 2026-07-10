import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const commonStyles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.surface,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  containerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    paddingBottom: 16,
  },

  headerSection: {
    paddingHorizontal: 20,
    backgroundColor: colors.secondary,
  },
  bodySection: {
    paddingTop: 20,
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  actionText: {
    marginVertical: 6,
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  actionDestructive: {
    color: colors.destructive,
  },
  columnStyle: {
    justifyContent: 'space-between',
    gap: 8,
  },
  centeredText: {
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusBadge: {
    fontSize: 14,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.background,
  },

  statusActive: {
    fontWeight: 'bold',

    color: colors.success,
  },

  statusInactive: {
    fontWeight: 'bold',
    color: colors.destructive,
  },
});
