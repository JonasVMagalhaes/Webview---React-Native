import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = {
    container: {
        flex: 1
    }
}

const LoadingIndicatorView = () => {
    return <ActivityIndicator color="#009b88" size="large" />
}

const ContentView = ({ uri }) => {
    return (
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                source={{ uri }}
                renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
            />
        </View>
    )
}

export default ContentView;