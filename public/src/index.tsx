import $ from "jquery";
import { render } from "react-dom";
import signUpForm from "./forms/signUp"
import logInForm from "./forms/logIn";

const log = (type: any) => console.log.bind(console, type);

const animationDuration = 500;
const animationEnd = "animationend webkitAnimationEnd";

$(document).ready(function() {
    //Transition Content on Menu Click
    $("#navigation").on('click', '.nav-link', function() {
        $("#navigation > .is-active").removeClass("is-active");
        $(this).addClass('is-active');
        // .navbar-items always have id of the pattern "link-<.content[id]>"
        const identification = $(this).attr('id')!.split('link-')[1];
        $("#console").text(identification);
        $(".container > .is-active").fadeOut(animationDuration, function() {
            $(this).removeClass("is-active");
            const targetHeight = $("#" + identification).height();
            $(".container").animate({height: targetHeight}, animationDuration);
            $("#" + identification).fadeIn(animationDuration, function() {
                $(this).addClass("is-active");
            });
        });
    });

    render(signUpForm,document.getElementById("signUpForm"));
    render(logInForm, document.getElementById("logInForm"));
});
