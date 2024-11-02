exports.handler = async (event) => {
    const message = event.queryStringParameters && event.queryStringParameters.message;
    const responseMessage = message ? `Hello, ${message}!` : "Hello, Cloud!";
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: responseMessage,
        }),
    };
};
