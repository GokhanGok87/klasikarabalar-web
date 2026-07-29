export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-copper/30 border-t-copper rounded-full animate-spin" />
        <span className="font-mono text-[0.7rem] text-chrome tracking-widest uppercase">
          Yükleniyor...
        </span>
      </div>
    </div>
  );
}
