angular-datepicker-align-right
==============================

Currently bootstrap supports aligning datepicker popup only to the left of the input field.  
This can be big problem when input field is at the right edge of screen and datepicker popup goes off screen.

Directive `datepicker-position-right` aligns angular datepicker popup to the right end of input field.
Directives in this module were developed in non-invasive fashion, which means no bootstrap code is changed, and when bootstrap starts supporting right align, this directives can be easily removed.

### Setup
We have to override bootstrap datepicker template in order to adjust it a little bit.

How to override bootstrap template:
- in file where app module is declared add following line:  `angular.module("template/datepicker/popup.html", []);`.
- bootstrap will now look for template in /template/datepicker/popup.html, so create those directories and that file and copy bootstrap datepicker popup template into popup.html

Now we can change bootstrap template a little bit: add `datepicker-position-right-inner` attribute to top element in popup.html (it is `<ul>`).

Now everything is ready for usage!

### Usage
In order to align datepicker popup to the right, just add attribute 'datepicker-position-right' to the input field that is using datepicker popup.

Input field with datepicker popup aligned to the left:
```
<input type="text" datepicker-popup ng-model="someDate"/>
```

Input field with datepicker popup aligned to the right:
```
<input type="text" datepicker-popup ng-model="someDate" datepicker-position-right/>
```



