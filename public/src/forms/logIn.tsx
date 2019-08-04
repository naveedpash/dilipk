import React, { Component } from "react";
import Form, { UiSchema } from "react-jsonschema-form";
import { JSONSchema6 } from "json-schema";

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

const logInForm = (schema: JSONSchema6, uiSchema: UiSchema) => {
    return (
        <Form schema={schema}
            uiSchema={uiSchema}
            onSubmit={log("Submitted")}
            onError={log("Errors!")} />
    )
}

export default logInForm(logInSchema, logInUI);
