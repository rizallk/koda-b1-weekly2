import Header from '../components/Header';
import Form from '../features/contact/components/Form';
import Information from '../features/contact/components/Information';

export default function Contact() {
  return (
    <main>
      <Header
        h4="GET IN TOUCH"
        h2="Contact Me"
        desc="Have a project in mind or just want to say hello? Fill out the form and I'll get back to you within 24 hours."
      />
      <div className="container mx-auto p-4 my-17">
        <div className="grid lg:grid-cols-3 gap-6">
          <Form />
          <Information />
        </div>
      </div>
    </main>
  );
}
