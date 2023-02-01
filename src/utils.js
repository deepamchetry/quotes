export const getRandomColor = () => {
    const alphabet = '0123456789ABCDEF';
    let color = '#' ;
    for (let i = 0; i < 6; i += 1){
      color += alphabet[Math.floor(Math.random() * 16)]
    }
    return color;
}

export const fetchData = async() => {
    let data, result;
    try{
      data = await fetch('https://api.quotable.io/random');
      result = await data.json();
    }catch(err){
      console.log(err);
    }
    return result;
}