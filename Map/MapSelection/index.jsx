import React, { useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Alert, ActivityIndicator, StatusBar, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { styles } from "./style";
import Geolocation from "react-native-geolocation-service";
import MapInput from "./MapInput"
import { getDistance } from "geolib";

const Map = () => {
  const initialLocation = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  };
  //  getDistance(
  //    {},
  //    {}
  //   )
  const [locations, setLocations] = useState(initialLocation);
  const [search, setSearch] = useState("");

  const updateInput = search => {
    setSearch(search);
  };
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const newLocation = {
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        };
        // getDistance(position.coords,{
        //   latitude,
        //   longitude
        // })
        console.log(getDistance);
        setLocations(newLocation);
      },
      error => {
        Alert.alert(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }, []);
  return (
    <>
      {/* <StatusBar backgroundColor="blue" translucent/> */}

      {/* <MapInput notifyChange={(loc) => getCoordsFromName(loc)}/> */}
      {locations.longitude > 0 ? (
        <MapView
          style={{...StyleSheet.absoluteFillObject}}
          showsUserLocation={true}
          initialRegion={locations}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={locations}
            title="LearnFactory"
            description="This is where the magic happens"
          />
        </MapView>
      ) : (
        <ActivityIndicator size="large" color="blue" />
      )}
    </>
  );
};
// export default Map;

// // findCoordinates = () =>{
// //   Geolocation.getCurrentPosition((position)=>{
// //     const location = JSON.stringify(position)
// //     setLocation(location)
// //   },
// //   error => Alert.alert(error.message),
// //   {enableHighAccuracy:true, timeout:20000, maximumAge:1000}
// //   )
// // }

// // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
// //   {/* <TouchableOpacity onPress={findCoordinates}>
// //   <Text style={{fontSize:20, textAlign:'center'}}>Find my coords?</Text>
// //   <Text>Location:{location}</Text>
// //   </TouchableOpacity> */}

// //   {/* <Text>Geolocation in React native</Text> */}

// // </View>
// {
//   /* <MapView
//       style={{ ...StyleSheet.absoluteFillObject }}
//       initialRegion={{
//         latitude: 5.10658,
//         longitude: 7.36667,
//         latitudeDelta: 0.05,
//         longitudeDelta: 0.05
//       }}
//     >
    
    
//       <Marker
//         coordinate={{
//           latitude: 5.10658,
//           longitude: 7.36667
//         }}
//         title="LearnFactory"
//         description="This is where the magic happens"
//       />
//     </MapView> */
// }

// // OUTLAWS
// //   requestPermissions = () =>{
// //   if (Platform.OS === 'ios'){
// //     Geolocation.requestAuthorization()
// //     Geolocation.setRNConfiguration({
// //       skipPermissionRequests:false,
// //       authorizationLevel: 'whenInUse'
// //     })
// //   }
// // }

// // if (Platform.OS === 'android') {
// //     PermissionsAndroid.request(
// //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
// //   );
// // }
// // useEffect(()=>{
// //   Geolocation.getCurrentPosition((position)=>{
// //     // console.log("Latitude is :", position.coords.latitude)
// //     // console.log("Longitude is :", position.coords.longitude)
// //     console.log(position)
// //   })
// // })
