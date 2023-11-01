import { View, Text, FlatList, StyleSheet } from 'react-native'
import MessageBox from './onboarding/MessageBox'

interface ArrayProps {
  hidden: boolean;
  id: string;
  message: string;
  sender: string;
  type: string;
}

interface Props {
  messages: ArrayProps[]
}

const ChatMessages = ({ messages }: Props) => {
  // console.log(messages)
  return (
    <View style={{
      flexDirection: 'column', 
      height: '100%'
    }}>
      <FlatList
        data={messages.reverse()} 
        keyExtractor={(_, index) => index.toString()}
        inverted={true}
        renderItem={({item}) => <MessageBox message={item.message} sender={item.sender} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ChatMessages