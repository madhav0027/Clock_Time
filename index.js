const clock = document.getElementById("clock");
const image = document.getElementById("image");
const mealtime = document.getElementById("meals");
const list = document.getElementById("list");
const form = document.querySelector("form");
const img = document.getElementById("image");

function currenttime()
{
    const time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var merdian = "";
    var noon = 12;

    if(hours >= noon)
    {
        merdian = "PM";
        hours = hours -= 12;
    }else{
        merdian = "AM";
    }

    const clocktime = hours + ":"+ minutes + ":" + seconds +" "+ merdian;

    clock.innerHTML = clocktime;

}

function updateclock()
{
    var time = new Date().getHours();
    var meals = "";

    if(time === 18)
    {
        meals = "Snack Time !";
    }
    else if(time === 9)
    {
        meals = "Breakfast 🥞🥓🍳";
    }
    else if(time ===  21)
    {
        meals = "Dinner Time 🍝🍕🍗";
        img.src = "https://www.shemazing.net/wp-content/uploads/2015/11/ca8b25bbf56e2bd668429c70a0e22d30_2.jpg";
    }
    else if(time === 14)
    {
        meals = "Lunch 🍚";
    }else{
        meals = "";
        img.src = "https://plepo.com/wp-content/uploads/2020/10/S20380-867x867.jpg";
    }

    mealtime.innerHTML = meals;

    console.log(time);
    
    currenttime();
}
updateclock();

setInterval(updateclock,1000);

function remainder()
{    

    var todolist = [];
    var time = new Date;
    var hours = time.getHours();
    var minute = time.getMinutes();
    var currenttime = hours + ":" + minute;
    form.addEventListener('submit',(e) =>
    {
        e.preventDefault();
        const formdata = new FormData(form);
        const text = formdata.get("text");
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(text +" "+ currenttime));
        list.appendChild(li);
        todolist.push(text);
    });

}
setInterval(remainder,1000);

remainder();