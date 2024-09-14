// retry function
function retry(count = 3, callback = async () => {}) {
    return async function (...args) {
        let attempt = 0;
        while (attempt <= count) {
            try {
                return await callback(...args);
            } catch (e) {
                attempt++;
                if (attempt > count) {
                    throw e; // throw error after all retries
                }
            }
        }
    };
}

// timeout function
function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), delay)
        );

        const callbackPromise = callback(...args);

        return await Promise.race([callbackPromise, timeoutPromise]);
    };
}
