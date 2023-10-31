import { View, Text, FlatList, StyleSheet } from 'react-native'
import MessageBox from './onboarding/MessageBox'

interface Props {
  messages: JSON[]
}

const ChatMessages = ({ messages }: Props) => {
  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({item}) => {
        if ( JSON.parse(item as any).sender === 'assistant' ) {
          return <MessageBox message={item} />
        } else {
          return <MessageBox message={item} />
        }
        // return <MessageBox message={item} />
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ChatMessages