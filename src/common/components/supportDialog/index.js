import React from 'react';
import {StyleSheet, FlatList, View, Linking} from 'react-native';

import Icon from '../../../assets/icons/Icon';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import FText from '../../rn/FText';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import DialogBox from '../dialogBox';
import {Strings} from '../../../utils/strings/index.travelPlus';

const SupportDialog = (props) => {
  function onPress(item) {
    Linking.openURL(`tel:${item.value}`);
  }

  function renderItem({item}) {
    return (
      <FTouchableOpacity
        activeOpacity={1}
        style={styles.renderItem}
        onPress={() => onPress(item)}>
        <FText style={styles.itemText}>{item.name}</FText>
        <Icon.Phone />
      </FTouchableOpacity>
    );
  }

  return (
    <DialogBox
      modalVisible={props.visible}
      ContentModal={
        <View style={styles.paddingView}>
          <FText style={styles.heading}>{Strings.support}</FText>
          <View style={{paddingHorizontal: DP._10}}>
            <FlatList
              data={props.supportDetails}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              keyExtractor={(item) => item.name}
              bounces={false}
            />
          </View>
        </View>
      }
      onClose={props.onClose}
    />
  );
};

const styles = StyleSheet.create({
  bottomSheet: {},
  heading: {
    fontSize: DP._20,
    color: Color.BLACK,
    textAlign: 'left',
    marginLeft: DP._16,
    marginVertical: DP._18,
  },
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: DP._16,
  },
  separator: {
    backgroundColor: Color.PALE_GREY,
    height: DP._1,
    marginHorizontal: DP._16,
    marginVertical: DP._7,
  },
  itemText: {
    fontSize: DP._16,
    color: Color.GREY_PURPLE,
  },
  closeView: {
    alignItems: 'flex-end',
    marginRight: DP._20,
  },
  paddingView: {
    paddingBottom: DP._30,
  },
});

export default SupportDialog;
