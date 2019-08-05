import $ from "jquery";
import { render } from "react-dom";
import app from "./firebaseConfig";
import signUpForm from "./forms/signUp"
import logInForm from "./forms/logIn";
// const animationDuration = 500;
// const animationEnd = "animationend webkitAnimationEnd";

$(document).ready(function() {
    //Transition Content on Menu Click
    //    $("#navigation").on('click', '.nav-link', function() {
    //        $("#navigation > .is-active").removeClass("is-active");
    //        $(this).addClass('is-active');
    //        // .navbar-items always have id of the pattern "link-<.content[id]>"
    //        const identification = $(this).attr('id')!.split('link-')[1];
    //        $("#console").text(identification);
    //        $(".container > .is-active").fadeOut(animationDuration, function() {
    //            $(this).removeClass("is-active");
    //            const targetHeight = $("#" + identification).height();
    //            $(".container").animate({height: targetHeight}, animationDuration);
    //            $("#" + identification).fadeIn(animationDuration, function() {
    //                $(this).addClass("is-active");
    //            });
    //        });
    //    });

    render(signUpForm,document.getElementById("signUpForm"));
    render(logInForm, document.getElementById("logInForm"));

    app.auth().onAuthStateChanged((user: any) => {
        if (user) {
            const linkNew = $('<a id="registerNew" class=nav-link>Register New Patient</a>'),
                linkFollow = $('<a id="followUp" class=nav-link>Enter FollowUp Labs</a>'),
                linkMortality = $('<a id="mortality" class=nav-link>Register Mortality</a>');
            $("#navigation").append(linkNew, linkFollow, linkMortality);
            return;
        }
    });
});
