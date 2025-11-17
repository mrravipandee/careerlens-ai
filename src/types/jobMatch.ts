export interface JobMatch {
  type: string;
  posted: string;
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  match: number;
  description?: string;
  skills?: string[];
}
