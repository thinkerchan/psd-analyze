#!/usr/bin/env node
var fs = require("fs"),
    path = process.cwd();
var argv = require('yargs')
  .alias('n', 'name')
  .argv;
var exec = require('child_process').exec;
var fs=require('fs'),
    PSD = require('psd'),
    psdName = argv.n;
var psd = PSD.fromFile("psd/"+psdName+".psd");
    psd.parse();
var data = psd.tree().export();
var css = '',
    html='',
    imgSrc='images/',
    prefix = '',
    suffix = '';
for (var i = data.children.length - 1; i >= 0; i--) {
  var el = data.children[i] ;
  css += '.'+el.name+'{position:absolute;'+'width:'+el.width+'px; '+'height:'+el.height+'px; '+'top:'+el.top+'px; '+'left:'+el.left+'px; '+'z-index:0; }'+'\n';
  html+='<div class='+'"'+el.name+'"'+'><img src='+'"'+prefix+imgSrc+el.name+suffix+'.png"'+'></div>'+'\n';
}
exec('cd psd && mkdir '+psdName,
  function (error, stdout, stderr) {
    PSD.open("psd/"+psdName+".psd").then(function (psd) {
      fs.mkdir("psd/"+psdName+'/images',function(){
      });
      psd.tree().descendants().reverse().forEach(function (layer,index) {
        var img = layer.layer.image;
        var name  = layer.layer.legacyName;
          img.saveAsPng('psd/'+psdName+'/images/'+name+".png").catch(function (err) {
              console.log(err.stack);
          });
      });
      fs.writeFileSync('psd/'+psdName+'/'+psdName+'.css',css);
      fs.writeFileSync('psd/'+psdName+'/'+psdName+'.html',html);
      console.log(psdName+".psd Finished!");
    });
});