import React from 'react';
import Separator from './separator';
import {
  SubTripCommonActions,
  FlightSubTripActions,
  HotelSubTripActions,
} from '../../utils/SubTripActions';
import FTouchableOpacity from '../rn/FTouchableOpacity';
import Icon from '../../assets/icons/Icon';
import FText from '../rn/FText';
import {DP} from '../../utils/Dimen';
import {Color} from '../../utils/color/index.travelPlus';
import {View, StyleSheet} from 'react-native';

const {SUPPORT, ...REST} = SubTripCommonActions;
export const BottomBarActions = {
  ...REST,
  REFUND_STATUS: FlightSubTripActions.REFUND_STATUS,
  MODIFY: HotelSubTripActions.MODIFY,
};

export const ActionsUI = (action, onActionPress) => {
  switch (action.type) {
    case BottomBarActions.CANCEL:
      return (
        <FTouchableOpacity
          onPress={() => onActionPress(action)}
          style={Styles.primaryButtonStyle}>
          <Icon.Cross
            width={DP._16}
            height={DP._16}
            stroke={Color.PASTEL_RED}
          />
          <FText style={Styles.cancel}>{action.name}</FText>
        </FTouchableOpacity>
      );
    case BottomBarActions.RESCHEDULE:
    case BottomBarActions.MODIFY:
      return (
        <FTouchableOpacity
          onPress={() => onActionPress(action)}
          style={Styles.primaryButtonStyle}>
          <Icon.Reschedule width={DP._16} height={DP._16} />
          <FText style={Styles.reschedule}>{action.name}</FText>
        </FTouchableOpacity>
      );
    case BottomBarActions.EDIT:
      return (
        <FTouchableOpacity
          onPress={() => onActionPress(action)}
          style={Styles.primaryButtonStyle}>
          <Icon.Edit />
          <FText style={Styles.reschedule}>{action.name}</FText>
        </FTouchableOpacity>
      );
    case BottomBarActions.REMOVE:
      return (
        <FTouchableOpacity
          onPress={() => onActionPress(action)}
          style={Styles.primaryButtonStyle}>
          <Icon.Trash width={DP._16} height={DP._16} strokeWidth={1.5} />
          <FText style={Styles.cancel}>{action.name}</FText>
        </FTouchableOpacity>
      );
    case BottomBarActions.REFUND_STATUS:
      return (
        <FTouchableOpacity
          onPress={() => onActionPress(action)}
          style={Styles.primaryButtonStyle}>
          <Icon.Refund />
          <FText style={Styles.reschedule}>{action.name}</FText>
        </FTouchableOpacity>
      );
    default:
      return null;
  }
};

const ActionsInItinerary = ({
  hideSeperator,
  actions,
  actionDisabled,
  onActionPress,
}) => {
  const actionsEnabled = actions
    ?.slice()
    ?.reverse()
    ?.map((action) => ActionsUI(action, onActionPress))
    ?.filter((element) => {
      return !!element;
    });
  if (actionDisabled || !actionsEnabled || actionsEnabled.length === 0) {
    return null;
  }
  return (
    <>
      {!hideSeperator && <Separator style={Styles.separatorStyle} />}
      <View style={Styles.actionContainer}>{actionsEnabled}</View>
    </>
  );
};

const Styles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: DP._8,
    paddingHorizontal: DP._16,
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
  },
  cancel: {
    color: Color.PASTEL_RED,
    marginLeft: DP._4,
    fontSize: DP._12,
  },
  reschedule: {
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
    fontSize: DP._12,
    lineHeight: DP._16,
  },
  primaryButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._16,
  },
  separatorStyle: {
    backgroundColor: Color.LIGHT_PERIWINKLE,
    marginHorizontal: DP._16,
  },
});

export default ActionsInItinerary;
