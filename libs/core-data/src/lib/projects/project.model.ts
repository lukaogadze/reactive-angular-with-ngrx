export interface Project {
    readonly id: string | undefined;
    readonly title: string;
    readonly details: string;
    readonly percentComplete: number;
    readonly approved: boolean;
    readonly customerId: string | undefined;
}
