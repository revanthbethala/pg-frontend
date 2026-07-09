import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const guestStyles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 10,
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  multilineRow: {
    paddingVertical: 14,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '400',
  },
  multilineValue: {
    marginTop: 4,
  },
});
