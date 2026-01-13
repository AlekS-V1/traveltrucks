
import { useCampersFilters } from "@/store/campers";
import { useQuery } from "@tanstack/react-query";
import { getCampers } from "./api";

export function useCampersQuery() {
    const appliedFilters = useCampersFilters((state) => state.appliedFilters);
    const limit = useCampersFilters((state) => state.limit);
    const page = useCampersFilters((state) => state.page);

    return useQuery({
    queryKey: ['campers', appliedFilters, page],
    queryFn: async () => getCampers(page, limit, appliedFilters),
    placeholderData: (previousData) => previousData,
    enabled: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    })
} 