
const {response}=require("express")
const http = require("http")


//fs.readFile('./Hello.txt',(err,data)=>{err ? console.log(err) : console.log(data.toString())})
const fs = require('fs')
const data=fs.readFileSync("./Hello.txt")
console.log(data.toString())
const generateRandomPassword = require('./password-generator')
const password = generateRandomPassword(10)
console.log('Generated password:', password)
const sendEmail = require('./emailsender');
sendEmail('olfa.bendhaou.gmc@gmail.com', 'Test Email', 'Hello, this is a test email.');
http.createServer((request,response)=>{
    response.end("<h1>hello Node!!!</h1>\n")
}).listen(3456)