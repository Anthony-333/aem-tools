import ToolsComponent from "@/src/components/ToolsComponent";

export default function Home() {
  return (
    <main className="p-10 flex-wrap">
      <p className="text-gray-100 text-4xl">Aem Tools</p>

      <div className="mt-5">
        <ToolsComponent />
      </div>
    </main>
  );
}
