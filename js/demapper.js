// THIS FUNC HELPS TO EXPIRE THE MAPBUCKET AFTER A CERTAIN DURATION

export default class Expire {
    constructor(duration, mapBucket) {
        this.duration = duration;
        this.timeOutId = this.timeOutId;
        this.mapBucket = mapBucket;
    }

    watch() {
        this.timeOutId = setTimeout(() => {
            this.drain();
        }, this.duration);
    }

    drain() {
        clearTimeout(this.timeOutId);
        this.duration = 0;
        this.mapBucket = null;
    }
}
