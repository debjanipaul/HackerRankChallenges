/* 
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in 
this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' 
values. Calculate the hourglass sum for every hourglass in , then print the 
maximum hourglass sum.
*/



function hourglassSum(arr) {

    let newArr = [];

    for (var i = 0; i < arr.length - 2; i++) {

        for (var j = 0; j <= (arr[i].length) - 3; j++) {

            let a = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            newArr.push(a);
        }

    }
    newArr.sort(function(a, b) {
        return b - a;
    })
    console.log(newArr[0])
}
hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
])