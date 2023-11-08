import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// horizontal scale
const hScale = (size: number) => (width / guidelineBaseWidth) * size;
// vertical scale
const vScale = (size: number) => (height / guidelineBaseHeight) * size;
// moderate scale
const mScale = (size: number, factor = 0.5) => size + (hScale(size) - size) * factor;

export { hScale, vScale, mScale };