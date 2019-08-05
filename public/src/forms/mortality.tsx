import React from "react";
import Form, { UiSchema } from 'react-jsonschema-form';
import { JSONSchema6 } from 'json-schema';
import uiSchema from "./uiSchemas"

// define schema
const mortalitySchema: JSONSchema6 = {
    "title": "Register Mortality",
    "description": "Please enter the National ID Card number and date of death of the patient suspected to have deceased from drug induced liver injury",
    "type": "object",
    "properties": {
        "nic": {
            "title": "National Identity Card Number",
            "type": "string",
        },
        "mortalityDate": {
            "title": "Mortality Date",
            "type": "string"
        }
    }
};

// define onSubmit function
const log = (type: any) => console.log.bind(console, type);

// TODO: define onError function & validations

const mortalityForm = (schema: JSONSchema6, uischema: UiSchema) => {
    return (
        <Form schema={schema}
            uiSchema={uischema}
            onSubmit={log('Submitted')}
            onError={log('Errors!')} />
    )
};

export default mortalityForm(mortalitySchema, uiSchema);
