import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {dialogBoxStyle} from '../../../utils/Utils';
import Button from '../../../common/components/button';
import Checkbox from '../../../common/components/checkbox';
import Separator from '../../../common/components/separator';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';

const ClaimFilter = ({data, onPressCancel, onPressApply}) => {
  const [filterData, setFilterData] = useState(data.map((item) => ({...item})));

  const _handleSelection = (index) => {
    setFilterData((prevState) =>
      prevState.map((item, itemIndex) => {
        if (index === itemIndex) {
          item.isSelected = !item.isSelected;
        }
        return item;
      }),
    );
  };

  const _handleClearAll = () => {
    setFilterData((prevState) =>
      prevState.map((item) => {
        item.isSelected = false;
        return item;
      }),
    );
  };

  const renderItems = ({item, index}) => {
    return (
      <View>
        {index === 0 ? null : <Separator style={{height: DP._1}} />}
        <FTouchableOpacity
          style={Styles.rowDirection}
          onPress={() => _handleSelection(index)}>
          <View style={Styles.flex_7}>
            <FText type={FONT_TYPE.REGULAR} style={Styles.filterTxt}>
              {item.name}
            </FText>
          </View>
          <View style={Styles.iconView}>
            <Checkbox
              isChecked={item.isSelected}
              toggleChecked={() => _handleSelection(index)}
            />
          </View>
        </FTouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginBottom: DP._15}}>
      <FTouchableOpacity onPress={_handleClearAll} style={Styles.clearAllView}>
        <FText type={FONT_TYPE.REGULAR} style={Styles.clearAll}>
          {Strings.clearAll}
        </FText>
      </FTouchableOpacity>
      <FText type={FONT_TYPE.REGULAR} style={Styles.titleTxt}>
        {Strings.filterExpenseType}
      </FText>
      <FlatList
        bounces={false}
        data={filterData}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        style={{...dialogBoxStyle()}}
        keyExtractor={(item) => item.key}
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
          onPress={() => onPressApply(filterData)}>
          {Strings.apply}
        </Button>
      </View>
    </View>
  );
};

export default ClaimFilter;
