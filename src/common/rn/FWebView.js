import React from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet} from 'react-native';

const USER_AGENT = 'rn_elements_webview';

function FWebView(props) {
  function onShouldStartLoadWithRequest(event) {
    if (props.onShouldStartLoadWithRequest) {
      return props.onShouldStartLoadWithRequest(event);
    }
    return true;
  }

  const source = props.source || props.route.params?.source || null;
  return (
    <WebView
      userAgent={USER_AGENT}
      style={[Styles.webView, props.webviewStyle]}
      bounces={false}
      source={source}
      javaScriptEnabled={true}
      dataDetectorTypes={'none'}
      // sharedCookiesEnabled={true}
      startInLoadingState={true}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      domStorageEnabled={true}
      automaticallyAdjustContentInsets={false}
    />
  );
}

export default FWebView;

const Styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
