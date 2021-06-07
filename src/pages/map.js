import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  Fragment,
  Dimensions,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('screen');
import {Colors} from '../config/colors';
import Geolocation from '@react-native-community/geolocation';
export async function request_location_runtime_permission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'ReactNativeCode Location Permission',
        message: 'ReactNativeCode App needs access to your location ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location Permission Granted.');
    } else {
      console.log('Location Permission Not Granted');
    }
  } catch (err) {
    console.warn(err);
  }
}
export default class map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 0,
        longitude: 0,
      },
    };
  }
  findCoordinates = async () => {
    await Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        this.setState({location: {latitude, longitude}});
      },
      (error) => console.log(error),
      {enableHighAccuracy: false, timeout: 50000},
    );
  };

  async componentDidMount() {
    await request_location_runtime_permission();
    this.findCoordinates();
  }
  render() {
    console.log(this.state.location);
    return (
      <View style={StyleSheet.container}>
        <View style={{width: '100%', height: 50}}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="chevron-left" size={30} />
          </TouchableOpacity>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -2.914164,
            longitude: -41.760679,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          }}>
          <MapView.Marker
            coordinate={this.state.location}
            title={'teste'}
            description={'teste'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CONTAINER,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '80%',
  },
  buttonBack: {
    position: 'absolute',
    top: 5,
    width: 50,
    height: 50,
    // borderWidth: 1,
    justifyContent: 'center',
    left: 5,
  },
});
