import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    padding: DP._16,
    borderRadius: DP._12,
    borderWidth: DP._0_5,
    borderColor: Color.LIGHT_PERIWINKLE,
    ...shadowObj,
  },
  locationNameAndStopContainer: (lastIndex) => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: lastIndex ? 0 : DP._32,
  }),
  characterContainer: (white) => ({
    height: DP._18,
    width: DP._18,
    backgroundColor: white ? Color.WHITE : Color.TWILIGHT_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: DP._9,
    borderWidth: 2,
    borderColor: Color.TWILIGHT_BLUE,
    marginRight: DP._8,
  }),
  character: {
    color: Color.WHITE,
    textAlign: 'center',
    fontSize: DP._12,
  },
  stopNumber: {
    color: Color.BLUEY_GREY,
  },
  locationName: (color) => ({
    flex: 1,
    textAlign: 'left',
    color: color ? Color.DODGER_BLUE : Color.DARK,
  }),
  locationAddress: {
    fontSize: DP._10,
    marginVertical: DP._4,
    color: Color.BLUEY_GREY,
    textAlign: 'right',
  },
  dashedLineContainer: {
    position: 'absolute',
    height: '100%',
    left: 8,
    zIndex: -1,
  },
  modal: {
    flex: 1,
    paddingHorizontal: DP._40,
    justifyContent: 'center',
    backgroundColor: '#07262626', //need to change for blur view
  },
  listContainer: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._24,
    paddingVertical: DP._16,
    marginVertical: DP._20,
  },
  modalButton: {
    marginTop: DP._24,
  },
});
