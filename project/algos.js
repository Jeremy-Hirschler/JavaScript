function concat(a,b){
    for (let i=0; i<b.length;i++){
        a.push(b[i])
    }
    return a
}

// console.log(concat([2,2,1], [10,11]))

function remo(arr,l,r){

    let result = []
    for (let i=0; i<arr.length;i++){
        if (i < l || i > r){
            result.push(arr[i])
        }
    }

    return result//[2,3,5]
}

// console.log(remo([2,3,2,3,4,5],2,4))

function mid(arr){
    let middle;
    if (arr.length % 2 == 0){
        middle = arr[(arr.length/2)] + arr[(arr.length/2)-1]
    }else{
        middle = (arr[Math.floor(arr.length/2)])
    }
    console.log(middle)
    if (arr[0] == arr[arr.length-1] && arr[0] == middle){
        return true
    }else{
        return false
    }
    
}

// console.log(mid([-12,34,40,-5,-12,4,0,0,-12]))

function midds(arr){
    if (arr.length %2==0){
        middle = arr[(arr.length/2)] + arr[(arr.length/2)-1]
    }
    let result = []
    for (let i=0; i<arr.length; i++){
        if (i == arr.length/2){
            result.push(middle)
        }else if (i == (arr.length/2)-1){
            continue
        }else{
            result.push(arr[i])
        }
    }
    return result
}

// console.log(midds([7,2,2,5,10,7]))
// console.log(midds([-5,-5,10]))

function cons(arr){
    let count = 0
    // for (let i=0; i<arr.length-1;i++){
    //     if (arr[i] > arr[i+1]){//[8,1,0,4,7]
    //         temp = arr[i]
    //         arr[i] = arr[i+1]
    //         arr[i+1] = temp
    //     }
    // }
    arr = arr.sort(function(a,b){return a-b})
    //have sorted array
    for (let i=0; i<arr.length-1;i++){
        let counter = arr[i]+1
        if (arr[i+1] !== arr[i] +1){
            while (counter < arr[i+1]){
                count++
                counter++
            }
        }
    }
    console.log(arr)
    return count
}

// console.log(cons([1,2,3,4,5,6,7,8,9,10]))

function pow(n){
    for (let i=0; i<n; i++){
        for (let j=0;j<n;j++){
            if (i**j == n){
                return true
            }
        }
    }

    return false
}

// console.log(pow(125))
// console.log(pow(72))

let arr = ['a','d','c','b']
// console.log(arr.sort((a,b)=> {
//     return b > a
// }))
console.log(arr.sort())
