import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const MainButton = () => {
  const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flexGrow: 1,
      flexShrink: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert('You clicked it')}>
        <Text>Hello From MainButton — You can click me</Text>
      </Pressable>
    </View>
  );
};

export default MainButton;
