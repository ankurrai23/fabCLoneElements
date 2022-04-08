import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FText from '../../../rn/FText';
import FTouchableOpacity from '../../../rn/FTouchableOpacity';

import Styles from './Styles';

export default class Tab extends Component {
  static propTypes = {
    index: PropTypes.number,
    content: PropTypes.string,
    onTabClick: PropTypes.func,
    tabWidth: PropTypes.number,
    indexToCallback: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  onLayoutChanged = (event) => {
    this.xPosition = event.nativeEvent.layout.x;
    this.width = event.nativeEvent.layout.width;

    if (this.props.index === this.props.indexToCallback) {
      this.props.onTabClick(this.xPosition, this.width, this.props.index);
    }
  };

  getXPosition = function () {
    return this.xPosition;
  };

  getWidth = function () {
    return this.width;
  };

  getTitle = function () {
    return this.props.content;
  };

  getIndex = function () {
    return this.props.index;
  };

  onClick = () => {
    this.props.onTabClick(this.xPosition, this.width, this.props.index);
  };

  tabSelected = () => {
    this.setState({
      isSelected: true,
    });
  };

  tabUnSelected = () => {
    this.setState({
      isSelected: false,
    });
  };

  render() {
    const {selectedTabTextStyle, tabStyle, unSelectedTabTextStyle} = this.props;
    const {isSelected} = this.state;

    return (
      <FTouchableOpacity
        onPress={this.onClick}
        style={[Styles.container, tabStyle]}
        onLayout={this.onLayoutChanged}
        hitSlop={Styles.increasedTouchableArea}>
        <FText
          type="medium"
          style={[
            Styles.selectedText,
            isSelected ? selectedTabTextStyle : unSelectedTabTextStyle,
          ]}>
          {this.props.content}
        </FText>
      </FTouchableOpacity>
    );
  }
}
