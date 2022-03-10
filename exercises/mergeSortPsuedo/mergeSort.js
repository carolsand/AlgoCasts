/* Pseudo code for Mege Sort 

c = output [length = n]
a = 1st sorted array [n/2]
b = 2nd sorted array [n/2]
i = 1
j = 1

for k = 1 to n
   if a(i) > b(j)
     c(k) = a(i)
     i++
   else
    b(j) < a(i)
    c(k) = b(j)
    J++
return

Merge Sort Running Time?
for every input array of n numbers, Merge Sort produces a sorted output array 
and uses at most 6n log(n) + 6n operations
runtime how many operations are exceuted
initialization steps: i =1, j-1
for-loop: four operations per iteration
<= 4m +2 operations
<= 6m since m >= 1
Recursion

<=6n log n+6n operations
Merge Short never needs than more than six times N.
Times the logarithm of N log base two if you're keeping 
track plus an extra six N operations to correctly sort 
an input array of N numbers, okay so lets discuss for a 
second is this good is this a win, knowing that this is 
an upper bound of the number of lines of code the merger
takes well yes it is and it shows the benefits of the 
divide and conquer paradigm. Recall. In the simpler sorting
methods that we briefly discussed like insertion sort, 
selection sort, and bubble so
*/
