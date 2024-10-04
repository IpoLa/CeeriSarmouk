import React, { useEffect, useState } from "react";
import { Box, Typography, Grow } from "@mui/material";

export function FeaturesSectionDemo() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ceerisarmouk.com/services.php"); // Your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFeatures(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        maxWidth: { xs: 1500, md: 1200, sm: 480 },
        justifyContent: "center",
        bgcolor: "background.paper",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </Box>
  );
}

const Feature = ({ title, image, contentImage, content, index }) => {
  return (
    <div
      className={`flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 ${
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800"
      } ${index < 4 && "lg:border-b dark:border-neutral-800"}`}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      {/* Feature Image */}
      <div className="mb-4 relative z-10 px-10">
        <img
          src={image}
          alt={title}
          style={{ width: "auto", height: "50px" }}
        />
      </div>

      {/* Feature Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Feature Content */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {content.split("\r\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};
