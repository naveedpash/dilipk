import React from "react";
import { FieldTemplateProps, ObjectFieldTemplateProps, UiSchema, WidgetProps } from "react-jsonschema-form";
import  InputMask from "react-input-mask";

function LabTemplate(props: ObjectFieldTemplateProps) {
    return (
        <div className="row align-items-center">
            <h5 className="col-sm-3">
                {props.title}
            </h5>
            {props.properties.map(element => <div className="col-sm">{element.content}</div>)}
        </div>
    )
}

const uiSchema: UiSchema = {
    "consent": {
        "ui:widget": "radio"
    },
    "nic": {
        "ui:widget": (props: WidgetProps) => {
            return (
                <InputMask mask="99999-9999999-9"
                    maskChar="_"
                    className="form-control"
                    type="text"
                    pattern="\d{5}-\d{7}-\d"
                    inputMode="numeric"
                    value={props.value}
                    required={props.required}
                    onChange={(event) => props.onChange(event.target.value)}
                />
            )
        }
    },
    "particulars": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "gender": {
            "ui:widget": "radio"
        }
    },
    "drug": {
        "ui:ObjectFieldTemplate": LabTemplate
    },
    "indication": {
        "ui:widget": "textarea"
    },
    "rechallenged": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "performed": { "ui:widget": "radio" },
//        "result": { "ui:widget": "textarea" }
    },
    "symptoms": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "jaundice": {"ui:widget": "radio"},
        "pruritis": {"ui:widget": "radio"},
        "pain": {"ui:widget": "radio"}
    },
    "bilirubin": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "bilirubinDate":{
            "ui:widget": "date"
        }
    },
    "ast": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "astDate":{
            "ui:widget": "date"
        }
    },
    "alt": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "altDate":{
            "ui:widget": "date"
        }
    },
    "alkPhos": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "alkPhosDate":{
            "ui:widget": "date"
        }
    },
    "pt": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "ptDate":{
            "ui:widget": "date"
        }
    },
    "antihavigm": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "value": {
            "ui:widget": "radio"
        },
        "date": {
            "ui:widget": "date",
        },
    },
    "antihevigm": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "value": {
            "ui:widget": "radio"
        },
        "date": {
            "ui:widget": "date",
        },
    },
    "hbsag": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "value": {
            "ui:widget": "radio"
        },
        "date": {
            "ui:widget": "date",
        },
    },
    "antihcvigm": {
        "ui:ObjectFieldTemplate": LabTemplate,
        "value": {
            "ui:widget": "radio"
        },
        "date": {
            "ui:widget": "date",
        },
    },
    "mortalityDate":{
        "ui:widget": "date"
    }
};

export default uiSchema;
