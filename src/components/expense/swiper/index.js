import React, {useRef} from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import {ImageZoomViewer} from '../ImageZoomViewer';

import Styles from './Styles';
const width = Dimensions.get('window').width;

const THRESHOLD = 50;

const Swiper = ({itemData, updateView, count}) => {
  const onViewRef = useRef((viewableItems) => {
    updateView(viewableItems.viewableItems[0].index);
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: THRESHOLD});
  return (
    <>
      <FlatList
        data={itemData.receipts}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        pagingEnabled={true}
        onViewableItemsChanged={onViewRef.current}
        initialScrollIndex={count}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={Styles.container}>
              <ImageZoomViewer item={item} />
            </View>
          );
        }}
      />
      {itemData.name ? (
        <View style={Styles.imageText}>
          <View style={{flex: 7}}>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.allExpenseText}>
              {itemData.name}
            </FText>
            <FText type={FONT_TYPE.REGULAR} style={Styles.regularText}>
              {itemData.notes}
            </FText>
            <FText
              type={FONT_TYPE.REGULAR}
              style={[Styles.regularText, {paddingVertical: 0}]}>
              {itemData.expenseDate}
            </FText>
          </View>
          <View style={Styles.priceView}>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.priceTxt}>
              {itemData.amount}
            </FText>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default Swiper;
