import React from "react";
import ToolsList from "@/src/assets/ToolsList.json";
import Link from "next/link";

function ToolsComponent() {
  return (
    <div className="flex flex-wrap">
      {ToolsList.map((item, i) => (
        <Link
          href={item.path}
          className="bg-gray-100 p-5 rounded-lg flex-wrap w-[200px] h-[100px] mx-3 my-3 hover:bg-gray-200"
          key={i}
        >
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default ToolsComponent;
