import React from "react";
import Form, { ISubmitEvent, UiSchema } from "react-jsonschema-form";
import { JSONSchema6 } from "json-schema";
import app from "../firebaseConfig";

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
    const email = e.formData.email;
    const password = e.formData.password;
    app.auth().signInWithEmailAndPassword(email, password)
    .catch((e: Error) => alert(e));
};

const logInForm = () => {
    return (
        <Form schema={logInSchema}
            uiSchema={logInUI}
            onSubmit={onSubmit}
            onError={log("Errors!")} />
    )
}

export default logInForm();
