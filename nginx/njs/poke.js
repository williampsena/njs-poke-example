function authorizeApiKey(request) {
    if (_isValidApiKey(request)) return request.internalRedirect('@backend')

    request.return(401, 'Invalid api-key.')
}

function _isValidApiKey(request) {
    const apiKey = request.headersIn['api-key']

    if (!apiKey) {
        request.return(401, 'Missing api-key.')
        return false
    }

    return process.env.API_KEY == apiKey
}

export default { authorizeApiKey }
