export default function SelectionSort(array){
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    console.log(auxiliaryArray);
    doSelectionSort(animations, auxiliaryArray);
    return animations;
}


function doSelectionSort(animations,auxiliaryArray){
    var index=0;
    for(let i=0;i<auxiliaryArray.length-1;i++){
        var smallestno=auxiliaryArray[i];
    for(let j=i+1;j<auxiliaryArray.length;j++){
        if(auxiliaryArray[j]<smallestno){
            let data = {
                index:[i,j],
                data:[auxiliaryArray[i],auxiliaryArray[j]]
              }
              animations.push(data);
            smallestno=auxiliaryArray[j];
            index=j;
            let temp=auxiliaryArray[i];
            auxiliaryArray[i]=smallestno;
            auxiliaryArray[index]=temp;
        }
        let data = {
            index:[i,j]
          }
          animations.push(data)
        }
    }
            
    }



