import React from 'react';
import {View} from 'react-native';

import FImage from '../../../common/rn/FImage';
import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Checkbox from '../../../common/components/checkbox';

import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

const ExpenseApprovalCard = ({
  item,
  index,
  onUploadReceipt,
  _onPressCheckbox,
  onPress,
  isSelected,
}) => {
  return (
    <View style={Styles.container}>
      <FTouchableOpacity onPress={onPress} style={Styles.subContainer}>
        <View style={Styles.leftView}>
          <View style={Styles.Viewcontainer}>
            <View style={Styles.imageContainer}>
              <FImage style={Styles.image} source={{uri: item.expenseIcon}} />
              <FText style={Styles.date}>{item.date}</FText>
            </View>
            <View style={Styles.Flex}>
              <View style={Styles.detailsContainer}>
                <View style={Styles.Flex}>
                  <FText style={Styles.name}>{item.title}</FText>
                  <View style={Styles.FlexDirectionRow}>
                    <FText style={Styles.amount}>{item.amount}</FText>
                    {item.outOfPolicy && (
                      <View style={Styles.outOfPolicyContainer}>
                        <FText style={Styles.outOfPolicyText}>
                          {Strings.outOfPolicy}
                        </FText>
                        <View style={Styles.outOfPolicyBackground} />
                      </View>
                    )}
                  </View>
                </View>
                <Icon.ChevronRight
                  width={DP._18}
                  height={DP._18}
                  style={Styles.chevronStyle}
                />
              </View>
              {item.viewReceipt && (
                <View style={Styles.uploadReceiptButton}>
                  <FTouchableOpacity onPress={onUploadReceipt}>
                    <FText style={Styles.uploadReceiptText}>
                      {item.receiptCount > 1
                        ? Strings.viewReceipts(item.receiptCount)
                        : Strings.viewReceipt}
                    </FText>
                  </FTouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
        <FTouchableOpacity
          onPress={_onPressCheckbox}
          style={[Styles.rightView(item.viewReceipt, index)]}>
          <Checkbox
            isChecked={isSelected}
            toggleChecked={_onPressCheckbox}
            size={18}
          />
        </FTouchableOpacity>
      </FTouchableOpacity>
    </View>
  );
};

export default ExpenseApprovalCard;
