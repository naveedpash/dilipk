import $ from 'jquery';
import { render } from 'react-dom';
import newPatientForm from '../forms/newPatient';
import followUpForm from '../forms/followUp';
import mortalityForm from '../forms/mortality';

$(document).ready(function() {
    $("#mortality").click(function() {
        console.log("clicked");
        render(mortalityForm, document.getElementById("form"))
    });
    $("#followUp").click(function() {
        console.log("clicked");
        render(followUpForm, document.getElementById("form"));
    });
    $("#newPatient").click(function() {
        console.log("clicked");
        render(newPatientForm, document.getElementById("form"))
    });
});
