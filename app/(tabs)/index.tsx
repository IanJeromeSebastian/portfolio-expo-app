import { StyleSheet, Image, Pressable, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';

//const PlaceholderImage = require("./assets/images/ianprofile.jpg");

export default function TabOneScreen() {
  return (
    <ScrollView>
        <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/ianprofile.jpg")} style={styles.image}/>
      </View>
      
      <Text style={styles.title}>Hello, I'm</Text>
      <Text style={styles.titleName}>Ian Jerome M. Sebastian</Text>
      <Text style={styles.titlePosition}>App Developer/Frontend Developer</Text>

      <Pressable style={styles.button}>
        <Text style={styles.textButton} >Download CV</Text>
      </Pressable>

      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.iconContainer}>
        <Pressable style={styles.linkedin}>
          <FontAwesome
            name='linkedin-square'
            size={35}
          />
        </Pressable>
        <Pressable style={styles.github}>
          <FontAwesome
            name='github'
            size={35}
          />
        </Pressable>
      </View>

      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 13,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  titleName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titlePosition: {
    fontSize: 15,
    paddingBottom: 24,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imageContainer: {
    overflow: 'hidden',
    width: 350,
    height: 350,
    borderRadius: 175,
    borderColor: '#1E90FF',
    borderWidth: 2,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 175,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    borderColor: '#A9A9A9',
    borderWidth: 1.5,
    elevation: 3,
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  iconContainer: {
    margin: 5,
    flexDirection: 'row'
  },
  linkedin: {
    margin: 5,
  },
  github: {
    margin: 5,
  },
  knowContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
});
