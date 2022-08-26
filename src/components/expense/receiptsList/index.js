import React from 'react';
import {View, FlatList} from 'react-native';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FImage from '../../../common/rn/FImage';
import {getPluralText} from '../../../utils/Utils';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {RECEIPT_LIST_VIEW_TYPE} from '../receiptListView';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

const ListView = ({
  type,
  name,
  imageUri,
  onPress,
  onPressDelete,
  multipleImage,
  showDelete,
  itemLength,
}) => (
  <FTouchableOpacity onPress={onPress} style={Styles.imageStyle(multipleImage)}>
    {type === RECEIPT_LIST_VIEW_TYPE.IMAGE ? (
      <FImage
        source={{
          uri: imageUri,
        }}
        style={Styles.imgView}
      />
    ) : (
      <View style={Styles.alignments}>
        <Icon.File
          height={itemLength === 1 ? DP._32 : DP._26}
          width={itemLength === 1 ? DP._32 : DP._26}
        />
        <FText numberOfLines={1} style={Styles.titleText}>
          {name}
        </FText>
      </View>
    )}
    {showDelete && (
      <FTouchableOpacity
        hitSlop={Styles.hitSlopDelete}
        onPress={onPressDelete}
        style={Styles.deleteView}>
        <Icon.Trash width={DP._15} height={DP._15} />
      </FTouchableOpacity>
    )}
  </FTouchableOpacity>
);

const ReceiptsList = ({
  receipts,
  onImagePress,
  onPressAddMore,
  type,
  onPressDelete,
  firstItemDelete = true,
}) => {
  if (!receipts?.length) {
    return null;
  }
  return (
    <View style={Styles.uploadReceiptContainer}>
      <View style={Styles.uploadReceiptView}>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.uploadReceiptText}>
          {getPluralText(receipts?.length, Strings.uploadedReceipt)}
        </FText>
        {onPressAddMore && (
          <FTouchableOpacity hitSlop={Styles.hitSlop} onPress={onPressAddMore}>
            <FText style={Styles.addMoreTxt}>{Strings.addMore}</FText>
          </FTouchableOpacity>
        )}
      </View>
      {receipts?.length === 1 ? (
        <ListView
          type={type}
          imageUri={
            typeof receipts[0] === 'object' ? receipts[0].uri : receipts[0]
          }
          name={receipts[0].name}
          onPress={() => onImagePress(receipts[0], 0)}
          onPressDelete={() => onPressDelete(0)}
          multipleImage={false}
          showDelete={onPressAddMore && firstItemDelete}
          itemLength={receipts?.length}
        />
      ) : (
        <FlatList
          data={receipts}
          renderItem={({item, index}) => (
            <ListView
              type={type}
              name={item.name}
              imageUri={typeof item === 'object' ? item.uri : item}
              onPress={() => onImagePress(item, index)}
              onPressDelete={() => onPressDelete(index)}
              multipleImage={true}
              showDelete={onPressAddMore}
              itemLength={receipts?.length}
            />
          )}
          horizontal
          ItemSeparatorComponent={() => <View style={Styles.separator} />}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Styles.paddingHorizontal_16}
        />
      )}
    </View>
  );
};

export default ReceiptsList;
