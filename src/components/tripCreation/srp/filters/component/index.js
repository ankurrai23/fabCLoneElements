import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import Styles from './Styles';
import FTouchableOpacity from '../../../../../common/rn/FTouchableOpacity';
import FText, {FONT_TYPE} from '../../../../../common/rn/FText';
import {Color} from '../../../../../utils/color/index.travelPlus';
import Icon from '../../../../../assets/icons/Icon';
import DialogBox from '../../../../../common/components/dialogBox';
import Button from '../../../../../common/components/button';
import {Strings} from '../../../../../utils/strings/index.travelPlus';
import {dialogBoxStyle} from '../../../../../utils/Utils';
import {DP} from '../../../../../utils/Dimen';

const SortOption = ({item, onPress}) => {
  return (
    <FTouchableOpacity
      style={Styles.sortOption(item.isSelected)}
      onPress={() => onPress(item)}>
      <FText style={Styles.sortText(item.isSelected)}>{item.value}</FText>
    </FTouchableOpacity>
  );
};

const SortAndFilter = ({
  children,
  sortData,
  onClearAll,
  onSortSelect,
  onApply,
}) => {
  const [filterModal, showFilterModal] = useState(true);
  return (
    <>
      <View style={Styles.filterContainer}>
        <ScrollView
          horizontal={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Styles.containerStyle}>
          {sortData.map((item) => (
            <SortOption item={item} onPress={onSortSelect} key={item.key} />
          ))}
        </ScrollView>
        <FTouchableOpacity
          style={Styles.filterButton}
          onPress={() => showFilterModal(true)}>
          <Icon.Filter stroke={Color.WHITE} />
        </FTouchableOpacity>
      </View>
      <DialogBox
        modalVisible={filterModal}
        onClose={() => showFilterModal(false)}
        ContentModal={
          <>
            <View style={Styles.titleContainer}>
              <FText style={Styles.filterText}>{Strings.filter}</FText>
              <FTouchableOpacity onPress={onClearAll}>
                <FText style={Styles.clearAllText}>{Strings.clearAll}</FText>
              </FTouchableOpacity>
            </View>
            <ScrollView
              style={[dialogBoxStyle, {paddingHorizontal: DP._24}]}
              bounces={false}>
              {children}
            </ScrollView>
            <Button
              onPress={onApply}
              style={Styles.applyButton}
              textStyle={Styles.applyText}
              textFont={FONT_TYPE.MEDIUM}>
              {Strings.apply}
            </Button>
          </>
        }
      />
    </>
  );
};

export default SortAndFilter;

export const FilterSection = ({title, children, style}) => {
  return (
    <View style={[{marginBottom: DP._24}, style]}>
      <FText style={Styles.sectionTitle}>{title}</FText>
      {children}
    </View>
  );
};

export const FilterButton = ({
  isSelected,
  children,
  onPress,
  addMarginRight,
}) => {
  return (
    <FTouchableOpacity
      style={Styles.button(isSelected, addMarginRight)}
      onPress={onPress}>
      <FText style={Styles.buttonText(isSelected)}>{children}</FText>
    </FTouchableOpacity>
  );
};
