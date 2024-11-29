// 1-misol
// let arr = [2, 4, 6, 8, 10]
// let sum =  arr.reduce ((acc,num ) => acc + num ,0 )
// console .log(sum)

// 2-misol
// let arr = [15, 7, 22, 3, 8, 11]

// let katta = Math.max(...arr)
// let kichik = Math.min (...arr)

// console .log("Eng katta:" , katta)
// console .log("Eng kichik:" , kichik)

//  3-misol
// let arry = [1, 2, 3, 4, 5, 6, 7]

// let juftSoni = arry.filter(element => element % 2 === 0);

// console.log(juftSoni); 

//  4-misol
// let arry = [9, 5, 2, 7]

// let teskari = arry.reverse(...arry)
// console .log (teskari)

//  5-misol
// let arry =[5, 7, 9, 5, 3, 5, 2, 4]  

// let indeks = arry.at(3)
// console.log(indeks)

//  6-misol
// let massiv =[8, 3, 5, 1, 9]

// let osish = massiv.sort()
// console .log (osish)

// 7-misol
// let num = [10, 20, 30, 40, 50]

// let sum = num.reduce((acc, num) => acc + num, 0);
// let average = sum / num.length;
// console.log("O'rtacha qiymat:", average);

// 8-misol
  
// let array1 = [1, 2, 3, 4];
// let array2 = [5, 6, 7, 8];

// // Har bir mos elementni qo'shish
// let combinedArray = array1.map((num, index) => num + array2[index]);
// console.log(combinedArray);

// 9-misol
// let students = [
//     { "name": "Ali", "age": 20, "grade": 85 },
//     { "name": "Laylo", "age": 19, "grade": 75 },
//     { "name": "Bekzod", "age": 22, "grade": 90 }
//   ];
  
//   // Bahosi 80 dan yuqori bo'lgan talabalarni filtrlaymiz
//   let filteredStudents = students.filter(student => student.grade > 80);
//   console.log(filteredStudents);
  
// //  10 -misol
// const products = [
//     { product: "Olma", price: 5000, quantity: 2 },
//     { product: "Banan", price: 8000, quantity: 1 },
//     { product: "Shaftoli", price: 7000, quantity: 3 }
//   ];
  
//   // Jami narxni hisoblash
//   let totalPrice = 0;
  
//   for (let i = 0; i < products.length; i++) {
//     totalPrice += products[i].price * products[i].quantity;
//   }
  
//   console.log("Mahsulotlarning jami narxi: " + totalPrice + " so'm");


//  11-misol
const users = [
    { name: "Ali", age: 15 },
    { name: "Laylo", age: 16 },
    { name: "Rustam", age: 14 }
  ];
  
  // Yoshlarni qo'shish
  let totalAge = 0;
  
  for (let i = 0; i < users.length; i++) {
    totalAge += users[i].age; // Har bir foydalanuvchining yoshini qo'shamiz
  }
  
  // Ortacha yoshni hisoblash
  let averageAge = totalAge / users.length;
  
  console.log("Ortacha yosh: " + averageAge);
  
  