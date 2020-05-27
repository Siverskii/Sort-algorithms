 export function Heap(){
    this.MaxHeapify = (arr,i)=>{
        const left = 2*i+1;
        const right = 2*i+2;
        let swap = i;
        if(left < arr.length && arr[i]<arr[left]){
            swap = left;  
        }
        if(right < arr.length && arr[swap]<arr[right]){
            swap = right;   
        }
        if(swap != i){
            [arr[i],arr[swap]] = [arr[swap],arr[i]];
            this.MaxHeapify(arr,swap);
        }
        return arr;   
    }
    this.BuildHeap = (arr) =>{
        for(let i = Math.floor(arr.length/2-1); i>=0; i--){
            this.MaxHeapify(arr,i);    
        }
       return arr;
    }

    this.HeapSort = (arr) =>{
       let heap = this.BuildHeap(arr);  
       let buf = [];
       for (let i = arr.length-1; i>= 0; i--){
        buf[i] = heap[0];
        heap[0] = heap.splice(heap.length-1,1)[0];
        heap = this.MaxHeapify(heap,0);
       }
       return buf;
    }
 }
 