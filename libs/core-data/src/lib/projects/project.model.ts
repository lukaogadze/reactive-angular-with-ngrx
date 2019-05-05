export interface Project {
  id: string | null;
  title: string;
  details: string;
  percentComplete: number;
  approved: boolean;
  customerId: string | null;
}
