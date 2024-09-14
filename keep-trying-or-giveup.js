function retry(c = 3, callback = async () => {}) {
    return async function (...args) {
        try {
            const response = await callback(...args);
            return response;
        } catch (e) {
            if (c > 0) {
                return retry(c - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    };
}

function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
        const timeout = new Promise((r) =>
            setTimeout(r, delay, Error('timeout'))
        );
        const functionCall = new Promise((r) =>
            r(callback(...args))
        );
        const response = await Promise.race([timeout, functionCall]).then(
            (response) => response
        );
        if (response instanceof Error) {
            throw response;
        }
        return response;
    };
}