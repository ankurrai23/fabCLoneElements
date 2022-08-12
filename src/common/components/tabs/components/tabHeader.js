import React from 'react';

import FText, {FONT_TYPE} from '../../../rn/FText';
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
        type={index === initialPage ? FONT_TYPE.SEMI_BOLD : FONT_TYPE.REGULAR}
        style={tabHeading}
        numberOfLines={2}>
        {title}
      </FText>
    </FTouchableOpacity>
  );
};
