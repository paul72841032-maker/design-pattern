export class RealNotification {
    constructor(public message: string) {}

    show(): void {
        alert(`RealNotification: ${this.message}`);
    }
}
