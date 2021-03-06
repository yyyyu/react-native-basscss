'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// border
var borderTopNone = { borderTopWidth: 0 };
var borderRightNone = { borderRightWidth: 0 };
var borderBottomNone = { borderBottomWidth: 0 };
var borderLeftNone = { borderLeftWidth: 0 };
var borderNone = {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0
};
// flexbox
var flexRow = { flexDirection: 'row' };
var flexRowReverse = { flexDirection: 'row-reverse' };
var flexColumn = { flexDirection: 'column' };
var flexColumnReverse = { flexDirection: 'column-reverse' };
var flexNoShrink = { flex: 0 };
var flexWrap = { flexWrap: 'wrap' };
var itemsStart = { alignItems: 'flex-start' };
var itemsEnd = { alignItems: 'flex-end' };
var itemsCenter = { alignItems: 'center' };
var itemsStretch = { alignItems: 'stretch' };
var itemsBaseline = { alignItems: 'baseline' };
var selfAuto = { alignSelf: 'auto' };
var selfStart = { alignSelf: 'flex-start' };
var selfEnd = { alignSelf: 'flex-end' };
var selfCenter = { alignSelf: 'center' };
var selfStretch = { alignSelf: 'stretch' };
var selfBaseline = { alignSelf: 'baseline' };
var justifyStart = { justifyContent: 'flex-start' };
var justifyEnd = { justifyContent: 'flex-end' };
var justifyCenter = { justifyContent: 'center' };
var justifyBetween = { justifyContent: 'space-between' };
var justifyAround = { justifyContent: 'space-around' };
var justifyEvenly = { justifyContent: 'space-evenly' };
var contentStart = { alignContent: 'flex-start' };
var contentEnd = { alignContent: 'flex-end' };
var contentCenter = { alignContent: 'center' };
var contentStretch = { alignContent: 'stretch' };
var contentBetween = { alignContent: 'space-between' };
var contentAround = { alignContent: 'space-around' };
// hide
var hide = { display: 'none' };
// layout
var overflowVisible = { overflow: 'visible' };
var overflowHidden = { overflow: 'hidden' };
var overflowScroll = { overflow: 'scroll' };
// position
var absolute = { position: 'absolute' };
var relative = { position: 'relative' };
var top0 = { top: 0 };
var right0 = { right: 0 };
var bottom0 = { bottom: 0 };
var left0 = { left: 0 };
var z1 = { zIndex: 1 };
var z2 = { zIndex: 2 };
var z3 = { zIndex: 3 };
var z4 = { zIndex: 4 };
// type-scale
var size10 = { fontSize: 10 };
var size11 = { fontSize: 11 };
var size12 = { fontSize: 12 };
var size13 = { fontSize: 13 };
var size14 = { fontSize: 14 };
var size15 = { fontSize: 15 };
var size16 = { fontSize: 16 };
var size17 = { fontSize: 17 };
var size18 = { fontSize: 18 };
var size19 = { fontSize: 19 };
var size20 = { fontSize: 20 };
var size21 = { fontSize: 21 };
var size22 = { fontSize: 22 };
var size23 = { fontSize: 23 };
var size24 = { fontSize: 24 };
var size25 = { fontSize: 25 };
var size26 = { fontSize: 26 };
var size27 = { fontSize: 27 };
var size28 = { fontSize: 28 };
var size29 = { fontSize: 29 };
var size30 = { fontSize: 30 };
// typography
var italic = { fontStyle: 'italic' };
var bold = { fontWeight: 'bold' };
var weight1 = { fontWeight: '100' };
var weight2 = { fontWeight: '200' };
var weight3 = { fontWeight: '300' };
var weight4 = { fontWeight: '400' };
var weight5 = { fontWeight: '500' };
var weight6 = { fontWeight: '600' };
var weight7 = { fontWeight: '700' };
var weight8 = { fontWeight: '800' };
var weight9 = { fontWeight: '900' };
var leftAlign = { textAlign: 'left' };
var rightAlign = { textAlign: 'right' };
var center = { textAlign: 'center' };
var justify = { textAlign: 'justify' };
// @deprecate
// https://facebook.github.io/react-native/docs/layout-props#flex
var flexAutoGrow = { flexGrow: 1 };

exports.borderTopNone = borderTopNone;
exports.borderRightNone = borderRightNone;
exports.borderBottomNone = borderBottomNone;
exports.borderLeftNone = borderLeftNone;
exports.borderNone = borderNone;
exports.flexRow = flexRow;
exports.flexRowReverse = flexRowReverse;
exports.flexColumn = flexColumn;
exports.flexColumnReverse = flexColumnReverse;
exports.flexNoShrink = flexNoShrink;
exports.flexWrap = flexWrap;
exports.itemsStart = itemsStart;
exports.itemsEnd = itemsEnd;
exports.itemsCenter = itemsCenter;
exports.itemsStretch = itemsStretch;
exports.itemsBaseline = itemsBaseline;
exports.selfAuto = selfAuto;
exports.selfStart = selfStart;
exports.selfEnd = selfEnd;
exports.selfCenter = selfCenter;
exports.selfStretch = selfStretch;
exports.selfBaseline = selfBaseline;
exports.justifyStart = justifyStart;
exports.justifyEnd = justifyEnd;
exports.justifyCenter = justifyCenter;
exports.justifyBetween = justifyBetween;
exports.justifyAround = justifyAround;
exports.justifyEvenly = justifyEvenly;
exports.contentStart = contentStart;
exports.contentEnd = contentEnd;
exports.contentCenter = contentCenter;
exports.contentStretch = contentStretch;
exports.contentBetween = contentBetween;
exports.contentAround = contentAround;
exports.hide = hide;
exports.overflowVisible = overflowVisible;
exports.overflowHidden = overflowHidden;
exports.overflowScroll = overflowScroll;
exports.absolute = absolute;
exports.relative = relative;
exports.top0 = top0;
exports.right0 = right0;
exports.bottom0 = bottom0;
exports.left0 = left0;
exports.z1 = z1;
exports.z2 = z2;
exports.z3 = z3;
exports.z4 = z4;
exports.size10 = size10;
exports.size11 = size11;
exports.size12 = size12;
exports.size13 = size13;
exports.size14 = size14;
exports.size15 = size15;
exports.size16 = size16;
exports.size17 = size17;
exports.size18 = size18;
exports.size19 = size19;
exports.size20 = size20;
exports.size21 = size21;
exports.size22 = size22;
exports.size23 = size23;
exports.size24 = size24;
exports.size25 = size25;
exports.size26 = size26;
exports.size27 = size27;
exports.size28 = size28;
exports.size29 = size29;
exports.size30 = size30;
exports.italic = italic;
exports.bold = bold;
exports.weight1 = weight1;
exports.weight2 = weight2;
exports.weight3 = weight3;
exports.weight4 = weight4;
exports.weight5 = weight5;
exports.weight6 = weight6;
exports.weight7 = weight7;
exports.weight8 = weight8;
exports.weight9 = weight9;
exports.leftAlign = leftAlign;
exports.rightAlign = rightAlign;
exports.center = center;
exports.justify = justify;
exports.flexAutoGrow = flexAutoGrow;
