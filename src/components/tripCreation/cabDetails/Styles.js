import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  headerStyle: (data) => ({
    marginBottom: data?.length ? DP._16 : 0,
  }),
  cardStyle: (data, index) => ({
    marginBottom: data?.length - 1 === index ? 0 : DP._16,
  }),
});
