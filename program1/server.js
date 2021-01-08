require('dotenv').config();
const qiskit = require('qiskit');
const TOKEN = process.env.TOKEN;

console.log('True random numbers\n');

qiskit.algo.random().then(rand => console.log(`JavaScript: ${rand}`));

const cloud = new qiskit.Cloud();

cloud.login(TOKEN).then(() => {
  
    cloud.backends().then(data => {
        console.log('(IBM Backends');
        console.log(data);
    }).catch(err => { console.log(err)});
    
}).catch(err => {console.log(err)});