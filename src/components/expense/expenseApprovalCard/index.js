import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import FImage from '../../../common/rn/FImage';
import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Checkbox from '../../../common/components/checkbox';

import Styles from './Styles';
import {DP} from '../../../utils/Dimen';

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
                          Out of policy
                        </FText>
                        <View style={Styles.outOfPolicyBackground} />
                      </View>
                    )}
                  </View>
                </View>
                <Feather
                  name="chevron-right"
                  size={DP._18}
                  style={Styles.chevronStyle}
                />
              </View>
              {item.viewReceipt && (
                <View style={Styles.uploadReceiptButton}>
                  <FTouchableOpacity onPress={onUploadReceipt}>
                    <FText style={Styles.uploadReceiptText}>
                      <Feather name="paperclip" size={DP._13} />
                      {item.receiptCount > 1
                        ? ` View ${item.receiptCount} receipts`
                        : ' View receipt'}
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
