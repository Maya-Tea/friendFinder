// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends= [
  {
  "name":"Abed Nadir",
  "photo":"https://vignette2.wikia.nocookie.net/community-sitcom/images/7/78/5X5_Sad_Abed.jpg/revision/latest?cb=20140126165948",
  "scores":[ 5, 2, 2, 2, 2, 2, 2, 2, 3, 4]
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
