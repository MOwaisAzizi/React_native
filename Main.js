import { Alert, Pressable } from "react-native"
import { View } from "react-native-web"

const Main = () => {
    styles = StyleSheet.create({
        contianer:{
            marginTop:Constants.statusBarHight,
            flexGrowth:1,
            flexShrink:1
        }
    })
    return (
        <view style={styles.contianer}>
         <Pressable onPress={()=>Alert.allert('You click it')
         }>
              <Text>Hello From main You can click me</Text>
            </Pressable> 
        </view>
    )
}
export default Main