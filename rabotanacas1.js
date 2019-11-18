const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dev:DEV123!@cluster0-hldqz.mongodb.net/school?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=> {
    console.log(res);
    
})
.catch(err => {
    console.log(err);
});

const Student = mongoose.model(
    'student', new mongoose.Schema(
        {
            first_name : String,
            last_name : String, 
            average_grade : Number,
            courses : [String],
            email : String,
            birthday : Date
        }
    )
)

var s = new Student({
            first_name : "Janko",
            last_name : "Jankovski", 
            average_grade : 5,
            courses : ["math", "science", "economy"],
            email : "janko@gmail.com",
            birthday : new Date ('1994-11-11T19:30:00Z')
})

var a = new Student({
    first_name : "Stanko",
    last_name : "Stankovski", 
    average_grade : 4.5,
    courses : ["geography", "science", "sports"],
    email : "stanko@gmail.com",
    birthday : new Date ('1992-09-08T19:30:00Z')
})
var b = new Student({
    first_name : "Dime",
    last_name : "Pavlov", 
    average_grade : 5,
    courses : ["math", "science", "architecture"],
    email : "stanko@gmail.com",
    birthday : new Date ('1994-10-10T19:30:00Z')
})


var k = [a,s,b]


k.forEach((g, i) => {
    g.save(err => {
        if(err){
            console.log(err);
        }
        console.log('save successfully');
    });
});

