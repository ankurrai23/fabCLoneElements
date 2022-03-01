import React, {useState, useRef, useEffect} from 'react';
import {
  Modal,
  View,
  Animated,
  Dimensions,
  PanResponder,
  TouchableWithoutFeedback,
  Easing,
  Keyboard,
} from 'react-native';
import Styles from './Styles';
import {BlurView} from '@react-native-community/blur';
import {FTouchableOpacity} from '../../..';

const {height} = Dimensions.get('window');

const DialogBox = (props) => {
  const {onClose, modalVisible, ContentModal, onRequestClose} = props;
  const TIMING = {
    duration: 250,
    easing: Easing.linear,
  };

  const pan = useRef(new Animated.ValueXY()).current;

  let [isAnimating, setIsAnimating] = useState(false);

  let animatedValueX = 0;

  let animatedValueY = 0;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        if (isAnimating) {
          return false;
        }
        if (gestureState.dy > 22) {
          return true;
        }
        return false;
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          x: animatedValueX,
          y: animatedValueY,
        });
        pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          pan.setValue({x: 0, y: gestureState.dy});
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 0) {
          if (gestureState.vy <= -0.7 || gestureState.dy <= -100) {
            setIsAnimating(true);
            Animated.timing(pan, {
              toValue: {x: 0, y: -height},
              ...TIMING,
              useNativeDriver: true,
            }).start(() => {
              setIsAnimating(false);
              onClose();
            });
          } else if (gestureState.vy >= 0.5 || gestureState.dy >= 100) {
            setIsAnimating(true);
            Animated.timing(pan, {
              toValue: {x: 0, y: height},
              ...TIMING,
              useNativeDriver: true,
            }).start(() => {
              setIsAnimating(false);
              onClose();
            });
          } else {
            setIsAnimating(true);
            Animated.spring(pan, {
              toValue: 0,
              useNativeDriver: true,
            }).start(() => {
              setIsAnimating(false);
            });
          }
        } else {
          setIsAnimating(true);
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: true,
          }).start(() => {
            setIsAnimating(false);
          });
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (modalVisible) {
      animatedValueX = 0;
      animatedValueY = 0;
      pan.setOffset({
        x: animatedValueX,
        y: animatedValueY,
      });
      pan.setValue({
        x: 0,
        y: height,
      });
      pan.x.addListener((value) => (animatedValueX = value.value));
      pan.y.addListener((value) => (animatedValueY = value.value));
    }
  }, [modalVisible]);

  const handleGetStyleBody = (opacity) => {
    return [
      [
        Styles.background,
        {
          transform: [{translateX: pan.x}, {translateY: pan.y}],
          opacity: opacity,
        },
      ],
    ];
  };

  const handleMainBodyStyle = (opacity) => {
    return [
      [
        Styles.ContainerModal,
        {
          opacity: opacity,
        },
      ],
    ];
  };

  let interpolateBackgroundOpacity = pan.y.interpolate({
    inputRange: [-height, 0, height],
    outputRange: [0, 1, 0],
  });
  return (
    <>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onShow={() => {
          setIsAnimating(true);
          Animated.timing(pan, {
            ...TIMING,
            toValue: {x: 0, y: 0},
            useNativeDriver: true,
          }).start(() => {
            setIsAnimating(false);
          });
        }}
        onRequestClose={onClose}>
        <FTouchableOpacity style={Styles.absolute} onPress={() => onClose()}>
          <BlurView
            style={Styles.absolute}
            blurType="light"
            blurAmount={1}
            reducedTransparencyFallbackColor="transparent"
          />
          <Animated.View
            style={handleMainBodyStyle(interpolateBackgroundOpacity)}>
            <Animated.View
              style={handleGetStyleBody(interpolateBackgroundOpacity)}
              {...panResponder.panHandlers}>
              <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
                style={Styles.TouchWithoutFeedBack}>
                <View style={Styles.mainContainer}>
                  <View style={Styles.dashView}>
                    <View style={Styles.headerView} />
                  </View>
                  {ContentModal}
                </View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </Animated.View>
        </FTouchableOpacity>
      </Modal>
    </>
  );
};

export default DialogBox;
