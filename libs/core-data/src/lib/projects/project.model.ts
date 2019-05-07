export interface Project {
    id: string | undefined;
    title: string;
    details: string;
    percentComplete: number;
    approved: boolean;
    customerId: string | undefined;
}
