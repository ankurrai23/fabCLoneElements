import {View, StyleSheet} from 'react-native';
import React from 'react';
import FText from '../../../common/rn/FText';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import DashedLine from '../../../common/components/dashedLine';
import {MANAGER_APPROVAL_STATUS} from '../../../utils/Constants';

const ApproverChain = ({data, inItinerary, title, style}) => {
  const ManagerDetail = ({
    lastItem,
    primaryText,
    designation,
    timeOfStatusUpdate,
    waiting,
    status,
    managerName,
  }) => {
    let statusColor = () => {
      switch (status) {
        case MANAGER_APPROVAL_STATUS.approvalPending:
          return Color.GREY_5;
        case MANAGER_APPROVAL_STATUS.approved:
        case MANAGER_APPROVAL_STATUS.modificationRequested:
          return Color.DARK_SEA_FOAM;
        case MANAGER_APPROVAL_STATUS.rejected:
          return Color.PASTEL_RED;
        default:
          return Color.DARK;
      }
    };
    return (
      <View style={styles.itemContainer(lastItem)}>
        <View style={styles.radio(waiting, status, statusColor())}>
          <View style={styles.radioFill(status, statusColor())} />
        </View>
        {!lastItem && (
          <View style={styles.dashLineStyle}>
            <DashedLine
              dashColor={waiting ? Color.GREY_5 : statusColor()}
              dashSize={DP._3}
              dashWidth={DP._1_5}
            />
          </View>
        )}
        <View style={styles.managerNameAndDesignationContainer}>
          <FText
            weight={'500'}
            style={styles.managerName(inItinerary)}
            numberOfLines={1}>
            {primaryText || managerName}
          </FText>
          <FText numberOfLines={1} style={styles.designation(inItinerary)}>
            {designation}
          </FText>
          {!!timeOfStatusUpdate && (
            <FText style={styles.timeOfStatusUpdate} numberOfLines={1}>
              {timeOfStatusUpdate}
            </FText>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={[style]}>
      <FText style={styles.titleTextStyle} weight={'500'}>
        {title}
      </FText>
      {data.map((item, index) => (
        <ManagerDetail {...item} lastItem={index === data.length - 1} />
      ))}
    </View>
  );
};

export default ApproverChain;

const styles = StyleSheet.create({
  managerName: (inItinerary) => ({
    color: Color.DARK,
    lineHeight: inItinerary ? DP._16 : DP._18,
    fontSize: inItinerary ? DP._12 : DP._14,
    marginBottom: DP._4,
  }),
  designation: (inItinerary) => ({
    lineHeight: inItinerary ? DP._12 : DP._18,
    fontSize: inItinerary ? DP._12 : DP._14,
    color: inItinerary ? Color.DARK : Color.GREY_PURPLE,
  }),
  itemContainer: (lastItem) => ({
    marginBottom: lastItem ? 0 : DP._16,
    flexDirection: 'row',
  }),
  radio: (waiting, status, statusColor) => ({
    width: DP._16,
    height: DP._16,
    borderWidth: DP._1_5,
    marginRight: DP._16,
    borderRadius: DP._12,
    borderColor:
      waiting && status === MANAGER_APPROVAL_STATUS.approvalPending
        ? Color.DARK_SEA_FOAM
        : statusColor,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: DP._2,
  }),
  dashLineStyle: {
    position: 'absolute',
    height: '100%',
    top: DP._18,
    left: DP._7,
  },
  timeOfStatusUpdate: {
    color: Color.GREY_PURPLE,
    fontSize: DP._12,
    lineHeight: DP._14,
    marginTop: DP._4,
  },
  radioFill: (status, statusColor) => ({
    width: DP._8,
    height: DP._8,
    backgroundColor:
      status !== MANAGER_APPROVAL_STATUS.approvalPending
        ? statusColor
        : Color.WHITE,
    borderRadius: DP._4,
  }),
  designationAndTimeStampContainer: {
    flexDirection: 'row',
  },
  titleTextStyle: {
    fontSize: DP._14,
    lineHeight: DP._16,
    marginVertical: DP._16,
  },
  managerNameAndDesignationContainer: {
    marginTop: DP._1,
    flex: 1,
  },
});
