import * as React  from 'react';
import MapView,{Callout, Marker,Circle} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
export default function App() {
    const [pin,setPin]=React.useState({
      
        latitude: 37.78825,
        longitude: -122.4324,
  
    })
    const [coordinates] = React.useState([
      {
        latitude: 48.8587741,
        longitude: 2.2069771,
      },
      {
        latitude: 48.8323785,
        longitude: 2.3361663,
      },
    ]);
  return (
    <View style={styles.container}>
      <MapView style={styles.map}  
       initialRegion={{
        latitude: coordinates[0].latitude?coordinates[0].latitude:0,
        longitude: coordinates[0].longitude?coordinates[0].longitude:0,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0121,
    }} 
         provider="google"
    >
        <MapViewDirections
        lineDashPattern={[0]}
          origin={{
            latitude: coordinates[0].latitude?coordinates[0].latitude:0,
            longitude: coordinates[0].longitude?coordinates[0].longitude:0,
          }}
          destination={{
            latitude: coordinates[1].latitude?coordinates[1].latitude:0,
            longitude: coordinates[1].longitude?coordinates[1].longitude:0,
          }}
          apikey='AIzaSyCE41gWBv1AfHzJNsyvCQe6FIPpYHLKcrs' // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
      <Marker coordinate={coordinates[0]?coordinates[0]:0} />
        <Marker coordinate={coordinates[1]?coordinates[1]:0} />
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})