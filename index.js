//---------------class  Person------------------------------------------------
class Person {
    constructor(name, money,age,healthRate,sleepMood){
        this.name=name;
        this.money=money;
        this.age = age;
        this.healthRate=healthRate;
        this.sleepMood=sleepMood;
    }
    sleep(hours) {
        if (hours > 7) {
            this.sleepMood = "lazy";
        } else if (hours < 7) {
            this.sleepMood = "tired";
        } else {
            this.sleepMood = "happy";
        }
    }
    eat(meals) {
         if (meals === 3) {
             this.healthRate = 100;
        } else if (meals === 2) {
               this.healthRate = 75;
        } else if (meals === 1) {
                this.healthRate = 50;
        }
    }
    buy(item){
        if(item<1){
            this.money =this.money - 10;
        }
    }
}
//implementation

    let person1 = new Person("Rehab", 100, "awake", 80);
    person1.buy();
    person1.eat();
    person1.sleep();
    
   console.log(person1);

// -------------- class Employee which extends from person -------------------------------------
class Employee extends Person {
    constructor(
         email,
         name,
         age,
          workMood,
          isManager,
          money,
          healthRate,
          sleepMood
          ) {
        super(name, age,healthRate,money,sleepMood);
        this.id=email;
        this.email=email;
        this.workMood= workMood;
        this.isManager=isManager;
        //This ensures that the salary property always has a value of 1000 or more
        this.money=Math.min(money, 1000);
    }
        work(hours) {
            if(workMood > 8){
               this.workMood = "Tired";
            }
            else if (workMood <8) {
                this.workMood = "Lazy";
            }
            else{
                this.workMood = "Happy";
            }
        }
}
// implementation

// let employee1 = new Employee(10, "R","lazy", 77,"manager" , "RR", 100,80, "awake");
// console.log(employee1);
 // ---------------- class Office ---------------------------------------------------
class Office  {
    constructor(name){
        this.name=name;
        //to store the data of employees
        this.employees=[];
        
    }
    getAllEmployees(){
       return this.employees;
};
    getEmployee(employeeID){
        //use email instead of generating random id
        const employee = this.employees.filter(
            (employee) => employee.email == employeeID
          );
            if (employee[0] && employee[0].isManager) {
                return { name: employee[0].name };
            }
            else if (employee[0] && !employee[0].isManager) {
                return employee[0];
            } 
            else {
                return undefined;
            }
    
    }
    hire(employee){
            this.employees.push(employee);
        
    }
    fire(employeeID){
        let oldLength = this.employees.length;
        let indexToDelete = this.employees.findIndex(
          (employee) => employee.email == employeeID
        );
        this.employees.splice(indexToDelete, 1);
        if (oldLength > this.employees.length) {
          return true;
        } else {
          return false;
        }
      }
    
}
// let employee2 = new Employee(10, "rr","happy", 23,"manager" , "Rehab", 100,80, "awake");
// console.log(employee2);

//create menu program ----------------------------------------------------------------
 
let office = new Office("myOffice");
while (true) {
  var enteredValue = prompt(`1-For hiring new employee enter 'Add'
2- For Display all employees press 2
3-For displaying existing employee press 3
4- For firing employee press 4`);
  if (enteredValue == "1") {
    var choice = prompt(
      "If manager press 'mngr' ,if normal employee press 'nrml' "
    );
    if (choice == "mngr") {
      var mngrName = prompt("Enter name:");
      var mngrEmail = prompt("Enter email:");
      var mngrAge = prompt("Enter age:");
      var mngrWorkMood = prompt("Enter mood:");
      var mngrSalary = prompt("Enter Salary:");
      var healthMngr = prompt("Enter manager health rate:");
      var mngrSleepMood = prompt("Enter manager sleep mood:");

      let newMngr = new Employee(
        mngrEmail,
        mngrName,
        mngrAge,
        mngrWorkMood,
        true,
        mngrSalary,
        healthMngr,
        mngrSleepMood
      );
      office.hire(newMngr);

      alert(`Manager ${mngrName} added successfully.`);
    } else if (choice == "nrml") {
      var nrmlName = prompt("Enter name:");
      var mngrEmail = prompt("Enter email:");
      var nrmlAge = prompt("Enter age:");
      var nrmlWorkMood = prompt("Enter mood:");
      var nrmlSalary = prompt("Enter Salary:");
      var nrmlhealth = prompt("Enter manager health rate:");
      var nrmlSleepMood = prompt("Enter manager sleep mood:");
      let newEmp = new Employee(
        mngrEmail,
        nrmlName,
        nrmlAge,
        nrmlWorkMood,
        false,
        nrmlSalary,
        nrmlhealth,
        nrmlSleepMood
      );
      office.hire(newEmp);
      alert(`Employee ${nrmlName} added successfully.`);
    } else {
      var quit = prompt("Press q if you want to quit");
      if (quit == "q") {
        break;
      }
    }
  } else if (enteredValue == "2") {
    alert(JSON.stringify(office.getAllEmployees()));
  } else if (enteredValue == "3") {
    let empId = prompt("Enter employee ID you want to display");
    let specificEmp = office.getEmployee(empId);
    if (specificEmp) {
      alert(JSON.stringify(specificEmp));
    } else {
      alert("No employee found with that ID!");
    }
  } else if (enteredValue == "4") {
    var firedId = prompt("Enter employee ID you want to fire");
    var idFiredEmp = office.fire(firedId);
    if (idFiredEmp) {
      alert(`The employee with email ${firedId} fired`);
    } else {
      alert(`The employee with email ${firedId} not found`);
    }
  } else {
    var quit = prompt("Press q if you want to quit");
    if (quit == "q") {
      break;
    }
  }
}