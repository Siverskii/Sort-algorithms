const Merge = (a,b) =>{
    let buf = [];
    const length = a.length > b.length ? a.length : b.length;
    for (let i = 0; i < length; i++){
        if (a.length == 0) break;
        if (b.length == 0) break;
        if (a[0] < b[0]) {
            buf.push(a[0]);
            a.splice(0,1);
        }else{
            buf.push(b[0]);
            b.splice(0,1); 
        }    
    }
    a.length != 0 ? buf.push(...a) : buf.push(...b);
    return buf;
}


export const MergeSort = (arr) =>{
    if (arr.length == 1 ) return arr;
    let middle = Math.floor(arr.length/2);
    let a = MergeSort(arr.splice(0,middle));
    let b = MergeSort(arr);  
    return Merge(a,b);
}