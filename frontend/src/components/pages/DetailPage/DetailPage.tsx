import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery, UseQueryResult } from "react-query";
import { Schedule, SubSchedule } from "../../../types/schedule";
import api from "../../../utils/instance";

function DetailPage(): JSX.Element {
  const fetcher = (): Promise<Array<Schedule<SubSchedule>>> =>
    api.get("/api/data").then((response) => response.data);
  const {
    data,
    isLoading,
    error,
    dataUpdatedAt,
  }: UseQueryResult<Array<Schedule<SubSchedule>>> = useQuery(
    "/api/data",
    fetcher,
  );
  console.log(data);
  return (
    <div>
      <h1>Detail Page</h1>
    </div>
  );
}
export { DetailPage };
