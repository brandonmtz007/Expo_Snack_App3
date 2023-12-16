import React,{ useState } from 'react';
import { Text, View, StyleSheet,TextInput,Button,TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'
import Constants from 'expo-constants';

export default function App() {
const [text1,setText1]=useState('')
const [text2,setText2]=useState('')
const [resultado,setResultado]=useState('0')
const [operacion1,setOperacion1]=useState(false)
const [operacion2,setOperacion2]=useState(false)
const [operacion3,setOperacion3]=useState(false)
const [operacion4,setOperacion4]=useState(false)

   Calcular=(valor1, valor2)=>
  {
    var s="";   
    if(!!valor1 &&  !!valor2)
    {
    const a=parseFloat(valor1);
    const b=parseFloat(valor2);

    if(operacion1)
    {  
    const c=a+b;
    s=s+ a+"+"+b+"="+c+"\n" ;
    }

    if(operacion2)
    {  
    const c=a-b;
    s=s+ a+"-"+b+"="+c+"\n" ;
    }

    if(operacion3)
    {  
    const c=a*b;
    s=s+ a+"*"+b+"="+c+"\n" ;
    }

    if(operacion4)
    {  
    const c=a/b;
    s=s+ a+"/"+b+"="+c ;
    }
 setResultado(s) ;
    }
    else{
  setResultado('Error!') ;
    }
  }

    return (
      <View style={{padding: 10,fontSize:24}}>
      <Text style={{padding: 15, fontSize: 24,backgroundColor:'orange',color: 'white',
      textAlign:'center'}}>
       Calculadora
      </Text>
      
      <TextInput
        style={{height: 40,backgroundColor:'green',color:'white',fontWeight:'bold',borderColor:'green',borderWidth:2,padding:5,marginTop:10}}
        placeholder="Valor 1"
        placeholderTextColor='white'
        onChangeText={(text1) => setText1(text1)}
        keyboardType='numeric'
      />
      <TextInput
        style={{height: 40,backgroundColor:'green',color:'white',fontWeight:'bold',borderColor:'green',borderWidth:2,padding:5,marginTop:5}}
        placeholder="Valor 2"
        placeholderTextColor='white'
        onChangeText={(text2) => setText2(text2)}
         keyboardType='numeric'
      />

<CheckBox
  title='Sumar'
  checked={operacion1}
  onPress={() => setOperacion1(!operacion1)}
/>
<CheckBox
  title='Restar'
  checked={operacion2}
onPress={() => setOperacion2(!operacion2)}
/>
<CheckBox
  title='Multiplicar'
  checked={operacion3}
onPress={() => setOperacion3(!operacion3)}
/>
<CheckBox
  title='Dividir'
  checked={operacion4}
onPress={() => setOperacion4(!operacion4)}
/>

 <TouchableOpacity 
 style={{height: 60,backgroundColor:'blue', marginTop:10}}
    onPress={() => {
 this.Calcular(text1,text2);
}}
>
<Text style={{color:'white',fontSize:24,textAlignVertical:'center',textAlign: "center",marginTop:10,top:12}}>Calcular</Text>
</TouchableOpacity>

      <Text style={{padding: 10, fontSize: 32}}>
        {resultado}
      </Text>
      
    </View>
    );
  }
