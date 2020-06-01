export default function InsertionSort(array){
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    console.log(auxiliaryArray);
    doInsertionSort(animations, auxiliaryArray);
    return animations;
}


function doInsertionSort(animations,auxiliaryArray){
    for(let i=1;i<auxiliaryArray.length;i++){
            let j =i;
            while(j>0&&auxiliaryArray[j]<auxiliaryArray[j-1]){
                let data = {
                    index:[j,j-1],
                    data:[auxiliaryArray[j],auxiliaryArray[j-1]]
                  }
                  animations.push(data);
                // console.log(auxiliaryArray[j],auxiliaryArray[j-1]);
                let temp = auxiliaryArray[j];
                auxiliaryArray[j]=auxiliaryArray[j-1];
                auxiliaryArray[j-1]=temp;
                j=j-1;
            }
            let data = {
                index:[i,i-1]
              }
              animations.push(data);
    }
}


