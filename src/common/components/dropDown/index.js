import {View, FlatList} from 'react-native';
import React from 'react';
import FText from '../../rn/FText';
import TextField from '../textField';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import Styles from './Styles.js';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import FImage from '../../rn/FImage';
import {ImageConst} from '../../../utils/imageConst/index.travelPlus';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DropDown({
  data,
  label,
  searchType,
  onPress,
  onChangeText,
  keyword,
  style,
}) {
  const getImage = () => {
    switch (searchType) {
      case 'city':
        return ImageConst.searchCity;
      case 'airport':
        return ImageConst.searchAirport;
      case 'coTraveler':
        return ImageConst.searchCoTraveler;
    }
  };

  const Item = ({entity: {title, subTitle, insideBracket}, entity, index}) => {
    return (
      <FTouchableOpacity
        onPress={() => onPress(entity, index)}
        style={Styles.cardStyle}>
        <View style={Styles.titleAndIconContainer}>
          <FImage source={getImage()} />
          <FText type={'bold'} style={Styles.titleText} numberOfLines={1}>
            {title}
            {insideBracket ? (
              <FText type="light">{` (${insideBracket})`}</FText>
            ) : null}
          </FText>
        </View>
        <FText style={Styles.subText} numberOfLines={1}>
          {subTitle}
        </FText>
      </FTouchableOpacity>
    );
  };

  return (
    <View style={style}>
      <TextField
        label={label}
        icon={<Ionicons name="search" size={DP._16} color={Color.BLACK} />}
        iconStyle={Styles.searchIcon}
        labelStyle={Styles.labelStyle}
        inputStyle={Styles.inputStyle}
        value={keyword}
        onChangeText={onChangeText}
      />
      <View style={Styles.flatlistContainer(data?.length > 1)}>
        <FlatList
          data={data}
          renderItem={({item, index}) => <Item entity={item} index={index} />}
          contentContainerStyle={Styles.contentContainer}
          bounces={false}
          keyboardShouldPersistTaps="always"
        />
      </View>
    </View>
  );
}
