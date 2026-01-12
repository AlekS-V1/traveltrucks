
import { useCampersFilters } from "@/store/campers";
import { useQuery } from "@tanstack/react-query";
import { getCampers } from "./api";

export function useCampersQuery() {
    const appliedFilters = useCampersFilters((state) => state.appliedFilters);

    return useQuery({
    queryKey: ['campers', appliedFilters.form],
    queryFn: async () => getCampers({ form: appliedFilters.form || undefined }),
    enabled: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    })
}