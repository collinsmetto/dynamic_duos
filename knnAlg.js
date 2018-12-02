/*
Program: knnAlg.js
Author: Collins Metto
Description: Program runs the knnAlgorithm
*/

// ------------------------------------------------------------------------------------
// synthesize data 
var allUsers =
[ { 
    firstName: 'Collins',
    attribute:
     { 
       language: 1,
       background: 2,
       confidence: 3 },
    __v: 0 },
  { 
    firstName: 'Metto',
    attribute:
     { 
       language: 5,
       background: 4,
       confidence: 1 },
    __v: 0 },
  {
    firstName: 'Kiprop',
    attribute:
     { 
       language: 1,
       background: 2,
       confidence: 3 },
    __v: 0 },
  { 
    firstName: 'Robert',
    attribute:
     { 
       language: 5,
       background: 4,
       confidence: 1 },
    __v: 0 }]

// create list of attributes per user 
function listify(user)
{
    console.log(user);
    var list = {language:Number, background: Number, confidence: Number}
    list.language = user.attribute.language;
    list.background = user.attribute.background;
    list.confidence = user.attribute.confidence;
    return list;
}
// ------------------------------------------------------------------------------------
// compute the euclidean distance between two lists 
function euclideanDistance (list1, list2)
{
   var distance = 0;
   for (var key in list1) {
    if (list1.hasOwnProperty(key) && list2.hasOwnProperty(key)) {
        distance += Math.pow((list1[key] - list2[key]), 2)
    }
}
    return Math.sqrt(distance);
}

// ------------------------------------------------------------------------------------
// compute the k nearest neighbours 
function getNeighbours(trainingSet, testInstance, k)
{
    var distances = []
    var list_testInstance = listify(testInstance);
    // console.log(list_testInstance);
    // console.log("here")

    for (partner of trainingSet)
    {
     var name = partner.firstName
     list_trainingSet = listify(partner);
    // console.log(list_trainingSet);
     dist = euclideanDistance(list_testInstance, list_trainingSet);
     distances.push([name, dist])
    }
   // console.log('// ----------------------------------------------------')
    
// sort distances by order of magnitude
var distancesSorted = distances.sort(function (a, b)
{
    return a[1] - b[1];
});
// console.log(distancesSorted)
//console.log('// ----------------------------------------------------')
var neighbours = []
var counter = 0
// return top k neighbours
while (counter < k)
{
    if (counter >= distancesSorted.length) break
    if (!Object.is(distancesSorted[counter], undefined)) 
    {       
        var element = distancesSorted[counter];
        var obj = {id: String, match: Number, rank: Number}
        obj = {id:element[0],match: element[1], rank: counter + 1};
        neighbours.push(obj);
      
    }
    counter++;
}
return neighbours;
}


function populateNeighbours(allUsers, neighbours)
{
    var populateNeighbours = [];
    for (neighbour of neighbours){
        
        var neighbourDetails = allUsers.find(function(element){ 
            return element.firstName == neighbour.id;
        });
        if (neighbourDetails === undefined) continue; // local test for non-existent partner
        // extract pertinent information
        else  
        {

            var det = {name: String, match: Number, rank: Number}
            det = {name:neighbourDetails.firstName, match: neighbour.match, rank: neighbour.rank}
            populateNeighbours.push(det);
        }     
    }
    return populateNeighbours;
}

// ------------------------------------------------------------------------------------
// Tests 
/*
var user = { firstName: 'Ropi',
            attribute: { language: 5, background: 2, confidence: 3 }}

// get names of k- nearest neighbours 
k = 10;
var neighbours = getNeighbours(allUsers, user, k);
//neighbours.push('NaN');
// console.log(neighbours);

 // get additional details of neighbours
 var allNeighbourDetails = populateNeighbours(allUsers, neighbours);
 console.log(allNeighbourDetails);
*/



// ------------------------------------------------------------------------------------
module.exports.euclideanDistance = euclideanDistance;
module.exports.getNeighbours = getNeighbours;
module.exports.populateNeighbours = populateNeighbours;







// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------