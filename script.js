

   
    var firstName = prompt("Hello What is your First name")
    alert("welcome Back " + firstName)
    //toLowecase inbuilt function will make lower case
    //Prompt 1 
  var study =  prompt("Are you going  attending 201?");
  if(study.toLowerCase ()=="yes"||study.toLowerCase ()=="y")
  {
      alert("You replied "+ study);
  }
  else if (study.toLowerCase ()=="no"||study.toLowerCase ()=="n")
  {
      alert("you must be in diffrent class");
    }
    else
    alert("you are not student of Code fellow");



    //This is prompt two
    var computerLanguage= prompt("Are you learning Javascript?")
    if(computerLanguage.toLowerCase()=="yes"||computerLanguage.toLowerCase()=="y")
    {
        alert ("Welcome to javascript class")
    }
    else if (computerLanguage.toLowerCase()=="no"||computerLanguage.toLowerCase()=="n")
    {
        alert("Are you in Java class?");
    }
    else
    alert("you are not student of Code fellow");
    //This is prompt 3 
    var computerClass= prompt("Are you ln module 1?")
    if(computerClass.toLowerCase()=="yes"||computerClass.toLowerCase()=="y")
    {
        alert ("Great!!! you are doing great")
    }
    else if (computerClass.toLowerCase()=="no"||computerClass.toLowerCase()=="n")
    {
        alert("Are you ahead?");
    }
    else
    alert("you did not started");
    //This is prompt 4 
    var assing=prompt("Are you doing your assingment? ")
    if(assing.toLowerCase()=="yes"||assing.toLowerCase()=="y")
    {
        alert ("Great!!! you are doing great")
    }
    else if (assing.toLowerCase()=="no"||assing.toLowerCase()=="n")
    {
        alert("Are are not doing assignment?")
    }
    else{
        alert("You did not started")
    }
    // THis is PRompt 5 with Swith Statement
    
    var grade = prompt("What grade are you expecting?")
    switch(grade)
    {
        case("a"):
        alert("you should be Awsome ")
        break;
        case("b"):
        alert("you should be good ")
        break;
        case("c"):
        alert("you should be Ok ")
        break;
        default:
        alert ("Aim high")

    } 
    //This is Question 6 
    var myage=50;
    
    for(var i= 4;i>0;i--){
        var age=prompt("what is my age, please enter in Integer?") 
        
        {
            if(age==myage){
                alert("you got it" + age);
                break;
            }
            else if (age<myage){
                alert("Your guess is too low");
            }
            else if (age>myage)
            {
                alert("Your guess is too high");
            }
           
            else
            {
                alert("invalaid input");
            }


        }
    }
    //This is my seven answer
    
    // var myarray=["monday","tuesday", "wednesday","thrusday", "friday", "saturday"]
    // for(var j=0;j<7;j++)
    // {
    //      var day=prompt("Tell me one day in week?")
        
        
    //      if(myarray.includes(day))
            
           
    //         {
    //             alert("you got it correct");
    //             j = j + 7;
    //             break;
    //         } else{
    //            alert ("wrong");
    //         } 
        

    

    // }
    // alert("monday,tuesday, wednesday,thrusday, friday, saturday")
    var myarray=["monday","tuesday", "wednesday","thrusday", "friday", "saturday"]
    for(var j=0;j<7;j++)
    {
         var day=prompt("Tell me one day in week?")
        
        
      for(var i= 0;i<myarray.length;i++)
      {
         if(myarray[i]==day)
           
            {
                alert("you got it correct");
                j = j + 7;
                break;
            } else{
               alert ("wrong");
               
               break;
            } 

      }
           
        

    

    }
    alert("monday,tuesday, wednesday,thrusday, friday, saturday")
   



 



