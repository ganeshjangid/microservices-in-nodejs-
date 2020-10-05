'use Strict';

const controllers=require('./controllers');

module.exports=function(app){
    app.route('/about')
        .get(controllers.about);
    
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controllers.getDistance);    
}