const host = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOSTNAME}${process.env.REACT_APP_API_BASEPATH}`; 

const API_CONFIG = {
    USER_CREATE: {
        url: `${host}user`,
        type: 'post',
        headers: null,
        isProtected: false,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: 'Hi! You have been successfully registered',
            error: {
                400: 'Please enter a valid Username/Password, and Name',
                409: 'Please login with your username/password as this email is already registered with us',
            },
        }
    },
    USER_UPDATE: {
        url: `${host}user`,
        type: 'put',
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: 'Hi! User has been updated successfully',
            error: {
                401: 'Please retry the forgot password again, your time to reset password has expired',
                403: 'An event has been logged. You are trying to use an invalid verification code to reset the password',
            },
        }
    },
    USER_DETAILS: {
        url: `${host}user`,
        type: 'get',
        hasLoader: false,
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: '',
            error: {
                500: 'Please refresh the page. We have encountered an error',
            },
        }
    },
    USER_LOGIN: {
        url: `${host}user/login`,
        type: 'post',
        headers: null,
        isProtected: false,
        isJson: false,
        urlParams: null,
        body: null,
        message: {
            success: 'Hi! Welcome to UTV',
            error: {
                400: 'Please enter your valid Username/Password',
                401: 'Please enter your username and password',
                403: 'Please wait for sometime. You have been blocked due to exceeded number of failed attempts',
            },
        }
    },
    USER_SEND_VERIFICATION_CODE: {
        url: `${host}user/{username}/verification`,
        type: 'get',
        headers: null,
        isProtected: false,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: 'Hi! A verification code has been sent to your email address',
            error: {
                400: 'You are not a registered user. Please register yourself',
            },
        }
    },
    USER_VERIFY: {
        url: `${host}user/verify`,
        type: 'post',
        headers: null,
        isProtected: false,
        isJson: false,
        urlParams: null,
        body: null,
        message: {
            success: 'Please enter a new password!',
            error: {
                400: 'You have entered an invalid verification code',
            },
        }
    },
    USAGE_QUICK_STATS: {
        url: `${host}usage`,
        type: 'get',
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: '',
            error: {
                500: 'Please try again after some time. Engineers are at work!'
            },
        }
    },
    PAYOUTS_STATS: {
        url: `${host}/admin/payouts`,
        type: 'get',
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: '',
            error: {
                500: 'Please try again after some time. Engineers are at work!'
            },
        }
    },
    PAYOUTS_SEND: {
        url: `${host}/admin/payouts`,
        type: 'post',
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: 'Payouts sent successfully',
            error: {
                500: 'Please try again after some time. Engineers are at work!'
            },
        }
    },
    OVERLAYS_LIST: {
        url: `${host}overlay`,
        type: 'get',
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: '',
            error: {
                500: 'Please try again after some time. Engineers are at work!'
            },
        }
    },
    OVERLAY_CREATE: {
        url: `${host}overlay`,
        type: 'post',
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        message: {
            success: 'Overlay has been created successfully',
            error: {
                400: 'You are not authorized to create an Overlay',
                500: 'Please try again after some time. Engineers are at work!',
            },
        }
    },
    OVERLAY_DETAILS: {
        url: `${host}overlay/{overlayId}`,
        type: 'get',
        isProtected: true,
        isJson: true,
        message: {
            success: '',
            error: {
                400: 'Please login again, your token has expired',
                401: 'You do not have permissions to edit this overlay',
                500: 'Please try again after some time. Engineers are at work!',
            },
        }
    },
    OVERLAY_UPDATE: {
        url: `${host}overlay/{overlayId}`,
        type: 'put',
        isProtected: true,
        isJson: true,
        message: {
            success: 'Overlay saved successfully',
            error: {
                400: 'Please login again, your token has expired',
                401: 'You do not have permissions to edit this overlay',
                500: 'Please try again after some time. Engineers are at work!',
            },
        }
    },
    OVERLAYS_DELETE: {
        url: `${host}overlay/{overlayId}`,
        type: 'delete',
        isProtected: true,
        isJson: false,
        message: {
            success: 'Overlay deleted successfully',
            error: {
                400: 'Please login again, your token has expired',
                401: 'You do not have permissions to delete this overlay',
                500: 'Please try again after some time. Engineers are at work!',
            },
        }
    },
    OVERLAY_PREVIEW: {
        url: `${host}overlay/preview/`,
    },
    LINKS_LIST: {
        url: `${host}link`,
        type: 'get',
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: '',
            error: {
                500: 'Please try again after some time. Engineers are at work!'
            },
        }
    },
    LINK_CREATE: {
        url: `${host}link`,
        type: 'post',
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        message: {
            success: 'Link created successfully',
            error: {
                400: 'You are not authorized to create a Link',
                500: 'Please try again after some time. Engineers are at work!',
            },
        }
    },
    LINK_UPDATE: {
        url: `${host}link/{linkId}`,
        type: 'put',
        isProtected: true,
        isJson: true,
        message: {
            success: 'Link saved successfully',
            error: {
                400: 'Please login again, your token has expired',
                401: 'You do not have permissions to edit this link',
                500: 'Please try again after some time. Engineers are at work!',
            },
        }
    },
    LINK_DELETE: {
        url: `${host}link/{linkId}`,
        type: 'delete',
        isProtected: true,
        isJson: false,
        message: {
            success: 'Link deleted successfully',
            error: {
                400: 'Please login again, your token has expired',
                401: 'You do not have permissions to delete this link',
                500: 'Please try again after some time. Engineers are at work!',
            },
        }
    },
    UPLOAD_FILE: {
        url: `${host}upload`,
        type: 'post',
        isProtected: true,
        isJson: false,
        message: {
            success: 'File uploaded successfully',
            error: {
                400: 'Please login again, your token has expired',
                401: 'You do not have permissions to upload the file',
                500: 'Please try again after some time. Engineers are at work!',
            },
        }
    },
    UPGRADE_MEMBERSHIP: {
        url: `${host}membership/order`,
        type: 'post',
        isProtected: true,
        isJson: true,
        message: {
            success: 'Order verified successfully, upgrading your membership',
            error: {
                400: 'Please login again, your token has expired',
                401: 'You do not have permissions to create this order',
                500: 'Please try again after some time. Engineers are at work!',
            },
        }
    },
};

export default API_CONFIG;