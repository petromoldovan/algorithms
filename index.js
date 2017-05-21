//check if prime
function isPrime(n){
    var incrementer = 2;

    while(n > incrementer) {
        debugger
        console.log(n % incrementer)
        if(n % incrementer == 0){
            console.log("false")
            return false
        } else {
            incrementer++
        }
    }

    console.log("true")
    return true
}

isPrime(13)


//build fibonacci array
function fibonacci(n) {
    var fibbo = [0,1]

    for (var i =2; i<=n;i++) {
        fibbo[i] = fibbo[i-1] + fibbo[i-2]
    }

    console.log(fibbo)
    return fibbo[n]
}

fibonacci(8)



//find duplicate
var array = [1,2,3,1,5,6,7,8,3]

function removeDuplicate(arr) {
    console.log("comes here")
    console.log(arr.length)
    for (var i = 0; i<=arr.length; i++) {
        debugger
        for (var x= i+1; x<=arr.length;x++) {
            console.log(arr.indexOf(arr[i]))
            console.log(arr.indexOf(arr[x]))

            if (arr[i] === arr[x] ) {
                console.log("match", arr[i])
            }
        }
    }
}

removeDuplicate(array)


//remove duplicate
function removeDups(arr) {
    var exists = {}
    var res = []

    for (var i = 0;i<=arr.length;i++) {
        debugger
        if(!exists[arr[i]]) {
            res.push(arr[i])
            exists[arr[i]]=true
        }

    }

    console.log(res)
    return res
}

removeDups(array)


//find all prime factors of a number
function findPrime(n){
    let res = []
    let divisor = 2;

    debugger

    while(n>2) {
        if(n % divisor === 0) {
            res.push(divisor)
            n = n/divisor

        } else {
            divisor++
        }

    }

    console.log(res)
    return res;
}

findPrime(54)


//sort and merge two arrays
function mergeTwoArrays(a, b){
    //sort arrays
    a.sort(function(x,y){return x-y})
    b.sort(function(x,y){return x-y})

    console.log("sorted", a)

    let i = 0
    let j = 0
    let elemA = a[i]
    let elemB = b[j]
    let res = []



    if (a.length === 0) return b;
    if (b.length === 0) return a;

    while(elemA || elemB) {
        if(elemA && !elemB || elemA < elemB) {
            res.push(elemA)
            elemA = a[i++]
        } else {
            res.push(elemB)
            elemB = b[j++]
        }
    }

    console.log(res)
    return res

}
mergeTwoArrays([22,33,12,1,2,4,6,9,10], [1])



//swap two numbers
function swapTwoNumbers(a,b) {
    console.log("before swap: " +"a:" + a + " b:" + b)
    a = b - a
    b = b - a
    a = b + a
    console.log("after swap: " +"a:" + a + " b:" + b)
}

swapTwoNumbers(1,22)


//reverse a string
function reverseString(str) {
    let revStr = "";

    for (i = str.length-1; i>=0;i--) {
        revStr = revStr + str[i]
    }

    console.log(revStr)
    return revStr
}


reverseString("some awesome bro")


//find the max value in array
arr.reduce((a,b)=>Math.max(a,b))



//find non repeating char in string
function nonRepeatingCharInString(str){
    let counted = {}

    for (i=0; i<str.length;i++ ) {
        if(counted[str[i]]) {
            counted[str[i]]++
        } else {
            counted[str[i]]=1
        }
    }

    for(let n in counted) {
        if(counted[n]===1) {
            return n
        }
    }

    return "not found"
}


nonRepeatingCharInString("some randoem str")


//find missing number in arr
//Solution calculate expected and actual sum of the arr
function findMissingNum(arr) {
    //1. sort arr
    arr.sort(function(a,b){return a-b})

    //1.what is length of numbers, like from 1 to 10;
    let n=10
    let expectedSum = n * (n+1)/2

    let missingNum = expectedSum - arr.reduce((a,b)=>a+b)

    console.log(missingNum)
    return missingNum

}


findMissingNum([1,2,3,4,5,6,7,9,10])






//ASYNC calls
const url = "https://api.github.com/users/petromoldovan";

//normal function
function testFetch() {
    fetch(url)
        .then(res=>console.log("res1", res))
}

//awesome async func
async function testAsync() {
    const res = await fetch(url);

    //print user but not return
    console.log(res)

    //async functions return a promise
    return res;
}

//use async function
testAsync().then(res=>console.log("dosmth"))


//--------example with own promise
//simple promise
function simplePromise(urlToFetch){
    return new Promise((resolve, reject)=> {
        fetch(urlToFetch)
            .then((response) => {
                resolve("success")
            })
            .catch((e) => reject("this is error"))
    })
}

async function testAsync() {
    const res = await simplePromise(url);

    //print user but not return
    console.log(res)

    //async functions return a promise
    return res;
}
//----------------------------------