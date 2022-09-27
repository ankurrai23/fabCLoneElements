import {View, StyleSheet} from 'react-native';
import React from 'react';
import FText from '../../../common/rn/FText';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import DashedLine from '../../../common/components/dashedLine';

const ApproverChain = ({data, inItinerary}) => {
  const ManagerDetail = ({
    hideLine,
    primaryText,
    designation,
    timeOfStatusUpdate,
    waiting,
    status,
  }) => {
    let statusColor = status
      ? status === 'APPROVED'
        ? Color.DARK_SEA_FOAM
        : Color.PASTEL_RED
      : Color.GREY_5;

    return (
      <View style={styles.itemContainer}>
        <View style={styles.radio(waiting, status, statusColor)}>
          <View style={styles.radioFill(status, statusColor)} />
        </View>
        {!hideLine && (
          <View style={styles.dashLineStyle}>
            <DashedLine
              dashColor={waiting ? Color.GREY_5 : statusColor}
              dashSize={DP._3}
              dashWidth={DP._1_5}
            />
          </View>
        )}
        <View>
          <FText weight={'500'} style={styles.managerName(inItinerary)}>
            {primaryText}
          </FText>
          <View style={styles.designationAndTimeStampContainer}>
            <FText style={styles.designation(inItinerary)}>{designation}</FText>
            {!!timeOfStatusUpdate && (
              <FText style={styles.timeOfStatusUpdate}>
                {' '}
                | {timeOfStatusUpdate}
              </FText>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {data.map((item, index) => (
        <ManagerDetail {...item} hideLine={index === data.length - 1} />
      ))}
    </>
  );
};

export default ApproverChain;

const styles = StyleSheet.create({
  managerName: (inItinerary) => ({
    color: Color.DARK,
    lineHeight: inItinerary ? DP._16 : DP._18,
    fontSize: inItinerary ? DP._12 : DP._14,
    marginBottom: DP._2,
  }),
  designation: (inItinerary) => ({
    lineHeight: inItinerary ? DP._14 : DP._18,
    fontSize: inItinerary ? DP._12 : DP._14,
    color: inItinerary ? Color.DARK : Color.GREY_PURPLE,
  }),
  itemContainer: {
    marginBottom: DP._16,
    flexDirection: 'row',
  },
  radio: (waiting, status, statusColor) => ({
    width: DP._16,
    height: DP._16,
    borderWidth: DP._1_5,
    marginRight: DP._16,
    borderRadius: DP._12,
    borderColor: waiting && !status ? Color.DARK_SEA_FOAM : statusColor,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: DP._2,
  }),
  dashLineStyle: {
    position: 'absolute',
    height: '100%',
    top: DP._16,
    left: DP._7,
  },
  timeOfStatusUpdate: {
    color: Color.GREY_PURPLE,
    fontSize: DP._12,
    lineHeight: DP._16,
  },
  radioFill: (status, statusColor) => ({
    width: DP._8,
    height: DP._8,
    backgroundColor: status ? statusColor : Color.WHITE,
    borderRadius: DP._4,
  }),
  designationAndTimeStampContainer: {
    flexDirection: 'row',
  },
});
