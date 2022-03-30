import React, {useState} from 'react';
import {View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import {FText, FTouchableOpacity} from '../../..';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import Styles from './Styles';

export default function HomeCard({...props}) {
  const [layout, setLayout] = useState({});
  function onLayout(event) {
    if (!layout.height) {
      let ref = event.nativeEvent.layout;
      setLayout(ref);
    }
  }
  return (
    <View>
      {props.type === 'small' && (
        <FTouchableOpacity onPress={props.onPress} disabled={props.disabled}>
          <LinearGradient
            colors={[props.cardSecondaryColor, props.cardColor]}
            onLayout={onLayout}
            style={[Styles.container(props.cardColor, null), props.style]}
            locations={[0.2, 0.6]}>
            <View style={Styles.rightTriangle(layout, props.cardColor)} />
            <View>
              <FText type="medium" style={Styles.quantity}>
                {props.quantity}
              </FText>
              <FText style={Styles.title}>{props.subText}</FText>
              <View style={Styles.amountContainer}>
                <FText type="medium" style={Styles.amount}>
                  {props.amount}
                </FText>
                {props.disabled ? null : (
                  <Feather
                    name="chevron-right"
                    size={DP._24}
                    color={Color.WHITE}
                  />
                )}
              </View>
            </View>
          </LinearGradient>
        </FTouchableOpacity>
      )}
      {props.type === 'large' && (
        <FTouchableOpacity onPress={props.onPress} disabled={props.disabled}>
          <LinearGradient
            colors={[props.cardSecondaryColor, props.cardColor]}
            onLayout={onLayout}
            style={[
              Styles.container(props.cardColor, props.noClaim),
              Styles.containerSecondary,
            ]}
            locations={[0.2, 0.6]}>
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
                    <FText type="medium" style={Styles.amountSecondary}>
                      {props.amount}
                    </FText>
                  ) : (
                    <FText type="medium" style={Styles.amountSecondary}>
                      {props.quantity}
                    </FText>
                  )}
                </>
              )}
              {props.noClaim ? (
                <>
                  <FText style={[Styles.title]}>
                    <FText style={Styles.color_White} type="semiBold">
                      Add
                    </FText>
                    {` your first expense claim for ${props.date}`}
                  </FText>
                </>
              ) : (
                <>
                  <View>
                    <FText type="semiBold" style={Styles.claimsText}>
                      {props.cardTitle}
                    </FText>
                    <FText style={[Styles.title, Styles.lowerCase]}>
                      {props.subText}
                    </FText>
                  </View>
                  <View style={Styles.dateAndArrowContainer}>
                    {props.showActionNeeded ? (
                      <View style={Styles.actionView}>
                        <View style={Styles.circleView} />
                        <FText style={Styles.actionNeedTxt}>
                          Action needed
                        </FText>
                      </View>
                    ) : (
                      props.date && (
                        <FText type={'medium'} style={Styles.dateText}>
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
    </View>
  );
}
