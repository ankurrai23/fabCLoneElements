import React from 'react';
import {View} from 'react-native';

import Styles from '../Styles';

class TabContent extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.activeTabIndex === nextProps.index) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let style = [Styles.tabChildContainer];
    if (this.props.width) {
      style.push({width: this.props.width});
    }
    return (
      <View style={style}>
        {this.props.activeTabIndex === this.props.index
          ? this.props.content
          : null}
      </View>
    );
  }
}

export default TabContent;
