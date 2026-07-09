import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const cardStyle = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },

  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    gap: 4,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 16,
  },
  contentCard: {
    alignItems: 'flex-start',
  },
  imageCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageSection: {
    width: '35%',
  },
  contentSection: {
    width: '65%',
  },

  text: {
    fontSize: 16,
    color: colors.text,
    marginVertical: 2,
  },
});
