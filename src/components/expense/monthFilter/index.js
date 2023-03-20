import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {dialogBoxStyle} from '../../../utils/Utils';
import Button from '../../../common/components/button';
import Separator from '../../../common/components/separator';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

const MonthFilter = ({data, onPressCancel, onItemPress}) => {
  const [sheetData, setSheetData] = useState(data.map((item) => ({...item})));

  const renderItems = ({item, index}) => {
    return (
      <View>
        {index === 0 ? null : <Separator style={{height: DP._1}} />}
        <FTouchableOpacity
          onPress={() => onItemPress(item)}
          style={Styles.rowDirection}>
          <View style={{flex: 7}}>
            <FText type={FONT_TYPE.REGULAR} style={Styles.monthTxt}>
              {item.name}
            </FText>
          </View>
          <View style={Styles.iconView}>
            {item.isSelected ? <Icon.RadioActive /> : <Icon.RadioPassive />}
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
        style={{...dialogBoxStyle()}}
        keyExtractor={(item, index) => `${item.name}`}
      />
    </View>
  );
};

export default MonthFilter;
