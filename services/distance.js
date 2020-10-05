'use strict';

const request=require('request');

const apiKey="hkCt1nW1wF1rppaEmoor7T9G4ta7R5wFSu8l1dokNz8y53gGZHDneWWVosbEYirC";
const zipcodeUrl='https://www.zipcodeapi.com/rest/';

const distance={
    find:(req,res,next)=>{
        request(zipcodeUrl+apiKey
               + '/distance.json/' + req.params.zipcode1 + '/'  
               + req.params.zipcode2 + '/mile',
        function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({distance: -1});
                }
        });
    }
}

module.exports = distance;