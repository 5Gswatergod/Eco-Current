


export default function GroupSection({ title, images }) {
  return (
    <section className="bg-[#2b1f1a] text-white text-center p-4">
      <h3 className="inline-block border border-blue-400 text-blue-300 px-6 py-2 rounded-full text-lg font-semibold mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`group-${idx}`} className="rounded shadow" />
        ))}
      </div>
    </section>
  );
}