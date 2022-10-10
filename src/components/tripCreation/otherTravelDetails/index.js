import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import PickerField from '../../../common/components/pickerField';
import TextField from '../../../common/components/textField';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import DialogBox from '../../../common/components/dialogBox';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

export default function OtherTravelDetails(props) {
  const [visible, setVisible] = useState(false);
  const [selectedValueTemp, setSelectedValueTemp] = useState(
    props.selectedValue,
  );
  const {purposeOfTravelerError, purposeOfTravel, selectedValue} = props;

  function renderItem({item, index}) {
    const isActive = selectedValueTemp.key === item.key;
    return (
      <FTouchableOpacity
        style={Styles.renderItem}
        onPress={() => onPress(item)}>
        <FText style={Styles.itemText}>{item.value}</FText>
        {isActive ? <Icon.RadioActive /> : <Icon.RadioPassive />}
      </FTouchableOpacity>
    );
  }

  function onPress(item) {
    setVisible(false);
    setSelectedValueTemp(item);
    props._onPressDetail(item);
  }

  function onChangeText(val) {
    props.onChangeText(val);
  }

  return (
    <View style={[Styles.container, props.style]}>
      <FText type={FONT_TYPE.MEDIUM} style={Styles.title}>
        {Strings.otherDetails}
      </FText>
      <PickerField
        onPress={() => setVisible(true)}
        error={purposeOfTravelerError}
        helperText={purposeOfTravelerError}
        label={Strings.purposeOfTravel}
        labelStyle={Styles.textFieldLabel}
        value={selectedValue.value}
        rightIcon={
          <Icon.ChevronDown
            width={DP._16}
            height={DP._16}
            stroke={Color.GREY_PURPLE}
          />
        }
        topMargin={DP._16}
        bottomMargin={purposeOfTravelerError ? 0 : DP._6}
      />
      <TextField
        value={props.otherRemark}
        onChangeText={onChangeText}
        label={Strings.otherRemarks}
        labelStyle={Styles.textFieldLabel}
        topMargin={DP._18}
      />
      {visible && (
        <DialogBox
          modalVisible={visible}
          ContentModal={
            <View style={Styles.paddingView}>
              <FText style={Styles.heading}>{Strings.purposeOfTravel}</FText>
              <View style={{paddingHorizontal: DP._24}}>
                <FlatList
                  data={purposeOfTravel}
                  renderItem={renderItem}
                  ItemSeparatorComponent={() => (
                    <View style={Styles.separator} />
                  )}
                  keyExtractor={(item) => item.key}
                  bounces={false}
                  style={Styles.flatListStyle}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </View>
          }
          onClose={() => {
            setVisible(false);
          }}
        />
      )}
    </View>
  );
}
