function buildResult(isSuccess, httpStatusCode, message, data=null){
    return {
        isSuccess,
        httpStatusCode,
        responseBody:{
            error: message,
            data: data || null
        }
    }
}

export default {buildResult}