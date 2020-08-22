let coll = document.getElementById('ttt');
coll.className = "rox";

function r() {
    let vasatdelete = document.getElementById('nox');
    vasatdelete.className = "rox";
    coll.className = "row";
}

// set values
let num = 0;
let num2 = 0;
let num2_ezaf = 0;
let num3 = 0;
let aval = document.getElementById('aval');
let dovom = document.getElementById('dovom');
let sevom = document.getElementById('sevom');

// ENTER in input
function fun(e) {
    if (e.keyCode == 13)
        addDown();
}

// backgen
function backgen(e) {

    let body = document.getElementById('bod');
    body.className = "body";
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let chance = getRandomInt(5);
    body.style.backgroundImage = "url('aks" + chance + ".jpg')";
    // body.onclick = function() {
    //     document.getElementById('con').onclick = function() {
    //         alert("s");
    //     };

    //     backgen(this);

    // };

}

function addDown(z) {
    let in2 = z;
    let input = "joker";

    if (document.getElementById('first-input').value == "") {
        let input = document.getElementById('first-input');
        input.placeholder = "Empty Input";

        function rm() {
            input.placeholder = "";
        }
        setTimeout(rm, 2000);
    } else if (document.getElementById('first-input').value != '') {
        input = document.getElementById('first-input');
        ix();

        function ix() {

            let inputx = input.value;

            let col = document.getElementById('first');


            let todo = document.createElement('div');
            todo.className = 'box listAdded';
            todo.id = 'listAdded';

            let p = document.createElement('p');
            p.className = 'ps';
            // let i1 = "<i class=\"fas fa-angle-double-right\"></i>";
            let i1 = document.createElement('i');
            i1.className = "fas fa-angle-double-right";
            i1.onclick = function() {
                ++num2_ezaf;
                ++num2;
                dovom.innerHTML = num2;
                addToDoing(this, inputx);
            };
            // let i2 = "<i class=\"far fa-trash-alt\" onclick=\"remove(this)\"></i>";
            let i2 = document.createElement('i');
            i2.className = "far fa-trash-alt";
            i2.onclick = function() {
                remove(this);
            };

            p.innerHTML = input.value;
            p.appendChild(i1);
            p.appendChild(i2);

            todo.appendChild(p);
            col.appendChild(todo);
            input.value = "";

            num++;
            aval.innerHTML = num;

            function remove(r) {
                todo.className = "none";

                if (num > 0) {
                    num--;
                    aval.innerHTML = num;
                }
            }

            function addToDoing(r, inp) {
                let input2 = inp;
                remove();
                let OnDoing = document.getElementById('second');

                let doing = document.createElement('div');
                doing.className = 'box';

                let p2 = document.createElement('p');
                p2.className = 'ps';

                let i1_1 = document.createElement('i');
                i1_1.className = "fas fa-angle-double-right";
                i1_1.onclick = function() {
                    remove2(this);
                    addTask(this, input2);
                };

                let i2_2 = document.createElement('i');
                i2_2.className = "far fa-trash-alt";
                i2_2.onclick = function() {
                    remove2(this);
                    // addDown(input2);
                };

                p2.innerHTML = input2;
                p2.appendChild(i1_1);
                p2.appendChild(i2_2);

                doing.appendChild(p2);
                OnDoing.appendChild(doing);

                function remove2(r) {
                    doing.className = "none";
                    if (num2 > 0) {
                        num2--;
                        dovom.innerHTML = num2;
                    }
                }

                function addTask(task, yel) {
                    let input3 = yel;
                    ++num3;
                    sevom.innerHTML = num3;
                    remove2();
                    let Done = document.getElementById('three');

                    let addDone = document.createElement('div');
                    addDone.className = 'box';

                    let p3 = document.createElement('p');
                    p3.className = 'ps';

                    let i1_3 = document.createElement('i');
                    i1_3.className = "far fa-trash-alt";
                    i1_3.onclick = function() {
                        remove3(this);
                    };

                    let i2_3 = document.createElement('i');
                    i2_3.className = "fas fa-angle-double-left";
                    i2_3.onclick = function() {
                        remove3(this);
                        addToDoing(this, input3);
                        ++num2;
                        dovom.innerHTML = num2;
                    };

                    p3.innerHTML = input3;
                    p3.appendChild(i1_3);
                    p3.appendChild(i2_3);

                    addDone.appendChild(p3);
                    Done.appendChild(addDone);

                    function remove3(task) {
                        addDone.className = "none";
                        if (num3 > 0) {
                            --num3;
                            sevom.innerHTML = num3;
                        }
                    }
                }
            }
        }
    } else {
        if (num2_ezaf == 0) {
            input = document.getElementById('first-input');
        } else if (num2_ezaf > 0 && in2 != '') {
            input = in2;
        }

        ix();

        function ix() {

            let inputx = input.value;

            let col = document.getElementById('first');


            let todo = document.createElement('div');
            todo.className = 'box listAdded';
            todo.id = 'listAdded';

            let p = document.createElement('p');
            p.className = 'ps';
            // let i1 = "<i class=\"fas fa-angle-double-right\"></i>";
            let i1 = document.createElement('i');
            i1.className = "fas fa-angle-double-right";
            i1.onclick = function() {
                ++num2_ezaf;
                ++num2;
                dovom.innerHTML = num2;
                addToDoing(this, inputx);
            };
            // let i2 = "<i class=\"far fa-trash-alt\" onclick=\"remove(this)\"></i>";
            let i2 = document.createElement('i');
            i2.className = "far fa-trash-alt";
            i2.onclick = function() {
                remove(this);
            };

            p.innerHTML = input.value;
            p.appendChild(i1);
            p.appendChild(i2);

            todo.appendChild(p);
            col.appendChild(todo);
            input.value = "";

            num++;
            aval.innerHTML = num;

            function remove(r) {
                todo.className = "none";

                if (num > 0) {
                    num--;
                    aval.innerHTML = num;
                }
            }

            function addToDoing(r, inp) {
                let input2 = inp;
                remove();
                let OnDoing = document.getElementById('second');

                let doing = document.createElement('div');
                doing.className = 'box';

                let p2 = document.createElement('p');
                p2.className = 'ps';

                let i1_1 = document.createElement('i');
                i1_1.className = "fas fa-angle-double-right";
                i1_1.onclick = function() {
                    remove2(this);
                    addTask(this, input2);
                };

                let i2_2 = document.createElement('i');
                i2_2.className = "far fa-trash-alt";
                i2_2.onclick = function() {
                    remove2(this);
                    // addDown(input2);
                };

                p2.innerHTML = input2;
                p2.appendChild(i1_1);
                p2.appendChild(i2_2);

                doing.appendChild(p2);
                OnDoing.appendChild(doing);

                function remove2(r) {
                    doing.className = "none";
                    if (num2 > 0) {
                        num2--;
                        dovom.innerHTML = num2;
                    }
                }

                function addTask(task, yel) {
                    let input3 = yel;
                    ++num3;
                    sevom.innerHTML = num3;
                    remove2();
                    let Done = document.getElementById('three');

                    let addDone = document.createElement('div');
                    addDone.className = 'box';

                    let p3 = document.createElement('p');
                    p3.className = 'ps';

                    let i1_3 = document.createElement('i');
                    i1_3.className = "far fa-trash-alt";
                    i1_3.onclick = function() {
                        remove3(this);
                    };

                    let i2_3 = document.createElement('i');
                    i2_3.className = "fas fa-angle-double-left";
                    i2_3.onclick = function() {
                        remove3(this);
                        addToDoing(this, input3);
                        ++num2;
                        dovom.innerHTML = num2;
                    };

                    p3.innerHTML = input3;
                    p3.appendChild(i1_3);
                    p3.appendChild(i2_3);

                    addDone.appendChild(p3);
                    Done.appendChild(addDone);

                    function remove3(task) {
                        addDone.className = "none";
                        if (num3 > 0) {
                            --num3;
                            sevom.innerHTML = num3;
                        }
                    }
                }
            }
        }
    }
}



