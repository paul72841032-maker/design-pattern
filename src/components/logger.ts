// src/components/Logger.ts
export class Logger {
    private static instance: Logger
    private logs: string[] = []

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger()
        }
        return Logger.instance
    }

    addLog(message: string): void {
        const log = `[${new Date().toLocaleTimeString()}] ${message}`
        this.logs.push(log)
        console.log(log)
    }

    getLogs(): string[] {
        return this.logs
    }
}
