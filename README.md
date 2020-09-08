# Bar Chart project
*for the Lighthouse Labs Prep modules*

---

## Scope
Implement jQuery to create a bar chart API. The user would use functions in javascript with data, various options and an element to draw the chart inside.

Options should include:
* width and height of chart //should I do this part?
* horizontal or vertical chart
* reset 0 (ie start the y axis off at greater than zero)
* bars
  * color: roygbiv, named themes(1-3), custom as array or each
  * outline: none, ??
* display of value
  * show: yes, no
  * location: bar-end, bar-past(just above or right of the bar), bar-start, bar-center, 
  * font size: default(how to define this?, by location?), custom
  * font-color: black, custom
  * orientation: in-line with bar, horizontal, vertical 
  * round-type: round, ceil, floor
  * precision: 2, integer 
* display of bar title
  * show: yes, no
  * text: 
  * location: bottom, inline, top
  * font size:
  * font-style: underline, no underline
  * font-color: black, custom
* display of y-axis
  * show: yes, no
  * range:
  * range-label
    * precision:
    * orientation:  
  * tick options: tick, none
  * text-title
    * show: yes, no
    * text:
    * font-size: smart default, custom
    * font-color: black, custom

* ```function drawBarChart(data, options, element);```
  * ```data = [...Arr]//array of values of some length ```
  * ```options = { object detailing the options selected }```
  * ```element = element in which to insert this chart```

for original prompt find below:

---
## **Project scope**

This project will consist of building a library that will allow other developers to generate bar charts on their web pages using HTML, CSS and JavaScript. You'll also be using jQuery to access and manipulate the DOM in order to draw the charts.

There are intentionally no visuals provided with this project, and many aspects of the UI are left intentionally vague. We are leaving you freedom to get creative with the UI. We encourage you to make the charts look presentable and even add extra flare with things like CSS transitions and animations.

## **Getting Started**
Read through the jQuery documentation or find some   simple tutorials on jQuery. This will help you get a  handle on how to access and create DOM elements using jQuery.

Commit at every step. No commit is too small, but at the same time commit code that is not going to throw an error. One massive commit with all your work is going to result in an unsatisfactory submission.
Don't look at the code for other charting libraries to see how they're implemented, because it will either be overwhelming, overkill, or cheating.
This should be completed in only HTML, CSS and JavaScript w/ jQuery. You may find references to using SVG or Canvas for your solution. However we strongly advise that you stay away from those approaches.

Try to break your solution down into small functions that will work together to solve the problem. One massive function will not be accepted, for example.

## **Functional Requirements**
You should have a simple API to draw a bar chart. The function should be used by your HTML page to render the chart into your demo page. The signature of the function should be as follows:

```drawBarChart(data, options, element);```
* The data parameter will be the data the chart should work from Start with just an Array of numbers
e.g. [1, 2, 3, 4, 5]

* The options parameter should be an object which has options for the chart.
e.g. width and height of the bar chart

* The element parameter should be a DOM element or jQuery element that the chart will get rendered into.

## **Display Requirements**
### **Bar Chart**
Display a list of single values, horizontally as a bar chart

* Numerical values should also be displayed inside of the bar
* The position of values should be customizable too:
  * Top, centre or bottom of the bar.

Bar sizes should be dependent on the data that gets passed in
* Bar `width` should be dependent on the total amount of values passed.
* Bar `height` should be dependent on the values of the data.

Bar properties that should be customizable:

* Bar Colour
* Label Colour
* Bar spacing (space between bars)
* Bar Chart axes
* X-axis should show labels for each data value
* Y-axis should show ticks at certain values

Think about how you would need to structure your data to associate a label to each value

Think about where you would configure these values. Should they be part of the data or the options to the bar chart function.
* The title of the bar chart should be able to be set and shown dynamically

The title of the bar chart should also be customizable:

* Font Size
* Font Colour
* Multiple Value (Stacked) bar charts
* Allow the user to pass multiple values for each bar.

Think about how you would need to structure this data compared to a single bar chart.
This should also support all the features of the single bar chart, including

Customizable bar colours, per value
Customizable label colours


## Multiple Value (Stacked) bar charts
Allow the user to pass multiple values for each bar.

* Think about how you would need to structure this data compared to a single bar chart.

This should also support all the features of the single bar chart, including

* Customizable bar colours, per value
* Customizable label colours
