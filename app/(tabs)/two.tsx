import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Experience</Text>

        <View style={styles.directDirectContainer}>
          <View style={styles.plContainer}>
            <Text style={{fontSize: 20, margin: 10, color: 'grey', fontWeight: 'bold',}}>Programming Language / <br></br>Framework / Markup Language</Text>
          </View>
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



          </View>
        </View>

        <View style={styles.explainContainer}>
          <Text style={styles.explainText}>I have extensive experience working with various programming languages, frameworks, and markup languages. My proficiency includes:<br></br>
            <Text style={{fontWeight: 'bold',}}>• HTML & CSS:</Text> Solid foundation in creating and styling web pages.<br></br>
            <Text style={{fontWeight: 'bold',}}>• XML</Text> Skilled in using XML for data representation and configuration.<br></br>
            <Text style={{fontWeight: 'bold',}}>• JavaScript:</Text> Advanced knowledge in developing dynamic web applications.<br></br>
            <Text style={{fontWeight: 'bold',}}>• TypeScript:</Text> Expertise in utilizing TypeScript for building robust, type-safe applications.<br></br>
            <Text style={{fontWeight: 'bold',}}>• Java:</Text> Strong background in object-oriented programming and system-level development.<br></br><br></br>
            <Text style={{fontWeight: 'bold',}}>Frameworks:</Text> <br></br>
            <Text style={{fontWeight: 'bold',}}>• Angular:</Text> Experienced in developing scalable single-page applications.<br></br>
            <Text style={{fontWeight: 'bold',}}>• Ionic Framework:</Text> Proficient in building cross-platform mobile applications.<br></br>
            <Text style={{fontWeight: 'bold',}}>• React Native & Expo Framework:</Text> Specialized in creating mobile applications using React Native and leveraging the Expo framework for efficient development.<br></br><br></br>
                This diverse skill set allows me to adapt to various project requirements and deliver high-quality software solutions.
          </Text>
        </View>

        <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      </View>
    </ScrollView>
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
  directDirectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: '#A9A9A9',
    borderWidth: 1.5,
    width: 350,
    marginTop: 10,
  },
  expeContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    paddingHorizontal: 32,
    // borderRadius: 30,
    // borderColor: 'blue',
    // borderWidth: 1.5,
    elevation: 3,
    width: 340,
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  plContainer: {
    // borderRadius: 30,
    // borderColor: 'red',
    // borderWidth: 1.5,
    width: 300,
    marginTop: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  explainContainer: {
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
  explainText: {
    textAlign: 'justify',
    fontSize: 15
  }
});
