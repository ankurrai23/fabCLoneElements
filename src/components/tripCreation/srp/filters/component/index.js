import {ScrollView, View} from 'react-native';
import React, {useRef} from 'react';
import Styles from './Styles';
import FTouchableOpacity from '../../../../../common/rn/FTouchableOpacity';
import FText, {FONT_TYPE} from '../../../../../common/rn/FText';
import {Color} from '../../../../../utils/color/index.travelPlus';
import Icon from '../../../../../assets/icons/Icon';
import Button from '../../../../../common/components/button';
import {Strings} from '../../../../../utils/strings/index.travelPlus';
import {dialogBoxStyle} from '../../../../../utils/Utils';
import BottomSheet from '../../../../../common/components/bottomSheet';

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
  children,
  quickLinks,
  onClearAll,
  onQuickLinkSelect,
  onApply,
  isFilterApplied,
}) => {
  const bottomSheetRef = useRef();
  const onApplyPress = () => {
    bottomSheetRef.current.collapse();
    onApply();
  };

  return (
    <>
      <View style={Styles.filterContainer}>
        {quickLinks?.length > 0 && (
          <ScrollView
            horizontal={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={Styles.containerStyle}>
            {quickLinks.map((item) => (
              <QuickLink
                item={item}
                onPress={onQuickLinkSelect}
                key={item.key}
              />
            ))}
          </ScrollView>
        )}
        <FTouchableOpacity
          style={Styles.filterButton}
          onPress={() => bottomSheetRef.current.expand()}>
          {isFilterApplied && <View style={Styles.filterAppliedDot} />}
          <Icon.Filter stroke={Color.WHITE} />
        </FTouchableOpacity>
      </View>
      <BottomSheet ref={bottomSheetRef}>
        <>
          <View style={Styles.titleContainer}>
            <FText style={Styles.filterText}>{Strings.filter}</FText>
            <FTouchableOpacity onPress={onClearAll}>
              <FText style={Styles.clearAllText}>{Strings.clearAll}</FText>
            </FTouchableOpacity>
          </View>
          <ScrollView style={dialogBoxStyle} bounces={false}>
            {children}
          </ScrollView>
          <Button
            onPress={onApplyPress}
            style={Styles.applyButton}
            textStyle={Styles.applyText}
            textFont={FONT_TYPE.MEDIUM}>
            {Strings.apply}
          </Button>
        </>
      </BottomSheet>
    </>
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
