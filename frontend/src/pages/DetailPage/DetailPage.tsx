import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, UseQueryResult } from "react-query";
import { Schedule, SubSchedule } from "../../types/schedule";
import { useSchedule } from "../../hooks/useSchedule";
import api from "../../utils/instance";
import { AxiosResponse } from "axios";

// TODO: Update detail page

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
  console.log(schedule);
  const fetcher = (): Promise<Schedule<SubSchedule>> =>
    api
      .get<Schedule<SubSchedule>, AxiosResponse<Schedule<SubSchedule>>>(
        `/api/data/${params.uuid}`,
      )
      .then((response) => {
        const date = new Date(response.data.created_at || Date.now());
        console.log(date);
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

  const onUpdate = useCallback(async (data: Schedule<SubSchedule>) => {
    try {
      mutation.mutateAsync(data);
    } catch (error) {
      console.error(error);
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
              <button onClick={() => onDeleteSubSchedule(subSchedule.uuid)}>
                삭제
              </button>
            </div>
          );
        })}
        <input
          type="date"
          onChange={(e) => {
            setSchedule((prev) => {
              return {
                ...prev,
                deadline_date: e.target.value,
              };
            });
          }}
          value={schedule.deadline_date}
        />
        <input
          type="time"
          onChange={(e) => {
            setSchedule((prev) => {
              return {
                ...prev,
                deadline_time: e.target.value,
              };
            });
          }}
          value={schedule.deadline_time}
        />
        <input type="submit" value="수정하기" />
      </form>
    </div>
  );
}
export { DetailPage };
