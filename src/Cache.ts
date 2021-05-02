import redis from "redis";

const cacheClient = redis.createClient();

class Cache {

    sadd(key: String, values: { [key: string]: any}, timeExpiration: Number) {
        // @ts-ignore
        values = values.map(value => JSON.stringify(value));
        // @ts-ignore
        return new Promise((resolve, reject) => {
            // @ts-ignore
            cacheClient.sadd(key, values, async (error) => {
                if (error) {
                    reject(error);
                    return;
                }
                
                // @ts-ignore
                await this.setExpirationTimeInKey(key, timeExpiration);
                resolve(values);
            });
        });
    }

    smembers(key: string) {
        return new Promise((resolve, reject) => {
            cacheClient.smembers(key, (error, values) => {
                if (error) {
                    reject(error);
                    return;
                }

                if (values == null) {
                    resolve(null);
                    return;
                }

                values = values.map(value => JSON.parse(value));
                resolve(values);
            });
        });
    }

    get(key: string) {
        return new Promise((resolve, reject) => {
            cacheClient.get(key, (error, values) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(values);
            });
        });
    }

    setExpirationTimeInKey(key: string, timeExpiration: Number) {
        return new Promise((resolve, reject) => {
            // @ts-ignore
            cacheClient.expire(key, timeExpiration, (error) => {
                if (error) {
                    reject(error);
                    return;
                }

                // @ts-ignore
                resolve();
            });
        });
    }

    set(key: string, value: string, timeExpiration = 10) {
        return new Promise((resolve, reject) => {
            // @ts-ignore
            cacheClient.set(key, values, async (error) => {
                if (error) {
                    reject(error);
                    return;
                }

                await this.setExpirationTimeInKey(key, timeExpiration);
                // @ts-ignore
                resolve(values);
            });
        });
    }

}

export default Cache;