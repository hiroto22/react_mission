export const proxy = require('http-proxy-middleware');
 
module.exports = function(app:any) {
    app.use(
        proxy('/signin', {target:"https://api-for-missions-and-railways.herokuapp.com",changeOrigin:true})
        );
    
    app.use(
        proxy('/users', {target:"https://api-for-missions-and-railways.herokuapp.com",changeOrigin:true})
        );
}