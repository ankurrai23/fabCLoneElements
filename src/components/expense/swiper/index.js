import React, {useRef} from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import FText from '../../../common/rn/FText';
import {ImageZoomViewer} from '../ImageZoomViewer';

import Styles from './Styles';
const width = Dimensions.get('window').width;

const Swiper = ({itemData, updateView, count}) => {
  const onViewRef = useRef((viewableItems) => {
    updateView(viewableItems.viewableItems[0].index);
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
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
            <View key={index}>
              <ImageZoomViewer item={item} />
            </View>
          );
        }}
      />
      {itemData.name ? (
        <View style={Styles.imageText}>
          <View style={{flex: 7}}>
            <FText type="medium" style={Styles.allExpenseText}>
              {itemData.name}
            </FText>
            <FText type="regular" style={Styles.regularText}>
              {itemData.notes}
            </FText>
            <FText
              type="regular"
              style={[Styles.regularText, {paddingVertical: 0}]}>
              {itemData.expenseDate}
            </FText>
          </View>
          <View style={Styles.priceView}>
            <FText type="medium" style={Styles.priceTxt}>
              {itemData.amount}
            </FText>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default Swiper;
