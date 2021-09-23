// Câu 5: Cho mảng a với các phần tử là các số, biến mảng a đó thành đúng định dạng
// ví dụ: a = [2, 4, 5] 
// ouput: [
//   {
//     number: 2,
//     number2: 3, // 2+1
//     number3? 1, // 2-1
//   },
//   {
//     number: 4,
//     number2: 5, // 2+1
//     number3? 3, // 2-1
//   },
//   {
//     number: 5,
//     number2: 6, // 2+1
//     number3? 4, // 2-1
//   },
// ]

function format(a = []) {
  //code below
  return a.map((num,i)=>{
    return {
      number: num,
      number2: num+1,
      number3: num-1
    }
    })
}
b=[2,4,5]
console.log(format(b))

