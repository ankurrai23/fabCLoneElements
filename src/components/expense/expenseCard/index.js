import React, {useState} from 'react';
import {View} from 'react-native';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import FImage from '../../../common/rn/FImage';
import AddReceiptModal from '../addReceiptModal';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';

import {Color} from '../../../utils/color';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

export const EXPENSE_CLAIM_STATUS = {
  APPROVAL_PENDING: 'APPROVAL_PENDING',
};

const ExpenseCard = ({
  showSeparator,
  expenseIcon,
  date,
  status,
  title,
  receiptRequired,
  receiptCount,
  showStatus,
  amount,
  outOfPolicy,
  viewReceipt,
  style,
  onPress,
  onUploadReceipt,
  onViewReceipt,
}) => {
  const [visible, setVisible] = useState(false);
  function onAddReceiptOptionPress(type) {
    setVisible(false);
    setTimeout(() => onUploadReceipt(type), 100);
  }

  return (
    <FTouchableOpacity
      style={[Styles.container(showSeparator), style]}
      onPress={onPress}>
      <View style={Styles.imageContainer}>
        <FImage
          style={Styles.image}
          source={expenseIcon ? {uri: expenseIcon} : null}
        />
        <FText style={Styles.date}>{date}</FText>
      </View>
      <View style={Styles.Flex}>
        <View style={Styles.detailsContainer}>
          <View style={Styles.Flex}>
            <FText
              style={Styles.name(
                status.type !== EXPENSE_CLAIM_STATUS.APPROVAL_PENDING,
              )}>
              {title}
            </FText>
            <View style={Styles.FlexDirectionRow}>
              <FText
                style={Styles.amount(
                  status.type !== EXPENSE_CLAIM_STATUS.APPROVAL_PENDING,
                )}>
                {amount}
              </FText>
              {outOfPolicy && (
                <FText style={Styles.outOfPolicyText}>
                  {Strings.outOfPolicy}
                </FText>
              )}
            </View>
          </View>
          {showStatus && (
            <FText
              type={FONT_TYPE.MEDIUM}
              style={Styles.typeOfClaim(status.color)}>
              {status.text}
            </FText>
          )}
          <Icon.ChevronRight
            width={DP._18}
            height={DP._18}
            stroke={Color.BATTLESHIP_GREY_TWO}
            strokeWidth={2}
          />
        </View>
        {receiptRequired && (
          <View style={Styles.uploadReceiptButton}>
            <FTouchableOpacity onPress={() => setVisible(true)}>
              <FText style={Styles.uploadReceiptText}>
                {Strings.uploadReceipt}
              </FText>
            </FTouchableOpacity>
          </View>
        )}
        {viewReceipt && (
          <View style={Styles.uploadReceiptButton}>
            <FTouchableOpacity onPress={onViewReceipt}>
              <FText style={Styles.uploadReceiptText}>
                {receiptCount > 1
                  ? Strings.viewReceipts(receiptCount)
                  : Strings.viewReceipt}
              </FText>
            </FTouchableOpacity>
          </View>
        )}
      </View>
      <AddReceiptModal
        visible={visible}
        setVisible={setVisible}
        onPress={onAddReceiptOptionPress}
      />
    </FTouchableOpacity>
  );
};

export default ExpenseCard;
