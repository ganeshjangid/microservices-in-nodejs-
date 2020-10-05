'use strict';

const properties = require('../package.json');
const distance = require('../services/distance');


const controller={
    about:(req,res)=>{
        let aboutInfo={
            name:properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    getDistance:(req,res)=>{
        distance.find(req,res,(err,dist)=>{
            if(err) 
                res.send(err)
                res.json(dist);
        });
    }
};

module.exports=controller;