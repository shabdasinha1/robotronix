import Embedded_IoT_CTA from "./EmbeddedPageComponents/EmbeddedIoTCTA/Embedded_IoT_CTA";
import Embedded_IoT_Expertise from "./EmbeddedPageComponents/EmbeddedIoTExpertise/Embedded_IoT_Expertise";
import Embedded_IoT_Hero from "./EmbeddedPageComponents/EmbeddedIoTHero/Embedded_IoT_Hero";
import Embedded_IoT_Industries from "./EmbeddedPageComponents/EmbeddedIoTIndustries/Embedded_IoT_Industries";
import Embedded_IoT_Overview from "./EmbeddedPageComponents/EmbeddedIoTOverview/Embedded_IoT_Overview";
import Embedded_IoT_Process from "./EmbeddedPageComponents/EmbeddedIoTProcess/Embedded_IoT_Process";
import Embedded_IoT_Tech from "./EmbeddedPageComponents/EmbeddedIoTTech/Embedded_IoT_Tech";
import Embedded_IoT_Why from "./EmbeddedPageComponents/EmbeddedIoTWhy/Embedded_IoT_Why";

export default function EmbeddedIoT() {
  return (
    <>
    {/*---------------- Hero Section --------------- */}
      <Embedded_IoT_Hero/>
    
    {/*---------- Embedded IoT Overview ------------ */}
    <Embedded_IoT_Overview/>

    {/*------------ Embedded IoT Process --------------- */}
    <Embedded_IoT_Process/>

    {/*----------------- Embedded IoT Expertise ------------- */}
    <Embedded_IoT_Expertise/>

    {/*-------------- Embedded_IoT_Tech ------------------- */}
    <Embedded_IoT_Tech/>

    {/*---------------- Embedded_IoT_Industries --------------- */}
    <Embedded_IoT_Industries/>

    {/*------------------- Embedded_IoT_Why ----------------- */}
    <Embedded_IoT_Why/>

    {/*----------------- Embedded_IoT_CTA ----------------- */}
    <Embedded_IoT_CTA/>
    </>
  );
}
