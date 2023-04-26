import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React from 'react'
import { REMOVE_FAVORITES } from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';

const Favorites = () => {
  const {movies,favorites} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch()
  // console.log("Favorites list",favorites)

  const remove =(itm)=>{

    
    // console.log("Item to be removed",itm)
    dispatch({
      type:REMOVE_FAVORITES,
      payload:itm
    })
  
  }
  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
    <Text style={{fontSize: 22}}>Favorite Posts</Text>
    <View style={{flex: 1, marginTop: 12}}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
         
          return (
            <View style={{marginVertical: 12}}>
             <Text>{item.id}</Text>
             <View style={{flex: 1, marginLeft: 12}}>
                  <View>
                    <Text style={{fontSize: 22, paddingRight: 16}}>
                      {item.title}
                    </Text>
                  </View>
                  <Button onPress={()=>remove(item.id)} title="Remove favorites"  />
                  </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </View>
  )
}

export default Favorites

const styles = StyleSheet.create({})