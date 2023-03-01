import {ScrollView, View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import FTouchableOpacity from '../../../../../common/rn/FTouchableOpacity';
import FText from '../../../../../common/rn/FText';
import {Color} from '../../../../../utils/color/index.travelPlus';
import Icon from '../../../../../assets/icons/Icon';

const QuickLink = ({item, onPress}) => {
  return (
    <FTouchableOpacity
      style={Styles.sortOption(item.selected)}
      onPress={() => onPress(item)}>
      <FText style={Styles.sortText(item.selected)}>{item.value}</FText>
    </FTouchableOpacity>
  );
};

const QuickLinks = ({
  quickLinks,
  onQuickLinkSelect,
  isFilterApplied,
  onFilterPress,
}) => {
  return (
    <View style={Styles.filterContainer}>
      {quickLinks?.length > 0 && (
        <ScrollView
          horizontal={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Styles.containerStyle}>
          {quickLinks.map((item) => (
            <QuickLink item={item} onPress={onQuickLinkSelect} key={item.key} />
          ))}
        </ScrollView>
      )}
      <FTouchableOpacity style={Styles.filterButton} onPress={onFilterPress}>
        {isFilterApplied && <View style={Styles.filterAppliedDot} />}
        <Icon.Filter stroke={Color.WHITE} />
      </FTouchableOpacity>
    </View>
  );
};

export default QuickLinks;

export const FilterSection = ({title, children, style}) => {
  return (
    <View style={[Styles.filterSection, style]}>
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
  viewStyle,
}) => {
  return (
    <FTouchableOpacity
      style={Styles.button(isSelected, addMarginRight)}
      onPress={onPress}>
      {typeof children === 'string' ? (
        <FText style={Styles.buttonText(isSelected)}>{children}</FText>
      ) : (
        <View style={viewStyle}>{children}</View>
      )}
    </FTouchableOpacity>
  );
};
