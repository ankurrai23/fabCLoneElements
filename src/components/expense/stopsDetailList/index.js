import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import DashedLine from '../../../common/components/dashedLine';
import FText from '../../../common/rn/FText';
import DialogBox from '../../../common/components/dialogBox';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

import Styles from './Styles';

/*
TODO: Fix scroll issue for bottom list
*/
const StopDetailList = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const StopDetail = ({item, index, showDash}) => {
    return (
      <View>
        <View
          style={Styles.locationNameAndStopContainer(
            index === data.length - 1,
          )}>
          <View style={Styles.characterContainer(false)}>
            <FText type={'medium'} style={Styles.character}>
              {String.fromCharCode(index + 65)}
            </FText>
          </View>
          <FText
            style={Styles.locationName()}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {item.name}
          </FText>
        </View>
        {showDash && (
          <View style={Styles.dashedLineContainer}>
            <DashedLine
              dashSize={DP._4}
              dashWidth={DP._1}
              dashColor={Color.TWILIGHT_BLUE}
            />
          </View>
        )}
      </View>
    );
  };

  const CollapsedStops = ({showDash}) => {
    return (
      <View style={Styles.stopDetailContainer}>
        <View style={Styles.locationNameAndStopContainer(false)}>
          <View style={Styles.characterContainer(true)} />
          <FTouchableOpacity onPress={() => setModalVisible(true)}>
            <FText style={Styles.locationName(true)}>{`${
              data.length - 2
            } stops`}</FText>
          </FTouchableOpacity>
        </View>
        {showDash && (
          <View style={Styles.dashedLineContainer}>
            <DashedLine
              dashSize={DP._4}
              dashWidth={DP._1}
              dashColor={Color.TWILIGHT_BLUE}
            />
          </View>
        )}
      </View>
    );
  };

  const FullList = () => {
    return (
      <View style={Styles.listContainer}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <StopDetail
              item={item}
              index={index}
              showDash={index < data.length - 1}
            />
          )}
          bounces={false}
          keyExtractor={(item, index) =>
            `${index}${String.fromCharCode(index + 65)}`
          }
        />
      </View>
    );
  };

  return (
    <>
      <View style={[Styles.container]}>
        <StopDetail item={data[0]} index={0} showDash />
        {data.length >= 3 ? (
          data.length > 3 ? (
            <CollapsedStops showDash={true} />
          ) : (
            <StopDetail item={data[1]} index={1} showDash />
          )
        ) : null}
        <StopDetail item={data[data.length - 1]} index={data.length - 1} />
      </View>
      <DialogBox
        modalVisible={modalVisible}
        ContentModal={<FullList />}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default StopDetailList;
