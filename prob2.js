const employees = [{
    "employee_id": 1,
    "full_name": "Brantley Myner",
    "salary": 123494.14,
    "hire_date": "4/11/2015",
    "country": "Russia"
  }, {
    "employee_id": 2,
    "full_name": "Lane Billings",
    "salary": 128061.92,
    "hire_date": "6/6/2021",
    "country": "United States"
  }, {
    "employee_id": 3,
    "full_name": "Stephani Kennington",
    "salary": 115241.56,
    "hire_date": "6/24/2016",
    "country": "Nigeria"
  }, {
    "employee_id": 4,
    "full_name": "Dayle Dahill",
    "salary": 135339.94,
    "hire_date": "9/27/2017",
    "country": "Tajikistan"
  }, {
    "employee_id": 5,
    "full_name": "Kaye Ewart",
    "salary": 34124.3,
    "hire_date": "12/28/2003",
    "country": "China"
  }, {
    "employee_id": 6,
    "full_name": "Gallard Mackison",
    "salary": 111082.37,
    "hire_date": "6/23/2011",
    "country": "Russia"
  }, {
    "employee_id": 7,
    "full_name": "Bartholomew Motherwell",
    "salary": 51017.49,
    "hire_date": "11/1/2010",
    "country": "Thailand"
  }, {
    "employee_id": 8,
    "full_name": "Guinevere Fishbourne",
    "salary": 88049.13,
    "hire_date": "5/8/2020",
    "country": "Ukraine"
  }, {
    "employee_id": 9,
    "full_name": "Grier Fateley",
    "salary": 77777.31,
    "hire_date": "2/9/2008",
    "country": "United States"
  }, {
    "employee_id": 10,
    "full_name": "Fanya Jeannard",
    "salary": 40940.68,
    "hire_date": "6/29/2004",
    "country": "Albania"
  }, {
    "employee_id": 11,
    "full_name": "Wenona Shrieves",
    "salary": 76253.38,
    "hire_date": "4/9/2017",
    "country": "China"
  }, {
    "employee_id": 12,
    "full_name": "Michaeline Meiklejohn",
    "salary": 120154.3,
    "hire_date": "4/11/2007",
    "country": "Indonesia"
  }, {
    "employee_id": 13,
    "full_name": "Abby Perl",
    "salary": 142016.31,
    "hire_date": "3/13/2020",
    "country": "Albania"
  }, {
    "employee_id": 14,
    "full_name": "Benjie Topliss",
    "salary": 137031.15,
    "hire_date": "11/16/2018",
    "country": "France"
  }, {
    "employee_id": 15,
    "full_name": "Kenneth Tembridge",
    "salary": 121549.22,
    "hire_date": "3/26/2001",
    "country": "China"
  }, {
    "employee_id": 16,
    "full_name": "Padgett Lawrance",
    "salary": 107953.13,
    "hire_date": "2/15/2008",
    "country": "United States"
  }, {
    "employee_id": 17,
    "full_name": "Jayme Gabey",
    "salary": 71489.01,
    "hire_date": "9/11/2003",
    "country": "China"
  }, {
    "employee_id": 18,
    "full_name": "Birdie Stubbe",
    "salary": 37900.58,
    "hire_date": "10/19/2016",
    "country": "United States"
  }, {
    "employee_id": 19,
    "full_name": "Brod Bennison",
    "salary": 98851.66,
    "hire_date": "5/5/2000",
    "country": "Luxembourg"
  }, {
    "employee_id": 20,
    "full_name": "Booth Strahan",
    "salary": 56377.75,
    "hire_date": "9/29/2010",
    "country": "Russia"
  }]

  //what is the country with the highest salary
const countrySal = employees.reduce((acc,employee) => {
  const country = employee.country
  const salary = employee.salary
  if(!acc[country]) acc[country] = {total:0,count:0}
  acc[country].total = acc[country].total + salary
  acc[country].count++
  return acc
},{})
//console.log(countrySal);

  // const highestSal = countrySal.reduce((max,curVal) => {
  //   if(curVal.salary > max){
  //     max = curVal.salary
  //   }
  //   return max
  // },0)
  
  //list the top 3 highest paid along with their names and salaries
  const salary = employees.sort((a,b)=> b.salary - a.salary).slice(0,3)
  .map((employee => ({name:employee.full_name, salary:employee.salary,country:employee.country})))
  console.log(salary);

  //Generate a report that shows the total number of employees,salary,average salary and number of employees per dept
 const totalNoOfEmp = employees.length
 const totalSalary = employees.reduce((acc,eachSalary)=>acc+eachSalary.salary,0)
 const employeePerDept = employees.reduce((acc,employee)=>{
  const dept = employee.d
 })
 const averageSal = totalSalary/totalNoOfEmp
 console.log(averageSal);


  
 