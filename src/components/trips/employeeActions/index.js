import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import Separator from '../../../common/components/separator';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import Icon from '../../../assets/icons/Icon';
import Button from '../../../common/components/button';
import {Strings} from '../../../utils/strings/index.travelPlus';

const Amount = ({price, inclGST = true}) => (
  <View style={Styles.priceContainer}>
    <FText type={FONT_TYPE.MEDIUM} style={Styles.price}>
      {price}
    </FText>
    {inclGST && <FText style={Styles.gstIncl}>Incl GST & Fees</FText>}
  </View>
);

const EmployeeActions = ({onPayPress, actions, info, amount}) => {
  return (
    <View style={Styles.container}>
      {info ? (
        <View style={Styles.infoContainer(info.type)}>
          <Icon.Info
            width={DP._16}
            height={DP._16}
            stroke={
              info.type === 'ERROR' ? Color.PASTEL_RED : Color.DODGER_BLUE
            }
          />
          <FText style={Styles.infoText}>{info.value}</FText>
        </View>
      ) : (
        <Separator style={Styles.separator} />
      )}
      <View style={Styles.buttonContainer}>
        {!!amount && <Amount price={amount} />}
        <Button
          onPress={onPayPress}
          textFont={FONT_TYPE.MEDIUM}
          textStyles={{lineHeight: DP._20}}
          style={Styles.payButton}>
          {Strings.pay}
        </Button>
      </View>
    </View>
  );
};

export default EmployeeActions;
