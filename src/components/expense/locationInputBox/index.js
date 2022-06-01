import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PickerField from '../../../common/components/pickerField';
import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import DashedLine from '../../../common/components/dashedLine';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import Styles from './Styles';

const LocationInputBox = ({
  value,
  index,
  error,
  showRemoveButton,
  addRightMargin,
  onPress,
  onRemove,
  joinBelow,
}) => {
  const CloseButton = () => (
    <FTouchableOpacity onPress={onRemove} style={Styles.closeButton}>
      <AntDesign name="close" size={DP._18} color={Color.DARK} />
    </FTouchableOpacity>
  );

  return (
    <View style={Styles.container}>
      <View style={Styles.textContainer}>
        <FText type={'medium'} style={Styles.text}>
          {String.fromCharCode(index + 65)}
        </FText>
      </View>
      {joinBelow && (
        <View style={Styles.dashedLine}>
          <DashedLine
            dashSize={DP._5}
            dashWidth={DP._1}
            dashColor={Color.TWILIGHT_BLUE}
          />
        </View>
      )}
      <View style={Styles.textFieldContainer(addRightMargin)}>
        <PickerField
          numberOfLines={1}
          value={value}
          onPress={onPress}
          placeholder={index > 0 ? 'Stop' : 'Start'}
          helperText={error}
          error={!!error}
          topMargin={DP._8}
        />
      </View>
      <View>{showRemoveButton ? <CloseButton /> : null}</View>
    </View>
  );
};

export default LocationInputBox;
