import React,{useState,useEffect} from 'react'
import './SortingVisualizer.css'
import BubbleSort from '../../SortingAlgorithms/BubbleSort';
import InsertionSort from '../../SortingAlgorithms/InsertionSort';
import SelectionSort from '../../SortingAlgorithms/SelectionSort';
import MergeSort from '../../SortingAlgorithms/MergeSort'
import QuickSort,{quickSortPartition,doQuickSort} from '../../SortingAlgorithms/QuickSort'
import {Button} from 'antd'; 

const ANIMATION_SPEED_MS = 1;

const PRIMARY_COLOR = '#15f4ee';

const SECONDARY_COLOR = '#FD1C03';


function SortingVisualizer() {
    
  
 
    const [Array, setArray] = useState([]);
    const [disabled ,setdisabled] = useState(false);    
    
    useEffect(() => {
      
     
      resetArray();
    },[]);
    

    const makeAllBarsGreen=()=> {
      console.log("Sorted");
      const arrayBars = document.getElementsByClassName("array-bar");
      var arrayLength = arrayBars.length;
      for (let j = 0; j < arrayLength; j++) {
        var jBarStyle = arrayBars[j].style;
        jBarStyle.backgroundColor = "green";
      }
      setdisabled(false);
    }



    const resetArray = ()=>{
      console.log(window.innerWidth,window.innerHeight);
      let array = [];
        for(let i=0;i<(window.innerWidth/100)*17;i++){
            array.push(randomIntFromInterval(5,(window.innerHeight/100)*78));
        }
        setArray(array);
        function makeAllBarsGreen() {
          console.log("Sorted");
          const arrayBars = document.getElementsByClassName("array-bar");
          var arrayLength = arrayBars.length;
          for (let j = 0; j < arrayLength; j++) {
            var jBarStyle = arrayBars[j].style;
            jBarStyle.backgroundColor = PRIMARY_COLOR;
          }
      setdisabled(false);
        }
        makeAllBarsGreen();
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
              if(i===animations.length-1){
                makeAllBarsGreen();
              }                 
            },i*ANIMATION_SPEED_MS);
      }
        }


    


    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      const insertionSort =()=>{
       
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
                if(i===animations.length-1){
                  makeAllBarsGreen();
                }                
              },i*1);
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
                if(i===animations.length-1){
                  makeAllBarsGreen();
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
      if(i===animations.length-1){
        makeAllBarsGreen();
      } 
    }

    


      }


const quickSort=()=>{

  const array = Array;
  const animations = QuickSort(Array);
  console.log(animations);
  const arrayBars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      var [oldPosition, newPosition] = animations[i];

      var oldBarStyle = arrayBars[oldPosition].style;
      var newBarStyle = arrayBars[newPosition].style;
      var index;
      const dummyAnimations = [];
      if (array.length > 1) {
        index = quickSortPartition(
          array,
          0,
          array.length - 1,
          dummyAnimations
        ); //index returned from partition
        if (0 < index - 1) {
          //more elements on the left side of the pivot
          doQuickSort(dummyAnimations, array, 0, index - 1);
        }
        if (index < array.length) {
          //more elements on the right side of the pivot
          doQuickSort(dummyAnimations, array, 0, array.length - 1);
        }
      }

      oldBarStyle.height = `${array[oldPosition]}px`;
      newBarStyle.height = `${array[newPosition]}px`;

      oldBarStyle.backgroundColor = "green";
      newBarStyle.backgroundColor = "red";

      var currentPosition = oldPosition;
      for (let j = 0; j < currentPosition; j++) {
        var jBarStyle = arrayBars[j].style;
        jBarStyle.backgroundColor = "green";
      }
      if (i === animations.length - 1) {
        makeAllBarsGreen();
      }
    }, 0.0001);
  }



}




    return (
      <div style={{marginTop:"23px"}}>
        <label style={{fontSize:"25px",fontStyle:"bold",marginRight:"100px",fontFamily:"Helvetica Neue"}} htmlFor="reset" disabled={disabled}>SortingAlgorithm's</label>
        <Button name="reset" id="reset" style={{margin:"5px",backgroundColor:`${SECONDARY_COLOR}`,color:"white"}} onClick={()=>resetArray()} disabled={disabled}>Reset </Button>
            <Button style={{margin:"5px",backgroundColor:"#696969",color:"white"}} onClick={()=>bubbleSort()} disabled={disabled}>BubbleSort</Button>
            <Button style={{margin:"5px",backgroundColor:"#696969",color:"white"}} onClick={()=>insertionSort()} disabled={disabled}>InsertionSort</Button>
            <Button style={{margin:"5px",backgroundColor:"#696969",color:"white"}} onClick={()=>selectionSort()} disabled={disabled}>SelectionSort</Button>
            <Button style={{margin:"5px",backgroundColor:"#696969",color:"white"}} onClick={()=>mergeSort()} disabled={disabled}>MergeSort</Button>
            <Button style={{margin:"5px",backgroundColor:"#696969",color:"white"}} onClick={()=>quickSort()} disabled={disabled}>QuickSort</Button>
        <div className="array-container">
            {Array.map((value,index)=>(
                <div className="array-bar" key={index} style={{backgroundColor: PRIMARY_COLOR,height:`${value}px`}}></div>       
            ))}
        </div>
        </div>
    )
}


export default SortingVisualizer
