/*
Program: dataParser.js
Author: Collins Metto
Description: Formats data from the attribute form to a workable from with the knn algorithm. 
 */
// ------------------------------------------------------------------------------------
var knnAlg = require('./knnAlg')
 function tabulate(userDetails)
 {
    console.log('in dataParser');
    //console.log(userDetails);
    var user = userDetails[0];
    // for (user of userDetails)
    // {
    //     console.log(user);
    // }
    console.log(user.attribute.language);



 }

 var list1 = {language:5, background: 100, confidence: 5}
 var list2 = {language:5, background: 5, confidence: 5}
var distance = knnAlg.euclideanDistance(list1, list2)
//console.log(distance);


var distances = []

distances.push(['user1', 55])
distances.push(['user2', 10])
distances.push(['user2', 100])
distances.push(['user2', 569456])


var distancesSorted = distances.sort(function (a, b)
{
    return a[1] - b[1];
});
console.log(distancesSorted[3][0]);
// var sortable = [];
// for (var vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }

// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// });

//  var p = {
//     "p1": "value1",
//     "p2": "value2",
//     "p3": "value3"
// };



//  console.log(list1)

// console.log(Object.keys(list1))

 module.exports.tabulate = tabulate