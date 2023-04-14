import { Image, StyleSheet, Text, View } from 'react-native';
import Header from './src/common/header';
// import { useFonts, Roboto_700Bold, Roboto_300Light, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useFonts, Nunito_300Light, Nunito_300Light_Italic, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import Footer from './src/common/footer';
import HomePage from './src/home/homepage';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_300Light, Nunito_300Light_Italic, Nunito_400Regular, Nunito_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <View style={styles.container}>

      <View style={styles.contentContainer}>

          <View style={styles.headerWrapper}>
              <Header/>
          </View>

          <View style={styles.bodyWrapper}>
            <HomePage/>
          </View>

      </View>

      <Footer/>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Nunito_400Regular',
  },
  bodyWrapper: {

  },
  contentContainer: {
      flex: 1,
      width: '100%'
    }
});
