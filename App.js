import React, {useState} from 'react'
import {View, 
  Text,
  TextInput,
  FlatList,
  StyleSheet,TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import Tarefa from './src/Tarefa';

export default function App(){
const [tarefa,setTarefas]=useState('');
const [list,setList]=useState([

])

function handeAdd(){

  if(tarefa==''){
    return;
  }
  let dados={
    key:Date.now(),
    item:tarefa
  }
  setList(oldArry=>[dados,...oldArry])
  setTarefas('')
}

function handleDelete(item){
 let filtroItem= list.filter((tarefa)=>{
  return (tarefa.item !==item)
 });
 setList(filtroItem)
}
  return(
    <View style={styles.container}>
<Text style={styles.title}>Tarefas l</Text>

<View style={styles.containerInput}>
  <TextInput onChangeText={(text)=>setTarefas(text)} value={tarefa} style={styles.input} placeholder='Digite uma tarefa'/>

<TouchableOpacity onPress={handeAdd}  style={styles.buttonAdd}>
  <FontAwesome name='plus' size={20} color='#FFF'/>
</TouchableOpacity>
</View>
<FlatList style={styles.list} data={list} keyExtractor={(item)=>item.key} renderItem={({item})=><Tarefa data={item} deleteItem={()=>handleDelete(item.item)}/>}/>
    </View>

  
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  backgroundColor: 'green',
  paddingTop:28
  },
  title:{

    fontWeight:'bold',
    fontSize:24,
    color:'#FFF',
    marginTop:'5%',
    paddingStart:'5%',
    marginBottom:12
  },
  containerInput:{
flexDirection:'row',
width:'100%',
height:44,
alignItems:'center',
justifyContent:'center',
marginBottom:22
  },
  input:{
    width:'75%',
    backgroundColor:'#FBFBFB',
    height:44,
  borderRadius:4,
  paddingHorizontal:8,
  },
  buttonAdd:{
    width:'15%',
    height:44,
    backgroundColor:'#73f7ff',
    marginLeft:8,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4,

  },
  list:{
    flex:1,
    backgroundColor:'#FFF',
  paddingStart:'4%',
  paddingEnd:'4%'
  }



})