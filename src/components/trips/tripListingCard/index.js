import React, {useState} from 'react';
import {View} from 'react-native';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import FImage from '../../../common/rn/FImage';
import Separator from '../../../common/components/separator';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {ImageConst} from '../../../utils/imageConst';
import DialogBox from '../../../common/components/dialogBox';
import {FlatList} from 'react-native-gesture-handler';
import {SUB_TRIP_TYPE} from '../../../utils/Constants';
import {Strings} from '../../../utils/strings/index.travelPlus';

const TripListingCard = ({item, onCardPress, style}) => {
  const [sheetVisible, setSheetVisible] = useState(false);

  const tripIcons = (requestType) => {
    let icons = [];
    if (requestType.includes(SUB_TRIP_TYPE.HOTEL))
      icons.push(ImageConst.hotelIcon);
    if (requestType.includes(SUB_TRIP_TYPE.FLIGHT))
      icons.push(ImageConst.flightIcon);
    return icons;
  };

  const renderItem = ({item: coTravelerName}) => {
    return <FText style={{fontSize: DP._16}}>{coTravelerName}</FText>;
  };

  return (
    <>
      <FTouchableOpacity
        onPress={() => onCardPress({['masterTripId']: item.masterTripId})}
        style={[Styles.container, {...style}]}>
        <View style={Styles.tripIdContainer}>
          <View style={Styles.flexDirectionRow}>
            {tripIcons(item.tripRequestType).map((asset, index) => (
              <FImage
                source={asset}
                style={Styles.imageStyle}
                key={`${index}abc`}
              />
            ))}
          </View>
          {item.isProcessing && (
            <View style={Styles.flexRowAndAlignCenter}>
              <FImage
                source={ImageConst.rescheduleIcon}
                style={Styles.rescheduleIcon}
              />
              <FText style={Styles.tripId}>{Strings.processing}</FText>
            </View>
          )}
        </View>
        <View style={Styles.flexRow}>
          <FText
            numberOfLines={1}
            style={Styles.destination}
            type={FONT_TYPE.MEDIUM}>
            {item.title}
          </FText>
        </View>
        <View style={Styles.flexRow}>
          <FText
            style={
              Styles.date
            }>{`${item.tripStartDate} - ${item.tripEndDate}`}</FText>
        </View>
        <View style={item.actionsDisabled ? Styles.flexRows : Styles.flexRow}>
          <FText style={{color: Color.GREYISH_PURPLE}}>
            {Strings.cotravelers} {!item.coTravellers?.length && Strings.none}
          </FText>
          <FTouchableOpacity
            style={Styles.flex}
            onPress={() =>
              item.coTravellers?.length > 1 && setSheetVisible(true)
            }>
            <FText numberOfLines={1}>
              {item.coTravellers?.[0]}
              {item.coTravellers?.length > 1 &&
                ` +${item.coTravellers?.length - 1}`}
            </FText>
          </FTouchableOpacity>
        </View>
        {item.isCancelled && (
          <View style={Styles.flexRow}>
            <View style={Styles.cancelledDot} />
            <FText style={Styles.cancelledText}>{item.cancelMsg}</FText>
          </View>
        )}
        {!item.actionsDisabled && (
          <View style={Styles.footer}>
            <FText style={Styles.action}>{Strings.viewdetails}</FText>
          </View>
        )}
      </FTouchableOpacity>
      <DialogBox
        modalVisible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        ContentModal={
          <View style={{paddingBottom: DP._30, paddingHorizontal: DP._24}}>
            <FText style={Styles.modalHeading}>{Strings.coTravelers}</FText>
            <FlatList
              data={item.coTravellers}
              renderItem={renderItem}
              ItemSeparatorComponent={() => (
                <Separator
                  style={{
                    marginVertical: DP._16,
                    backgroundColor: Color.SILVER,
                  }}
                />
              )}
              keyExtractor={(_) => _}
            />
          </View>
        }
      />
    </>
  );
};

export default TripListingCard;
