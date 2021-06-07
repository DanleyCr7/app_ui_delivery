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
  Dimensions,
} from 'react-native';
import burguer from '../assets/burguer.png';
import salmon from '../assets/salmon.png';
import {Colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';
import loginFood from '../assets/loginFood.png';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

export default class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      color: Colors.TEXTBOX,
      color2: Colors.TEXTBOX,
    };
  }

  onFocus() {
    this.setState({
      color: Colors.ICONS,
    });
  }

  onBlur() {
    this.setState({
      color: Colors.TEXTBOX,
    });
  }
  onFocus2() {
    this.setState({
      color2: Colors.ICONS,
    });
  }

  onBlur2() {
    this.setState({
      color2: Colors.TEXTBOX,
    });
  }
  render() {
    return (
      <ScrollView>
        <View style={StyleSheet.container}>
          <View style={styles.contImage}>
            <Image source={loginFood} style={styles.imageFood} />
          </View>
          <View style={styles.containerInput}>
            <View style={styles.InputIcon}>
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                placeholderTextColor={this.state.color}
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
                onBlur={() => this.onBlur()}
                onFocus={() => this.onFocus()}
              />
              <Icon
                name="account"
                size={25}
                color={this.state.color}
                style={{position: 'absolute', right: 5}}
              />
            </View>
            <View style={styles.InputIcon}>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor={this.state.color2}
                value={this.state.senha}
                onChangeText={(senha) => this.setState({senha})}
                onBlur={() => this.onBlur2()}
                onFocus={() => this.onFocus2()}
              />
              <Icon
                name="eye-off-outline"
                size={25}
                color={this.state.color2}
                style={{position: 'absolute', right: 5}}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={() => this.props.navigation.navigate('home')}>
              <Text style={styles.textButton}>Sign In</Text>
            </TouchableOpacity>
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
    alignItems: 'center',
  },
  imageFood: {
    width: 280,
    height: 200,
  },
  contImage: {
    width: '100%',
    alignItems: 'center',
  },
  containerInput: {
    width: '90%',
    paddingVertical: 20,
    backgroundColor: Colors.BACKGROUNDWITHE,
    marginTop: 40,
    alignItems: 'center',
    alignSelf: 'center',
  },
  InputIcon: {
    height: 50,
    width: width - 90,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: Colors.BACKGROUNDWITHE,
  },
  input: {
    fontSize: 16,
    color: Colors.TEXTBOX,
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: Colors.TEXTBOX,
  },
  buttonLogin: {
    backgroundColor: Colors.ICONS,
    width: width - 90,
    height: 35,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  textButton: {
    fontSize: 15,
    color: Colors.BACKGROUNDWITHE,
  },
  buttonGoogle: {
    width: width - 80,
    height: 40,
    justifyContent: 'center',
    marginTop: 8,
  },
});
