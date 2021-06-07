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
} from 'react-native';
import salmon from '../assets/salmon.png';
import {Colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class shoppingCart extends Component {
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
  async increaseQuantity(item) {
    let quantity = parseInt(item.quantity);
    // console.log(quantidade)

    let items = this.state.itens;
    let index = items.indexOf(item);
    items[index].quantity = quantity + 1;
    // this.setState({ itens: items });
    this.setState({data: items});
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <View style={styles.header}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" size={30} color={Colors.TEXTBOX} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Item Carts</Text>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="bell-outline" size={30} color={Colors.TEXTBOX} />
            </TouchableOpacity>
          </View> */}
          <View style={{width: '100%'}}>
            <Text style={styles.textYourFood}>Your Food Cart</Text>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.state.data2}
              renderItem={({item, index}) => (
                <View style={styles.viewCarts}>
                  <Image source={salmon} style={styles.ImageCarts} />
                  <View style={{width: '75%'}}>
                    <View style={styles.contDetailCart}>
                      <Text style={styles.textProducts}>Grilled salmon</Text>
                      <TouchableOpacity>
                        <Icon
                          name="delete-outline"
                          size={30}
                          color={Colors.ICONS}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.price}>$19,90</Text>
                    <View style={styles.contDetailCart}>
                      <View style={styles.viewButtonsCart}>
                        <TouchableOpacity style={styles.buttonAmount}>
                          <Icon name="minus" size={25} color={Colors.TEXTBOX} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAdd}>
                          <Text style={styles.textButtonAdd}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAmount}>
                          <Icon name="plus" size={25} color={Colors.ICONS} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.viewValues}>
            <View style={styles.contRequest}>
              <Text style={styles.textRequest}>Subtotal</Text>
              <Text style={styles.textRequest}>$680.00</Text>
            </View>
            <View style={styles.lineSeparator} />

            <View style={styles.contRequest}>
              <Text style={styles.textRequest}>Shipping</Text>
              <Text style={styles.textRequest}>$ 00.00</Text>
            </View>
            <View style={styles.lineSeparator} />
            <View style={styles.contRequest}>
              <Text style={styles.textRequest}>Total</Text>
              <Text style={styles.textRequest}>$680</Text>
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
    marginBottom: 70,
    alignItems: 'center',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 18,
    color: Colors.TEXTBOX,
  },
  buttonBack: {
    width: 50,
    height: 50,
    // borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  textYourFood: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 15,
    fontFamily: 'Open Sans',
    color: Colors.TEXTBOX,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ImageCarts: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  viewCarts: {
    width: '95%',
    marginTop: 15,
    backgroundColor: Colors.BACKGROUNDWITHE,
    paddingVertical: 5,
    borderRadius: 4,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 40,
    shadowRadius: 1,
    elevation: 8,
    marginBottom: 15,
    marginLeft: 10,
  },
  contDetailCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  textProducts: {
    fontSize: 18,
    color: Colors.TEXTBOX,
    marginLeft: 5,
  },
  viewButtonsCart: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },
  buttonAdd: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'transparent',
    borderRadius: 3,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.ICONS,
  },
  textButtonAdd: {
    color: Colors.ICONS,
    fontSize: 14,
  },
  buttonAmount: {
    // borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  viewValues: {
    width: '92%',
    paddingVertical: 15,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 40,
    shadowRadius: 1,
    elevation: 8,
    backgroundColor: Colors.BACKGROUNDWITHE,
    borderRadius: 4,
    paddingTop: 5,
  },
  contRequest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRequest: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 25,
  },
  lineSeparator: {
    width: '92%',
    borderBottomWidth: 0.3,
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginTop: 4,
  },
});
