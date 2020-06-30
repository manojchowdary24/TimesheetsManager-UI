import { useLocation } from "react-router-dom";
export function useQueryParameters() {
  return new URLSearchParams(useLocation().search);
}
