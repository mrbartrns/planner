import { useState, useCallback } from "react";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
  useQueryClient,
} from "react-query";
import { SubSchedule, Schedule } from "../types/schedule";
import { Axios, AxiosResponse } from "axios";
import api from "../utils/instance";

function useFetchSchedules() {
  const queryClient = useQueryClient();
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

  return {
    data,
    isLoading,
    error,
    dataUpdatedAt,
  };
}

export { useFetchSchedules };
