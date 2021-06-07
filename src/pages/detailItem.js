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
import salmon from '../assets/salmon.png';
import {Colors} from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('screen');
import CheckBox from '@react-native-community/checkbox';
import {SegmentedControls} from 'react-native-radio-buttons';

export default class detailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      array: [
        {
          name: 'Batata Frita',
          checked: false,
        },
        {
          name: 'Milho verde',
          checked: false,
        },
        {
          name: 'Pimentao',
          checked: false,
        },
        {
          name: 'Cebola',
          checked: false,
        },
      ],
    };
  }
  renderRadioButton() {
    const options = ['Pequeno', 'Medio', 'Grande'];

    function setSelectedOption(selectedOption) {
      this.setState({
        selectedOption,
      });
      console.log(selectedOption);
    }

    return (
      <View style={{marginBottom: 10, marginTop: 5}}>
        <SegmentedControls
          tint={Colors.ICONS}
          selectedTint={'white'}
          backTint={Colors.CONTAINER}
          options={options}
          onSelection={setSelectedOption.bind(this)}
          selectedOption={this.state.selectedOption}
        />
      </View>
    );
  }

  toggleChange() {
    this.setState({checked: !this.state.checked});
  }

  toggleCurrentFirendState = async (item) => {
    let checked = !item.checked;
    let items = this.state.array;
    let index = items.indexOf(item);
    items[index].checked = checked;
    console.log(items);
    await this.setState({array: items});
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground source={salmon} style={{width: '100%', height: 250}}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" size={30} />
            </TouchableOpacity>
            {/* <TouchableOpacity
            style={styles.buttonCart}
            onPress={() => this.props.navigation.navigate('shoppingCart')}>
            <Icon name="cart-outline" size={30} style={{marginLeft: 10}} />
          </TouchableOpacity> */}
            <TouchableOpacity style={styles.buttonFavorite}>
              <Icon name="heart" size={20} color={Colors.ICONS} />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.viewDescription}>
            <Text style={styles.textDescription}>Grilled Salmon</Text>
            <Text style={styles.textDescription}>R$96.00</Text>
          </View>
          <View style={styles.viewDetail}>
            <Text style={styles.textTitleDetail}>Edite seu pedido</Text>
            <View style={{width: '90%', marginLeft: 15}}>
              <Text style={styles.textTitle}>Tamanho</Text>
              {this.renderRadioButton()}
            </View>
            <View
              style={{
                width: '50%',
                marginLeft: 15,
              }}>
              <Text style={styles.textTitle}>Adicional</Text>
              {this.state.array.map((item, index) => (
                <View>
                  <View style={styles.viewCheckBox}>
                    <Text style={styles.textCheckBox}>{item.name}</Text>
                    <CheckBox
                      value={item.checked} //see change
                      onValueChange={() => this.toggleCurrentFirendState(item)}
                      tintColors={{true: Colors.ICONS}}
                    />
                  </View>
                  <View style={styles.lineSeparator} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.viewButtonsCart}>
          <TouchableOpacity style={styles.buttonAmount}>
            <Icon name="cart-plus" size={30} color={Colors.ICONS} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => this.toggleCurrentFirendState()}>
            <Text style={styles.textButtonAdd}>Compre agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CONTAINER,
    height: '100%',
  },
  viewDescription: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textDescription: {
    fontSize: 18,
    color: Colors.TEXTBOX,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 10,
  },
  buttonBack: {
    position: 'absolute',
    top: 5,
    width: 50,
    height: 50,
    // borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCart: {
    position: 'absolute',
    top: 5,
    right: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  buttonFavorite: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    color: Colors.ICONS,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUNDWITHE,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 40,
    shadowRadius: 1,
    elevation: 8,
  },
  viewButtonsCart: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 3,
    bottom: 0,
    backgroundColor: Colors.CONTAINER,
    paddingVertical: 10,
  },
  buttonAdd: {
    paddingHorizontal: 5,
    paddingVertical: 6,
    backgroundColor: Colors.ICONS,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  textButtonAdd: {
    color: Colors.BACKGROUNDWITHE,
    fontSize: 16,
  },
  buttonAmount: {
    // borderWidth: 1,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.ICONS,
  },
  viewDetail: {
    width: '100%',
    paddingBottom: 60,
  },
  textTitleDetail: {
    fontSize: 18,
    marginLeft: 15,
    marginTop: 5,
  },
  textTitle: {
    fontSize: 17,
    marginTop: 5,
  },
  textDetail: {
    fontSize: 15,
    color: Colors.TEXTBOX,
    marginBottom: 20,
  },
  viewCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textCheckBox: {
    fontSize: 16,
    color: Colors.TEXTBOX,
  },
  selected: {
    fontSize: 16,
    color: Colors.BACKGROUNDWITHE,
    borderWidth: 2,
    textAlign: 'center',
    backgroundColor: Colors.ICONS,
    borderRadius: 10,
    width: 150,
    marginTop: 20,
    borderColor: Colors.ICONS,
  },
  notSelected: {
    fontSize: 16,
    color: Colors.ICONS,
    borderWidth: 2,
    textAlign: 'center',
    borderColor: Colors.ICONS,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  lineSeparator: {
    width: '93%',
    borderBottomWidth: 0.2,
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
});
