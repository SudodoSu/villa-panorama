"use client";

import Error from "next/error";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
        <div className="container flex items-center justify-center"></div>
      </body>
    </html>
  );
}
