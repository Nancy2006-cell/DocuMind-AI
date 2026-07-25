"use client";

type DocumentCardProps = {
  id: string;
  fileName: string;
  pdfUrl: string;
  date: string;
  onDelete: () => void;
};

export default function DocumentCard({
  fileName,
  pdfUrl,
  date,
  onDelete,
}: DocumentCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-5">
      
      <div>
        <h3 className="text-lg font-semibold">
          📄 {fileName}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Uploaded on {date}
        </p>
      </div>


      <div className="flex gap-3">

        <button
          onClick={() => {
            window.open(pdfUrl, "_blank");
          }}
          className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold hover:bg-cyan-600"
        >
          Open
        </button>


        <button
          onClick={() => {
            console.log("Delete clicked");
            onDelete();
          }}
          className="rounded-lg bg-red-600 px-4 py-2 font-semibold hover:bg-red-700"
        >
          Delete
        </button>

      </div>

    </div>
  );
}