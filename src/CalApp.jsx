/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", {
                styles: { branding: { brandColor: "#0047FF" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);
    return (
        <div className="mb-[150px]">
            <h3 className="typography-h2 text-gradient text-center mb-[50px]">
                Запишитесь на бесплатную консультацию
            </h3>{" "}
            <Cal
                calLink="custdevim/встреча-на-30-мин"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view" }}
            />
        </div>
    );
}
