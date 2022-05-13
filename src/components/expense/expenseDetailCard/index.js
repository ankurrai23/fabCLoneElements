import React from 'react';
import {View} from 'react-native';
import Separator from '../../../common/components/separator';
import FImage from '../../../common/rn/FImage';
import FText from '../../../common/rn/FText';
import Styles from './Styles';

const ExpenseDetailCard = ({data, style}) => {
  return (
    <View style={[Styles.container(data.notes), style]}>
      <View style={Styles.flexRow}>
        <View style={Styles.titleContainer}>
          <FImage style={Styles.image} source={{uri: data.expenseIcon}} />
        </View>
        <View style={Styles.detailContainer}>
          <FText style={Styles.title}>{data.name}</FText>
          <FText style={Styles.date}>{data.expenseDate}</FText>
          <View style={Styles.amountContainer}>
            <FText style={Styles.amount}>{data.amount}</FText>
            {data.entitlementDetail && (
              <FText style={Styles.wheeler}>{data.entitlementDetail}</FText>
            )}
          </View>
          {data.status && (
            <FText style={Styles.status(data.status.color)}>
              {data.status.text}
            </FText>
          )}
        </View>
      </View>
      {!!data.notes && (
        <>
          <Separator style={Styles.separator} />
          <FText style={Styles.remark}>{data.notes}</FText>
        </>
      )}
    </View>
  );
};

export default ExpenseDetailCard;
