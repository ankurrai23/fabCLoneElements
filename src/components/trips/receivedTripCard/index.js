import React, {useState} from 'react';
import {View} from 'react-native';
import {FText, FTouchableOpacity, FImage, Separator} from '../../..';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {ImageConst} from '../../../utils/imageConst';
import DialogBox from '../../../common/components/dialogBox';
import {FlatList} from 'react-native-gesture-handler';
import TripStatus from '../tripStatus';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ReceivedCard = ({item, onCardPress, onActionPress}) => {
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

  const _onActionPress = (actionType) => {
    const data = {
      ['masterTripId']: item.masterTripId,
      ['type']: actionType,
    };
    onActionPress(data);
  };

  return (
    <>
      <FTouchableOpacity
        onPress={() => onCardPress({['masterTripId']: item.masterTripId})}
        style={[Styles.container, {borderRadius: DP._12}]}>
        <View style={Styles.tripIdContainer}>
          <View style={Styles.flexDirectionRow}>
            {tripIcons(item.requestType).map((asset) => (
              <FImage source={asset} style={Styles.imageStyle} />
            ))}
          </View>
          <TripStatus statusObj={item.status} />
        </View>
        <View style={Styles.flexRow}>
          <FText style={{color: Color.GREYISH_PURPLE}}>Request by: </FText>
          <FText numberOfLines={1} style={Styles.destination} type="medium">
            {item.requestedBy}
          </FText>
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
        {item.coTravellers?.length > 0 && (
          <View style={[Styles.flexRow, Styles.justifyBetween]}>
            <View style={Styles.flexDirectionRow}>
              <FText style={{color: Color.GREYISH_PURPLE}}>
                Co-traveler(s):{' '}
              </FText>
              <FTouchableOpacity
                onPress={() =>
                  item.coTravellers.length > 1 && setSheetVisible(true)
                }>
                <FText>
                  {item.coTravellers[0]}
                  {item.coTravellers.length > 1 &&
                    ` +${item.coTravellers.length - 1}`}
                </FText>
              </FTouchableOpacity>
            </View>
          </View>
        )}
        {item.isCancelled && (
          <View style={Styles.flexRow}>
            <View style={Styles.cancelledDot} />
            <FText style={Styles.cancelledText}>{item.cancelMsg}</FText>
          </View>
        )}
        <View style={Styles.footer}>
          {item.actions?.[0]?.type === 'VIEW_DETAILS' && (
            <FTouchableOpacity
              activeOpacity={1}
              style={[Styles.btn]}
              onPress={() => _onActionPress(item.actions[0].type)}>
              <FText style={Styles.actionText(Color.DODGER_BLUE)}>
                {item.actions?.[0].name}
              </FText>
            </FTouchableOpacity>
          )}
          {item.actions?.[1]?.type === 'DENY' && (
            <FTouchableOpacity
              activeOpacity={1}
              style={[Styles.btn]}
              onPress={() => _onActionPress(item.actions[1].type)}>
              <AntDesign
                name="closesquare"
                size={DP._16}
                color={Color.PASTEL_RED}
              />
              <FText style={Styles.actionText(Color.PASTEL_RED)}>
                {item.actions?.[1].name}
              </FText>
            </FTouchableOpacity>
          )}
          {item.actions?.[0]?.type === 'APPROVE' && (
            <FTouchableOpacity
              activeOpacity={1}
              style={[Styles.btn]}
              onPress={() => _onActionPress(item.actions[0].type)}>
              <AntDesign
                name="checksquare"
                size={DP._16}
                color={Color.DARK_SEA_FOAM}
              />
              <FText style={Styles.actionText(Color.DARK_SEA_FOAM)}>
                {item.actions?.[0].name}
              </FText>
            </FTouchableOpacity>
          )}
        </View>
      </FTouchableOpacity>
      <DialogBox
        modalVisible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        ContentModal={
          <View style={{paddingBottom: DP._48, paddingHorizontal: DP._24}}>
            <FText style={Styles.modalHeading}>Co-travelers</FText>
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

export default ReceivedCard;
