angular-facebook-directives-site
================================

It's a demo site to test angular-facebook-directive, where you could check the implementation of the angularjs directives with facebook sdk.

Run demo (locally)
================

If you are a Mac OSX || Linux user, you can follow the following step (from terminal)

1. The demo have configure a demo application in Facebook, only the domiain groo.dev it's autorized to access. You have to add the domain `groo.dev` to hosts file in your computer.
    1. Open the hosts file with your favorite editor `/etc/hosts`
    2. Add the row `127.0.0.1	groo.dev` to the list of hosts 
    3. Save and close the file
2. Get demo files `curl -O http://assets.aliongroo.com/ng/realeases/angular-facebook-directive-site-0.1.0.zip`
3. Unzip the file `unzip angular-facebook-directive-site-0.1.0.zip -d demo-site`
4. Change to the demo folder `cd demo-site`  
5. Run a SimpleHTTPServer `python -m SimpleHTTPServer`
6. Open you prefer your browser and enter `http://groo.dev:8000`
    
Work in progress:
=================
- Isolate angular component from demo site
  - angular-facebook-directives
  - angular-facebook-directive-demo 
- Specifications
- Testing E2E

License
=======
[MIT](http://opensource.org/licenses/MIT)