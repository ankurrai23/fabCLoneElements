import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import FImage from '../../../../common/rn/FImage';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';
import Icon from '../../../../assets/icons/Icon';
import OOPTag from '../../../trips/components/OOPTag/OOPTag';

export default function FlightSearchResultCard({onPress, flightInfo}) {
  return (
    <FTouchableOpacity onPress={onPress} style={Styles.container}>
      <View style={Styles.flightParticulars}>
        <FImage
          style={Styles.imageStyle}
          source={{uri: flightInfo.airlineIcon}}
        />
        <View style={Styles.nameAndNumberContainer}>
          <FText
            style={Styles.flightName}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {flightInfo.airlineName}
          </FText>
          <FText
            style={Styles.flightNumber}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {flightInfo.airlineCode}-{flightInfo.flightNumber}
          </FText>
        </View>
        <View>
          <FText style={Styles.flightPrice} type={FONT_TYPE.SEMI_BOLD}>
            {flightInfo.price}
          </FText>
          {flightInfo.isOutOfPolicy && <OOPTag style={Styles.oopMargin} />}
        </View>
      </View>
      <View style={Styles.flightTimeContainer}>
        <FText style={Styles.flightTimeTextStyle}>
          {flightInfo.departureTime}
        </FText>
        <View style={Styles.airplane}>
          <Icon.Aeroplane
            width={DP._20}
            height={DP._20}
            fill={Color.LIGHT_BLUEY_GREY}
          />
        </View>
        <FText style={Styles.flightTimeTextStyle}>
          {flightInfo.arrivalTime}
        </FText>
      </View>
      <View style={Styles.flightDurationContainer}>
        <FText style={Styles.airportCode}>{flightInfo.sourceAirportCode}</FText>
        <View style={Styles.durationAndStopsContainer}>
          <FText style={Styles.flightDuration}>
            {flightInfo.flightDuration}
          </FText>
          {!!flightInfo.stops && (
            <>
              <View style={Styles.dot} />
              <FText style={Styles.flightDuration}>{flightInfo.stops}</FText>
            </>
          )}
        </View>
        <FText style={Styles.airportCode}>
          {flightInfo.destinationAirportCode}
        </FText>
      </View>
    </FTouchableOpacity>
  );
}
