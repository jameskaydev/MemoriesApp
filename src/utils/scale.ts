import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// horizontal scale
const h = (size: number) => (width / guidelineBaseWidth) * size;
// vertical scale
const v = (size: number) => (height / guidelineBaseHeight) * size;
// moderate scale
const m = (size: number, factor = 0.5) => size + (h(size) - size) * factor;

export { h, v, m };