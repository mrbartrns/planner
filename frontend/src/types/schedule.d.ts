// TODO: Create id property
export interface Schedule<T> {
  id?: number;
  uuid: string;
  title: string;
  deadLine?: string | Date | number;
  checked: boolean;
  sub_schedules: T[];
  createdAt?: string | Date | number;
  updatedAt?: string | Date | number;
}

export interface SubSchedule {
  id?: number;
  uuid: string;
  title?: number;
  subtitle: string;
  checked: boolean;
}
