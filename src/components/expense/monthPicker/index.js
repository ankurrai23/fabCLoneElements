import React, {useState} from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import Styles from './Styles';

import DialogBox from '../../../common/components/dialogBox';
import MonthFilter from '../monthFilter';

const MonthPicker = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={Styles.container}>
        {props.data.map((item, index) => (
          <FTouchableOpacity
            key={`${item.name}`}
            style={[
              Styles.button,
              item.isSelected ? Styles.buttonSelected : null,
            ]}
            onPress={
              index === 2
                ? () => setVisible(true)
                : () => props.onMonthChange(item)
            }>
            {item.showAsDropdown && (
              <Feather
                name="calendar"
                size={DP._15}
                style={Styles.calender}
                color={item.isSelected ? Color.DODGER_BLUE : Color.DARK}
              />
            )}
            <FText
              style={item.isSelected ? Styles.date : Styles.unselectedDate}>
              {item.name}
            </FText>
            {item.showAsDropdown && (
              <Feather
                name="chevron-down"
                style={Styles.chevron}
                color={item.isSelected ? Color.DODGER_BLUE : Color.DARK}
              />
            )}
          </FTouchableOpacity>
        ))}
      </View>
      {visible && (
        <DialogBox
          modalVisible={visible}
          ContentModal={
            <MonthFilter
              data={props.dataForSheet}
              onPressApply={props.onMonthChange}
              onPressCancel={() => setVisible(false)}
            />
          }
          onClose={() => {
            setVisible(false);
          }}
        />
      )}
    </>
  );
};

export default MonthPicker;
