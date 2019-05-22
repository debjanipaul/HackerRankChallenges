/*
John works at a clothing store. He has a large pile of socks
that he must pair by color for sale. Given an array of integers representing the
color of each sock, determine how many pairs of socks with matching colors there are.
 */

 function sockMerchant(n, ar) {
    var sortedArr = ar.sort(function (a, b) {
        return a - b;
    })

    var pairs = 0;
    for (var i = 0; i < sortedArr.length - 1; i++) {

        if (sortedArr[i] === sortedArr[i + 1]) {
            pairs += 1;
            i += 1;
        }
    }
    return pairs;

}
