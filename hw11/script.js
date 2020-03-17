function generateSign(length){
    const time = length * 4;
    return new Promise(resolve => {
      setTimeout(() =>{
        const sign = Date.now().toString().split('').reverse().slice(0,5).join('');  
        resolve(String.fromCharCode(sign));
      }, time);
    });
}
  
async function getRandomChinese(length){
    let res = '';
    while(length > 0){
      res += await generateSign(length);
      length--;
    }
    return res;
}
 
getRandomChinese(4).then(str =>{
    console.log(str);
});
  
   