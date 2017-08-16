  var questions = [ 'I love children and animals','I am competitive', 'I will manipulate others for my gain', 'Creativity drives me', 'I constantly have hairbrained schemes', 'I am empathetic', 'I love to party','I am athletic', 'I value intelligence first', 'I like to read','I am someone of few words', 'I will resort to violence', "I am hardworking", "I am vain" ];

var friends= [
{
"name":"Dennis",
"photo":"/public/images/Dennis.jpg",
"scores":[ 1, 5, 5, 1, 4, 1, 3, 3, 2, 4, 3, 5, 2, 5]
},
{
"name":"Charlie",
"photo":"/public/images/Charlie.jpg",
"scores":[ 5, 3, 3, 5, 4, 3, 3, 2, 2, 1, 2, 4, 5, 1]
},
{
"name":"Mac",
"photo":"/public/images/Mac.jpg",
"scores":[ 2, 5, 4, 2, 4, 2, 5, 4, 1, 1, 2, 5, 1, 5]
},
{
"name":"Sweet Dee",
"photo":"/public/images/Dee.jpg",
"scores":[ 2, 5, 5, 2, 5, 2, 5, 2, 2, 4, 2, 5, 2, 4]
},
{
"name":"Frank",
"photo":"/public/images/Frank.jpg",
"scores":[ 1, 4, 5, 3, 5, 1, 4, 1, 3, 4, 2, 5, 4, 1]
},
{
"name":"Fluttershy",
"photo":"/public/images/Fluttershy.jpg",
"scores":[ 5, 1, 1, 4, 1, 5, 2, 1, 2, 4, 5, 1, 5, 2]
},
{
"name":"Pinkie Pie",
"photo":"/public/images/Pinkie.png",
"scores":[ 5, 4, 2, 4, 4, 4, 5, 3, 2, 2, 1, 3, 5, 1]
},
{
"name":"Twighlight Sparkle",
"photo":"/public/images/Twighlight.jpg",
"scores":[ 3, 5, 4, 2, 2, 3, 1, 2, 5, 5, 2, 3, 5, 3]
},
{
"name":"Rainbow Dash",
"photo":"/public/images/Rainbow.png",
"scores":[ 4, 5, 4, 2, 4, 4, 4, 5, 2, 1, 1, 5, 3, 3]
},
{
"name":"Rarity",
"photo":"/public/images/Rarity.png",
"scores":[ 5, 4, 2, 5, 2, 5, 2, 2, 3, 4, 3, 2, 5, 5]
},
{
"name":"Big Mac",
"photo":"/public/images/Bigmac.png",
"scores":[ 5, 2, 1, 1, 1, 5, 2, 5, 2, 1, 5, 2, 5, 3]
},
{
"name":"Applejack",
"photo":"/public/images/Apple.png",
"scores":[ 5, 5, 2, 1, 4, 5, 2, 5, 3, 4, 2, 2, 5, 2]
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
