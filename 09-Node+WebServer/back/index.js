const http = require("http");
const {validStudent} =  require("./db");

const server = http.createServer(function (req, res){
    res.writeHead(200, "ok", {'Access-Control-Allow-Origine': '*', "Access-Control-Allow-Headers":"*"}); 
    let msg;
    req.on("data", (data)=>{
        const userInfo = JSON.parse(data);
        if(valideUserName(userInfo) && valideUserAge(userInfo) && valideUserability(userInfo)){
            msg = "right";
        }else{
            msg = "wrong";
        }
    })
    req.on("end", ()=>{
        res.write(msg)
        res.end()
    })
});
const port = 3000;
server.listen(3000, ()=>{
    console.log("listening to 3000 fm")
})

function valideUserName(userInfo){
    if(validStudent.nameNotEqual.includes(userInfo.name)){
        return false;
    }
    return true;
}

function valideUserAge(userInfo){
    if(userInfo.age >= 18 && userInfo.age <= 35){
        return true;
    }
    return false;
}

function valideUserability(userInfo){
    if(validStudent.ability.includes(userInfo.ability)){
        return true;
    }
    return false;
}
