import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {formattedPrice, getPluralText} from '../../../utils/Utils';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';

const ExpenseApprovalHeader = ({userDetails}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.rowView}>
        <View style={Styles.firstRow}>
          <FText type={FONT_TYPE.REGULAR} style={Styles.nameTxt}>
            {userDetails.name}
          </FText>
        </View>
        <View style={Styles.secondRow}>
          <FText type={FONT_TYPE.REGULAR} style={Styles.dateTxt}>
            {userDetails.month}
          </FText>
        </View>
      </View>
      <View style={[Styles.rowView, {marginVertical: DP._10}]}>
        <View style={Styles.firstRow}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.priceTxt}>
            {formattedPrice(userDetails.amount)}
          </FText>
        </View>
        <View style={Styles.secondRow}>
          <View style={Styles.cliamView}>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.claimTxt}>
              {userDetails.total}
              <FText
                type={FONT_TYPE.REGULAR}
                style={[Styles.claimTxt, {fontSize: DP._12}]}>
                {getPluralText(userDetails.total, ` ${Strings.claim}`)}
              </FText>
            </FText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpenseApprovalHeader;
