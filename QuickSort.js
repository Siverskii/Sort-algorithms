const Partition = (arr,left,right) =>{
    let i = left-1;
    let pivot = arr[right];
    for(let j = left; j < right; j++){
        if (arr[j] < pivot){
            i++;
            [arr[j],arr[i]] = [arr[i],arr[j]];  
           
        }
    }
    i++;
    [arr[right],arr[i]] = [arr[i],arr[right]];  
    return i;
}


export const QuickSort = (arr,left,right) =>{
    if (left >= right) return;
    let q = Partition(arr,left,right);
    QuickSort(arr,left, q-1);
    QuickSort(arr,q+1, right);
}