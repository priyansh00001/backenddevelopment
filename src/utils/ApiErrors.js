// Define a custom error class for API errors
class ApiError extends Error {
    // Constructor to initialize the error object
    constructor(
        statusCode, // HTTP status code for the error (e.g., 404, 500)
        message = "Something went wrong", // Default error message
        errors = [], // Array to hold specific error details
        stack = "" // Optional stack trace
    ){
        super(message) // Call the parent Error class constructor with the message
        this.statusCode = statusCode // Set the HTTP status code
        this.data = null // Placeholder for any additional data (not used here)
        this.message = message // Set the error message
        this.errors = errors // Set the array of error details

        // If a stack trace is provided, use it; otherwise, capture the current stack trace
        if(stack){
            this.stack = stack // Use the provided stack trace
        }else {
            Error.captureStackTrace(this , this.constructor) // Capture the stack trace for debugging
        }
    }
}

// Export the ApiError class for use in other files
export { ApiError }