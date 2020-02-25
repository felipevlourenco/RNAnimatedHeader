import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import { HEADER_MAX_HEIGHT } from './../CONSTS'

const Body = React.memo(props => {
  const renderRows = () => {
    const data = Array.from({ length: 30 })

    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, index) => (
          <View key={index} style={styles.row}>
            <Text>{index}</Text>
          </View>
        ))}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>{renderRows()}</ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Body
