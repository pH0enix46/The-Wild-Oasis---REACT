// // //
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../api/apiSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["Settings"],
    queryFn: getSettings,
  });

  return {
    isLoading,
    error,
    settings,
  };
}
