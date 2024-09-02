import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Regenerative Landscape and Garden",
  "url": "https://regenerativelandscapeclt.com",
  "logo": "https://regenerativelandscapeclt.com/assets/logoWordsWhite-BnUhoxVJ.png",
  "sameAs": "https://www.instagram.com/regenerativelandscapeclt/"
}
</script>
