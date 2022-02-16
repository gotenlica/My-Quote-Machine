import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import ARRAYCOLORS from './arrayColors';
import './App.scss'

function App() {


  const [quote, setQuote] = useState('Todo pendejo tiene una razon de ser !')
  const [autor, setAutor] = useState('Freddy Rivera')
  const [RandonQuote, setRandonQuote] = useState(0)
  const [changeColor, setchangeColor] = useState('#139487') 



   const generateRandonQuote = ()=> {

     let randomInteger = Math.floor(quoteArray.length*Math.random())

     setRandonQuote(randomInteger)
     setchangeColor(ARRAYCOLORS [randomInteger])
     setQuote(quoteArray[randomInteger].Quote)
     setAutor(quoteArray[randomInteger].Autor)
}  

const quoteArray = [

  {Quote:'Todo pendejo tiene una razon de ser !',Autor:'Freddy Rivera'},
  {Quote:'Todo marica encuentra su cacorro',Autor:'Mila Rivera'},
  {Quote:'A el que le van a dar le guardan',Autor:'Biljana Rivera'},
  {Quote:'Quien no llora no mama..',Autor:'Luka'},
  {Quote:'Lo que viene partido es pa compartir',Autor:'Medellin'},

]


  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: changeColor}}>
       
          
        <div id='quote-box' style={{color: changeColor}} >


        <p id='text'>" {quote} " </p>    

        <p id='author' >{autor}</p>  

<a  style={{backgroundColor: changeColor}} id='tweet-quote' href = 
       {encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${autor}`)}><FontAwesomeIcon icon={faTwitter} /></a> 


       <button style={{backgroundColor: changeColor}} id ='new-quote'   onClick={()=>generateRandonQuote()}>Change Quote</button>

       

        

        
       

        </div> 

       

      </header>
    </div>
  );
}

export default App;
