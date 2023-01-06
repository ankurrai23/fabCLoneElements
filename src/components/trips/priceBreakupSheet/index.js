import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../../common/components/button';
import DialogBox from '../../../common/components/dialogBox';
import Separator from '../../../common/components/separator';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import {Strings} from '../../../utils/strings/index.travelPlus';
import {formattedPrice} from '../../../utils/Utils';
import Styles from './Styles';

const PriceBreakupSheet = ({
  data,
  visible,
  onClose,
  containerStyle,
  onOkPress,
}) => {
  const FeeDetail = ({title, cost, type}) => (
    <FTouchableOpacity style={Styles.feeContainer}>
      <FText type={type}>{title}</FText>
      <FText type={type}>{formattedPrice(cost)}</FText>
    </FTouchableOpacity>
  );

  return (
    <DialogBox
      modalVisible={visible}
      ContentModal={
        <View style={[Styles.container, containerStyle]}>
          <FText style={Styles.titleText}>{Strings.priceBreakup.title}</FText>
          <ScrollView>
            {!!data.flightBreakup && (
              <>
                <FeeDetail
                  title={Strings.priceBreakup.flightCharges}
                  cost={data.flightBreakup.flightCharges}
                />
                <FeeDetail
                  title={Strings.priceBreakup.convenienceFee}
                  cost={data.flightBreakup.convFeeWithGst}
                />
                <Separator style={Styles.separator} />
              </>
            )}
            {!!data.hotelBreakup && (
              <>
                <FeeDetail
                  title={Strings.priceBreakup.hotelCharges}
                  cost={data.hotelBreakup.hotelCharges}
                />
                <FeeDetail
                  title={Strings.priceBreakup.gst}
                  cost={data.hotelBreakup.gst}
                />
                <FeeDetail
                  title={Strings.priceBreakup.convenienceFee}
                  cost={data.hotelBreakup.convFee}
                />
                <Separator style={Styles.separator} />
              </>
            )}
            {!!data.hotelCancellationCharges && (
              <>
                <FeeDetail
                  title={Strings.priceBreakup.hotelCancellationCharges}
                  cost={data.hotelCancellationCharges.amount}
                />
                <FeeDetail
                  title={Strings.priceBreakup.convenienceFee}
                  cost={data.hotelCancellationCharges.convFeeWithGst}
                />
                <Separator style={Styles.separator} />
              </>
            )}
            {!!data.hotelModificationCharges && (
              <>
                <FeeDetail
                  title={Strings.priceBreakup.hotelModificationCharges}
                  cost={data.hotelModificationCharges.amount}
                />
                <FeeDetail
                  title={Strings.priceBreakup.convenienceFee}
                  cost={data.hotelModificationCharges.convFeeWithGst}
                />
                <Separator style={Styles.separator} />
              </>
            )}
            {!!data.flightCancellationCharges && (
              <>
                <FeeDetail
                  title={Strings.priceBreakup.flightCancellationCharges}
                  cost={data.flightCancellationCharges.amount}
                />
                <FeeDetail
                  title={Strings.priceBreakup.convenienceFee}
                  cost={data.flightCancellationCharges.convFeeWithGst}
                />
                <Separator style={Styles.separator} />
              </>
            )}
            {!!data.flightModificationCharges && (
              <>
                <FeeDetail
                  title={Strings.priceBreakup.flightModificationCharges}
                  cost={data.flightModificationCharges.amount}
                />
                <FeeDetail
                  title={Strings.priceBreakup.convenienceFee}
                  cost={data.flightModificationCharges.convFeeWithGst}
                />
                <Separator style={Styles.separator} />
              </>
            )}
            {!!data.grandTotal && (
              <>
                <FeeDetail
                  title={Strings.priceBreakup.totalAmount}
                  cost={data.grandTotal}
                  type={FONT_TYPE.MEDIUM}
                />
                <Separator style={Styles.separator} />
              </>
            )}
            {!!data.paidAmount && (
              <FeeDetail
                title={Strings.priceBreakup.paidAmount}
                cost={data.paidAmount}
              />
            )}
          </ScrollView>
          <Button
            textFont={FONT_TYPE.MEDIUM}
            textStyle={Styles.buttonText}
            onPress={onOkPress}
            style={Styles.buttonStyle}>
            {Strings.ok}
          </Button>
        </View>
      }
      onClose={onClose}
    />
  );
};

export default PriceBreakupSheet;
