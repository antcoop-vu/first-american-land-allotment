function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <header className="relative py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
            {title}
          </h1>
          <div className="h-1 w-20 bg-accent mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
