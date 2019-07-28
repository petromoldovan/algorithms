/*
              6
       B-------------E                      A 0
     /  |            | \                    B infinity
    /   |8          3|   \11                C infinity
 10/    |            |     \                D infinity
  /  3  |     9      |   8  \               E infinity
A ------C -----------F-------H              F infinity
  \     |            |      /               G infinity
 8 \    |4          1|     /5               H infinity
     \  |     7      |   /
        D-------------G

Step 1. Visit A
A 0
B 10          AB
C 3           AC
D 8           AD
E infinity
F infinity
G infinity
H infinity

Step 2. Visit smallest cost next item. It is C.
If you can reach some node cheaper, then overwrite them.
A 0
B 10          AB
C 3           AC
D 7           ACD   <-overwrite
E infinity
F 12          ACF
G infinity
H infinity

Step 3. Visit next smallest. It is D.
A 0
B 10          AB
C 3           AC
D 7           ACD
E infinity
F 12          ACF
G 14          ACDG <-best path to D(ACD:7) + new path cost(7).
H infinity

Step 4. Visit next smallest. It is B.
A 0
B 10          AB
C 3           AC
D 7           ACD
E 16          ABE   <--got first solution
F 12          ACF
G 14          ACDG
H infinity

Step 5. Visit next smallest. It is F.
A 0
B 10          AB
C 3           AC
D 7           ACD
E 15          ACFE   <--overwrite. New best solution
F 12          ACF
G 13          ACFG   <-overwrite
H 20          ACFH

Step 6. Visit next smallest. It is G.
A 0
B 10          AB
C 3           AC
D 7           ACD
E 15          ACFE
F 12          ACF
G 13          ACFG
H 18          ACFGH  <-overwrite

Step 7. Visit next smallest. It is our searched node E. At this point execution might be stopped. The shortest path to E is found.
 */


const graph = {
  A: {B: 10, C: 3, D: 8},
  B: {C: 8, E: 6},
  C: {B: 8, F: 9, D: 4},
  E: {F: 3, H: 11},
  F: {E: 3, H: 8, G: 1},
  G: {F: 1, H: 5},
  H: {E: 11, G: 5, F: 8}
}

const findMinUnvisitedNode = (visitedNodes = [], baseNodeDestinations = {}) => {
  let nodesToCheck = []
  Object.keys(baseNodeDestinations).map(dest => {
    nodesToCheck.push(`${dest}:${baseNodeDestinations[dest]}`)
  })

  nodesToCheck.sort((a, b) => {
    let aVal = a.split(":")
    let bVal = b.split(":")
    return aVal[1] - bVal[1]
  })

  return nodesToCheck.map(item => {
    let itemVal = item.split(":")
    return itemVal[0]
  })
}

const dijkastra = (graph = {}, searchedNode = '') => {
  let optimalPath = {}
  if (Object.keys(graph).length === 0) {
    return optimalPath
  }
  if (searchedNode === '') {
    return optimalPath
  }

  Object.keys(graph).map((baseNode, idx) => {
    console.log("================")
    console.log("baseNode", baseNode)

    // init the first node
    if (idx === 0) {
      optimalPath[baseNode] = {
        cost: 0,
        path: [baseNode]
      }
    }

    // all target nodes must be searched in the lowest cost order.
    const nodesToCheck = findMinUnvisitedNode(graph[baseNode])

    // visit each node
    nodesToCheck.map(destNode => {
      let totalCostToDest = optimalPath[baseNode].cost + graph[baseNode][destNode]

      // update opimal path object only if the given key is not there OR
      // if the current path provides lower cost.
      // The new optimal path is combination of path for the baseNode and the tartgetNode.
      if (!optimalPath[destNode] || totalCostToDest < optimalPath[destNode].cost) {
        let newPath = [...optimalPath[baseNode].path]
        newPath.push(destNode)
        optimalPath[destNode] = {
          cost: totalCostToDest,
          path: newPath
        }
      }
    })
  })

  console.log("optimalPath", optimalPath)
  return optimalPath[searchedNode]
}

dijkastra(graph, 'E')


// Complexity O(n^2). Looping through nested array