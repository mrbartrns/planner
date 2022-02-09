export interface Shedule<T> {
  title: string;
  deadLine?: string | Date | number;
  checked: boolean;
  description: string;
  subTitles: T[];
  createdAt?: string | Date | number;
  updatedAt?: string | Date | number;
}

export interface SubSchedule {
  title: string;
  checked: boolean;
}
