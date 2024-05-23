import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experience</Text>

      <View style={styles.expeContainer}>

        <View style={styles.directContainer}>
          {/* <View style={styles.textDirectContainer}> */}
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>Html</Text>
          {/* </View> */}
        </View>

        <View style={styles.directContainer}>
          {/* <View style={styles.textDirectContainer}> */}
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>Css</Text>
          {/* </View> */}
        </View>

        <View style={styles.directContainer}>
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>Xml</Text>
        </View>

        <View style={styles.directContainer}>
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>Angular</Text>
        </View>

        <View style={styles.directContainer}>
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>TypeScript</Text>
        </View>
        
        <View style={styles.directContainer}>
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>JavaScript</Text>
        </View>

        <View style={styles.directContainer}>
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>Java</Text>
        </View>

        <View style={styles.directContainer}>
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>React Native</Text>
        </View>

        <View style={styles.directContainer}>
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>Ionic Framework</Text>
        </View>

        <View style={styles.directContainer}>
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>Expo Framework</Text>
        </View>

        <View style={styles.directContainer}>
            <FontAwesome
              name= "check-circle"
              size={20}
              style={{marginRight: 5,}}/>
            <Text style={styles.text}>C++</Text>
        </View>

      </View>

      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  directContainer:{
    flexDirection: 'row',
    // borderRadius: 30,
    // borderColor: 'red',
    // borderWidth: 1.5,
    width: "auto",
    justifyContent: 'center',
    margin: 10,
  },
  textDirectContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 30,
    borderColor: 'blue',
    borderWidth: 1.5,
  },
  expeContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    borderColor: '#A9A9A9',
    borderWidth: 1.5,
    elevation: 3,
    width: 350,
    marginTop: 20,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});
