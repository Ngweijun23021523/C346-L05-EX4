import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Image,Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const datasource = [
  {
    data: [
      {key:'Firefly(5*)',image:require('./img/firefly.webp'), chractercolor: 'goldenrod'},
      {key:'Gallagher(4*)',image:require('./img/Gallagher.webp') ,chractercolor: 'purple'}

    ],
    title: "fire",
    bgcolor: "red",
    iconName: "fire-flame-curved",
  },
  {
    data: [
      {key:'Gepard(5*)',image:require('./img/Gepard.webp'), chractercolor: 'goldenrod'},
      {key:'Herta(4*)',image:require('./img/Herta.webp') , chractercolor: 'purple'},
    ],
    title: "Ice",
    bgcolor: 'lightblue',
    iconName:'snowflake',


  },

  {
    data: [
      {key:'Sunday(5*)',image:require('./img/sunday.webp'), chractercolor: 'goldenrod'},
      {key:'March7th-Hunt(4*)',image:require('./img/march7thHunt.webp') , chractercolor: 'purple'},
    ],
    title: "Imaginary",
    bgcolor: '#FEE135',
    iconName:'canadian-maple-leaf',


  },

];

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
    marginLeft:10,
    fontStyle: 'italic',

  },
  headerText: {
    fontSize: 20,
    margin: 10,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20

  },
  iconStyle: {
    marginRight: 10
  },
  buttonContainer: {

    top: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'black',
    flexDirection: 'column',
    paddingTop:30
  },

  image:{
    width:250 ,
    height:300,
    alignSelf: 'right',
    resizeMode: 'contain',

  },
});

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity  style={[styles.opacityStyle, { backgroundColor: item.chractercolor }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View>
        <View style={styles.buttonContainer}>
          <Button title="View all Characters" />
        </View>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgcolor,iconName} }) => (
                <View style={[styles.sectionHeader, { backgroundColor: bgcolor }]}>
                  <Icon name={iconName} size={20} color="#fff" style={styles.iconStyle} />

                  <Text style={styles.headerText}>{title}</Text>


                </View>
            )}

        />
      </View>
  );
}

export default App;
