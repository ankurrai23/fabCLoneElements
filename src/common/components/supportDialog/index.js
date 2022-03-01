import React from 'react';
import {StyleSheet, FlatList, View, Linking} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import {FText, FTouchableOpacity} from '../../..';
import DialogBox from '../dialogBox';

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
        <Icon name="call" size={DP._20} color={Color.DODGER_BLUE} />
      </FTouchableOpacity>
    );
  }

  return (
    <DialogBox
      modalVisible={props.visible}
      ContentModal={
        <View style={styles.paddingView}>
          <FTouchableOpacity
            style={styles.closeView}
            onPress={() => props.setVisible(false)}>
            <MaterialCommunityIcons
              name="close"
              size={DP._26}
              color={Color.BROWN_GREY}
            />
          </FTouchableOpacity>
          <FText style={styles.heading}>{'Support'}</FText>
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
      onClose={() => {
        props.setVisible(false);
      }}
    />
  );
};

const styles = StyleSheet.create({
  bottomSheet: {},
  heading: {
    fontSize: DP._20,
    color: Color.BLACK,
    textAlign: 'center',
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
