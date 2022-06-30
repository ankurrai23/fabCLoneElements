import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {FText, FTouchableOpacity, PickerField, TextField} from '../../..';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import DialogBox from '../../../common/components/dialogBox';

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
        <Fontisto
          name={`radio-btn-${isActive ? 'active' : 'passive'}`}
          size={DP._20}
          color={isActive ? Color.DODGER_BLUE : Color.GREY_PURPLE}
        />
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
    <View style={Styles.container}>
      <FText type="medium" style={Styles.title}>
        Other details
      </FText>
      <PickerField
        onPress={() => setVisible(true)}
        error={purposeOfTravelerError}
        helperText={purposeOfTravelerError}
        label="Purpose of travel"
        labelStyle={Styles.textFieldLabel}
        value={selectedValue.value}
        rightIcon={
          <Feather
            name="chevron-down"
            size={DP._20}
            color={Color.GREY_PURPLE}
          />
        }
        topMargin={DP._16}
      />
      <TextField
        value={props.otherRemark}
        onChangeText={onChangeText}
        label="Other remarks (optional)"
        labelStyle={Styles.textFieldLabel}
        topMargin={DP._8}
      />
      {visible && (
        <DialogBox
          modalVisible={visible}
          ContentModal={
            <View style={Styles.paddingView}>
              <FTouchableOpacity
                style={Styles.closeView}
                onPress={() => setVisible(false)}>
                <MaterialCommunityIcons
                  name="close"
                  size={DP._26}
                  color={Color.BROWN_GREY}
                />
              </FTouchableOpacity>
              <FText style={Styles.heading}>{'Purpose of travel'}</FText>
              <View style={{paddingHorizontal: DP._20}}>
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
