import { NotificationPrototype } from "./NotificationPrototype";

export class ConcreteNotification implements NotificationPrototype {
    constructor(public message: string) {}

    show(): void {
        alert(`Prototype Notification: ${this.message}`);
    }

    clone(): NotificationPrototype {
        return new ConcreteNotification(this.message);
    }
}
