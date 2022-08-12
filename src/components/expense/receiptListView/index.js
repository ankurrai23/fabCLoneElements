import React, {useRef} from 'react';
import {FlatList, View} from 'react-native';
import Styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import FImage from '../../../common/rn/FImage';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import {ImageConst} from '../../../utils/imageConst/index.travelPlus';
import {getPluralText} from '../../../utils/Utils';
import Button from '../../../common/components/button';
import {Strings} from '../../../utils/strings/index.travelPlus';

export const RECEIPT_LIST_VIEW_TYPE = {
  IMAGE: 'image',
  LIST: 'list',
};

const ReceiptListView = ({
  data,
  onClosePress,
  onScanAgainPress,
  onUploadReceiptPress,
  onImagePress,
  scanDisabled,
  onPressDelete,
  type,
}) => {
  const listRef = useRef();
  const renderItem = ({item, index}) => {
    if (type === RECEIPT_LIST_VIEW_TYPE.IMAGE) {
      return (
        <FTouchableOpacity onPress={() => onImagePress(item, index)}>
          <FImage
            source={{uri: item.uri}}
            style={Styles.listImageStyle}
            resizeMode={'contain'}
          />
          <FTouchableOpacity
            onPress={() => onPressDelete(index)}
            style={Styles.deleteView}>
            <EvilIcons name="trash" size={DP._32} color={Color.RED} />
          </FTouchableOpacity>
        </FTouchableOpacity>
      );
    } else {
      return (
        <FTouchableOpacity
          onPress={() => onImagePress(item, index)}
          style={Styles.listView}>
          <View style={Styles.listViewLeftFlex}>
            <FImage resizeMode={'contain'} source={ImageConst.file} />
          </View>
          <View style={Styles.listViewTextView}>
            <FText style={Styles.titleText}>{item.name}</FText>
            {!!item.size && (
              <FText style={Styles.sizeTxt}>
                {Math.floor(item.size / 1000)} {Strings.kb}
              </FText>
            )}
          </View>
          {data?.length > 1 && (
            <FTouchableOpacity
              onPress={() => onPressDelete(index)}
              style={Styles.deleteListView}>
              <EvilIcons name="trash" size={DP._25} color={Color.RED} />
            </FTouchableOpacity>
          )}
        </FTouchableOpacity>
      );
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.closeButtonContainer(type)}>
        <FTouchableOpacity onPress={onClosePress}>
          <AntDesign name="close" size={DP._24} color={Color.DARK} />
        </FTouchableOpacity>
      </View>
      {type === RECEIPT_LIST_VIEW_TYPE.IMAGE ? null : (
        <FText type={FONT_TYPE.MEDIUM} style={Styles.headerTitle}>
          {getPluralText(data?.length, Strings.selectedFile)}
        </FText>
      )}
      <View style={Styles.flex_1(type)}>
        {data.length > 1 || type === RECEIPT_LIST_VIEW_TYPE.LIST ? (
          <FlatList
            ref={listRef}
            onContentSizeChange={() => listRef.current.scrollToEnd()}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={type === RECEIPT_LIST_VIEW_TYPE.IMAGE ? true : false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: type === RECEIPT_LIST_VIEW_TYPE.IMAGE ? DP._24 : 0,
            }}
            bounces={false}
            ItemSeparatorComponent={() =>
              type === RECEIPT_LIST_VIEW_TYPE.IMAGE ? null : (
                <View style={Styles.separator} />
              )
            }
          />
        ) : (
          <FTouchableOpacity
            onPress={() => onImagePress(data[0], 0)}
            style={Styles.buttonStyle}>
            <FImage
              source={{uri: data?.[0]?.uri}}
              style={Styles.singleImage}
              resizeMode={'contain'}
            />
          </FTouchableOpacity>
        )}
        <View />
      </View>
      <View style={Styles.buttonsContainer}>
        <Button
          textFont={FONT_TYPE.MEDIUM}
          style={Styles.scanButtonStyle(scanDisabled)}
          textStyle={Styles.scanButtonText}
          onPress={onScanAgainPress}
          activeOpacity={scanDisabled ? 0.4 : 1}>
          {Strings.addAnother}
        </Button>
        <Button
          textFont={FONT_TYPE.MEDIUM}
          style={Styles.uploadButtonStyle}
          textStyle={Styles.uploadButtonText}
          onPress={onUploadReceiptPress}>
          {Strings.upload}
        </Button>
      </View>
    </View>
  );
};

export default ReceiptListView;
