// Status Codes
const STATUS_CODES = {
    SUCCESS: 200,
    ERROR: 400,
    UNAUTHENTICATED: 401,
    NOT_FOUND: 404,
    VALIDATION_FAILED: 422,
    INTERNAL_SERVER_ERROR: 500
};

const ERROR_MESSAGES = {
    ERROR: "Something Went Wrong",
    UNAUTHENTICATED: "Unauthenticated",
    UNAUTHORIZED: "Unauthorized",
    NOT_FOUND: "Not Found",
    VALIDATION_FAILED: "Validation Failed",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    UNKNOWN_ERROR: "Unknown Error",
    SUCCESS: "Success",
};

module.exports = { 
    STATUS_CODES,
    ERROR_MESSAGES 
}