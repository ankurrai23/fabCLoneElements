import React from 'react';

import FText from '../../../rn/FText';
import FTouchableOpacity from '../../../rn/FTouchableOpacity';

import Styles from '../Styles';

export const TabHeader = ({
  handleTabChange,
  title,
  index,
  tabHeaderTextColor,
  initialPage,
  absoluteView,
}) => {
  const tabHeading = [
    Styles.tabHeading(index === initialPage),
    tabHeaderTextColor && {color: tabHeaderTextColor},
  ];
  return (
    <FTouchableOpacity
      onPress={() => handleTabChange(index)}
      style={Styles.tabContainer}>
      {absoluteView}
      <FText
        type={index === initialPage ? 'semiBold' : 'regular'}
        style={tabHeading}
        numberOfLines={2}>
        {title}
      </FText>
    </FTouchableOpacity>
  );
};
