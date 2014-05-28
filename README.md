datepicker-position
==============================

Currently bootstrap supports aligning datepicker popup only to the left of the input field.  
This can be big problem when input field is at the right edge of screen and datepicker popup goes off the screen.

Directive `datepicker-position` offers different alignments for angular datepicker popup with regard to the input field.
Only alignment currently supported (except default left) is to the right.
Directives in this module were developed in non-invasive fashion, which means no bootstrap code is changed, and when bootstrap starts supporting different alignments, this directives can be easily removed.

### Setup
Only file you need is datepicker-position.js, all other files are just for example!

Copy datepicker-position.js file to your angular application, add it to index.html and add module as dependency of application module.

We have to override bootstrap datepicker template in order to adjust it a little bit.

How to override bootstrap template:
- in file where app module is declared add following line:  `angular.module("template/datepicker/popup.html", []);`.
- bootstrap will now look for template in /template/datepicker/popup.html, so create those directories and that file and copy bootstrap datepicker popup template into popup.html

Now we can change bootstrap template a little bit: add `datepicker-position-inner` attribute to top element in popup.html (it is `<ul>`).

Now everything is ready for usage!

### Usage
In order to align datepicker popup to the right, just add attribute 'datepicker-position' with value 'right' to the input field that is using datepicker popup.

Input field with datepicker popup aligned to the left:
```
<input type="text" datepicker-popup ng-model="someDate"/>
```

Input field with datepicker popup aligned to the right:
```
<input type="text" datepicker-popup ng-model="someDate" datepicker-position="right"/>
```


### Example
You can run example by running local server. One easy way is to use python's built in server: `python -m SimpleHTTPServer`.
