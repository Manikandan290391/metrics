function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var lanid = document.Form.lanid.value;
    // var password = document.Form.password.value;
    // var fullname = document.Form.fullname.value;
    // var projectid = document.Form.projectid.value;
    // var sprintid = document.Form.sprintid.value
    // var squadname = document.Form.squadname.value
   

    var lanidErr =true;
    

 //   var lanidErr = passwordErr = fullnameErr = projectidErr = sprintidErr = squadnameErr =true;
    

    if(lanid == "") {
        printError("lanidErr", "Please enter Lan Id");
        var elem = document.getElementById("lanid");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    // } else {
    //     var regex = /^[a-zA-Z\s]+$/;                
    //     if(regex.test(name) === false) {
    //         printError("nameErr", "Please enter a valid name");
    //         var elem = document.getElementById("name");
    //         elem.classList.add("input-2");
    //         elem.classList.remove("input-1");
        } else {
            printError("lanidErr", "");
            lanidErr = false;
            var elem = document.getElementById("lanid");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    
    

    // if(password == "") {
    //     printError("passwordErr", "Please enter your password");
    //      var elem = document.getElementById("password");
    //         elem.classList.add("input-2");
    //         elem.classList.remove("input-1");
    // } 
    
    //     else{
    //         printError("passwordErr", "");
    //         passwordErr = false;
    //          var elem = document.getElementById("password");
    //         elem.classList.add("input-1");
    //         elem.classList.remove("input-2");

    //     }

    //     if(fullname == "") {
    //         printError("fullnameErr", "Please enter your Name");
    //         var elem = document.getElementById("fullname");
    //             elem.classList.add("input-2");
    //             elem.classList.remove("input-1");
    //      } else{
    //             printError("fullnameErr", "");
    //             fullnameErr = false;
    //             var elem = document.getElementById("fullname");
    //             elem.classList.add("input-1");
    //             elem.classList.remove("input-2");
    
                
    //         }

        
    //      if(projectid == "") {
    //             printError("projectidErr", "Please enter your project id");
    //             var elem = document.getElementById("projectid");
    //                 elem.classList.add("input-2");
    //                 elem.classList.remove("input-1");
    //       } else{
    //                 printError("projectidErr", "");
    //                 projectidErr = false;
    //                 var elem = document.getElementById("projectid");
    //                 elem.classList.add("input-1");
    //                 elem.classList.remove("input-2");
        
                    
    //             }

    //     if(sprintid == "") {
    //                 printError("sprintidErr", "Please enter your sprint id");
    //                 var elem = document.getElementById("sprintid");
    //                     elem.classList.add("input-2");
    //                     elem.classList.remove("input-1");
    //     }else{
    //                     printError("sprintidErr", "");
    //                     sprintidErr = false;
    //                     var elem = document.getElementById("sprintid");
    //                     elem.classList.add("input-1");
    //                     elem.classList.remove("input-2");
            
                        
    //                 }

    //      if(squadname == "") {
    //                     printError("squadnameErr", "Please enter your squad name");
    //                     var elem = document.getElementById("squadname");
    //                         elem.classList.add("input-2");
    //                         elem.classList.remove("input-1");
    //      }else{
    //                         printError("squadnameErr", "");
    //                         squadnameErr = false;
    //                         var elem = document.getElementById("squadname");
    //                         elem.classList.add("input-1");
    //                         elem.classList.remove("input-2");
                
                            
    //                     }
                    
            
        
    
 
    // if(mobile == "") {
    //     printError("mobileErr", "Please enter your mobile number");
    //     var elem = document.getElementById("mobile");
    //         elem.classList.add("input-2");
    //         elem.classList.remove("input-1");
    // } else {
    //     var regex = /^[1-9]\d{9}$/;
    //     if(regex.test(mobile) === false) {
    //         printError("mobileErr", "Please enter a valid 10 digit mobile number");
    //         var elem = document.getElementById("mobile");
    //         elem.classList.add("input-2");
    //         elem.classList.remove("input-1");
    //     } else{
    //         printError("mobileErr", "");
    //         mobileErr = false;
    //         var elem = document.getElementById("mobile");
    //         elem.classList.add("input-1");
    //         elem.classList.remove("input-2");
    //     }
    // }
    

    
    
  //  if((lanidErr || passwordErr ||fullnameErr||projectidErr||sprintidErr||squadnameErr) == true) {
       
  if((lanidErr ) == true){
    return false;
    } 
};