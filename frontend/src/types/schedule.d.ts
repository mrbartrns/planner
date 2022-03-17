// TODO: Create id property
export interface Schedule<T> {
  id?: number;
  uuid: string;
  title: string;
  deadline_date?: string;
  deadline_time?: string;
  whole_day: boolean;
  checked: boolean;
  sub_schedules: T[];
  deleted_sub_schedules: T[];
  created_at?: string;
  updated_at?: string;
}

export interface SubSchedule {
  id?: number;
  uuid: string;
  title?: number;
  subtitle: string;
  checked: boolean;
}
