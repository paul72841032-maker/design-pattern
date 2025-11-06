export class Mode {
    private static instance: Mode;
    private currentMode: "light" | "dark" = "light";

    // private 생성자 (싱글톤용)
    private constructor() {
        void 0; // ESLint @typescript-eslint/no-empty-function 오류 방지
    }

    // 싱글톤 인스턴스 반환
    public static getInstance(): Mode {
        if (!Mode.instance) {
            Mode.instance = new Mode();
        }
        return Mode.instance;
    }

    // 현재 모드 반환
    public getMode(): "light" | "dark" {
        return this.currentMode;
    }

    // 모드 토글
    public toggleMode(): void {
        this.currentMode = this.currentMode === "light" ? "dark" : "light";
        console.log(`현재 모드: ${this.currentMode}`);
    }
}
