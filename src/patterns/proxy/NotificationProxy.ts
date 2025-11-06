import { RealNotification } from "./RealNotification";

export class NotificationProxy {
    private realNotification?: RealNotification;

    constructor(private message: string) {}

    show(): void {
        console.log("Proxy: Before showing notification");
        if (!this.realNotification) {
            this.realNotification = new RealNotification(this.message);
        }
        this.realNotification.show();
        console.log("Proxy: After showing notification");
    }
}
