//Promise function without API library
const event = new Promise ((resolve, reject) => {
    let student = 'admitted';
    if (student == 'admitted') {
        resolve(student);
    }else {
        reject('Student not yet admitted, kindly: ' + student);
    }
});

//Main Aspect of promise
event.then((student) => {
    console.log(student);
 })
  .catch((err) => {
    console.log(err);

  })
  .finally(() => {
    console.log('PROMISE FINISHED')
  });

//Same function using axiosAPI library to fetch data from url

const axios = require('axios');

const data = axios.get ('https://otiasammy.pythonanywhere.com/');

//js wait till data fetched
data.then((res) => {
    console.log(res.data);
})
   .catch((err) => {
    console.log(err);
})
   .finally(() => {
    console.log('PROMISE FINISHED')
});

//alternative cleaner short code using try, catch
const axios = require('axios');

const fetchData = async () => {
    try {
        const data = await axios.get ('https://otiasammy.pythonanywhere.com/');
        console.log(data);
    }   catch (err) {
        console.log(err);
    } finally {
        console.log('PROMISSE FINISHED')
    }
};
    
fetchData();


  