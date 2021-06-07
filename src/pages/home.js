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
import food from '../assets/backgroundFood.jpg';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('screen');

export default class home extends Component {
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity
        style={{marginRight: 12}}
        onPress={() => navigation.navigate('CarrinhoCompra')}>
        <Icon
          name="bell-outline"
          size={25}
          color={Colors.TEXT}
          style={{marginRight: 8}}
        />
        {/* <View style={styles.circleNotify}>
          <Text style={{fontSize: 10}}>{navigation.getParam('number')}</Text>
        </View> */}
      </TouchableOpacity>
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      mail: '',
      senha: '',
      data: [1, 1, 1, 1, 1],
      data2: [1, 2],
      isLoading: false,
      message: '',
      isTrue: true,
      starCount: 2.5,
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{width: '100%'}}>
        <View style={styles.container}>
          <View style={styles.viewSearch}>
            <Icon
              name="magnify"
              size={25}
              color={Colors.ICONS}
              style={{marginLeft: 5}}
            />
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Pesquisar produto"
              placeholderTextColor={Colors.TEXTBOX}
              value={this.state.search}
              onChangeText={(search) => this.setState({search})}
            />
            <TouchableOpacity style={styles.buttonSearch}>
              <Icon name="currency-eth" size={25} color={Colors.ICONS} />
            </TouchableOpacity>
          </View>
          <View style={{height: 100}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={this.state.data}
              renderItem={({item, index}) => (
                <View style={styles.viewContainerCategory}>
                  <TouchableOpacity
                    style={styles.buttonCategory}
                    onPress={() =>
                      this.props.navigation.navigate('subCategory', {
                        backKey: 'home',
                      })
                    }>
                    <Image source={burguer} style={styles.imageCategory} />
                  </TouchableOpacity>
                  <Text style={styles.textButtonCategory}>FastFood</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{width: '100%'}}>
            <Text style={styles.textTitle}>Popular Food</Text>
          </View>
          <View style={{height: 210, marginLeft: 15, marginTop: 10}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={this.state.data}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={styles.buttonProductPopular}
                  onPress={() =>
                    this.props.navigation.navigate('detailItem', {
                      backKey: 'home',
                    })
                  }>
                  <Image source={salmon} style={styles.imagePopularProduct} />
                  <View style={{marginBottom: 10}}>
                    <View style={styles.viewDescription}>
                      <Text>Grilled Salmon</Text>
                      <TouchableOpacity style={styles.buttonSend}>
                        <Icon name="telegram" size={15} color={Colors.ICONS} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.viewDescription}>
                      <View style={{width: 70}}>
                        <StarRating
                          disabled={false}
                          halfStarEnabled
                          starSize={15}
                          disabled={false}
                          maxStars={4}
                          rating={this.state.starCount}
                          selectedStar={(rating) =>
                            this.onStarRatingPress(rating)
                          }
                          fullStarColor={'red'}
                        />
                      </View>
                      <Text style={styles.price}>19,90</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{width: '100%'}}>
            <Text style={styles.textTitle}>Best Food</Text>
          </View>
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={this.state.data2}
              renderItem={({item, index}) => (
                <TouchableOpacity style={styles.buttonFood}>
                  <ImageBackground
                    source={food}
                    style={styles.viewFood}
                    imageStyle={{borderRadius: 4}}>
                    <LinearGradient
                      colors={[
                        'rgba(0, 0, 0, 0.8)',
                        'rgba(0, 0, 0,0.5)',
                        'rgba(0, 0, 0,0.1)',
                        'rgba(0, 0, 0,0.2)',
                      ]}
                      start={{x: 0, y: 0.9}}
                      end={{x: 0, y: 0.1}}
                      style={styles.linearGradient}>
                      <TouchableOpacity style={styles.buttonFavorite}>
                        <Icon name="heart" size={20} color={Colors.ICONS} />
                      </TouchableOpacity>
                      <Text style={styles.textFood}>Pizza Hut</Text>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.CONTAINER,
    width: '100%',
  },
  viewSearch: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.6,
    borderRadius: 3,
    marginTop: 10,
    borderColor: Colors.BORDERCOLOR,
    backgroundColor: Colors.BACKGROUNDWITHE,
  },
  input: {
    width: '75%',
    fontSize: 16,
  },
  buttonSearch: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainerCategory: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonCategory: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUNDWITHE,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 40,
    shadowRadius: 1,
    elevation: 8,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginTop: 20,
  },
  imageCategory: {
    width: 30,
    height: 30,
  },
  textButtonCategory: {
    color: Colors.TEXTBOX,
    marginTop: 4,
    fontSize: 13,
  },
  buttonProductPopular: {
    backgroundColor: Colors.BACKGROUNDWITHE,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 40,
    shadowRadius: 1,
    elevation: 8,
    width: width - 361,
    marginBottom: 10,
  },
  imagePopularProduct: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  viewDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  buttonSend: {
    backgroundColor: Colors.BACKGROUNDWITHE,
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 40,
    shadowRadius: 1,
    elevation: 8,
  },
  popularContainer: {},
  price: {
    color: '#000',
    fontWeight: 'bold',
  },
  textTitle: {
    fontSize: 18,
    marginLeft: 18,
    marginTop: 10,
  },
  buttonFood: {
    width: width - 40,
    height: 220,
    marginVertical: 10,
  },
  viewFood: {
    width: width - 40,
    height: 220,
    marginBottom: 20,
  },
  buttonFavorite: {
    backgroundColor: Colors.BACKGROUNDWITHE,
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  textFood: {
    color: Colors.BACKGROUNDWITHE,
    fontSize: 18,
    position: 'absolute',
    left: 10,
    bottom: 5,
  },
  linearGradient: {
    width: '100%',
    height: 220,
    borderRadius: 4,
  },
});
