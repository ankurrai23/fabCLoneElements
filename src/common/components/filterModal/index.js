import React, {useState, useMemo, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './Styles';
import Checkbox from '../checkbox';
import Button from '../button';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {BlurView} from '@react-native-community/blur';

export default function FilterModal({
  data,
  clearFilterLabel,
  filterTypeLabel,
  onCancel,
  onApply,
  blurType = 'dark',
}) {
  const [filterData, setFilterData] = useState(data.map((item) => ({...item})));
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['75%'], []);

  const _handleSelection = (index) => {
    setFilterData((prevState) =>
      prevState.map((item, itemIndex) => {
        if (index === itemIndex) {
          item.isSelected = !item.isSelected;
        }
        return item;
      }),
    );
  };

  const _handleClearAll = () => {
    setFilterData((prevState) =>
      prevState.map((item) => {
        item.isSelected = false;
        return item;
      }),
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={Styles.filterItemContainer}>
        <Text style={Styles.itemText}>{item.name}</Text>
        <Checkbox
          isChecked={item.isSelected}
          toggleChecked={() => _handleSelection(index)}
        />
      </View>
    );
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={() => (
        <BlurView
          style={Styles.absolute}
          blurType={blurType}
          blurAmount={1}
          reducedTransparencyFallbackColor="transparent"
        />
      )}>
      <View style={Styles.contentContainer}>
        <View style={Styles.clearFilterContainer}>
          <TouchableOpacity onPress={_handleClearAll}>
            <Text style={Styles.clearFilterText}>{clearFilterLabel}</Text>
          </TouchableOpacity>
        </View>
        <Text style={Styles.filterTypeText}>{filterTypeLabel}</Text>
        <BottomSheetFlatList
          data={filterData}
          keyExtractor={(i) => i}
          renderItem={renderItem}
          contentContainerStyle={Styles.listContainer}
        />
        <View style={Styles.actionButtonContainer}>
          <Button
            children={'CANCEL'}
            onPress={onCancel}
            style={Styles.buttonStyle('')}
            textStyle={Styles.cancelText}
          />
          <Button
            type="PRIMARY"
            children={'APPLY'}
            onPress={() => onApply(filterData)}
            style={Styles.buttonStyle('PRIMARY')}
            textStyle={Styles.applyText}
          />
        </View>
      </View>
    </BottomSheet>
  );
}
