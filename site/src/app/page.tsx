import DashboardHUD from "@/components/layout/DashboardHUD";
import Log from "@/components/sections/Log";
import Instruments from "@/components/sections/Instruments";
import Specimens from "@/components/sections/Specimens";
import PublishedRecord from "@/components/sections/PublishedRecord";
import Reference from "@/components/sections/Reference";
import Reach from "@/components/sections/Reach";

export default function Home() {
  return (
    <DashboardHUD>
      <Log />
      <Instruments />
      <Specimens />
      <PublishedRecord />
      <Reference />
      <Reach />
    </DashboardHUD>
  );
}
