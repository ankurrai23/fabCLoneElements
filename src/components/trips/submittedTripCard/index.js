import React, {useState} from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {ImageConst} from '../../../utils/imageConst';
import DialogBox from '../../../common/components/dialogBox';
import {FlatList} from 'react-native-gesture-handler';
import TripStatus from '../tripStatus';
import {EMPLOYEE_ACTIONS, SUB_TRIP_TYPE} from '../../../utils/Constants';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import FImage from '../../../common/rn/FImage';
import Separator from '../../../common/components/separator';
import {Strings} from '../../../utils/strings/index.travelPlus';

const SubmittedTripCard = ({item, onCardPress, onActionPress}) => {
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

  const _onActionPress = (actionType) => {
    const data = {
      masterTripId: item.masterTripId,
      actionType: actionType,
    };
    onActionPress(data);
  };

  return (
    <>
      <FTouchableOpacity
        onPress={() => onCardPress({['masterTripId']: item.masterTripId})}
        style={Styles.container}>
        <View style={Styles.tripIdContainer}>
          <View style={Styles.flexDirectionRow}>
            {tripIcons(item.requestType).map((asset, index) => (
              <FImage
                source={asset}
                style={Styles.imageStyle}
                key={`abc${index}`}
              />
            ))}
          </View>
          <TripStatus statusObj={item.status} />
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
        <View style={[Styles.flexRow, Styles.justifyBetween]}>
          <View style={[Styles.flexDirectionRow, Styles.flex]}>
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
          {item.actions?.find(
            (e) => e.type === EMPLOYEE_ACTIONS.SEND_REMINDER,
          ) && (
            <FTouchableOpacity
              onPress={() => _onActionPress(EMPLOYEE_ACTIONS.SEND_REMINDER)}
              style={{marginLeft: DP._8}}>
              <FImage source={ImageConst.bellIcon} style={Styles.bell} />
            </FTouchableOpacity>
          )}
        </View>
        {item.isCancelled && (
          <View style={Styles.flexRow}>
            <View style={Styles.cancelledDot} />
            <FText style={Styles.cancelledText}>{item.cancelMsg}</FText>
          </View>
        )}
        <View style={Styles.footer}>
          {item.actions
            .filter((e) => e.type !== EMPLOYEE_ACTIONS.SEND_REMINDER)
            .map((e) => (
              <FTouchableOpacity disabled>
                <FText style={Styles.action(e.type)}>{e.name}</FText>
              </FTouchableOpacity>
            ))}
        </View>
      </FTouchableOpacity>
      <DialogBox
        modalVisible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        ContentModal={
          <View style={{paddingBottom: DP._48, paddingHorizontal: DP._24}}>
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

export default SubmittedTripCard;
