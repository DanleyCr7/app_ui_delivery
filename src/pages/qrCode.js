import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../config/colors';

export default class qrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlashOn: false,
    };
  }
  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };

  flash = () => {
    this.setState({isFlashOn: !this.state.isFlashOn});
  };

  render() {
    return (
      <QRCodeScanner
        style={styles.qrCode}
        onRead={this.onSuccess}
        flashMode={
          this.state.isFlashOn
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={this.flash}>
            <Icon
              name={this.state.isFlashOn ? 'flash' : 'flash-off'}
              size={30}
              color={Colors.ICONS}
            />
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
