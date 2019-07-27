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

Step 7. Visit next smallest. It is our searched node E. At this point exucution might be stopped. The shortest path to E is found.
 */

const dijkastra = () => {
  let pathesCheck = [
    [0, ], // A
  ]
}

