/**
* Created by iampamungkas on 2/17/18.
*/
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View, Text, FlatList } from 'react-native'
import { ItineraryCard } from './ItineraryItems/ItineraryCard'
// import { JUSTEST } from './ItineraryItems/JUSTEST'

const d = Dimensions.get('window')
const style = StyleSheet.create({

    containerCard: {
        flex:1,
        borderRadius: 5,
        width: d.width * 286 / 360,
        height: d.height * 150 / 616,
        backgroundColor: '#eeeeee',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        //marginRight: 20,
        // shadowColor: '#eeeeee',
        // shadowOffset: {
        //   width: 0,
        //   height: 0,
        // },
        // zIndex:999,
        // shadowRadius: 0,
        // shadowOpacity: 0,
        padding:50,
        margin:50,
    },
    view:{
        // marginBottom:20
    },
})

export const ItineraryList = (props) => {
    const { itinerary, isLogin, navigation } = props
    // const list = Object.values(itinerary).map((itinerary, index) => <ItineraryCard
    //   key={index}
    //   itinerarys={itinerary}
    //   number={index}
    //   isLogin={isLogin}
    //   navigation={navigation}
    //   // elevation={3}
    //   //style={style.containerCard}
    //   onPreviewClicked={props.onPreviewClicked}
    //   onDeleteClicked={props.onDeleteClicked}
    // />)

    // renderCards = () =>{
    //     let list = []
    //     let counter = 0
    //     for (itin of itinerary) {
    //         list.push(<ItineraryCard
    //           key={counter+1}
    //           itinerarys={itin}
    //           number={counter}
    //           isLogin={isLogin}
    //           navigation={navigation}
    //           // elevation={3}
    //           //style={style.containerCard}
    //           onPreviewClicked={props.onPreviewClicked}
    //           onDeleteClicked={props.onDeleteClicked}
    //         />)
    //         counter++
    //     }
    //     return(
    //         <ScrollView horizontal style={style.containerScroll} showsHorizontalScrollIndicator={false}>
    //                     {list}
    //         </ScrollView>
    //     )
    // }

    renderCards = ({item,index}) => (
        <ItineraryCard
        key={index+1}
        itinerarys={item}
        number={index}
        isLogin={isLogin}
        navigation={navigation}
        // elevation={3}
        //style={style.containerCard}
        onPreviewClicked={props.onPreviewClicked}
        onDeleteClicked={props.onDeleteClicked}
        />
    )
    // output = () =>{
    //     return(<ScrollView horizontal style={{display:'none'}} showsHorizontalScrollIndicator={false}>
    //     </ScrollView>)
    // }
    // const list = Object.values(itinerary).map((itinerary, index) => )
    // style={style.containerScroll}
    // contentInset={{ right: 20 }}
    // for(var x of itinerary){
        // console.log(x)
    // }
    return (
        <View style={style.view}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={itinerary}
        renderItem={this.renderCards}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        contentInset={inset}
        contentContainerStyle={containerScroll}
        />
        </View>
    )
}
const containerScroll = {flexGrow: 1, justifyContent: 'center',paddingTop:10,paddingBottom:15,paddingLeft:20}
const inset = { right: 20 }
