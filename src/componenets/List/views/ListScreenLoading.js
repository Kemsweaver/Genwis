/**
 * Created by iampamungkas on 7/30/17.
 */
import React, { Component } from 'react'
import { Dimensions, Text, View, StatusBar } from 'react-native'
import Video from 'react-native-video'

export default class ListScreenLoading extends Component {
  render() {
      console.log('loading props',this.props)
      // console.log('loading props err',this.props.error)
      /*
        <Text>test {this.props.error===true?'ada error':'tak ada error'}</Text>
        <Video
          source={require('../../../assets/loading.mp4')} // Can be a URL or a local file.
          muted // Pauses playback entirely.
          resizeMode="cover" // Fill the whole screen at aspect ratio.*
          repeat
          style={video}
        />
      */
    return (
      <View style={container}>
        <StatusBar backgroundColor="white" />
        <Text style={teks}>{this.props.error===true?'generating itinerary failed, please check your network connection':''}</Text>
        <Video
          source={require('../../../assets/loading.mp4')} // Can be a URL or a local file.
          muted // Pauses playback entirely.
          resizeMode="cover" // Fill the whole screen at aspect ratio.*
          repeat
          style={video}
        />
      </View>
    )
  }
}
const teks = {
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
}
const d = Dimensions.get('window')
const container = {
  height: d.height,
  width: d.width,
  alignItems: 'center',
  justifyContent: 'center',
}
const video = {
  position: 'absolute',
  top: 0.27 * d.height,
  left: 0,
  bottom: 0,
  right: 0,
  height: d.width * 0.6,
}

const loading = {
  fontFamily: 'Poppins-Regular',
  fontSize: 39.3,
  fontWeight: 'bold',
  letterSpacing: 0.2,
  textAlign: 'center',
  color: '#ffffff',
}
