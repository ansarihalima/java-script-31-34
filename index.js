// //////////////////////////////////Question 1

// function dateTime() {
//     let d = new Date();
//     document.getElementById('dateTime').textContent = d;
// }
// dateTime();


// //////////////////////////////////Question 2

// var d = new Date();
// var currentMonthIndex = d.getMonth();
// var months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// document.getElementById('currentMonth').innerHTML = "<br> " + "<b>Current month:</b> " + months[currentMonthIndex];

// // //////////////////////////////////Question 3

// function CurrentDay() {

//     var local = new Date();
    
//     var currentDayIndex = local.getDay();

//     var days = [
//         'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
//     ];
    
//     alert(days[currentDayIndex]);
// }


// CurrentDay();

// // //////////////////////////////////Question 4

// function displayFunDay() {
//     var now = new Date();
//     var currentDay = now.getDay();
//     if (currentDay === 0 || currentDay === 6) {
//         alert("It’s Fun day");
//     }
// }

// displayFunDay();

// // //////////////////////////////////Question 5

//         var K = new Date();
//         var currentDate = K.getDate();
//         if (currentDate < 16) {
//             document.getElementById('dateMessage').textContent =" <br> First fifteen days of the month";
//         } else {
//             document.getElementById('dateMessage').textContent = "Last days of the month";
//         }


// //////////////////////////////////Question 6
// var currentMillis = Date.now()
// var currentMinutes = currentMillis / (1000 * 60);
// console.log("Elapsed milliseconds since January 1, 1970: " + currentMillis.toFixed(0));
// console.log("Elapsed minutes since January 1, 1970: " + currentMinutes.toFixed(2));


// // //////////////////////////////////Question 7

// var now = new Date();
// var currentHour = now.getHours();

// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


// // //////////////////////////////////Question 8

// var laterDate = new Date(2024, 11, 31); 
// document.body.innerHTML = "The last day of the last month of 2024 is: " + laterDate.toDateString();


// // //////////////////////////////////Question 9

//         var ramadanStartDate = new Date(2015, 5, 18); 
//         var currentDate = new Date();
//         var timeDifference = currentDate - ramadanStartDate;
//         var daysPast = ~~(timeDifference / (1000 * 60 * 60 * 24));
//         document.write("Number of days since 1st Ramadan: " + daysPast);

        
        
//////////////////////////////////Question 10
         
        // var startOf2015 = new Date(2015, 0, 1); 
        // var now = new Date();

        // var secondsElapsed = Math.floor((now - startOf2015) / 1000); 
        // document.getElementById('elapsedTime').innerText = "Seconds elapsed since the beginning of 2015: " + secondsElapsed;
 
//////////////////////////////////Question 11

    // var now = new Date();
    // var currentHour = now.getHours();
    // now.setHours(currentHour + 1);
    // document.write("Current Date : sat Dec  05 2015 23:08:16 GMT +0500 (PKT) " + new Date().toString() + "<br>");
    // document.write("1 hour ago , it was sat Dec  05 2015 23:08:16 GMT +0500 (PKT) " + now.toString());

   
// //////////////////////////////////Question 12

        // var now = new Date();
        // now.setFullYear(now.getFullYear() - 100);
        // alert("Date 100 years back: " + now.toDateString());


// //////////////////////////////////Question 13

    // var age = prompt("Please enter your age:");
    // var birthYear;
    // if (parseInt(age)) {
    //     var currentYear = new Date().getFullYear();
    //     birthYear = currentYear - parseInt(age);
    // } else {
    //     birthYear = "Invalid input. Please enter a valid age.";
    // }
    // document.write("Your birth year is: " + birthYear);

//  //////////////////////////////////Question 14

    // var customerName = prompt("Enter your name:");
    // var units = prompt("Enter the number of units consumed:");
    // var chargesPerUnit = prompt("Enter the charges per unit:");
    // var lateSurcharge = prompt("Enter the late payment surcharge:");
    // var now = new Date();
    // var currentMonth = now.toLocaleString('default', { month: 'long' });
    // var netAmountPayable = parseFloat(units) * parseFloat(chargesPerUnit);
    // var grossAmountPayable = netAmountPayable + parseFloat(lateSurcharge);
    // netAmountPayable = netAmountPayable.toFixed(2);
    // grossAmountPayable = grossAmountPayable.toFixed(2);
    // document.write("<h2>K-Electric Bill</h2>");
    // document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
    // document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
    // document.write("<p><strong>Number of Units:</strong> " + units + "</p>");
    // document.write("<p><strong>Charges per Unit:</strong> " + parseFloat(chargesPerUnit).toFixed(2) + "</p>");
    // document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable + "</p>");
    // document.write("<p><strong>Late Payment Surcharge:</strong> " + parseFloat(lateSurcharge).toFixed(2) + "</p>");
    // document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable + "</p>");
