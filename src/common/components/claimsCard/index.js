import React, {useState} from 'react';
import {View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import FText, {FONT_TYPE} from '../../rn/FText';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';

export const CLAIM_CARD_TYPE = {
  LARGE: 'large',
  SMALL: 'small',
};

export default function ClaimsCard({...props}) {
  const [layout, setLayout] = useState({});
  function onLayout(event) {
    if (!layout.height) {
      let ref = event.nativeEvent.layout;
      setLayout(ref);
    }
  }
  return (
    <>
      {props.type === CLAIM_CARD_TYPE.SMALL && (
        <FTouchableOpacity
          onPress={props.onPress}
          disabled={props.disabled}
          style={[Styles.container(props.cardColor, null), props.style]}>
          <LinearGradient
            colors={[props.cardSecondaryColor, props.cardColor]}
            onLayout={onLayout}
            style={Styles.smallCardGradientStyle}
            start={{x: 1, y: 0}}
            locations={[0, 0.6]}>
            <View style={Styles.rightTriangle(layout, props.cardColor)} />
            <View>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.quantity}>
                {props.quantity}
              </FText>
              <FText style={Styles.title}>{props.subText}</FText>
              <View style={Styles.amountContainer}>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.amount}>
                  {props.amount}
                </FText>
                {props.disabled ? null : (
                  <View style={Styles.rightArrowView}>
                    <AntDesign name="right" size={DP._15} color={Color.WHITE} />
                  </View>
                )}
              </View>
            </View>
          </LinearGradient>
        </FTouchableOpacity>
      )}
      {props.type === CLAIM_CARD_TYPE.LARGE && (
        <FTouchableOpacity
          onPress={props.onPress}
          disabled={props.disabled}
          style={[
            Styles.container(props.cardColor, props.noClaim),
            Styles.containerSecondary,
          ]}>
          <LinearGradient
            colors={[props.cardSecondaryColor, props.cardColor]}
            onLayout={onLayout}
            style={Styles.largeCardGradientStyle}
            start={{x: 1, y: 0}}
            locations={[0, 0.6]}>
            <View style={Styles.rightTriangle(layout, props.cardColor)} />
            <View>
              {props.noClaim ? (
                <AntDesign
                  name="pluscircleo"
                  size={DP._32}
                  color={Color.WHITE}
                  style={Styles.plusCircle}
                />
              ) : (
                <>
                  {props.amount ? (
                    <FText
                      type={FONT_TYPE.MEDIUM}
                      style={Styles.amountSecondary}
                      numberOfLines={1}>
                      {props.amount}
                    </FText>
                  ) : (
                    <FText
                      type={FONT_TYPE.MEDIUM}
                      style={Styles.amountSecondary}
                      numberOfLines={1}>
                      {props.quantity}
                    </FText>
                  )}
                </>
              )}
              {props.noClaim ? (
                <>
                  <FText style={[Styles.title]}>
                    <FText
                      style={Styles.color_White}
                      type={FONT_TYPE.SEMI_BOLD}>
                      {Strings.add}
                    </FText>
                    {Strings.firstExpenseClaim(props.date)}
                  </FText>
                </>
              ) : (
                <>
                  <View>
                    <FText
                      type={FONT_TYPE.SEMI_BOLD}
                      style={Styles.claimsText}
                      numberOfLines={1}>
                      {props.cardTitle}
                    </FText>
                    <FText
                      style={[Styles.title, Styles.lowerCase]}
                      numberOfLines={1}>
                      {props.subText}
                    </FText>
                  </View>
                  <View
                    style={Styles.dateAndArrowContainer(
                      props.showActionNeeded || props.date,
                    )}>
                    {props.showActionNeeded ? (
                      <View style={Styles.actionView}>
                        <View style={Styles.circleView} />
                        <FText style={Styles.actionNeedTxt}>
                          {Strings.actionNeeded}
                        </FText>
                      </View>
                    ) : (
                      props.date && (
                        <FText type={FONT_TYPE.MEDIUM} style={Styles.dateText}>
                          {props.date}
                        </FText>
                      )
                    )}
                    {props.disabled ? null : (
                      <View style={Styles.rightArrowView}>
                        <AntDesign
                          name="right"
                          size={DP._15}
                          color={Color.WHITE}
                        />
                      </View>
                    )}
                  </View>
                </>
              )}
            </View>
          </LinearGradient>
        </FTouchableOpacity>
      )}
    </>
  );
}
