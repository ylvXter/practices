//Câu 1: Cho mảng a, tìm phần tử lớn nhất trong mảng
// ví dụ: a = [4,5,8,10,21,0,11,2] => output: 21

function maxArr(a = []) {
  return a.reduce((max,currentValue)=>{
    if(max<currentValue) //so sánh biến tích trữ max với giá trị hiện tại
    {
      return max=currentValue //Lớn hơn max thì giá trị hiện tại lưu vào biến tích trữ
    }
    return max +0 //không lớn hơn max thì giá trị biến tích trữ là 0

  },a[0]) //bắt đầu chạy từ giá trị đầu tiên
}
a = [4,5,8,10,21,0,11,2]
console.log(maxArr(a))
