
var a = document.querySelectorAll('.place');
const c = document.querySelectorAll('.crow');
const eg = document.querySelectorAll('.egle');

let index = 0;
let turn = [0, 1];
let t = 0;
let kaocount = 0;
let killkaao=0;
let locationof = new Map();


locationof.set('0', 15);
locationof.set('div1', 0);
locationof.set('div2', 0);
locationof.set('div3', 0);
locationof.set('div4', 0);
locationof.set('div5', 0);
locationof.set('div6', 0);
locationof.set('div7', 0);
locationof.set('div8', 0);
locationof.set('div9', 0);
locationof.set('div10', 0);
console.log(locationof.get(div10));

let kaaoegle = new Map();
kaaoegle.set('1', 0);
kaaoegle.set('2', 0);
kaaoegle.set('3', 0);
kaaoegle.set('4', 0);
kaaoegle.set('5', 0);
kaaoegle.set('6', 0);
kaaoegle.set('7', 0);
kaaoegle.set('8', 0);


let movements = new Map();
movements.set('div1', ['div3', 'div9']);
movements.set('div2', ['div4', 'div10']);
movements.set('div3', ['div1', 'div4', 'div5', 'div9']);
movements.set('div4', ['div2', 'div3', 'div5', 'div10']);
movements.set('div5', ['div3', 'div4',]);
movements.set('div6', ['div7', 'div8', 'div9', 'div10']);
movements.set('div7', ['div6', 'div9',]);
movements.set('div8', ['div6', 'div10']);
movements.set('div9', ['div1', 'div3', 'div6', 'div7',]);
movements.set('div10', ['div2', 'div4', 'div6', 'div8']);

let egleleftmove = new Map();

egleleftmove.set('div1', ['div3', 'div4']);
egleleftmove.set('div2', ['div4', 'div3']);
egleleftmove.set('div3', ['div4', 'div2']);
egleleftmove.set('div4', ['div3', 'div1']);
egleleftmove.set('div5', ['div3', 'div9']);
egleleftmove.set('div6', ['div9', 'div1']);
egleleftmove.set('div7', ['div9', 'div3']);
egleleftmove.set('div8', ['div6', 'div9']);
egleleftmove.set('div9', ['div3', 'div5']);
egleleftmove.set('div10', ['div4', 'div5']);

let eglerightmove = new Map();

eglerightmove.set('div1', ['div9', 'div6']);
eglerightmove.set('div2', ['div10', 'div6']);
eglerightmove.set('div3', ['div9', 'div7']);
eglerightmove.set('div4', ['div10', 'div8']);
eglerightmove.set('div5', ['div4', 'div10']);
eglerightmove.set('div6', ['div10', 'div2']);
eglerightmove.set('div7', ['div6', 'div10']);
eglerightmove.set('div8', ['div10', 'div4']);
eglerightmove.set('div9', ['div6', 'div8']);
eglerightmove.set('div10', ['div6', 'div7']);


let egleloosemat = new Map();
egleloosemat.set('div1', ['div3', 'div4', 'div6', 'div9']);
egleloosemat.set('div2', ['div4', 'div3', 'div6', 'div10']);
egleloosemat.set('div3', ['div1', 'div2', 'div4', 'div5', 'div7', 'div9']);
egleloosemat.set('div4', ['div1', 'div2', 'div3', 'div5', 'div8', 'div10']);
egleloosemat.set('div5', ['div3', 'div4', 'div9', 'div10']);
egleloosemat.set('div6', ['div1', 'div2', 'div7', 'div8', 'div9', 'div10']);
egleloosemat.set('div7', ['div3', 'div6', 'div9', 'div10']);
egleloosemat.set('div8', ['div4', 'div6', 'div9', 'div10']);
egleloosemat.set('div9', ['div1', 'div3', 'div5', 'div6', 'div7', 'div8']);
egleloosemat.set('div10', ['div2', 'div4', 'div5', 'div6', 'div7', 'div8']);

var logstring='';
function appendstring(str){
     logstring+=str+"\n";
}

c.forEach(draggable => {

    console.log("forEach");
    draggable.addEventListener("dragstart", dragStart);

});
eg.forEach(draggable => {

    console.log("forEach");
    draggable.addEventListener("dragstart", dragStart);

});

a.forEach(elem => {
    elem.addEventListener("dragover", allowDrop);
    //     elem.addEventListener("dragend",dragend);
    elem.addEventListener("drop", dragDrop);
});




function allowDrop(ev) {
    ev.preventDefault();
}
function dragover(ev){

    
}

function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
   
}

function dragDrop(ev) {

    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    if (data <= 7) {
        t = 0;
    }
    else {
        t = 1;
    }
    let dropplace = ev.target.id;
    if (t == index) {


        let currentlocation = locationof.get(data);
        let priviouslocation = kaaoegle.get(data);
        if (priviouslocation != 0 && kaocount < 7 && data != 8) {
            //alert("first move all the crow on star!");
            let x8=document.getElementById("warning");
            x8.classList.add("open-popup");
            // console.log("click");
        }
        else {

            // find the valid location
            // console.log("locations");
            let del = 0;
            if (priviouslocation != 0 && data <= 8) {
                var currentvalidmoment = movements.get(priviouslocation);

                for (i = 0; i < currentvalidmoment.length; i++) {
                    if (currentvalidmoment[i] == dropplace) {
                        del = 1;
                        break;
                    }
                }
                if (del == 0 && data == 8) {
                         
                    var eglevalidmoment = egleleftmove.get(priviouslocation);
                    let j = 0;
                    let qp=0;
                    while (j < eglevalidmoment.length) {
                        if (eglevalidmoment[j] == dropplace) {
                            qp=1;
                            break;
                        }
                        j++;
                    }
                    if (qp == 1 && locationof.get(eglevalidmoment[j - 1] ) != 0 && locationof.get(dropplace) == 0) {
                       // alert(eglevalidmoment[j-1]);
                       // alert(locationof.get(eglevalidmoment[j-1]));
                    //    console.log("hello word india1");
                    //    console.log(locationof.get(eglevalidmoment[j - 1] ));
                        const list = document.getElementById(eglevalidmoment[j-1]);
                        if (list.hasChildNodes()) {
                          list.removeChild(list.children[0]);
                        }
                        const tem=locationof.get(eglevalidmoment[j-1]);
                        kaaoegle.set(tem,'15');
                        locationof.set(eglevalidmoment[j-1],0);
                          //alert("kao kill");
                          killkaao++;
                          del=1;
                    }


                    if (del == 0) {
                        var eglevalidmomentr = eglerightmove.get(priviouslocation);
                        j = 0;
                        let pq=0;
                        while (j < eglevalidmomentr.length) {
                            if (eglevalidmomentr[j] == dropplace) {
                                pq= 1;
                                break;
                            }
                            j++;
                        }
                        if (pq == 1 && locationof.get(eglevalidmomentr[j - 1] ) != 0 && locationof.get(dropplace) == 0) {
                           // alert(eglevalidmomentr[j-1]);
                           // alert(locationof.get(eglevalidmomentr[j-1]));
                        //    console.log("hello word india23");
                            const list = document.getElementById(eglevalidmomentr[j-1]);
                            if (list.hasChildNodes()) {
                              list.removeChild(list.children[0]);
                            }
                            const tem=locationof.get(eglevalidmomentr[j-1]);
                              kaaoegle.set(tem,'15');
                              locationof.set(eglevalidmomentr[j-1],0);
                               // alert("kao kill");
                                killkaao++;
                                del=1;
                        }

                    }
                    // current working 

                }

            }
            else {
                del = 1;
            }
            if (locationof.get(dropplace) == 0 && del == 1) {


                
                locationof.set(kaaoegle.get(data), 0);
                locationof.set(dropplace, data);
                kaaoegle.set(data, dropplace);

                if (data <= 7) {
                    kaocount++;
                }
                 console.log("mouseup")

                 if(data<=7){
                
                    console.log("crow"+data+" was dropped on "+ev.target.id);
                    appendstring("crow"+data+" was dropped on "+ev.target.id+"");
                }
                else if(data==8){
                    console.log("egle was dropped on "+ev.target.id);
                    appendstring("egle was dropped on "+ev.target.id+"");
                }
                 
                ev.target.appendChild(document.getElementById(data));

                if (index == 0) {
                    index = 1;
                }
                else {
                    index = 0;
                }
                
                let x = kaaoegle.get('8')
                if (x != 0) {
                    let y = egleloosemat.get(x);
                    // console.log(y);
                    let lengthofy = y.length;
                    let ccount = 1;
                    for (i = 0; i < lengthofy; i++) {
                        let ax = y[i];
                        if (locationof.get(ax) == 0) {
                            ccount++;
                            break;
                        }
                    }
                    console.log(ccount);
                    if(killkaao>=4){
                        let x1=document.getElementById("eglewin");
                        x1.classList.add("open-popup");
                        // console.log("click");
                    }
                    else if (ccount == 1) {
                        let x1=document.getElementById("crowwin");
                        x1.classList.add("open-popup");
                        // console.log("click");
                       
                    }
                }
            }
            else {

                let x5=document.getElementById("notvalid");
                x5.classList.add("open-popup");
                // console.log("click");
                // console.log("Not valid move!")
            }
        


        }

    }
    else {
        let x3=document.getElementById("turn");
        x3.classList.add("open-popup");
        // console.log("click");
    }
}
let popclose1=document.getElementById("turn");
function closePopup(){
    popclose1.classList.remove("open-popup");
    // console.log("click");
}
let popclosewar1=document.getElementById("warning");
function closePopupwar(){
    popclosewar1.classList.remove("open-popup");
    // console.log("click");
}

let popclosewar2=document.getElementById("notvalid");
function closePopupvalid(){
    popclosewar2.classList.remove("open-popup");
    // console.log("click");
}


function movementdemo(e){
    console.log(e.type);
    if(e.target.id<=7){
    console.log("crow"+e.target.id+" was dragged");
    appendstring("crow"+e.target.id+" was dragged");
}
else if(e.target.id==8){
    console.log("egle was dragged");
    appendstring("egle was dragged");
}
    else{
        appendstring(""+e.target.id+" was Clicked");
        console.log(e.target.id+" was Clicked");
    }
    
}
var xt8=document.getElementById("8");
var xt7=document.getElementById("7");
var xt6=document.getElementById("6");
var xt5=document.getElementById("5");
var xt4=document.getElementById("4");
var xt3=document.getElementById("3");
var xt2=document.getElementById("2");
var xt1=document.getElementById("1");
xt1.addEventListener("mousedown",movementdemo,false);
xt2.addEventListener("mousedown",movementdemo,false);
xt3.addEventListener("mousedown",movementdemo,false);
xt4.addEventListener("mousedown",movementdemo,false);
xt5.addEventListener("mousedown",movementdemo,false);
xt6.addEventListener("mousedown",movementdemo,false);
xt7.addEventListener("mousedown",movementdemo,false);
xt8.addEventListener("mousedown",movementdemo,false);

var p1=document.getElementById("button1");
var p2=document.getElementById("button2");
var p3=document.getElementById("button3");
var p4=document.getElementById("button4");
var p5=document.getElementById("button5");

p1.addEventListener("click",movementdemo,false);
p2.addEventListener("click",movementdemo,false);
p3.addEventListener("click",movementdemo,false);
p4.addEventListener("click",movementdemo,false);
p5.addEventListener("click",movementdemo,false);

window.onload = function() 
{
document.getElementById('linkforlogs').onclick = function(code) 
  {
this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(logstring);
  };
};



