const events =require("events");
const event = new events.EventEmitter();

const first_event =function(n1,n2){
    console.log(n1*n2);
};

const second_event =function(n1,n2){
    console.log(n1*n2);
};

const third_event =function(n1,n2){
    console.log(n1*n2);
};

event.on('click',first_event);
event.on('click',second_event);
event.on('click',third_event);
event.emit('click',4,5);