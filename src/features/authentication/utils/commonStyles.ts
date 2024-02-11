import colors from '@utils/colors';
import fonts from '@utils/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  shadow: {
    shadowColor: '#9595a2',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  text: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.grey,
    fontSize: 13,
  },
  title: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
