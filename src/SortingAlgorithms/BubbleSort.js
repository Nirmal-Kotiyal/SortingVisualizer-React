export default function BubbleSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    // console.log(auxiliaryArray);
    doBubbleSort(animations, auxiliaryArray);
    return animations;
  }
  
  function doBubbleSort(animations, auxiliaryArray) {
    var swapped=true;
    while(swapped){
      swapped=false;
      for(let i =0;i<auxiliaryArray.length-1;i++){
        if(auxiliaryArray[i]>auxiliaryArray[i+1]){
          let data = {
            index:[i,i+1],
            data:[auxiliaryArray[i],auxiliaryArray[i+1]]
          }
          animations.push(data);
          let temp = auxiliaryArray[i];
          auxiliaryArray[i]=auxiliaryArray[i+1];
          auxiliaryArray[i+1]=temp;
          swapped=true;
        }
        let data = {
          index:[i,i+1]
        }
        animations.push(data)
        // console.log(animations,'animations')
        // console.log(auxiliaryArray,'auxillary array');
      }
    }
    return auxiliaryArray;
  }