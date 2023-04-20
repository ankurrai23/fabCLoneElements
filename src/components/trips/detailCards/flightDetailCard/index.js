import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../../utils/Dimen';
// import {Color} from '../../../utils/color';
import {Color} from '../../../../utils/color/index.travelPlus';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../../common/components/separator';
import TripStatus from '../../tripStatus';
import {FlightSubTripActions} from '../../../../utils/SubTripActions';
import ModificationAlertBox from '../../components/modificationAlertBox';
import ContactSupport from '../../../../common/components/contactSupport';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';
import {getStatusObject} from '../../../../utils/Utils';
import FImage from '../../../../common/rn/FImage';
import ActionsInItinerary from '../../../../common/components/ActionsInItinerary';
import {ColorMatrix} from 'react-native-color-matrix-image-filters';
import {grayImageMatrix} from '../../../../utils/color/ColorMatrix';
import DashedLine from '../../../../common/components/dashedLine';
const FlightDetailCard = ({
  title,
  tripDetails,
  onActionPress,
  onCardPress,
  style,
  onContactSupportPress,
  actions,
  notificationText,
  actionsDisabled,
  cardStyle,
  reduceOpacity: isGreyedOut,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);
  const supportAction = isActionEnabled(FlightSubTripActions.SUPPORT);

  if (!tripDetails) {
    return null;
  }
  return (
    <View style={style}>
      {title && (
        <FText
          greyedOut={isGreyedOut}
          type={FONT_TYPE.MEDIUM}
          style={Styles.heading}>
          {title}
        </FText>
      )}
      {!!notificationText && <ModificationAlertBox msg={notificationText} />}
      <View style={[Styles.container, cardStyle]}>
        <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
          <View style={[Styles.flexDirectionRow, Styles.flexRowAndAlignCenter]}>
            <View style={Styles.flexDirectionRow}>
              <FText
                greyedOut={isGreyedOut}
                type={FONT_TYPE.MEDIUM}
                style={Styles.date}>
                {tripDetails.date}
              </FText>
              <FText
                greyedOut={isGreyedOut}
                type={FONT_TYPE.MEDIUM}
                style={
                  Styles.headerMonth
                }>{`${tripDetails.month}'${tripDetails.year}`}</FText>
            </View>
            {!!tripDetails.flightBookingStatus && (
              <TripStatus
                statusObj={getStatusObject(tripDetails.flightBookingStatus)}
              />
            )}
          </View>
          <View style={[Styles.flexDirectionRow, Styles.marginTop_8]}>
            <View style={Styles.flexRowAndAlignCenter}>
              <ColorMatrix matrix={grayImageMatrix(isGreyedOut)}>
                <FImage
                  style={Styles.airlineIcon}
                  source={{uri: tripDetails.airlineIcon}}
                />
              </ColorMatrix>
              <View style={{marginLeft: DP._8}}>
                <FText greyedOut={isGreyedOut}>{tripDetails.airline}</FText>
                <FText greyedOut={isGreyedOut} style={Styles.airlineCode}>
                  {`${
                    tripDetails.airlineCode ? `${tripDetails.airlineCode}-` : ''
                  }${tripDetails.flightNumber}`}
                </FText>
              </View>
            </View>
            <FText
              greyedOut={isGreyedOut}
              type={FONT_TYPE.MEDIUM}
              style={Styles.priceStyle}>
              {tripDetails.price}
            </FText>
          </View>
          <View
            style={[Styles.flexRowAndJustifySpaceBetween, Styles.marginTop_12]}>
            <FText greyedOut={isGreyedOut} style={Styles.time}>
              {tripDetails.departureTime}
            </FText>
            <Icon.Aeroplane
              width={DP._18}
              height={DP._18}
              fill={Color.LIGHT_BLUEY_GREY}
              style={Styles.airplane}
            />
            <FText greyedOut={isGreyedOut} style={Styles.time}>
              {tripDetails.arrivalTime}
            </FText>
          </View>
          <View style={[Styles.flexRowAndJustifySpaceBetween]}>
            <FText greyedOut={isGreyedOut} style={Styles.portName}>
              {tripDetails.sourceAirportCode}
            </FText>
            <View style={Styles.durationAndStopsContainer}>
              <FText
                greyedOut={isGreyedOut}
                style={Styles.duration}
                numberOfLines={1}>
                {tripDetails.totalDuration}
              </FText>
              <View style={Styles.dot_two} />
              <FText
                greyedOut={isGreyedOut}
                style={Styles.stoppage}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {tripDetails.stop}
              </FText>
            </View>
            <FText greyedOut={isGreyedOut} style={Styles.portName}>
              {tripDetails.destinationAirportCode}
            </FText>
          </View>
          <View style={Styles.flexRowAndJustifySpaceBetween}>
            {!!tripDetails.sourceAirportTerminal && (
              <FText greyedOut={isGreyedOut} style={Styles.terminal}>
                {tripDetails.sourceAirportTerminal}
              </FText>
            )}
            {!!tripDetails.destinationAirportTerminal && (
              <FText greyedOut={isGreyedOut} style={Styles.terminal}>
                {tripDetails.destinationAirportTerminal}
              </FText>
            )}
          </View>
        </FTouchableOpacity>
        <Separator style={Styles.actionsSeperator} />
        <View style={Styles.pnrAndMealContainer}>
          <FText
            greyedOut={isGreyedOut}
            style={Styles.bookingIdTitle(tripDetails.reduceOpacity)}>
            {Strings.pnr}:
            <FText
              greyedOut={isGreyedOut}
              type={FONT_TYPE.MEDIUM}>{` ${tripDetails.pnr}`}</FText>
          </FText>
        </View>
        {!!tripDetails?.travelersInfo?.length && (
          <>
            <Separator style={Styles.actionsSeperator} />
            <View style={Styles.travellerInfoHeading}>
              <View style={Styles.headingNotch} />
              <FText
                greyedOut={isGreyedOut}
                style={Styles.travelerDetailStyle}
                weight={500}>
                {Strings.travelerDetails}
              </FText>
            </View>
            <View style={Styles.travelerDetailContainer}>
              {tripDetails.travelersInfo.map((item, index, arr) => (
                <>
                  <View style={Styles.flexDirectionRow}>
                    <FText
                      greyedOut={isGreyedOut}
                      key={index}
                      style={Styles.travelerNameStyle}
                      numberOfLines={1}>
                      {item.name}
                    </FText>
                    <View style={{flexDirection: 'row'}}>
                      <FText style={Styles.ticketStyle}>
                        {Strings.ticketNo}
                      </FText>
                      <FText style={Styles.ticketNoStyle}>
                        {' '}
                        {item.ticketNo}
                      </FText>
                    </View>
                  </View>
                  <View>
                    {item.addOnDetails.map((addOnDetail, i, addOnDetails) => {
                      const stoppage = `${addOnDetail.origin} - ${addOnDetail.destination}`;
                      const showInfo = `${addOnDetail.seat}, ${
                        addOnDetail.isMealAdded ? 'meal,' : ''
                      } ${addOnDetail.isBaggageAdded ? 'baggage' : ''}`;
                      return (
                        <View
                          style={Styles.addOnDetailContaier(
                            i !== addOnDetails.length - 1,
                          )}>
                          <View>
                            <View style={Styles.radio} />
                            {i !== addOnDetails.length - 1 && (
                              <View style={Styles.dashLineStyle}>
                                <DashedLine
                                  dashColor={Color.DODGER_BLUE}
                                  dashSize={DP._2}
                                  dashWidth={DP._0_5}
                                />
                              </View>
                            )}
                          </View>
                          <FText style={Styles.stoppageTextStyle} weight={400}>
                            {stoppage}
                          </FText>
                          <FText style={Styles.addOnTextStyle}>
                            {showInfo}
                          </FText>
                        </View>
                      );
                    })}
                  </View>
                  {index !== arr.length - 1 && (
                    <Separator style={Styles.mv_12} />
                  )}
                </>
              ))}
            </View>
          </>
        )}
        {supportAction && (
          <>
            <Separator style={Styles.actionsSeperator} />
            <View style={Styles.flexRowAndAlignCenter}>
              <ContactSupport
                onContactSupportPress={onContactSupportPress}
                style={[Styles.contactSupport, Styles.flex]}
                isGreyedOut={isGreyedOut}
              />
            </View>
          </>
        )}
        <ActionsInItinerary
          actions={actions}
          actionDisabled={actionsDisabled}
          onActionPress={onActionPress}
        />
      </View>
    </View>
  );
};

export default FlightDetailCard;
