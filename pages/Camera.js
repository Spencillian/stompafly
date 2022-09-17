import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

export default function CameraPage() {
  let cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState();
  const [photo, setPhoto] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === undefined) {
    return <Text>Waiting for Camera Permissions...</Text>;
  }else if(hasPermission === false){
    return <Text>No access to camera</Text>;
  }

  const takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    }

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  }

  const clearPic = () => {
    setPhoto(null);
  }

  if (photo) {
    return (
      <View style={[styles.container]}>
        <Image source={{uri: photo.uri}} style={[styles.camera]} />
        <View style={[styles.buttonContainer]}>
          <Button title="Clear Pic" onPress={clearPic} />
        </View>
      </View>
    ) 
  }

  return (
    <View style={styles.container}>
      {isFocused && <Camera style={styles.camera} ref={cameraRef} ratio={'4:3'}/>}
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  camera: {
    flex: 1,
    marginTop: (Dimensions.get('window').height - (Dimensions.get('window').width / 3) * 4) / 2,
    marginBottom: (Dimensions.get('window').height - (Dimensions.get('window').width / 3) * 4) / 2,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  border: {
    borderColor: 'red',
    borderWidth: 2,
  }
});