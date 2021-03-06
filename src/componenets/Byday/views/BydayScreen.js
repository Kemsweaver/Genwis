/**
 * Created by iampamungkas on 10/20/17.
 */
import React, { Component } from 'react'
import { Dimensions, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'
import Clock from 'react-native-vector-icons/FontAwesome'
import { NavigationActions } from 'react-navigation'
import BydayScreenList from './BydayScreenList'
import moment from 'moment'

function mapStateToProps(state) {
  const { itineraryByDetail } = state
  const {
    isFetching,
    itinerary,
    shownItinerary,
    isPreview,
  } = itineraryByDetail || {
    isFetching: true,
    itinerary: { },
  }

  return {
    itinerary,
    isFetching,
    shownItinerary,
    isPreview,
  }
}
class BydayScreen extends Component {
    state = {
      day: 0,
    }
    onPlus = () => {
      const { itinerary, shownItinerary } = this.props
      const List = itinerary[shownItinerary]
      // console.log('xas')
      typeof List.itinerary.time_line[this.state.day + 1] !== "undefined" ?
        (this.state.day !== List.itinerary.time_line.length - 1) ?
          (List.itinerary.time_line[this.state.day + 1].events) ?
            this.setState({
              day: this.state.day + 1,
            }) : false
            : false
        : false
    }
    onMin = () => {
      this.state.day !== 0 ?
        this.setState({
          day: this.state.day - 1,
        }) : false
    }
    render() {
      const {
        dispatch, itinerary, navigation, shownItinerary, isPreview
      } = this.props
      let shown  = shownItinerary
      if (!isPreview){
        console.log("hehehhe")
        shown = 0
      }
      const List = itinerary[shown]
      // console.log("XyX")
      // console.log(List.itinerary)
      return (
        <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
          <View style={Toolbar}>
            <Text style={timelineToolbarText}>
              Detil
            </Text>
            <Text style={subtitleToolbarText}>
              {toolbarSubtitile(List.itinerary)}
            </Text>
          </View>
          <View style={bar}>
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.onMin()}>
              <Icon name="arrow-left" style={{ fontSize: 30, color: '#27ae60', marginTop: d.height * 0.025 }} />
            </TouchableOpacity>
            <Text style={day}> {moment.parseZone(List.itinerary.time_line[this.state.day].time).format("DD MMMM YYYY")}</Text>
            <TouchableOpacity style={{ position: 'absolute', right: 10, top: d.height * 0.025 }} onPress={() => this.onPlus()}>
              <Icon name="arrow-right" style={{ fontSize: 30, color: '#27ae60' }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <BydayScreenList items={List.itinerary.time_line[this.state.day]} />
          </View>
          <TouchableOpacity style={fab} onPress={() => dispatch(NavigationActions.back())}>
            <Clock name="clock-o" style={{ fontSize: 25, color: '#27ae60' }} />
          </TouchableOpacity>
        </View>
      )
    }
}


export default connect(mapStateToProps)(BydayScreen)

const d = Dimensions.get('window')

const bar = {
  flexDirection: 'row',
  backgroundColor: 'white',
  height: d.height * 0.08,
  width: d.width,
}

const day = {
  color: '#27ae60',
  fontFamily: 'Poppins-Regular',
  fontSize: 19.3,
  fontWeight: '500',
  letterSpacing: 0.1,
  marginTop: d.height * 0.025
}
const bookNowText = {
  color: 'white',
  fontFamily: 'Poppins-Regular',
  fontSize: 16,
  fontWeight: 'bold',
  letterSpacing: 0.1,
}

const button = {
  bottom: 0,
  width: d.width,
  height: d.height * 0.07,
  backgroundColor: '#27ae60',
  alignItems: 'center',
  justifyContent: 'center',
}

const fab = {
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: 'white',
  position: 'absolute',
  bottom: 200,
  left: -22,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 12,
}
const timelineToolbarText = {
  marginLeft: 10,
  fontFamily: 'Poppins-Regular',
  fontSize: 18,
  letterSpacing: 0.59,
  textAlign: "left",
  color: "#ffffff"
}

const subtitleToolbarText = {
  marginLeft: 10,
  fontFamily: 'Poppins-Regular',
  fontSize: 12,
  fontWeight: "normal",
  letterSpacing: 0.32,
  textAlign: "left",
  color: "#ffffff"
}
const Toolbar = {
  height: d.height * 70 / 680,
  backgroundColor: "#27ae60",
  padding: d.height * 10 / 680,
}

function toolbarSubtitile(iten) {
  return `${moment(iten.detail.start).format('D MMMM')} - ${moment(iten.detail.finish).format('D MMMM YYYY')} ${iten.detail.location.city}`
}