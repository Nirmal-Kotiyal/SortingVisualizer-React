import React,{useState,useEffect} from 'react'
import './SortingVisualizer.css'
import BubbleSort from '../../SortingAlgorithms/BubbleSort';
import InsertionSort from '../../SortingAlgorithms/InsertionSort';
import SelectionSort from '../../SortingAlgorithms/SelectionSort';
import MergeSort from '../../SortingAlgorithms/MergeSort'
import {Button} from 'antd'; 

const ANIMATION_SPEED_MS = 1;


const NUMBER_OF_ARRAY_BARS = 310;

const PRIMARY_COLOR = '#15f4ee';


const SECONDARY_COLOR = '#FD1C03';


function SortingVisualizer() {
    
    const [Array, setArray] = useState([]);
    const [disabled ,setdisabled] = useState(false);    
    useEffect(() => {
        resetArray();
    },[]);
    
    const resetArray = ()=>{
        let array = [];
        for(let i=0;i<250;i++){
            array.push(randomIntFromInterval(5,600));
        }
        setArray(array);
    }

    const  bubbleSort =()=>{
      setdisabled(true);
        const animations = BubbleSort(Array);
        // console.log(animations);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
          setTimeout(() => {
            let barOneStyle = arrayBars[animations[i].index[0]].style;
            let barTwoStyle = arrayBars[animations[i].index[1]].style;
            if (animations[i].data) {

              let temp = barOneStyle.height;
              console.log(barOneStyle.height,barTwoStyle.height)
              barOneStyle.height=barTwoStyle.height;
              barTwoStyle.height= temp;
              barOneStyle.backgroundColor=SECONDARY_COLOR
              barTwoStyle.backgroundColor=SECONDARY_COLOR
              console.log(console.log(animations[i].data));
              }
              else{
                barOneStyle.backgroundColor=PRIMARY_COLOR;
                barTwoStyle.backgroundColor=PRIMARY_COLOR;   
              }                
            },i*ANIMATION_SPEED_MS,makeAllBarsGreen);
      }
        }


    function makeAllBarsGreen() {
        console.log("Sorted");
        const arrayBars = document.getElementsByClassName("array-bar");
        var arrayLength = arrayBars.length;
        for (let j = 0; j < arrayLength; j++) {
          var jBarStyle = arrayBars[j].style;
          jBarStyle.backgroundColor = "green";
        }
      }


    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      const insertionSort =()=>{
      setdisabled(true);
       
        const animations = InsertionSort(Array);
        
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');

        
            setTimeout(() => {
              let barOneStyle = arrayBars[animations[i].index[0]].style;
              let barTwoStyle = arrayBars[animations[i].index[1]].style;
              if (animations[i].data) {
                let temp = barOneStyle.height;
                console.log(barOneStyle.height,barTwoStyle.height)
                barOneStyle.height=barTwoStyle.height;
                barTwoStyle.height= temp;
                barOneStyle.backgroundColor=SECONDARY_COLOR
                barTwoStyle.backgroundColor=SECONDARY_COLOR
                console.log(console.log(animations[i].data));
                }
                else{
                  barOneStyle.backgroundColor=PRIMARY_COLOR;
                  barTwoStyle.backgroundColor=PRIMARY_COLOR;   
                }                
              },i*1,makeAllBarsGreen);
        }

      }


      const selectionSort = ()=>{
      setdisabled(true);
       
        const animations = SelectionSort(Array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');

        
            setTimeout(() => {
              let barOneStyle = arrayBars[animations[i].index[0]].style;
              let barTwoStyle = arrayBars[animations[i].index[1]].style;
              if (animations[i].data) {

                let temp = barOneStyle.height;
                console.log(barOneStyle.height,barTwoStyle.height)
                barOneStyle.height=barTwoStyle.height;
                barTwoStyle.height= temp;
                barOneStyle.backgroundColor=SECONDARY_COLOR
                barTwoStyle.backgroundColor=SECONDARY_COLOR
                console.log(console.log(animations[i].data));
                }
                else{
                  barOneStyle.backgroundColor=PRIMARY_COLOR;
                  barTwoStyle.backgroundColor=PRIMARY_COLOR;   
                }                
              },i*1);
        }
        
      }


      
      const mergeSort = ()=>{
      setdisabled(true);
       
        const animations = MergeSort(Array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
      }



    return (
      <div style={{marginTop:"10px"}}>
        <label style={{fontSize:"25px",fontStyle:"bold",marginRight:"80px",fontFamily:"Helvetica Neue"}} htmlFor="reset" disabled={disabled}>SortingAlgorithm</label>
        <Button name="reset" id="reset" style={{margin:"5px",backgroundColor:`${SECONDARY_COLOR}`,color:"white"}} onClick={()=>resetArray()} disabled={disabled}>Reset </Button>
            <Button style={{margin:"5px",backgroundColor:"#696969",color:"white"}} onClick={()=>bubbleSort()} disabled={disabled}>BubbleSort</Button>
            <Button style={{margin:"5px",backgroundColor:"#696969",color:"white"}} onClick={()=>insertionSort()} disabled={disabled}>InsertionSort</Button>
            <Button style={{margin:"5px",backgroundColor:"#696969",color:"white"}} onClick={()=>selectionSort()} disabled={disabled}>SelectionSort</Button>
            <Button style={{margin:"5px",backgroundColor:"#696969",color:"white"}} onClick={()=>mergeSort()} disabled={disabled}>MergeSort</Button>
        <div className="array-container">
            {Array.map((value,index)=>(
                <div className="array-bar" key={index} style={{backgroundColor: PRIMARY_COLOR,height:`${value}px`}}></div>       
            ))}
        </div>
        </div>
    )
}


export default SortingVisualizer
