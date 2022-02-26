import React, {Fragment} from 'react';
import {View, Text} from 'react-native';

export function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text> Leticia Rodrigues </Text>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        Ignite
      </Text>
    </>
  );
}
