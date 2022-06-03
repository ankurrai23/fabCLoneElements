import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './Styles';
import Checkbox from '../checkbox';
import Button from '../button';
import DialogBox from '../dialogBox';

export default function FilterModal({
  visible = true,
  data,
  clearFilterLabel,
  filterTypeLabel,
  onCancel,
  onApply,
}) {
  const [filterData, setFilterData] = useState(data.map((item) => ({...item})));

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
        <Text style={Styles.itemText}>{item.value}</Text>
        <Checkbox
          isChecked={item.isSelected}
          toggleChecked={() => _handleSelection(index)}
        />
      </View>
    );
  };

  return (
    <DialogBox
      modalVisible={visible}
      onClose={onCancel}
      ContentModal={
        <>
          <View style={Styles.container}>
            <View style={Styles.notch} />
            <View style={Styles.clearFilterContainer}>
              <TouchableOpacity onPress={_handleClearAll}>
                <Text style={Styles.clearFilterText}>{clearFilterLabel}</Text>
              </TouchableOpacity>
            </View>
            <Text style={Styles.filterTypeText}>{filterTypeLabel}</Text>
            <FlatList data={filterData} renderItem={renderItem} />
            <View style={Styles.actionButtonContainer}>
              <Button
                children={'CANCEL'}
                onPress={onCancel}
                style={Styles.buttonStyle('')}
              />
              <Button
                type="PRIMARY"
                children={'APPLY'}
                onPress={() => onApply(filterData)}
                style={Styles.buttonStyle('PRIMARY')}
              />
            </View>
          </View>
        </>
      }
    />
  );
}

FilterModal.propTypes = {
  animationType: PropTypes.oneOf(['none', 'fade', 'slide']),
};

FilterModal.defaultProps = {
  animationType: 'slide',
};
