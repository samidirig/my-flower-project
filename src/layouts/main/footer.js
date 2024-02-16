import React from "react";

export default function Footer() {
  const simpleFooter = (
    <div className="h-50 flex flex-col items-center justify-center bg-gray-400 z-50 xs:p-8 md:p-10">
      This is Footer
    </div>
  );

  return <footer>{simpleFooter}</footer>;
}
