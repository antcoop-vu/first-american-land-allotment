function SplitPanel({ title, leftContent, rightContent }) {
  return (
    <section className="py-12 bg-white text-earth">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-earth text-center">
          {title}
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-muted p-8 rounded-xl shadow-md border border-secondary/20">
            {leftContent}
          </div>

          {/* Research Applications Card */}
          <div className="bg-muted p-8 rounded-xl shadow-md border border-copper/20">
            {rightContent}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplitPanel;
