function removeWhitespace(str) {
    return str.split(/\s+/).join(' ').trim();
}

function errorHandle(res, error) {

    // console.log(error);

    let errorMessage = error || 'Ocurrió un error. Intente nuevamente';
    if (typeof error.errors !== 'undefined') {
        errorMessage = error.errors.map((error) => { return { 'field': error.path, 'message': error.message } })
    }

    return res.status(400).json({
        success: false,
        message: errorMessage,
        error: error.message
    })
}

module.exports = {
    removeWhitespace,
    errorHandle
}