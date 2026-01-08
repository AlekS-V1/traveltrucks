import CamperList from "@/components/CamperList/CamperList";
import { getCampers } from "@/lib/api";

const Catalog = async() => {
    const campersCatalog = await getCampers();
    // console.log("catalog:", campersCatalog);
  return (
    <section>
        <h1>Catalog Page</h1>
        {campersCatalog?.items?.length > 0 &&<CamperList catalog={campersCatalog.items}/>}
    </section>
  );
};

export default Catalog;

