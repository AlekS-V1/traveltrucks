

// import { Camper, getCampers } from "@/lib/api";
// import FilterClient from "./FilterPage.client";

import CampersList from "@/components/CamperList/CamperList";

// type FilterPageProps = {
//     params: Promise<{ slug: string[] }>;
// }
const FilterPage = () => {

    return (
        <>
            {<CampersList />}
        </>
    )
}

export default FilterPage;