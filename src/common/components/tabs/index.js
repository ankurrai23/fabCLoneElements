import React, {PureComponent} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {TabHeader} from './components/tabHeader';
import TabContent from './components/tabContent';

import {Color} from '../../../utils/color';

import Styles from './Styles';

export default class Tabs extends PureComponent {
  static propTypes = {
    tab: PropTypes.array,
    initialPage: PropTypes.number,
    onTabChange: PropTypes.func,
    scrollEnabled: PropTypes.bool,
    tabHeaderBackgroundColor: PropTypes.string,
    tabHeaderTextColor: PropTypes.string,
    bottomBarColor: PropTypes.string,
    contentContainerStyle: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.activeTab = 0;
    this.tabHeader = [];
    this.svRef = React.createRef();
    this.position = new Animated.Value(0);
    this.tabHeaderBackgroundColor = this.props.tabHeaderBackgroundColor
      ? {backgroundColor: this.props.tabHeaderBackgroundColor}
      : {backgroundColor: Color.WHITE};
  }

  componentDidMount() {
    if (this.props.initialPage && this.props.initialPage !== this.activeTab) {
      this.intervalId = setInterval(() => {
        if (!this.windowWidth) {
          return;
        }
        clearInterval(this.intervalId);

        this.onTabChange(this.props.initialPage, false, false);
      }, 10);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  onTabChange = (index, disableScroll, isCallbackNeeded = true) => {
    if (this.activeTab !== index) {
      this.activeTab = index;
      if (!disableScroll) {
        this.svRef?.current?.scrollTo({
          x: this.windowWidth * index,
          animated: true,
        });
      }
      this.forceUpdate();

      if (isCallbackNeeded) {
        this.props.onTabChange && this.props.onTabChange(index);
      }
    }
  };

  onMomentumScrollEnd = (event) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / this.windowWidth,
    );
    if (Number.isInteger(index)) {
      this.onTabChange(index, true);
    }
  };

  render() {
    const {
      scrollEnabled = true,
      tabHeaderTextColor,
      bottomBarColor = Color.DODGER_BLUE,
    } = this.props;

    if (
      this.tabHeader.length !== (this.props.tab || []).length ||
      this.activeTab === this.props.initialPage
    ) {
      this.tabHeader.splice(0, this.tabHeader.length);
      this.props.tab.forEach((item, i) => {
        const tabHeader = (
          <TabHeader
            title={item.tabHeading}
            absoluteView={item.absoluteView}
            handleTabChange={this.onTabChange}
            key={i}
            index={i}
            tabHeaderTextColor={tabHeaderTextColor}
            initialPage={this.activeTab}
          />
        );
        this.tabHeader.push(tabHeader);
      });
      this.state.tabWidth = this.windowWidth / this.props.tab.length;
    }

    const tabBarMov = this.windowWidth
      ? this.position.interpolate({
          inputRange: [0, this.windowWidth],
          outputRange: [0, this.state.tabWidth],
        })
      : undefined;

    const containerStyle = StyleSheet.flatten([
      Styles.fill,
      this.props.contentContainerStyle,
    ]);

    return (
      <View onLayout={this.onLayout} style={containerStyle}>
        <View style={this.tabHeaderBackgroundColor}>
          <View style={Styles.tabHeadingContainer}>{this.tabHeader}</View>
          {Boolean(tabBarMov) && (
            <Animated.View
              style={[
                Styles.bottomBar,
                {
                  backgroundColor: bottomBarColor,
                  width: this.state.tabWidth,
                  transform: [{translateX: tabBarMov}],
                },
              ]}
            />
          )}
        </View>
        <Animated.ScrollView
          ref={this.svRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEventThrottle={4}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: this.position}}}],
            {useNativeDriver: true},
          )}
          style={Styles.fill}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          scrollEnabled={scrollEnabled}>
          {this.windowWidth &&
            this.props.tab.map((item, i) => (
              <TabContent
                width={this.windowWidth}
                key={i}
                content={item.content}
                index={i}
                activeTabIndex={this.activeTab}
              />
            ))}
        </Animated.ScrollView>
      </View>
    );
  }

  onLayout = (e) => {
    if (!this.state.tabWidth || this.state.tabWidth <= 0) {
      this.windowWidth = e.nativeEvent.layout.width;
      const tabWidth = this.windowWidth / this.props.tab.length;
      this.setState({
        tabWidth,
      });
    }
  };
}
