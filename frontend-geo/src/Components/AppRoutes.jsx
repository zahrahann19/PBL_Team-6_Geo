import { Routes, Route } from "react-router-dom";
import Beranda from "./Beranda";
import DatabaseHome from "./DatabaseHome";
import Konsultan from "./Konsultan";
import Pembinaan from "./Pembinaan";
import HubungiKami from "./HubungiKami";


// Database
// import CariPeserta2024 from "./cari-peserta2024";
import Database2025 from "./database2025";
import Database2024 from "./database2024";

// Bidang Konsultan
import AMDAL from "./JasaPerizinan/AMDAL";
import UKL_UPL from "./JasaPerizinan/UKL-UPL";
import SPPL from "./JasaPerizinan/SPPL";
import PERTEK_BMAL from "./JasaPerizinan/PERTEK-BMAL";
import PERTEK_EMISI from "./JasaPerizinan/PERTEK-EMISI";
import RINTEK_LB3 from "./JasaPerizinan/RINTEK-LB3";
import Andalalin from "./JasaPerizinan/Andalalin";

//Bidang Pembinaan
import PTP from "./BidangPembinaan/PTP";
//sub bidang PTP
import AhliK3PTP from "./BidangPembinaan/subPTP/AhliK3PTP";
import OpProduksi from "./BidangPembinaan/subPTP/OpProduksi";
import OpTanur from "./BidangPembinaan/subPTP/OpTanur";
import OpDiesel from "./BidangPembinaan/subPTP/OpDiesel";
import TekPTP from "./BidangPembinaan/subPTP/TekPTP";

//bidang PUBT
import PUBT from "./BidangPembinaan/PUBT";
//subbidang
import AhliK3PUBT from "./BidangPembinaan/subPUBT/AhliK3PUBT";
import OpBoiler1 from "./BidangPembinaan/subPUBT/OpBoiler1";
import OpBoiler2 from "./BidangPembinaan/subPUBT/OpBoiler2";
import TekBejana from "./BidangPembinaan/subPUBT/TekBejana";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/home-database" element={<DatabaseHome />} />
      <Route path="/hubungi-kami" element={<HubungiKami />} />
      <Route path="/konsultan" element={<Konsultan />} />
      <Route path="/pembinaan" element={<Pembinaan />} />

      {/* konsultan */}
      <Route path="/amdal" element={<AMDAL />} />
      <Route path="/ukl-upl" element={<UKL_UPL />} />
      <Route path="/sppl" element={<SPPL />} />
      <Route path="/pertek-bmal" element={<PERTEK_BMAL />} />
      <Route path="/pertek-emisi" element={<PERTEK_EMISI />} />
      <Route path="/rintek-lb3" element={<RINTEK_LB3 />} />
      <Route path="/andalalin" element={<Andalalin />} />

      {/* Database */}
      {/* <Route path="/cari-peserta2024" element={<CariPeserta2024 />} /> */}
      <Route path="/db-2024" element={<Database2024 />} />
      <Route path="/db-2025" element={<Database2025 />} />

      {/* Bidang Pembinaan */}
      <Route path="/ptp" element={<PTP />} />
      {/* subbidang */}
      <Route path="/ptp/ahlik3_ptp" element={<AhliK3PTP />} />
      <Route path="/ptp/produksi" element={<OpProduksi />} />
      <Route path="/ptp/tanur" element={<OpTanur />} />
      <Route path="/ptp/diesel" element={<OpDiesel />} />
      <Route path="/ptp/teknisi" element={<TekPTP />} />
    

      <Route path="/pubt" element={<PUBT />} />
      {/* subbidang */}
      <Route path="/pubt/ahliK3" element={<AhliK3PUBT />} />
      <Route path="/pubt/boiler1" element={<OpBoiler1 />} />
      <Route path="/pubt/boiler2" element={<OpBoiler2 />} />
      <Route path="/pubt/tekbejana" element={<TekBejana />} />

    </Routes>
  );
}
