import React, {useState} from 'react';
import {View} from 'react-native';
import {FText, FTouchableOpacity, FImage, Separator} from '../../..';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {ImageConst} from '../../../utils/imageConst';
import DialogBox from '../../../common/components/dialogBox';
import {FlatList} from 'react-native-gesture-handler';

const TripListingCard = ({item, onCardPress, style}) => {
  const [sheetVisible, setSheetVisible] = useState(false);

  const tripIcons = (requestType) => {
    let icons = [];
    if (requestType.includes('HOTEL')) icons.push(ImageConst.hotelIcon);
    if (requestType.includes('FLIGHT')) icons.push(ImageConst.flightIcon);
    return icons;
  };

  const renderItem = ({item: coTravelerName}) => {
    return <FText style={{fontSize: DP._16}}>{coTravelerName}</FText>;
  };

  return (
    <>
      <FTouchableOpacity
        onPress={() => onCardPress({['masterTripId']: item.masterTripId})}
        style={[Styles.container, {borderRadius: DP._12}, {...style}]}>
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
              <FText style={Styles.tripId}>Processsing</FText>
            </View>
          )}
        </View>
        <View style={Styles.flexRow}>
          <FText numberOfLines={1} style={Styles.destination} type="medium">
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
            {'Co-traveler(s): '} {!item.coTravellers?.length && 'None'}
          </FText>
          <FTouchableOpacity
            onPress={() =>
              item.coTravellers?.length > 1 && setSheetVisible(true)
            }>
            <FText>
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
            <FText style={Styles.action}>View details</FText>
          </View>
        )}
      </FTouchableOpacity>
      <DialogBox
        modalVisible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        ContentModal={
          <View style={{paddingBottom: DP._30, paddingHorizontal: DP._24}}>
            <FText style={Styles.modalHeading}>Co-Travelers</FText>
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
