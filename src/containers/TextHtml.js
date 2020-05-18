import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import HTMLView from 'react-native-htmlview';
import {withTheme} from 'src/components';

import merge from 'lodash/merge';

import fonts, {sizes, lineHeights} from 'src/components/config/fonts';
import { ScreenWidth } from '../components/helpers';


function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'iframe') {
    const a = node.attribs;
    const iframeHtml = `<iframe width=${Number(ScreenWidth)*2+128} height=${Number(500)} src="${a.src}"></iframe>`;
    return (
      <View key={index} style={{marginRight:12,alignSelf:'center',width: (Number(ScreenWidth)), height: 200}}>
        <WebView source={{html: iframeHtml}} />
      </View>
    );
  }
}

const TextHtml = ({value, theme, style, ...rest}) => {
  const valueHtml = `<div>${
    value && typeof value === 'string' ? value.replace(/[\n\r]+/g, '') : ''
  }</div>`;
  console.log("valueHtml",valueHtml)
  return (
    <HTMLView renderNode={renderNode} {...rest} value={valueHtml} stylesheet={merge(styles(theme), style)} />
  );
};

const styles = theme => ({
  div: {
    ...fonts.regular,
    fontSize: sizes.base,
    lineHeight: lineHeights.base,
    color: theme.colors.primary,
    textAlign: 'left',
  },
  span: {
    ...fonts.regular,
    fontSize: sizes.base,
    lineHeight: lineHeights.base,
    color: theme.colors.primary,
    textAlign: 'left',
  },
  p: {
    ...fonts.regular,
    fontSize: sizes.base,
    lineHeight: lineHeights.base,
    color: theme.colors.primary,
    textAlign: 'left',
  },
  a: {
    ...fonts.regular,
    fontSize: sizes.base,
    lineHeight: lineHeights.base,
    color: '#96588a',
    textAlign: 'left',
  },
  b: {
    ...fonts.bold,
  },
  strong: {
    ...fonts.bold,
  },
});

TextHtml.defaultProps = {
  style: {},
};

export default withTheme(TextHtml);
