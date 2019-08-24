import React from "react";
import Form, { ISubmitEvent, UiSchema } from 'react-jsonschema-form';
import { JSONSchema6 } from 'json-schema';
import uiSchema from "./uiSchemas"
import app from "../firebaseConfig";
import "bootstrap";

interface MortalityData {
    nic: string,
    mortalityDate: string
};

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

//define notification toast
const toast = $(
    '<div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">\
    <div class="toast" style="position: absolute; top: 0; right: 0;">\
    <div class="toast-header">\
    <img src="" class="rounded mr-2" alt="...">\
    <strong class="mr-auto">Bootstrap</strong>\
    <small>11 mins ago</small>\
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\
    <span aria-hidden="true">&times;</span>\
    </button>\
    </div>\
    <div class="toast-body">\
    Hello, world! This is a toast message.\
    </div>\
    </div>\
    </div>');

// define onSubmit function
const onSubmit = (e: ISubmitEvent<MortalityData>) => {
    // TODO: check if current NIC is already a registered mortality
    $("#registerMortality").attr("disabled","true");
    $("#registerMortality").prepend(
        '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>'
    );
    app.firestore().collection("mortality").doc(e.formData.nic).set({
        mortalityDate: new Date(e.formData.mortalityDate)
    })
    .then(() => {
        log("Mortality Registered");
        $("#registerMortality").removeAttr("disabled");
        $("#registerMortality").children("span").remove();
        $("#content").prepend(toast);
        toast.toast('show');
    })
    .catch((e: Error) => {
        log(e);
        alert("There was a problem registering this mortality.\nPlease check your internet connection and try again later.");
    });
}

// TODO: define onError function & validations
const log = (type: any) => console.log.bind(console, type);

const mortalityForm = (schema: JSONSchema6, uischema: UiSchema) => {
    return (
        <Form schema={schema}
            uiSchema={uischema}
            onSubmit={onSubmit}
            onError={log('Errors!')}>
            <button id="registerMortality" type="submit" className="btn btn-info">
                Register Mortality
            </button>
        </Form>
    )
};

export default mortalityForm(mortalitySchema, uiSchema);
