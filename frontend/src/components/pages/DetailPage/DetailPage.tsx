import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, UseQueryResult } from "react-query";
import { Schedule, SubSchedule } from "../../../types/schedule";
import { useSchedule } from "../../../hooks/useSchedule";
import api from "../../../utils/instance";

function DetailPage(): JSX.Element {
  const params = useParams();
  const {
    schedule,
    setSchedule,
    onCreateSubSchedule,
    onChangeTitle,
    onChangeSubTitle,
    onDeleteSubSchedule,
  } = useSchedule();

  const fetcher = (): Promise<Schedule<SubSchedule>> =>
    api.get(`/api/data/${params.uuid}`).then((response) => {
      setSchedule((prev) => {
        return {
          ...prev,
          id: response.data.id,
          uuid: response.data.uuid,
          title: response.data.title,
          checked: response.data.checked,
          sub_schedules: [...response.data.sub_schedules],
        };
      });
      return response.data;
    });

  const mutation = useMutation((data: Schedule<SubSchedule>) =>
    api.put(`/api/data/${params.uuid}/update`, data),
  );

  const deleteMutation = useMutation((subUuid: string) =>
    api.delete(`/api/subschedule/${subUuid}/delete`),
  );

  const onUpdate = useCallback(async (data: Schedule<SubSchedule>) => {
    try {
      mutation.mutateAsync(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onDelete = useCallback(async (uuid: string) => {
    try {
      deleteMutation.mutateAsync(uuid);
      onDeleteSubSchedule(uuid);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const {
    data,
    isLoading,
    error,
    dataUpdatedAt,
  }: UseQueryResult<Array<Schedule<SubSchedule>>> = useQuery(
    `/api/data/${params.uuid}`,
    fetcher,
    { refetchOnWindowFocus: false },
  );
  return (
    <div>
      <h1>Detail Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onUpdate(schedule);
        }}
      >
        <label>제목</label>
        <input type="text" onChange={onChangeTitle} value={schedule.title} />
        <h2>서브스케쥴 추가</h2>
        <button onClick={onCreateSubSchedule}>추가하기</button>
        {schedule.sub_schedules.map((subSchedule: SubSchedule) => {
          return (
            <div key={subSchedule.uuid}>
              <input
                required
                type="text"
                onChange={(e) => onChangeSubTitle(subSchedule.uuid, e)}
                value={subSchedule.subtitle}
              />
              <button onClick={() => onDelete(subSchedule.uuid)}>삭제</button>
            </div>
          );
        })}
        <input type="submit" value="수정하기" />
      </form>
    </div>
  );
}
export { DetailPage };
