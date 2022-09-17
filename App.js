import { useEffect, useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

import CameraPage from './pages/Camera';
import Layout from './Layout';


WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1041962443787-af5n5o3n12fhcefqpt4qf5m9u18lqmhm.apps.googleusercontent.com',
  });

  const getUserData = async () => {
    const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const userInfo = await userInfoResponse.json();
    setUserInfo(userInfo);

    /*
    {
      "email": "spencer2@andrew.cmu.edu",
      "family_name": "Li",
      "given_name": "Spencer",
      "hd": "andrew.cmu.edu",
      "id": "112054609866111488634",
      "locale": "en",
      "name": "Spencer Li",
      "picture": "https://lh3.googleusercontent.com/a/AItbvml-5QR41ix_aSDGELy60QwyBcVrJAr0DFf-NXD-=s96-c",
      "verified_email": true,
    }
    */
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      setAccessToken(authentication.accessToken);
    }
  }, [response]);

  if (!accessToken) {
    return (
      <View style={styles.container}>
        <Button title="Login with Google" onPress={() => promptAsync()} />
      </View>
    );
  }

  return (
    <Layout />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
