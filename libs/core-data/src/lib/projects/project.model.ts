export interface Project {
    id: string | undefined;
    title: string;
    details: string;
    percentComplete: number;
    approved: boolean;
    startDate: string | null | undefined;
    targetDate: string;
    completionDate: string | null | undefined;
    customerId: string | undefined;
}
