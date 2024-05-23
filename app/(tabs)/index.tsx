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

      <View style={styles.expeBox}>
        <View style={styles.expeContainer}>
          <Image source={require("../../assets/images/client.png")} style={styles.expeIcon}/>
          <Text style={{fontWeight: 'bold', fontSize: 17,}}>Experience</Text>
        </View>
          <Text style={styles.expeDetails}>6 months<br></br>
              App Developer for Thesis Project<br></br>
              Currently working as an<br></br>
              App Developer/Frontend Developer</Text>
      </View>

      <View style={styles.expeBox}>
        <View style={styles.expeContainer}>
          <Image source={require("../../assets/images/education.png")} style={styles.expeIcon}/>
          <Text style={{fontWeight: 'bold', fontSize: 17,}}>Education</Text>
        </View>
          <Text style={styles.expeDetails}>B.S. Information Technology<br></br>
              Major in Web and Mobile Development</Text>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>I am a Software Developer with 1 year of experience in developing moible applications using Angular Framework, Ionic Framework, React Native and TypeScript.  I have a strong background in building scalable and maintainable software solutions and have worked on various projects that range from startups to large enterprises.
          With a degree in Information Technology from Bulacan State University, I specialize in front-end development and have a keen interest in the latest industry trends and technologies. My expertise includes Angular, React, TypeScript, Ionic framework and the Expo framework.
          In my free time, I enjoy cycling, exploring new technologies, and playing online games. I'm always excited to connect with fellow tech enthusiasts, so feel free to reach out!</Text>
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
  expeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    borderColor: '#A9A9A9',
    borderWidth: 1.5,
    elevation: 3,
    width: 350,
    marginTop: 20,
  },
  expeContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  expeIcon: {
    width: 24,
    height: 24,
    marginEnd: 5,
    marginStart: 20,
  },
  expeDetails: {
    textAlign: 'center',
    fontSize: 15,
  },
  aboutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    borderColor: '#A9A9A9',
    borderWidth: 1.5,
    elevation: 3,
    width: 350,
    marginTop: 20,
  },
  aboutText: {
    textAlign: 'justify',
    fontSize: 15
  }
});
