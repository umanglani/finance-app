import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { faHouse, faChartColumn, faCreditCard, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../global-styles';

export default function Footer() {

  const [currentOption, setCurrentOption] = React.useState('home');
  

  const GetFooterIconStyles = (option) => {
    return {
        fontSize: 22,
        color: currentOption === option ? 'black' : Colors.Gray
    };
};

  const SelectOption = (option) => {
    setCurrentOption(option);
  }

  return (
      <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => { SelectOption('home')}}>
            <FontAwesomeIcon icon={faHouse} style={GetFooterIconStyles('home')}/>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => { SelectOption('stats')}}>
            <FontAwesomeIcon icon={faChartColumn} style={GetFooterIconStyles('stats')}/>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => { SelectOption('card')}}>
            <FontAwesomeIcon icon={faCreditCard} style={GetFooterIconStyles('card')}/>                
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => { SelectOption('download')}}>
            <FontAwesomeIcon icon={faDownload} style={GetFooterIconStyles('download')}/>
          </TouchableOpacity>

      </View>
  )
}

const styles = StyleSheet.create({
    footer: {
      paddingTop: 15,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 15,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      height: 60,
      width: '100%',
      borderTopColor: 'rgb(237,241,244)',
      borderTopWidth: 1
    },
    footerIcon: {
      fontSize: 22,
    },
    activeIcon: {
      color: '#000'
    },
    inactiveIcon: {
        color: Colors.Gray
    }
});
