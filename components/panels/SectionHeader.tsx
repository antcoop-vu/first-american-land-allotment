function SectionHeader({ title, description, children }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-earth">
          {title}
        </h2>
        <p className="text-earth/80 text-lg mb-8">{description}</p>
        {children}
      </div>
    </section>
  );
}

export default SectionHeader;
