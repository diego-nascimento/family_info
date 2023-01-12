import React from 'react';
import { View, Image } from 'react-native';
import Styles from './style';

const photourl =
  'https://img.freepik.com/free-photo/profile-photo-trendy-woman-with-wavy-hair-modern-blue-dress-earrings-showing-place-text-isolated-background_197531-29239.jpg?w=2000';

export const UserProfile = () => {
  return (
    <View style={Styles.Wrapper}>
      <View style={Styles.ImageContainer}>
        <Image
          style={Styles.CircularPhoto}
          source={{
            uri: photourl,
          }}
        />
      </View>
    </View>
  );
};
