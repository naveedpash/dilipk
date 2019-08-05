import React from "react";
import Form, { UiSchema } from 'react-jsonschema-form';
import { JSONSchema6 } from 'json-schema';
import uiSchema from "./uiSchemas";

// define schema
const followUpSchema: JSONSchema6 = {
    "title": "Enter Follow Up Liver Function Tests",
    "description": "Please enter the laboratory values of the registered patient suspected to have drug induced liver injury",
    "type": "object",
    "properties": {
        "nic": {
            "title": "National Identity Card Number",
            "type": "string"
        },
        "bilirubin": {
            "title": "Bilirubin",
            "type": "object",
            "properties": {
                "value": {
                    "type": "number",
                    "title": "Value (mg/dL)",
                    "minimum": 0
                },
                "bilirubinDate": {
                    "title": "Date",
                    "type": "string"
                }
            }
        },
        "ast": {
            "title": "AST",
            "type": "object",
            "properties": {
                "value": {
                    "title": "Value (mg/dL)",
                    "type": "number",
                    "minimum": 0
                },
                "astDate": {
                    "title": "Date",
                    "type": "string"
                }
            }
        },
        "alt": {
            "title": "ALT",
            "type": "object",
            "properties": {
                "value": {
                    "title": "Value (mg/dL)",
                    "type": "number",
                    "minimum": 0
                },
                "altDate": {
                    "title": "Date",
                    "type": "string"
                }
            }
        },
        "alkPhos": {
            "title": "Alkaline Phosphate",
            "type": "object",
            "properties": {
                "value": {
                    "title": "Value (mg/dL)",
                    "type": "number",
                    "minimum": 0
                },
                "alkPhosDate": {
                    "title": "Date",
                    "type": "string"
                }
            }
        },
        "pt": {
            "title": "PT",
            "type": "object",
            "properties": {
                "value": {
                    "title": "Value",
                    "type": "number",
                    "minimum": 0
                },
                "ptDate": {
                    "title": "Date",
                    "type": "string"
                }
            }
        }
    }
};

// define onSubmit function
const log = (type: any) => console.log.bind(console, type);

// TODO: define onError function & validations

const followUpForm = (schema: JSONSchema6, uischema: UiSchema) => {
    return (
        <Form schema={schema}
            uiSchema={uischema}
            onSubmit={log('Submitted')}
            onError={log('Errors!')} />
    )
};

export default followUpForm(followUpSchema, uiSchema);
