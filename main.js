

function p1_get_output(){
    
    var p1 = [];

    for(var i=1; i<=10; i++){

        p1.push(document.getElementById("p1_s" + i).value);

    }

    document.getElementById("p1_output").innerHTML = p1.join(" ");
  

}

function p2_get_output(){
    
    var p2 = [];

    for(var k=1; k<=10; k++){

        p2.push(document.getElementById("p2_s" + k).value);

    }

    document.getElementById("p2_output").innerHTML = p2.join(". ");

  

}