export default function Footer() {
  return (
    <footer className="py-8 text-center opacity-60 text-sm font-mono tracking-wide relative z-10 glass-panel border-t border-glass-border">
      <div className="flex flex-col items-center gap-2">
        <p>Built with React, Tailwind & Framer Motion.</p>
        <p>© {new Date().getFullYear()} Siddhant Sachin Tilak. All rights reserved.</p>
      </div>
    </footer>
  );
}
