import React, {Component} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';

import Tab from './Tab';
import Styles, {ANIMATION_DURATION, MAX_TAB_WIDTH} from './Styles';

let self;

export default class ScrollableTabBar extends Component {
  static propTypes = {
    data: PropTypes.array,
    startingIndex: PropTypes.number,
    onTabClick: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.tabArray = [];
    this.tabRefs = [];
    self = this;
    this.svRef = React.createRef();
    this.scaleAnim = new Animated.Value(1);
    this.position = new Animated.Value(1);
    this.selectedTab = undefined;
  }

  onTabClick = (xPosition, width, index, shouldCallbackEnabled = true) => {
    let scale = width / MAX_TAB_WIDTH;
    let scaleCompliment = 1 - scale;
    let pos = (scaleCompliment / 2) * 100;
    let newPos = xPosition - pos;

    let animation = Animated.parallel([
      Animated.timing(this.position, {
        toValue: newPos,
        useNativeDriver: true,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.scaleAnim, {
        toValue: scale,
        useNativeDriver: true,
        duration: ANIMATION_DURATION,
      }),
    ]);
    animation.start();

    this.svRef.current?.scrollTo({
      x: xPosition - (this.tabBarWidth / 2 - width / 2),
      animated: true,
    });
    if (this.selectedTab) {
      this.selectedTab.current?.tabUnSelected();
    }
    this.selectedTab = this.tabRefs[index];
    this.selectedTab.current?.tabSelected();
    if (shouldCallbackEnabled) {
      this.props.onTabClick(index);
    }
  };

  onLayout(event) {
    self.tabBarWidth = event.nativeEvent.layout.width;
  }

  scrollToTab(tabTitle, shouldCallbackEnabled = false) {
    this.tabRefs.forEach((ref) => {
      if (ref.current?.getTitle() === tabTitle) {
        this.onTabClick(
          ref.current?.getXPosition(),
          ref.current?.getWidth(),
          ref.current?.getIndex(),
          shouldCallbackEnabled,
        );
      }
    });
  }

  render() {
    const {
      containerStyle,
      bottomBarStyle,
      selectedTabTextStyle,
      tabStyle,
      unSelectedTabTextStyle,
    } = this.props;
    if (this.tabArray.length === 0) {
      this.props.data.forEach((content, i) => {
        let ref = React.createRef();
        const tab = (
          <Tab
            key={i}
            ref={ref}
            index={i}
            content={content}
            onTabClick={this.onTabClick}
            tabStyle={tabStyle}
            indexToCallback={this.props.startingIndex}
            selectedTabTextStyle={selectedTabTextStyle}
            unSelectedTabTextStyle={unSelectedTabTextStyle}
          />
        );
        this.tabArray.push(tab);
        this.tabRefs.push(ref);
      });
    }
    return (
      <View style={[Styles.container, containerStyle]} onLayout={this.onLayout}>
        <ScrollView
          ref={this.svRef}
          horizontal
          contentContainerStyle={Styles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}>
          {this.tabArray}
          {
            <Animated.View
              style={[
                Styles.bottomBar,
                bottomBarStyle,
                {
                  transform: [
                    {translateX: this.position},
                    {scaleX: this.scaleAnim},
                  ],
                },
              ]}
            />
          }
        </ScrollView>
      </View>
    );
  }
}
