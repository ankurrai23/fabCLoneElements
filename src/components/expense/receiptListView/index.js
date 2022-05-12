import React, {useRef} from 'react';
import {FlatList, View} from 'react-native';
import Styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import FImage from '../../../common/rn/FImage';
import FText from '../../../common/rn/FText';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import {ImageConst} from '../../../utils/imageConst/index.travelPlus';
import {getPluralText} from '../../../utils/Utils';
import Button from '../../../common/components/button';

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
    if (type === 'image') {
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
                {Math.floor(item.size / 1000)} KB
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
      {type === 'image' ? null : (
        <FText type="medium" style={Styles.headerTitle}>
          {getPluralText(data?.length, 'Selected file')}
        </FText>
      )}
      <View style={Styles.flex_1(type)}>
        {data.length > 1 || type === 'list' ? (
          <FlatList
            ref={listRef}
            onContentSizeChange={() => listRef.current.scrollToEnd()}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={type === 'image' ? true : false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: type === 'image' ? DP._24 : 0}}
            bounces={false}
            ItemSeparatorComponent={() =>
              type === 'image' ? null : <View style={Styles.separator} />
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
          textFont={'medium'}
          style={Styles.scanButtonStyle(scanDisabled)}
          textStyle={Styles.scanButtonText}
          onPress={onScanAgainPress}
          activeOpacity={scanDisabled ? 0.4 : 1}>
          Add another
        </Button>
        <Button
          textFont={'medium'}
          style={Styles.uploadButtonStyle}
          textStyle={Styles.uploadButtonText}
          onPress={onUploadReceiptPress}>
          Upload
        </Button>
      </View>
    </View>
  );
};

export default ReceiptListView;
