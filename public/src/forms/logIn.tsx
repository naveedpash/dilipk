import React from "react";
import Form, { ISubmitEvent, UiSchema } from "react-jsonschema-form";
import { JSONSchema6 } from "json-schema";
import app from "../firebaseConfig";
import "bootstrap";

interface LogInData {
    email: string,
    password: string
};

// define schema
const logInSchema: JSONSchema6 = {
    "title": "",
    "description": "We thank you for your interest in joining the DILI-PK network.\nPlease fill the details below and we will send you and email with your password.",
    "type": "object",
    "properties": {
        "email": {
            "title": "Email Address",
            "type": "string"
        },
        "password": {
            "title": "Password",
            "type": "string"
        }
    }
};

// define UI
const logInUI: UiSchema = {
    "email": {
        "ui:widget": "email",
        "ui:options": {
            "inputType": "email"
        }
    },
    "password": {
        "ui:widget": "password"
    }
};

const log = (type: any) => console.log.bind(console, type);

const onSubmit = (e: ISubmitEvent<LogInData>) => {
    $("#logInSubmit").attr("disabled","true");
    $("#logInSubmit").prepend(
        '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>'
    );
    app.auth().signInWithEmailAndPassword(e.formData.email, e.formData.password)
    .then(() => {
        log("Logged In");
        $("#logInSubmit").removeAttr("disabled");
        $("#logInSubmit").children("span").remove();
        $("#logInModal").modal('toggle');
        $(".modal-backdrop").remove();
    })
    .catch((e: Error) => {
        console.log(e);
        $("#logInSubmit").removeAttr("disabled");
        $("#logInSubmit").children("span").remove();
    });
};

const logInForm = () => {
    return (
        <Form schema={logInSchema}
            uiSchema={logInUI}
            onSubmit={onSubmit}
            onError={log("Errors!")}>
            <button id="logInSubmit" type="submit" className="btn btn-info">
                Log In
            </button>
        </Form>
    )
}

export default logInForm();
