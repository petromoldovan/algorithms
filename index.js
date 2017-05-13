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