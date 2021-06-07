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
} from 'react-native';
import {Colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';
import model from '../assets/model.jpg';
import LinearGradient from 'react-native-linear-gradient';

export default class account extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contPerfilImage}>
            <Image source={model} style={styles.imagePerfil} />
            <Text style={styles.textName}>Angelina Jolie</Text>
            <View style={styles.viewCidade}>
              <Icon name="google-maps" size={15} color={Colors.TEXTBOX} />
              <Text style={styles.nameCity}>Parnaíba</Text>
            </View>
          </View>
          <View style={styles.viewAccountSetting}>
            <Text style={styles.textSetting}>Account Settings</Text>
            <View style={styles.viewOption}>
              <TouchableOpacity
                style={styles.buttonSetting}
                onPress={() => this.props.navigation.navigate('map')}>
                <Icon name="google-maps" size={18} color={Colors.ICONS} />
                <Text style={styles.textOptionSetting}>Location</Text>
              </TouchableOpacity>
              <View style={styles.lineSeparator} />
              <TouchableOpacity style={styles.buttonSetting}>
                <Icon name="truck-outline" size={18} color={Colors.ICONS} />
                <Text style={styles.textOptionSetting}>Shipping</Text>
              </TouchableOpacity>
              <View style={styles.lineSeparator} />
              <TouchableOpacity style={styles.buttonSetting}>
                <Icon
                  name="credit-card-settings-outline"
                  size={18}
                  color={Colors.ICONS}
                />
                <Text style={styles.textOptionSetting}>Payment</Text>
              </TouchableOpacity>
              <View style={styles.lineSeparator} />
              <TouchableOpacity style={styles.buttonLogout}>
                <Icon name="power" size={18} color={Colors.ICONS} />
                <Text style={styles.textOptionSetting}>Logout</Text>
              </TouchableOpacity>
              <View style={styles.lineSeparatorLogout} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CONTAINER,
  },
  contPerfilImage: {
    width: '100%',
    alignItems: 'center',
  },
  imagePerfil: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 50,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginTop: 10,
  },
  viewCidade: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameCity: {
    fontSize: 14,
    color: Colors.TEXTBOX,
  },
  viewAccountSetting: {
    marginTop: 30,
    width: '100%',
    backgroundColor: Colors.BACKGROUNDWITHE,
    justifyContent: 'center',
  },
  textSetting: {
    fontSize: 17,
    color: Colors.BLACK,
    fontWeight: 'bold',
    marginLeft: 15,
    marginVertical: 7,
  },
  buttonSetting: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginLeft: 20,
    // borderWidth: 1,
    paddingBottom: 15,
  },
  textOptionSetting: {
    color: Colors.BLACK,
    fontSize: 16,
    marginLeft: 8,
  },
  lineSeparator: {
    width: '93%',
    borderBottomWidth: 0.3,
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  buttonLogout: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 50,
    paddingBottom: 15,
  },
  lineSeparatorLogout: {
    width: '93%',
    borderBottomWidth: 0.3,
    alignSelf: 'flex-end',
    marginBottom: 5,
    // marginTop: 10,
  },
  viewOption: {
    backgroundColor: Colors.CONTAINER,
    paddingTop: 15,
  },
});
