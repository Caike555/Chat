"use strict";
exports.__esModule = true;
function Register(req) {
    return new Promise(function (resolve, reject) {
        var CollectedData = {
            layout: 'main',
            return_type: 'signup',
            error: false,
            error_text: 'Something went wrong.',
            success_text: 'You have registered succesfully.',
            redirect_error: '/Signup',
            redirect_success: '/Chat'
        };
        resolve(CollectedData);
    });
}
exports["default"] = Register;
