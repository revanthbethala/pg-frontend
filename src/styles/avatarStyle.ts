import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const avatarStyle = StyleSheet.create({
  img: { width: 80, height: 80, borderRadius: 50 },
  avatar: {
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.border,
    padding: 15,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
