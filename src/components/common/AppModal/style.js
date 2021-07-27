import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modal: {
    backgroundColor: colors.white,
    minHeight: 300,
    marginHorizontal: 20,
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 21,
  },
  body: {
    minHeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  termView: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: colors.grey,
  },
  footerSeperator: {
    height: 0.5,
    backgroundColor: colors.grey,
  },
  footerItems: {
    width: '100%',
    padding: 10,
  },
  footerText: {
    fontSize: 12,
  },
});
