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
} from 'react-native';
import burguer from '../assets/burguer.png';
import salmon from '../assets/salmon.png';
import {Colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';
import food from '../assets/backgroundFood.jpg';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('screen');

export default class subCategory extends Component {
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
  // goBack = () => {
  //   const {navigation} = this.props;
  //   const {backKey} = navigation.state.params;
  //   if (backKey) {
  //     // clear backKey so navigation doesnt break
  //     // this.props.navigation.setParams({backKey: null});
  //     // navigate back to other stack navigator
  //     this.props.navigation.navigate(backKey);
  //   } else {
  //     // regular go back
  //     this.props.navigation.goBack();
  //   }
  // };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <View style={styles.popularContainer}>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              width: '100%',
              marginBottom: 80,
            }}> */}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.buttonProductPopular}
                onPress={() => this.props.navigation.navigate('detailItem')}>
                <Image source={salmon} style={styles.imagePopularProduct} />
                <View style={styles.viewDescription}>
                  <Text>Grilled Salmon</Text>
                  <TouchableOpacity style={styles.buttonSend}>
                    <Icon
                      name="delete-outline"
                      size={18}
                      color={Colors.ICONS}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.viewDescription}>
                  <View style={{width: 85, marginRight: 4}}>
                    <StarRating
                      disabled={false}
                      halfStarEnabled
                      starSize={17}
                      disabled={false}
                      maxStars={4}
                      rating={this.state.starCount}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                      fullStarColor={'red'}
                    />
                  </View>
                  <Text style={styles.price}>19,90</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
          {/* </View>
        </View> */}
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
  buttonProductPopular: {
    backgroundColor: Colors.BACKGROUNDWITHE,
    borderRadius: 4,
    marginHorizontal: 12,
    paddingVertical: 5,
    marginVertical: 10,
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 40,
    shadowRadius: 1,
    elevation: 8,
    width: width - 361,
    alignItems: 'center',
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
    width: width - 231,
  },
  buttonSend: {
    backgroundColor: Colors.BACKGROUNDWITHE,
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 40,
    shadowRadius: 1,
    elevation: 8,
  },
  popularContainer: {
    width: '100%',
  },
  price: {
    color: '#000',
    fontWeight: 'bold',
  },
  buttonBack: {
    position: 'absolute',
    top: 5,
    width: 50,
    height: 50,
    left: 5,
    // borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 40,
  },
});
