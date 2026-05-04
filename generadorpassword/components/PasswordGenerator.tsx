import {  Text, TextInput, View, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from '../styles/GlobalStyles';
import React, { useState } from 'react'
import { passwordGenerator } from '../utils/passwordGenerator';

export default function PasswordGeneratorComponent() {

  const [passwordLength, setPasswordLength] = useState('8')
  const [isValid, setIsValid] = useState(true)
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  // Function to generate password string using passwordGenerator object
  const generatePasswordString = (passwordLength: number) => {
    const passwordResult = passwordGenerator.generatePassword(passwordLength, {
      includeUpperCase: upperCase,
      includeLowerCase: lowerCase,
      includeNumbers: numbers,
      includeSymbols: symbols,
    });

    setPassword(passwordResult);
    setIsPassGenerated(true);
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
    
    
  }
    return (
    <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          {/* Input Password Length*/}
          <View style={styles.inputWrapper}>
            <View style={styles.inputColumn}>
              <Text style={styles.heading}>Password Length</Text>
            </View>
            <TextInput
            style={styles.inputStyle}
            value={passwordLength}
            onChangeText={(value) => setPasswordLength(value)}
            placeholder="Ex. 8"
            keyboardType='numeric'
            />
          </View>
          {/* Lowercase*/}
          <View style={styles.inputWrapper}>
            <Text style={[styles.heading, styles.inputLabel]}>Include lowercase</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked={lowerCase}
            onPress={() => setLowerCase(!lowerCase)}
            fillColor="#29AB87"
            />
          </View>
          {/* Uppercase*/}
          <View style={styles.inputWrapper}>
            <Text style={[styles.heading, styles.inputLabel]}>Include uppercase</Text>
            <BouncyCheckbox
            disableBuiltInState
            isChecked={upperCase}
            onPress={() => setUpperCase(!upperCase)}
            fillColor="#FED85D"
            />
          </View>
          {/* Numbers */}
          <View style={styles.inputWrapper}>
              <Text style={[styles.heading, styles.inputLabel]}>Include Numbers</Text>
              <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                />
          </View>
          {/* Symbols */}
          <View style={styles.inputWrapper}>
              <Text style={[styles.heading, styles.inputLabel]}>Include Symbols</Text>
              <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                />
          </View>
          <View style={styles.formActions}>
            <TouchableOpacity
            disabled={!isValid}
            style={styles.primaryBtn}
            onPress={() => generatePasswordString(+passwordLength)}
            >
              <Text style={styles.primaryBtnTxt}>Generate Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={ () => {
              resetPasswordState()
            }}
            >
              <Text style={styles.secondaryBtnTxt}>Reset</Text>
            </TouchableOpacity>
         </View>
          {isPassGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
            </View>
          ) : null}
    </View>)
}