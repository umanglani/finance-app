import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { globalStyles } from '../global-styles';

export default function Header() {
  return (
    <View style={[styles.container, globalStyles.vCenter, globalStyles.fullWidth]}>

      <View>
        <FontAwesomeIcon icon={faCircleUser} style={styles.userIcon}/>
      </View>

      <View style={[globalStyles.flexStart]}>
        <Text style={globalStyles.lightSmallText}>Welcome back,</Text>
        <Text style={globalStyles.regularTitle}>Michael Eddler</Text>
      </View>

      <View style={globalStyles.flexEnd}>
        <FontAwesomeIcon icon={faGear} style={styles.settingsIcon}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '20px',
    paddingRight: 35,
    display: 'grid',
    gridTemplateColumns: '15% 65% 20%',
    backgroundColor: 'rgb(237,241,244)'
  },
  userIcon: {
    height: 36,
    width: 36
  },
  settingsIcon: {
    height: 26,
    width: 26
  }
});
