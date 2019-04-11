import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';

import CodeInput from 'react-native-confirmation-code-input';

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      headingText: 'Enter 4 digit Pincode',
      isConfirmed: 'false',
      pincode: null,
      newPincode: null,
      confirmedPinCode: null,
    };
  }
  
  _onFinish(isValid, code) {
    const { newPincode } = this.state;
    if(code === undefined) {
        const pincode = isValid;
        if(newPincode && pincode === newPincode) {
            // store pin and navigate to randomization
            this.setState({
                confirmedPinCode: pincode,
            })
        } else {
            this.setState({
                tempNewPin: pincode,
            });
        }
    } else if (isValid) {
        alert('pinConfirmed');
    }
  }

  onNext = () => {
      const { tempNewPin } = this.state;
    this.setState({
        headingText: 'Confirm pincode',
        newPincode: tempNewPin,
    });
    this.refs.codeInputRef2.clear();
  }

  onReset = () => {
    this.setState({
        headingText: 'Enter 4 digit Pincode',
        isConfirmed: false,
        pincode: null,
        newPincode: null,
        tempNewPin: null,
        confirmedPinCode: null
    });
    this.refs.codeInputRef2.clear();
  }

  onConfirm = () => {
      const { confirmedPinCode } = this.state;
      alert(`store pin ${confirmedPinCode} and navigate to randomization`);
  }
  
  render() {
    const { headingText, newPincode, tempNewPin } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper} keyboardShouldPersistTaps='handled'>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{headingText}</Text>
          </View>  
          <View style={styles.inputWrapper3}>
            <Text style={styles.inputLabel3}>CIRCLE CONFIRMATION CODE</Text>
            <CodeInput
              ref="codeInputRef2"
              secureTextEntry
              space={0}
              keyboardType="numeric"
              codeLength={4}
              className={'border-b'}
              compareWithCode={null}
              autoFocus
              activeColor="black"
              inactiveColor="black"
              codeInputStyle={{ fontWeight: '800', fontSize: 18 }}
              onFulfill={(isValid, code) => this._onFinish(isValid, code)}
            />
            { newPincode ? <TouchableOpacity style={{ marginTop: 30 }} onPress={() => this.onReset()}><Text>Reset</Text></TouchableOpacity> : <View/>}
            { newPincode
            ? <TouchableOpacity disabled={newPincode.length === 4 ? false : true } style={{ marginTop: 30 }} onPress={() => this.onConfirm()}><Text>Confirm & Next</Text></TouchableOpacity>
            : <TouchableOpacity disabled={tempNewPin ? false : true } style={{ marginTop: 30 }} onPress={() => this.onNext()}><Text>Next</Text></TouchableOpacity>}
          </View>
        </ScrollView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '800',
    paddingVertical: 30
  },
  wrapper: {
    marginTop: 30
  },
  inputWrapper1: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#009C92'
  },
  inputWrapper2: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#E0F8F1'
  },
  inputWrapper3: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  inputLabel1: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800'
  },
  inputLabel2: {
    color: '#31B404',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center'
  },
  inputLabel3: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center'
  }
});
