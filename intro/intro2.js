// Câu 2: Cho mảng a, tìm tổng 2 phần tử liền kề lớn nhất
// ví dụ: a = [4,5,8,10,21,0,11,2] => output: 31
// giải thích: 
// 4+5 = 9
// 5+8 = 13
// 8+10= 18
// 10+21=31 => Số lớn nhất
// 21+0=21
// 0+11=11
// 11+2=13


function maxSumArr(a = []) {
  //code below
  function maxSumArr(a = []) {
    sumArr=[];
    a.forEach((value,index)=>{
      sum=value+a[index+1];
      sumArr.push(sum);
    });
    sumArr.pop(a[-1]);
    return sumArr.reduce((max,value)=>{
      if(max<value){
        return max=value;
      }
      return max+0
    },a[0])
    
  }
  
  a = [4,5,8,10,21,0,11,2]
  console.log(maxSumArr(a))
  console.log(a)
}
