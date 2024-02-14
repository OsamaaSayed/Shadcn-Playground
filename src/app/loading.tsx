import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const loading = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {"123456789".split("").map((ele) => (
          <SkeletonCard key={ele} />
        ))}
      </div>
    </main>
  );
};

export default loading;
