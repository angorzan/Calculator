import { BinaryCalculator } from "./BinaryCalculator.js";

import { DecCalculator } from "./DecCalculator.js";

import "./style.scss";



$(document).ready(function() {
    const bitCalc = new BinaryCalculator(".binary-calculator");
    const decCalc = new DecCalculator(".dec-calculator");

    let ta = $('.dec-calculator > label');
    console.log(ta);

    let plus = $('.dec-calculator .operator-bar').find('span');
    console.log(plus);













});





