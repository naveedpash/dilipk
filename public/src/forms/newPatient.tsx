import React from "react";
import Form, { UiSchema } from 'react-jsonschema-form';
import { JSONSchema6 } from 'json-schema';
import uiSchema from "./uiSchemas";

// define schema
export const newPatientSchema: JSONSchema6 = {
    "title": "Register New Patient",
    "description": "Enter the following details to register a new patient suspected to have drug induced liver injury.",
    "type": "object",
    "properties": {
        "consent": {
            "title": "Has the Patient Consented?",
            "type": "string",
            "enum": ["Yes","No"]
        },
        "nic": {
            "title": "National Identity Card Number",
            "type": "string"
        },
        "particulars": {
            "title": "Patient Details",
            "type": "object",
            "properties": {
                "name": {
                    "title": "Patient Name",
                    "type": "string"
                },
                "age": {
                    "title": "Patient Age",
                    "type": "number",
                    "minimum": 1
                },
                "gender": {
                    "title": "Patient Gender",
                    "type": "string",
                    "enum": ["Male","Female"]
                }
            }
        },
        "drug": {
            "title": "Suspected Drug",
            "type": "object",
            "properties": {
                "name": {
                    "title": "Drug Name",
                    "type": "string",
                },
                "dose": {
                    "title": "Dose",
                    "type": "number"
                },
                "unit": {
                    "title": "Dosage Unit",
                    "type": "string",
                    "oneOf": [
                        {"const": "mg", "title": "Milligrams"},
                        {"const": "g", "title": "Grams"},
                        {"const": "mcg", "title": "Micrograms"},
                        {"const": "mL", "title": "Milliliters"}
                    ]
                }
            }
        },
        "rechallenged": {
            "title": "Drug Rechallenge",
            "type": "string",
//            "enum": ["Yes","No"]
            "properties": {
                "performed": {
                    "title": "Performed",
                    "type": "string",
                    "enum": ["Yes","No"]
                }
            },
//            "dependencies": {
//                "performed": {
//                    "oneOf": [
//                        {
//                            "properties": {
//                                "performed": {"enum": ["No"]}
//                            }
//                        },
//                        {
//                            "properties": {
//                                "performed": {"enum": ["Yes"]},
//                                "result": {"title": "Result","type": "string"}
//                            }
//                        }
//                    ]
//                }
//            }
        },
        "indication": {
            "title": "Indication",
            "type": "string"
        },
        "symptoms": {
            "title": "Symptoms on Presentation",
            "type": "object",
            "properties": {
                "jaundice": {
                    "title": "Jaundice",
                    "type": "string",
                    "enum": ["Yes","No"]
                },
                "pruritis": {
                    "title": "Pruritis",
                    "type": "string",
                    "enum": ["Yes","No"]
                },
                "pain": {
                    "title": "Abdominal Pain",
                    "type": "string",
                    "enum": ["Yes","No"]
                }
            }
        },
        "bilirubin": {
            "title": "Bilirubin",
            "type": "object",
            "properties": {
                "value": {
                    "title": "Value (mg/dL)",
                    "type": "number",
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
        },
        "antihavigm": {
            "title": "Anti-HAV IgM",
            "type": "object",
            "properties": {
                "value": {
                    "title": "Value",
                    "type": "string",
                    "enum": ["Reactive", "Non-Reactive", "Unavailable"]
                },
            },
            "dependencies": {
                "value": {
                    "oneOf": [
                        {
                            "properties": {
                                "value": {"enum": ["Unavailable"]}
                            }
                        },
                        {
                            "properties": {
                                "value": {"enum": ["Reactive"]},
                                "date": {"title": "Date", "type": "string"}
                            }
                        },
                        {
                            "properties": {
                                "value": {"enum": ["Non-Reactive"]},
                                "date": {"title": "Date", "type": "string"}
                            }
                        }
                    ]
                }
            }
        },
        "antihevigm": {
            "title": "Anti-HEV IgM",
            "type": "object",
            "properties": {
                "value": {
                    "title": "Value",
                    "type": "string",
                    "enum": ["Reactive", "Non-Reactive", "Unavailable"]
                },
            },
            "dependencies": {
                "value": {
                    "oneOf": [
                        {
                            "properties": {
                                "value": {"enum": ["Unavailable"]}
                            }
                        },
                        {
                            "properties": {
                                "value": {"enum": ["Reactive"]},
                                "date": {"title": "Date", "type": "string"}
                            }
                        },
                        {
                            "properties": {
                                "value": {"enum": ["Non-Reactive"]},
                                "date": {"title": "Date", "type": "string"}
                            }
                        }
                    ]
                }
            }
        },
        "hbsag": {
            "title": "HBsAg",
            "type": "object",
            "properties": {
                "value": {
                    "title": "Value",
                    "type": "string",
                    "enum": ["Reactive", "Non-Reactive", "Unavailable"]
                },
            },
            "dependencies": {
                "value": {
                    "oneOf": [
                        {
                            "properties": {
                                "value": {"enum": ["Unavailable"]}
                            }
                        },
                        {
                            "properties": {
                                "value": {"enum": ["Reactive"]},
                                "date": {"title": "Date", "type": "string"}
                            }
                        },
                        {
                            "properties": {
                                "value": {"enum": ["Non-Reactive"]},
                                "date": {"title": "Date", "type": "string"}
                            }
                        }
                    ]
                }
            }
        },
        "antihcvigm": {
            "title": "Anti-HCV IgM",
            "type": "object",
            "properties": {
                "value": {
                    "title": "Value",
                    "type": "string",
                    "enum": ["Reactive", "Non-Reactive", "Unavailable"]
                }
            },
            "dependencies": {
                "value": {
                    "oneOf": [
                        {
                            "properties": {
                                "value": {"enum": ["Unavailable"]}
                            }
                        },
                        {
                            "properties": {
                                "value": {"enum": ["Reactive"]},
                                "date": {"title": "Date", "type": "string"}
                            }
                        },
                        {
                            "properties": {
                                "value": {"enum": ["Non-Reactive"]},
                                "date": {"title": "Date", "type": "string"}
                            }
                        }
                    ]
                }
            }
        },
    }
};

// define onSubmit function
const log = (type: any) => console.log.bind(console, type);

// TODO: define onError function & validations

const newPatientForm = (schema: JSONSchema6, uischema: UiSchema) => {
    return (
        <Form schema={schema}
            uiSchema={uischema}
            onSubmit={log('Submitted')}
            onError={log('Errors!')} />
    )
}

export default newPatientForm(newPatientSchema, uiSchema);
