import React from 'react'
import { Animated, View, Text, StyleSheet } from 'react-native'

const Header = React.memo(props => {
  return (
    <Animated.View style={styles.header}>
      <View style={styles.bar}>
        <Text style={styles.title}>Header</Text>
      </View>
    </Animated.View>
  )
})

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden'
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18
  }
})

export default Header
