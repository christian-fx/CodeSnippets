export default class Timer {
    duration: number;
    remaining: number;
    startTime: number | null;
    timeoutId: ReturnType<typeof setTimeout> | null;
    finished: boolean;
    
    constructor(duration: number) {
        this.duration = duration;
        this.remaining = duration;
        this.startTime = null;
        this.timeoutId = null;
        this.finished = false;
    }

    start() {
        if (this.timeoutId || this.finished) return;

        this.startTime = Date.now();

        this.timeoutId = setTimeout(() => {
            this.finished = true;
            this.timeoutId = null;
        }, this.remaining);
        this.checker();
    }

    pause() {
        if (!this.timeoutId) return;

        clearTimeout(this.timeoutId);
        this.timeoutId = null;

        if (this.startTime === null) return;

        const elapsed = Date.now() - this.startTime;
        this.remaining -= elapsed;
    }

    reset() {
        if (this.timeoutId !== null) {
            clearTimeout(this.timeoutId);
        }

        this.remaining = this.duration;
        this.startTime = null;
        this.timeoutId = null;
        this.finished = false;
    }

    isFinished() {
        return this.finished;
    }
    
    checker() {
        const watcher = setInterval(() => {
            if (this.isFinished()) {
                console.log("Time's Up!");
                clearInterval(watcher);
            }
        }, 100);
    }
}
