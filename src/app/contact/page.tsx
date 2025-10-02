export default function ContactPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <form className="max-w-lg mx-auto space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input id="name" name="name" type="text" required className="w-full border rounded px-3 py-2" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input id="email" name="email" type="email" required className="w-full border rounded px-3 py-2" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea id="message" name="message" required className="w-full border rounded px-3 py-2" placeholder="Your message..." rows={5}></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </main>
  );
}
