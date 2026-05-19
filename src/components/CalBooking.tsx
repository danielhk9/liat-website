"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

interface CalBookingProps {
  calLink: string;
  namespace: string;
}

export default function CalBooking({ calLink, namespace }: CalBookingProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("inline", {
        elementOrSelector: `#cal-${namespace}`,
        calLink,
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: { branding: { brandColor: "#16a34a" } },
      });
    })();
  }, [calLink, namespace]);

  return (
    <div
      id={`cal-${namespace}`}
      style={{ width: "100%", height: "600px", overflow: "scroll" }}
    />
  );
}
