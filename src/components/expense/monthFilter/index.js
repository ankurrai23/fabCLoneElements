import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import {dialogBoxStyle} from '../../../utils/Utils';
import Button from '../../../common/components/button';
import Separator from '../../../common/components/separator';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';

const MonthFilter = ({data, onPressCancel, onPressApply}) => {
  const [sheetData, setSheetData] = useState(data.map((item) => ({...item})));

  const _onPress = (objIndex) => {
    let arr = sheetData.map((item, index) => {
      if (index === objIndex) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });
    setSheetData(arr);
  };

  const _onPressApply = () => {
    const selectedMonth = sheetData.find((ele) => ele.isSelected === true);
    onPressApply(selectedMonth);
  };
  const renderItems = ({item, index}) => {
    return (
      <View>
        {index === 0 ? null : <Separator style={{height: DP._1}} />}
        <FTouchableOpacity
          onPress={() => _onPress(index)}
          style={Styles.rowDirection}>
          <View style={{flex: 7}}>
            <FText type={FONT_TYPE.REGULAR} style={Styles.monthTxt}>
              {item.name}
            </FText>
          </View>
          <View style={Styles.iconView}>
            {item.isSelected ? (
              <Fontisto
                name={'radio-btn-active'}
                size={DP._22}
                color={Color.DODGER_BLUE}
              />
            ) : (
              <Fontisto
                name={'radio-btn-passive'}
                size={DP._22}
                color={Color.DARK_80}
              />
            )}
          </View>
        </FTouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginBottom: DP._15, marginHorizontal: DP._24}}>
      <FText type={FONT_TYPE.REGULAR} style={Styles.titleTxt}>
        {Strings.selectMonth}
      </FText>
      <FlatList
        bounces={false}
        data={sheetData}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        style={{...dialogBoxStyle}}
        keyExtractor={(item, index) => `${item.name}`}
      />
      <View style={Styles.buttonView}>
        <Button
          style={Styles.cancelButton}
          textStyle={Styles.cancelText}
          textFont={FONT_TYPE.MEDIUM}
          onPress={onPressCancel}>
          {Strings.cancel}
        </Button>
        <Button
          style={Styles.applyButton}
          textStyle={Styles.cancelText}
          textFont={FONT_TYPE.MEDIUM}
          onPress={_onPressApply}>
          {Strings.apply}
        </Button>
      </View>
    </View>
  );
};

export default MonthFilter;
