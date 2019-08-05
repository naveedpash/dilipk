import React from "react";
import Form, { ISubmitEvent, UiSchema } from "react-jsonschema-form";
import { JSONSchema6 } from "json-schema";
import app from "../firebaseConfig";

// define schema
const schema: JSONSchema6 = {
    "title": "",
    "description": "We thank you for your interest in joining the DILI-PK network.\nPlease fill the details below and we will send you and email with your password.",
    "type": "object",
    "properties": {
        "name": {
            "title": "Your Name",
            "type": "string"
        },
        "institution": {
            "title": "Your Institution",
            "type": "string"
        },
        "email": {
            "title": "Email Address",
            "type": "string"
        }
    }
};

const uiSchema: UiSchema = {
    "email": {
        "ui:widget": "email",
        "ui:options": {
            "inputType": "email"
        }
    }
};

const log = (type: any) => console.log.bind(console, type);

const sendNewUserAlert = app.functions().httpsCallable("sendNewUserAlert");

interface SignUpData {
    name: string,
    institution: string,
    email: string
};

const onSubmit = (e: ISubmitEvent<SignUpData>) => {
    sendNewUserAlert(e.formData)
    .then((result: any) => { alert(result) })
    .catch((error: any) => { alert(error.message) });
};

const signUpForm = () => {
    return (
        <Form schema={schema}
            uiSchema={uiSchema}
            onSubmit={onSubmit}
            onError={log("Errors!")} />
    );
}

export default signUpForm();
