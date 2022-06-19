export default function random(list){
    let randomNumber;
    let tmp;
  
    for (let i = list.length; i;) {
      randomNumber = Math.random() * i-- | 0;
      tmp = list[randomNumber];
      list[randomNumber] = list[i];
      list[i] = tmp;
    }

};