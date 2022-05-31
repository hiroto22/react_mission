// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const proxy = require('http-proxy-middleware');
 
module.exports = function(app:any) {
    app.use(
        proxy('/signin', {target:"https://api-for-missions-and-railways.herokuapp.com",changeOrigin:true})
        );
    
    app.use(
        proxy('/users', {target:"https://api-for-missions-and-railways.herokuapp.com",changeOrigin:true})
        );
}
