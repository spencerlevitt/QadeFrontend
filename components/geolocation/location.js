// TODO: CONSIDER CONVERTING THIS TO A REDUX CONTAINER COMPONENT
import Geolocation from 'react-native-geolocation-service';
import { ToastAndroid } from 'react-native';

hasLocationPermission = async () => {
  if (Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );

  if (hasPermission) return true;

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );

  if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
  }

  return false;
}

export const getLocation = async () => {
  const hasLocationPermission = await this.hasLocationPermission();

  if (!hasLocationPermission) return;

  return Geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      return position;
    },
    (error) => {
      console.log(error);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
  );
}

getLocationUpdates = async () => {
  const hasLocationPermission = await this.hasLocationPermission();

  if (!hasLocationPermission) return;

  return this.watchId = Geolocation.watchPosition(
    (position) => {
      console.log(position);
      return position;
    },
    (error) => {
      console.log(error);
    },
    { enableHighAccuracy: true, distanceFilter: 0, interval: 5000, fastestInterval: 2000 }
  );
}

removeLocationUpdates = () => {
    if (this.watchId !== null) {
        Geolocation.clearWatch(this.watchId);
    }
}
