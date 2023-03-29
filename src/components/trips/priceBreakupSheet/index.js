import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../../common/components/button';
import Separator from '../../../common/components/separator';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import {Strings} from '../../../utils/strings/index.travelPlus';
import {formattedPrice} from '../../../utils/Utils';
import Styles from './Styles';

const PriceBreakupSheet = ({data, containerStyle, onOkPress}) => {
  if (!data) {
    return null;
  }
  const FeeDetail = ({title, subtitle, cost, type, style}) => (
    <FTouchableOpacity style={[Styles.feeContainer, style]}>
      <View style={Styles.flexRow}>
        <FText type={type}>{title}</FText>
        {subtitle && <FText style={Styles.subTitle}>{subtitle}</FText>}
      </View>
      <FText type={type}>{formattedPrice(cost)}</FText>
    </FTouchableOpacity>
  );

  return (
    <View style={[Styles.container, containerStyle]}>
      <FText style={Styles.titleText}>{Strings.priceBreakup.title}</FText>
      <ScrollView>
        {!!data.flightBreakup && (
          <>
            {!!data.flightBreakup.flightCharges && (
              <FeeDetail
                title={Strings.priceBreakup.flightCharges}
                cost={data.flightBreakup.flightCharges}
              />
            )}
            {!!data.flightBreakup.flightCharge && (
              <FeeDetail
                title={Strings.priceBreakup.flightCharges}
                subtitle={`(${
                  data.flightBreakup.flightCharge.count
                } X ${formattedPrice(
                  data.flightBreakup.flightCharge.pricePerPax,
                )})`}
                cost={data.flightBreakup.flightCharge.price}
              />
            )}
            {!!data.flightBreakup.mealCount && (
              <FeeDetail
                title={Strings.priceBreakup.meals}
                cost={data.flightBreakup.mealCharges}
              />
            )}
            {!!data.flightBreakup.meal?.mealCount && (
              <FeeDetail
                title={Strings.priceBreakup.meals}
                subtitle={`X ${data.flightBreakup.meal.mealCount}`}
                cost={data.flightBreakup.meal.mealCharges}
              />
            )}
            {!!data.flightBreakup.convFeeWithGst && (
              <FeeDetail
                title={Strings.priceBreakup.convenienceFee}
                cost={data.flightBreakup.convFeeWithGst}
              />
            )}
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
        {!!data.hotelCancellationCharges?.amount && (
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
        {!!data.hotelModificationCharges?.amount && (
          <>
            <FeeDetail
              title={Strings.priceBreakup.hotelModificationCharges}
              subtitle={Strings.priceBreakup.included}
              cost={data.hotelModificationCharges.amount}
            />
            <FeeDetail
              title={Strings.priceBreakup.convenienceFee}
              cost={data.hotelModificationCharges.convFeeWithGst}
            />
            <Separator style={Styles.separator} />
          </>
        )}
        {!!data.flightCancellationCharges?.amount && (
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
        {!!data.flightModificationCharges?.amount && (
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
            {!!data.exclConvFeeMsg && (
              <FText style={Styles.exclConvMsg}>{Strings.exclConvFeeMsg}</FText>
            )}
            <Separator style={Styles.separator} />
          </>
        )}
        {!!data.paidAmount && (
          <FeeDetail
            title={Strings.priceBreakup.paidAmount}
            cost={data.paidAmount}
            style={Styles.paidAmountText}
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
  );
};

export default PriceBreakupSheet;
