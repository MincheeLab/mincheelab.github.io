www
===

Minchee Foundation website

original Munter theme from http://www.blacktie.co/2013/10/munter-one-page-theme/


To install and run dev server:

```bash
npm install
cd src
bower install
gulp serve
```

To push in prod:

```bash
cd src
gulp build
cd ..
git commit -a -m "your commit message here..."
git push
```


old bower (bootstrap based)
{
  "name": "src",
  "private": true,
  "dependencies": {
    "bootstrap-sass-official": "3.2.0+2",
    "modernizr": "2.8.3",
    "jquery": "2.1.1",
    "font-awesome": "4.2.0",
    "jquery.easing": "~1.3.0",
    "angular": "~1.2.24",
    "angular-route": "~1.2.24",
    "angular-sanitize": "~1.2.24",
    "angular-animate": "~1.2.24",
    "angular-cookies": "~1.2.24",
    "angular-ui-router": "~0.2.11",
    "restangular": "~1.4.0",
    "angular-bootstrap": "~0.11.0",
    "ng-token-auth": "~0.0.21",
    "angular-translate": "2.4.0",
    "angular-localization": "~1.0.2"
  },
  "devDependencies": {},
  "resolutions": {
    "jquery": "2.1.1",
    "angular": "~1.2.24",
    "angular-translate": "2.4.0"
  }
}
