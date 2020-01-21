import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import COLORS from '../constants/colors';

const GameOverScreen = props => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width);
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceHeight * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceHeight / 30
            }
          }}>
          <Image
            source={require('../assets/success.png')}
            // fadeDuration={300}
            // source={{
            //   uri:
            //     'https://dictionary.cambridge.org/fr/images/full/summit_noun_002_36618.jpg'
            // }}
            style={styles.image}
            resizeMode="cover" //default
          />
        </View>
        <View
          style={{
            ...styles.resultContainer,
            ...{
              marginVertical: availableDeviceHeight / 60
            }
          }}>
          <BodyText
            style={{
              ...styles.resultText,
              ...{
                fontSize: availableDeviceHeight < 400 ? 16 : 20
              }
            }}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{' '}
            <Text style={styles.highlight}>{props.userNumber}</Text>.
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    // width: Dimensions.get('window').width * 0.7,
    // height: Dimensions.get('window').width * 0.7,
    // borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'
    // marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginHorizontal: 30
    // marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center'
    // fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  },
  highlight: {
    color: COLORS.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
