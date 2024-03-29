## Pedagogy (Round 1)
<p align="center">
<br>
<br>
<b> Experiment: Red Black Tree   <a name="top"></a> <br>
</p>

<b>Discipline | <b>Engineering
:--|:--|
<b> Lab | <b> DATA STRUCTURE
<b> Experiment|     <b> WAP to implement Red-Black trees with insertion and deletion operation for the given input data as Strings.


<h4> [1. Focus Area](#LO)
<h4> [2. Learning Objectives ](#LO)
<h4> [4. Task & Assessment Questions](#AQ)
<h4> [5. Simulator Interactions](#SI)
<hr>

<a name="LO"></a>
#### 1. Focus Area : Experimentation and Data Analysis
Basic Contant Of Red Black Tree
<p>A red–black tree is a kind of self-balancing binary search tree in computer science. Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or black) of the node. These color bits are used to ensure the tree remains approximately balanced during insertions and deletions</p>
<h3><b>A red-black tree is a binary search tree which has the following red-black properties:</b></h3>
1.Every node is either red or black.</br>
2 Root of tree is always black.</br>
3.Every leaf (NULL) is black.</br>
4.If a node is red, then both its children are black.
5.Every simple path from a node to a descendant leaf contains the same number of black nodes.</br>
<p>	Basic red-black tree with the sentinel nodes added. Implementations of the red-black tree algorithms will usually include the sentinel nodes as a convenient means of flagging that you have reached a leaf node.</br>
They are the NULL black nodes of property2.

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="LO"></a>
#### 2. Learning Objectives and Cognitive Level
The number of black nodes on any path from, but not including, a node x to a leaf is called the black-height of a node, denoted bh(x). We can prove the following lemma:<br>
<h4><b>Lemma:</b></h4>
A red-black tree with n internal nodes has height at most 2log(n+1).</br>
This demonstrates why the red-black tree is a good search tree: it can always be searched in O(log n) time.</br>
As with heaps, additions and deletions from red-black trees destroy the red-black property, so we need to restore it. To do this we need to look at some operations on red-black trees.
<h4><b>Rotations</b></h4>
A rotation is a local operation in a search tree that preserves in-order traversal key ordering.
Note that in both trees, an in-order traversal yields:

A x B y C
<h4><b>Algorithm</b></h4>
<h4><b>Left Rotation.</b></h4>

LEFT ROTATE (T, x)</br>
 1. y ← right [x]</br>
 1. y ← right [x]</br>
 2. right [x] ← left [y]</br>
 3. p [left[y]] ← x</br>
 4. p[y] ← p[x]</br>
 5. If p[x] = nil [T]</br>
   then root [T] ← y
    else if x = left [p[x]] </br>									
      then left [p[x]] ← y</br>
    else right [p[x]] ← y</br>
 6. left [y] ← x.</br>
 7. p [x] ← y.</br></br>
 <h4><b> RB-Insert </b></h4>
 RB-INSERT (T, z)</br>
 1. y ← nil [T]</br>
 2. x ← root [T]</br>
 3. while x ≠ NIL [T]</br>
 4. do y ← x</br>
 5. if key [z] < key [x]</br>
 6. then x  ← left [x]</br>
 7. else x ←  right [x]</br>
 8. p [z] ← y</br>
 9. if y = nil [T]</br>
 10. then root [T] ← z</br>
 11. else if key [z] < key [y]</br>
 12. then left [y] ← z</br>
 13. else right [y] ← z</br>
 14. left [z] ← nil [T]</br>
 15. right [z] ← nil [T]</br>
 16. color [z] ← RED</br>
 17. RB-INSERT-FIXUP (T, z)</br></br>
  <h4><b> RB-INSERT-FIXUP (T, z) </b></h4>
  1. while color [p[z]] = RED</br>
 2. do if p [z] = left [p[p[z]]]</br>
 3. then y ← right [p[p[z]]]</br>
 4. If color [y] = RED</br>
 5. then color [p[z]] ← BLACK    //Case 1</br> 
 6. color [y] ← BLACK           //Case 1</br> 
 7. color [p[z]] ← RED           //Case 1</br> 
 8. z  ← p[p[z]]                 //Case 1</br> 
 9. else if z= right [p[z]]</br>
 10. then z ← p [z]              //Case 2</br> 
 11. LEFT-ROTATE (T, z)         //Case 2</br> 
 12. color [p[z]] ← BLACK       //Case 3</br> 
 13. color [p [p[z]]] ← RED      //Case 3
 14. RIGHT-ROTATE  (T,p [p[z]]) //Case 3</br>
 15. else (same as then clause)</br>
      With "right" and "left" exchanged</br>
 16. color [root[T]] ← BLACK</br></br>
 <h4><b>RB-DELETE (T, z) </b></h4>
 1. if left [z] = nil [T] or right [z] = nil [T]</br>
 2. then y ← z</br>
 3. else y ← TREE-SUCCESSOR (z)</br>
 4. if left [y] ≠ nil [T]</br>
 5. then x ← left [y]</br>
 6. else x ← right [y]</br>
 7. p [x] ←  p [y]</br>
 8. if p[y] = nil [T]</br></br>
 9. then root [T]  ← x</br>
 10. else if y = left [p[y]]</br>
 11. then left [p[y]] ← x</br>
 12. else right [p[y]] ← x</br>
 13. if y≠ z</br>
 14. then key [z] ← key [y]</br>
 15. copy y's satellite data into z</br>
 16. if color [y] = BLACK</br>
 17. then RB-delete-FIXUP (T, x)</br>
 18. return y</br></br>
  <h4><b>RB-DELETE-FIXUP (T, x) </b></h4>
  1. while x ≠ root [T] and color [x] = BLACK</br>
 2. do if x = left [p[x]]</br>
 3. then w ← right [p[x]]</br>
 4. if color [w] = RED</br>
 5. then color [w] ← BLACK       //Case 1</br>
 6. color [p[x]] ← RED            //Case 1</br>
 7. LEFT-ROTATE (T, p [x])      //Case 1</br>
 8. w ← right [p[x]]             //Case 1</br>
 9. If color [left [w]] = BLACK and color [right[w]] = BLACK</br>
 10. then color [w] ← RED  </br>       //Case 2</br>
 11. x ← p[x]                     //Case 2</br>
 12. else if color [right [w]] = BLACK</br>
 13. then color [left[w]] ← BLACK //Case 3</br>
 14. color [w] ← RED              //Case 3</br>
 15. RIGHT-ROTATE (T, w)          //Case 3</br>
 16. w ← right [p[x]]             //Case 3</br>
 17. color [w] ← color [p[x]]     //Case 4</br>
 18. color p[x] ← BLACK           //Case 4</br>
 19. color [right [w]] ← BLACK    //Case 4</br>
 20. LEFT-ROTATE (T, p [x])       //Case 4</br>
 21. x ← root [T]                 //Case 4</br>
 22. else (same as then clause with "right" and "left" exchanged)</br>
 23. color [x] ← BLACK</br>
</p>


<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="IS"></a>


<br>

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="SI"></a>

#### 4. Simulator Interactions:

<br>1. First we Enter any number than it becomes root node.
<br>2. Again we enter any number if it is less than root node than it comes on left side of root node other wise if it is greater than root node than it comes to right side of root node and these values known as child node.
<br>3. All the values which we Enter except of root node are in red color
<br>4. Root node and Null node always Black.
<br>5. Every simple path from the root node to the (downward) leaf node contains the same number of black nodes.
<br>6. Find an any node in the red black tree by use find operation.
<br>7. And than print the Solverd array in this simulater.
