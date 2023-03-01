import {
  concatColorMatrices,
  grayscale,
  rgba,
} from 'react-native-color-matrix-image-filters';

export const grayImageMatrix = (enabled) =>
  concatColorMatrices(
    grayscale(enabled ? 1 : 0),
    rgba(1, 1, 1, enabled ? 0.6 : 1),
  );
