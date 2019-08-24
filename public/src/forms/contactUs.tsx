import React from "react";
import Form, { UiSchema } from 'react-jsonschema-form';
import app from "../firebaseConfig";
import { JSONSchema6 } from "json-schema";

// define schema
const contactUsSchema: JSONSchema6 = {
    title: 'Contact Us',
    type: "object",
    properties: {
        "name": {
            title: 'Name',
            type: "string"
        },
        "email": {
            title: 'Email',
            type: "string"
        },
        "subject": {
            title: 'Subject',
            type: "string"
        },
        "message": {
            title: 'Message',
            type: "string"
        }
    }
};

// define UI
const uiSchema: UiSchema = {
    "email": {
        "ui:widget": "email",
        "ui:options": {
            "inputType": "email"
        }
    },
    "message": {
        "ui:widget": "textarea"
    }
};

const log = (type: any) => console.log.bind(console, type);

const contactUsForm = () => {
    return (
        <Form schema={contactUsSchema}
            uiSchema={uiSchema}
            onSubmit={log("Submitted")}
            onError={log("Errors!")}>
            <button type="submit">Submit</button>
        </Form>
    )
};

export default contactUsForm();
