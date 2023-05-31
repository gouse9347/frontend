function print(){
    let x=document.getElementById("id1") .value
    let y=document.getElementById("id2") .value
    if(x==""&& y==""){
        document.write("please! enter name and email")
    }
    else if(x==""){
        document.write("please enter name")
    }
        else if(y==""){
            document.write("please! enter email")
        }
        else{
            document.write("successfully submitted!")
        }
    }
        
    
