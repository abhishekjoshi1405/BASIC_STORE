import { StyleSheet, Text,FlatList, View, Button } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { GET_MOVIES,REMOVE_FAVORITES,ADD_FAVORITES } from '../redux/actions';


const Movies = () => {
  const {movies,favorites} = useSelector(state => state.moviesReducer);
  // console.log(movies,"MOVIE LIST")
  const dispatch = useDispatch()
  const addtoFav = (itm)=>{
    let findPost =[]
     findPost = favorites.find((fav)=>{
      return fav.id === itm.id
    })
console.log("Movie to be added in favorites",findPost)
if(!findPost)
{
dispatch({
  type:ADD_FAVORITES,
  payload:itm
})
}
else
{
  console.log("Already in Favs")
}

  }
  const fetchMovies= async ()=>{
    try
    {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log("Data",data.length)
    if(data.length >0)
    {
    dispatch({
      type: GET_MOVIES,
      payload: data,
    });
  }
  else{

  }
}
catch(error){

}
  
  }
  useEffect(() => {
    fetchMovies()
  }, [])
  
  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
    <Text style={{fontSize: 22}}>Popular Posts</Text>
    <View style={{flex: 1, marginTop: 12}}>
      <FlatList
        data={movies}
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
                  <Button onPress={()=>addtoFav(item)} title="Add to favorites"  />
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

export default Movies

const styles = StyleSheet.create({})