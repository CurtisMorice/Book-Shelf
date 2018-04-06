
var book = [
    {
    title: "The Wind Up Bird Chronicle",
    author: "by Haruki Murakam",
    stars: 5,
    colour: color(255, 0, 0),
    goodBook:true
    },



{
    title: "Metamorphosis",
    author: "by Franz Kafka",
    stars: 5,
    colour: color(35, 103, 105),
    goodBook: true

},
    {
    title: "The Day After Tomorrow",
    author: "by Allan Follsom",
    stars: 5,
    colour: color(117, 111, 54),
    goodBook: true
},

   {
    title: "Jaws",
    author: "Peter Benchley",
    stars: 5,
    colour: color(255, 0, 0),
    goodBook: true
    },



{
    title: "Twilight",
    author: "by Stephanie Meyer",
    stars: 3,
    colour: color(218, 255, 10),
    goodBook:false

},
    {
    title: "Ethan Frome",
    author: "by Edith Wharton",
    stars: 5,
    colour: color(180, 151, 196),
    goodBook: true
},


{
    title: "The Khan Academy Wars",
    author: "by Pamela Fox ",
    stars: 5,
    colour: color(126, 207, 214),
    goodBook: true

},
    {
    title: "Porkys the Book!!",
    author: "by Bob Clark",
    stars: 5,
    colour: color(237, 223, 213),
    goodBook: true
},

   {
    title: "Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    stars: 5,
    colour: color(130, 237, 150),
    goodBook: true
    },



{
    title: "Frankenstein",
    author: "by Mary Shelly",
    stars: 5,
    colour: color(100, 215, 217),
    goodBook:true

},
    {
    title: "Barn Yard Rectangles",
    author: "by Curly Chaser",
    stars: 1,
    colour: color(237, 219, 55),
    goodBook: false
},

];
// draw shelf
var shelfY = 120;
while(shelfY < 400){
        fill(69, 58, 42);
        rect(0, shelfY, width, 20);
        shelfY+= 130;

}
var bps = 4;

// draw New books
for(var newBook = 0; newBook < book.length; newBook++){

    fill(book[newBook].colour);
    rect( newBook %  bps * 100,floor(newBook/bps) * 135, 90,125);



fill(0, 0, 0);
text(book[newBook].title ,newBook % bps  * 100, floor(newBook/bps) * 135 + 5 , 90, 130);
text(book[newBook].author, newBook % bps * 100 , 40 + floor(newBook/bps)*135 , 90, 130);
    for (var i = 0; i < book[newBook].stars; i++) {
        image(getImage("cute/Star"),  i * 12 + newBook % bps * 100, 50+floor(newBook/bps ) *135 + 50, 15, 25);

        if(book[newBook].goodBook === true) {
        image(getImage("creatures/Winston"), 10+ newBook % bps * 100, 10 +floor(newBook/bps ) *140 + 65, 17, 20);
        }

        else{

            image(getImage("avatars/old-spice-man"), 10+ newBook % bps * 100, 10 +floor(newBook/bps ) *140 + 65, 15, 25);

        }

}

}
