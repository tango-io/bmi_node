Body Mass Index
===============

Imperial BMI Formula
--------------------
In order to determinate BMI:

* Weight :kilogrmas.
* Height :meters.

### Public Methods

- weight();
- height();
- bmi();
- prime();
- prcnt();
- cases();

Example:

>bmi.weight(80,'k'); 
>bmi.height(1.7,'m');
>bmi.bmi();
>bmi.prime();
>bmi.prcnt();
>bmi.cases();

Results:

80                          // 80 kilograms
1.7                         // 1.7 meters
27.68166089965398           // your body mass index
1.1072664359861593          // bmi'
10.726643598615926          // you are 10% OVER your ideal weight
'Overweight'                // you have 'Overweight'


Metric Imperial BMI Formula
---------------------------

In order to determinate BMI:

* Weight :kilogrmas.
* Height :meters.

### Public Methods

- weight();
- height();
- bmi();
- prime();
- prcnt();
- cases();

Example:

>bmi.weight(120,'p'); 
>bmi.height(63,'i');
>bmi.bmi();
>bmi.prime();
>bmi.prcnt();
>bmi.cases();

Results:

54.4310844              // 54.43 kilograms
1.6001999999999998      // 1.600 meters
21.256827804660904      // your body mass index
0.8502731121864362      // bmi'
-14.97268878135638      // you are 14% UNDER your ideal weight
'Normal'                // you are 'Normal'
