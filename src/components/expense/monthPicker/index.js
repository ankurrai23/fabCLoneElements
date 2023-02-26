import React, {useRef, useState} from 'react';
import {View} from 'react-native';

import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import Styles from './Styles';

import MonthFilter from '../monthFilter';
import Icon from '../../../assets/icons/Icon';
import FBottomSheet from '../../../common/rn/FBottomSheet';

const MonthPicker = (props) => {
  const monthSheetRef = useRef(null);
  return (
    <>
      <View style={Styles.container}>
        {props.data.map((item, index) => (
          <FTouchableOpacity
            key={`${item.name}`}
            style={[
              Styles.button(index === 2),
              item.isSelected ? Styles.buttonSelected : null,
            ]}
            onPress={
              index === 2
                ? () => monthSheetRef.current.expand()
                : () => props.onMonthChange(item)
            }>
            {item.showAsDropdown && (
              <Icon.Calendar
                width={DP._15}
                height={DP._15}
                stroke={item.isSelected ? Color.DODGER_BLUE : Color.DARK}
                style={Styles.calender}
              />
            )}
            <FText
              style={item.isSelected ? Styles.date : Styles.unselectedDate}>
              {item.name}
            </FText>
            {item.showAsDropdown && (
              <Icon.ChevronDown
                width={DP._16}
                height={DP._16}
                stroke={item.isSelected ? Color.DODGER_BLUE : Color.DARK}
                style={Styles.chevron}
              />
            )}
          </FTouchableOpacity>
        ))}
      </View>
      <FBottomSheet>
        <MonthFilter
          data={props.dataForSheet}
          onPressApply={props.onMonthChange}
          onPressCancel={() => monthSheetRef.current.close()}
        />
      </FBottomSheet>
    </>
  );
};

export default MonthPicker;
