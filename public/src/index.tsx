import $ from "jquery";
import { render } from "react-dom";
import app from "./firebaseConfig";
import signUpForm from "./forms/signUp"
import logInForm from "./forms/logIn";
import contactUsForm from "./forms/contactUs";
import newPatientForm from "./forms/newPatient";
import followUpForm from "./forms/followUp";
import mortalityForm from "./forms/mortality";

const animationDuration = 500;
// const animationEnd = "animationend webkitAnimationEnd";

// declare menu links
const menuForUser = '<a id="home" class="nav-link">Home</a><a id="registerNew" class=nav-link>Register New Patient</a><a id="followUp" class=nav-link>Enter FollowUp Labs</a><a id="mortality" class=nav-link>Register Mortality</a>';
const menuForNonUser  = '<a id="home" class="nav-link">Home</a>';
// declare menu buttons
const menuButtonForUser = '<button id="logOut" type="button" class="btn btn-danger"><strong>Log Out</strong></button>';
const menuButtonsForNonUser = '<button id="signUp" type="button" class="btn btn-primary mr-auto" data-toggle="modal" data-target="#signUpModal"> \
        <strong>Sign up</strong> \
    </button> \
    <button id="logIn" type="button" class="btn ml-auto" data-toggle="modal" data-target="#logInModal"> \
        Log in \
    </button>';

$(document).ready(function() {
    // Hide the forms section
    $("#forms").hide();

    //contact us form
    render(contactUsForm, document.getElementById("contactUs"));

    // auth functionality
    render(signUpForm,document.getElementById("signUpForm"));
    render(logInForm, document.getElementById("logInForm"));

    // initialise UI tracking variable
    let formsVisible: boolean = false;

    // manipulate UI based on auth state
    app.auth().onAuthStateChanged((user: any) => {
        $("#navigation").html(user ? menuForUser : menuForNonUser);
        $("#menuButtons").html(user ? menuButtonForUser : menuButtonsForNonUser);
        $("#logOut").click(() => {
            app.auth().signOut()
            .then(() => {
                if (formsVisible) {
                    $("#forms").fadeOut(animationDuration, () => {
                        $("#content").fadeIn(animationDuration);
                        formsVisible = false;
                    });
                }
            })
            .catch((e: Error) => console.log(e));
        });

        // MANIPULATE UI BASED ON MENU CLICKS
        /*
         * This code block has to be inside onAuthStateChanged() because
         * click events to added `nav-link`s will not be handled otherwise.
         */
        $("#navigation > .nav-link").click(function() {
            if (this.id == "home") {
                if (formsVisible) {
                    $("#forms").fadeOut({
                        duration: animationDuration,
                        complete: function() {
                            $("#content").fadeIn(animationDuration);
                            formsVisible = false;
                        }
                    })
                }
            } else {
                // Decide what to render before rendering it.
                console.log(this.id);
                let toRender: typeof newPatientForm;
                switch (this.id) { //`this` is the nav-link that was clicked
                    case "registerNew": { toRender = newPatientForm; break; }
                    case "followUp": { toRender = followUpForm; break;  }
                    case "mortality": { toRender = mortalityForm; break;  }
                }

                if (formsVisible) {
                    $("#formActual").fadeOut({
                        duration: animationDuration,
                        complete: function() {
                            render(toRender, document.getElementById("formActual"));
                            $("#formActual").fadeIn(animationDuration);
                        }
                    })
                } else {
                    $("#content").fadeOut({
                        duration: animationDuration,
                        complete: function() {
                            $("#forms").fadeIn({
                                duration: animationDuration,
                                complete: function() {
                                    formsVisible = true;
                                    render(toRender, document.getElementById("formActual"));
                                    $("#formActual").fadeIn(animationDuration);
                                }
                            })
                        }
                    })
                }
            }
        })
    });
});
