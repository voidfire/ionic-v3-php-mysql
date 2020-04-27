Create a database on your server's mysql 

I named mine ionicdb with a table users 
And fields id,username,password,telephone,email
with types int(11), varchar(255), varchar(255), varchar(25), varchar(50) respectively
(id needs to be primary key with auto increment)

Put the ionicphp files on the server, change the dbconnect.php details to your database details if you haven't named/set them like mine above

cd into ionic-app and do npm install as I haven't uploaded node_modules on this repo
ionic-app expects the site with the php files to be named http://ionicphp.test

You will need to change the urls inside ionic-app to your own domain names in order for the application to be able to reach your php files

Then you can do ionic serve from ionic-app folder and test the functionality 
or build your android/ios apps according to ionics documentation

This is an edited version of a tutorial I found on the internet that proved to be super annoying the code was posted with many issues and wrong formatting and and oh god

PS: 
You can find the said tutorial here https://ionicdon.com/setup-login-register-ionic3-using-php-mysql but 
I wouldn't suggest following that to the letter as you will encounter many errors from typos
to wrong/buggy php code.
