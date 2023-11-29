import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import { data } from '../../constants/memoriesSample';
import MemoryListSlide from './MemoryListSlide';

interface Props {
  isGrid: boolean;
}

const MemoriesList = ({ isGrid }: Props) => {
  return (
    <View style={isGrid ? styles(isGrid).mainContainer : undefined}>
      {
        data.map((item, index) => (
          <MemoryListSlide
            title={item.title}
            date={item.date}
            image={item.image}
            key={index}
            isGrid={isGrid}
          />
        ))
      }
    </View>
  )
}

const styles = (isGrid: boolean) => StyleSheet.create({
  mainContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'center',
    columnGap: 4,
    rowGap: 10,
    paddingTop: 20
  }
})

export default MemoriesList