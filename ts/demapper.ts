// THIS FUNC HELPS TO EXPIRE THE MAPBUCKET AFTER A CERTAIN DURATION

export default class Expire {
    duration: number;
    timeOutId: ReturnType<typeof setTimeout> | null;
    mapBucket: Map<any, any>;
    constructor(duration: number, mapBucket: Map<any, any>) {
        this.duration = duration;
        this.timeOutId = null;
        this.mapBucket = mapBucket;
    }

    watch() {
        this.timeOutId = setTimeout(() => {
            this.drain();
        }, this.duration);
    }

    drain() {
        if (this.timeOutId !== null) {
            clearTimeout(this.timeOutId);
            this.timeOutId = null;
        }
        this.duration = 0;
        this.mapBucket.clear();
    }
}
