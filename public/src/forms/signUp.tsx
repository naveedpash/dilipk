import React, { Component } from "react";
import Form, { UiSchema } from "react-jsonschema-form";
import { JSONSchema6 } from "json-schema";

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

const signUpForm = (schema: JSONSchema6, uiSchema: UiSchema) => {
    return (
        <Form schema={schema}
            uiSchema={uiSchema}
            onSubmit={log("Submitted")}
            onError={log("Errors!")} />
    );
}

export default signUpForm(schema, uiSchema);
