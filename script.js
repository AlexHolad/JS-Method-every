const teamOne = [
    {
      name: "Bob",
      age: 19
    },
    {
      name: "Pierre",
      age: 17
    },
    {
      name: "Karl",
      age: 16
    },
    {
      name: "Ryan",
      age: 21
    }
  ];
  
  const teamTwo = [
    {
      name: "Nadia",
      age: 19
    },
    {
      name: "Hector",
      age: 20
    },
    {
      name: "Maria",
      age: 25
    },
    {
      name: "Bryan",
      age: 21
    }
  ];
  
  function checkIfAdult(array) {
    // Type your code here
    if (array.every(element => element.age > 18)) {
      console.log("All the player have the required age to play")
    } else {
      console.log("At least one of the team player doesn't have the minimum age")
    }
  }
  
  checkIfAdult(teamOne);
  /* 
  Should print in the console 
  "At least one of the team player doesn't have the minimum age"
  */
  checkIfAdult(teamTwo);
  /* 
  Should print in the console 
  "All the player have the required age to play"
  */
  