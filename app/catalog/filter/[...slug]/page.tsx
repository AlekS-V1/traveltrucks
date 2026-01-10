'use client';

import CamperList from "@/components/CamperList/CamperList";
import { Camper, getCampers } from "@/lib/api";
import { useCamperStore } from "@/store/campers";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// type FilterPageProps = {
//     params: Promise<{ slug: string[] }>;
// }
const FilterPage = () => {
    const params = useParams();
    const raw = params?.slug;
    const slug = Array.isArray(raw) ? raw[0] : raw ?? "all";

    const load = useCamperStore((state) => state.load);
    const filterByForm = useCamperStore((state) => state.filterByForm);
    const campers = useCamperStore((state) => state.filtered);


    useEffect(() => {        
        load();
    }, []);
    useEffect(() => {
        filterByForm(slug);
    }, [slug]);

    useEffect(() => {
  console.log("slug:", slug);
  console.log("campers:", campers);
}, [slug, campers]);

    return (
        <div><h2>Filter Page</h2>
        {<CamperList catalog={campers}/>}
        </div>
    )
}

export default FilterPage;