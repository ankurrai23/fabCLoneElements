import React from 'react';
import {View} from 'react-native';
import moment from 'moment';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

const DATE = 'DD'; // 12, 13
const MONTH = 'MMM'; // Jan, Feb

export default function HotelDetails(props) {
  const {data, error} = props;
  function renderItem(value) {
    return (
      <View style={Styles.renderItem}>
        <View style={Styles.flexdirectionRow}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.renderValue}>
            {moment(value.checkInDate).format(DATE) + ' '}
            <FText style={Styles.monthlabel}>
              {moment(value.checkInDate).format(MONTH) + '  -  '}
            </FText>
          </FText>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.renderValue}>
            {moment(value.checkOutDate).format(DATE) + ' '}
            <FText style={Styles.monthlabel}>
              {moment(value.checkOutDate).format(MONTH)}
            </FText>
          </FText>
        </View>
        <View style={Styles.rendercity}>
          <FText style={Styles.renderCityTxt}>{value.city}</FText>
          <FText style={Styles.renderLocality}>{value.location}</FText>
        </View>
      </View>
    );
  }

  return (
    <View
      onLayout={props.onLayout}
      style={[Styles.container, {...props.style}]}>
      <View style={Styles.titleContainer}>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.title}>
          {Strings.hotels}
        </FText>
        <FTouchableOpacity
          style={Styles.flexRow}
          hitSlop={Styles.hitSlop}
          onPress={props.onPress}>
          {data?.length ? (
            <Icon.EditFilled width={DP._10} height={DP._10} />
          ) : (
            <Icon.Plus
              width={DP._16}
              height={DP._16}
              stroke={Color.DODGER_BLUE}
            />
          )}
          <FText type={FONT_TYPE.MEDIUM} style={Styles.addDetails}>
            {data?.length ? Strings.edit : Strings.add}
          </FText>
        </FTouchableOpacity>
      </View>
      {error ? <FText style={Styles.errorDetailTxt}>{error}</FText> : null}
      <View style={Styles.itemContainer(data.length > 0)}>
        {!!data?.length &&
          data?.map((item, i) => {
            return (
              <View key={i} style={Styles.innerContainer}>
                {renderItem(item)}
              </View>
            );
          })}
      </View>
    </View>
  );
}
