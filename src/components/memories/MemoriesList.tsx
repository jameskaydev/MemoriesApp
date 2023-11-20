import { View } from 'react-native'
import React from 'react'
import { data } from '../../constants/memoriesSample';
import MemoryListSlide from './MemoryListSlide';

const MemoriesList = () => {
  return (
    <View>
      {
        data.map((item, index) => (
          <MemoryListSlide
            title={item.title}
            date={item.date}
            image={item.image}
            key={index}
          />
        ))
      }
    </View>
  )
}

export default MemoriesList