var express=require("express");
var dir=require("directory-tree");
var app=express();
const tree=dir("E:/");
var fs = require("fs")
console.log(tree)
console.log(tree.children)
app.get("/",function(req,res){
    res.json(tree.children)
})


app.listen(3000)
