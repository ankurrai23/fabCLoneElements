import React from 'react';
import {View} from 'react-native';
import moment from 'moment';

import {FText, FTouchableOpacity, FImage} from '../../..';
import Styles from './Styles';
import {ImageConst} from '../../../utils/imageConst';

export default function HotelDetails(props) {
  const {data, error} = props;
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
        <FText type="medium" style={Styles.title}>
          Hotel(s)
        </FText>
        <FTouchableOpacity
          style={Styles.flexRow}
          hitSlop={Styles.hitSlop}
          onPress={props.onPress}>
          <FImage source={data?.length ? ImageConst.edit2 : ImageConst.plus} />
          <FText type="medium" style={Styles.addDetails}>
            {data?.length ? 'Edit' : 'Add'}
          </FText>
        </FTouchableOpacity>
      </View>
      {error ? <FText style={Styles.errorDetailTxt}>{error}</FText> : null}
      <View style={Styles.itemContainer}>
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
