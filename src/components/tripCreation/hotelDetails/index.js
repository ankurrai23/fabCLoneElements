import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';

import {FText, FTouchableOpacity} from '../../..';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import Styles from './Styles';

export default function HotelDetails(props) {
  const {data, hotelError} = props;
  function renderItem(value) {
    return (
      <View style={Styles.renderItem}>
        <View style={Styles.flexdirectionRow}>
          <FText type="medium" style={Styles.renderValue}>
            {moment(value.checkInDate).format('DD') + ' '}
            <FText style={Styles.monthlabel}>
              {moment(value.checkInDate).format('MMM') + '  -  '}
            </FText>
          </FText>
          <FText type="medium" style={Styles.renderValue}>
            {moment(value.checkOutDate).format('DD') + ' '}
            <FText style={Styles.monthlabel}>
              {moment(value.checkOutDate).format('MMM')}
            </FText>
          </FText>
        </View>
        <View style={Styles.rendercity}>
          <FText style={Styles.renderCityTxt}>{value.city?.city}</FText>
          <FText style={Styles.renderLocality}>
            {value.preferredLocality?.location}
          </FText>
        </View>
      </View>
    );
  }

  //in case of flight only return null
  if (props.requestType === 'FLIGHT' || props.requestType === null) {
    return null;
  }

  return (
    <View onLayout={props.onLayout} style={Styles.container}>
      <View style={Styles.titleContainer}>
        <FText type="medium" style={Styles.title}>
          Hotel(s)
        </FText>
        <FTouchableOpacity
          style={Styles.flexRow}
          hitSlop={Styles.hitSlop}
          onPress={
            data.city?.city ? props.editHotelDetail : props.goToAddHotelDetails
          }>
          {!!data.city?.city && (
            <Feather name="edit-2" size={DP._12} color={Color.DODGER_BLUE} />
          )}
          <FText type="medium" style={Styles.addDetails}>
            {data.city?.city ? 'Edit' : 'Add details'}
          </FText>
        </FTouchableOpacity>
      </View>
      {hotelError === true ? (
        <FText style={Styles.errorDetailTxt}>{'Enter hotel details'}</FText>
      ) : null}
      {!!data.city?.city && (
        <View style={Styles.innerContainer}>{renderItem(data)}</View>
      )}
    </View>
  );
}
