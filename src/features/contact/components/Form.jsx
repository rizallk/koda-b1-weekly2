import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Radio from '../../../components/Radio';
import TextArea from '../../../components/TextArea';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../validations/contactSchema';

const technologies = [
  'React',
  'Node.js',
  'Python',
  'TypeScript',
  'React Native',
  'Django',
  'Express.js',
];

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      subject: '',
      country: '',
      message: '',
      contactMethod: '',
      technologies: [],
    },
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    alert('Formulir berhasil dikirim');
    console.log(data);
  };

  return (
    <section className="lg:col-span-2 mb-6 lg:mb-0">
      <h3 className="font-bold text-xl text-[#101828] mb-8">Send a Message</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Input
            id="fullname"
            label="Full Name"
            placeholder="Jordan Smith"
            required
            error={errors?.fullname?.message}
            {...register('fullname')}
          />
          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            required
            error={errors?.email?.message}
            {...register('email')}
          />
          <Input
            id="phone"
            label="Phone Number"
            placeholder="+1 (415) 555-0100"
            {...register('phone')}
          />
          <Input
            id="subject"
            label="Subject"
            placeholder="Project inquiry"
            required
            error={errors?.subject?.message}
            {...register('subject')}
          />
        </div>
        <Input
          id="country"
          label="Country"
          className="mb-6"
          {...register('country')}
        />
        <TextArea
          id="message"
          rows={4}
          label="Message"
          placeholder="Tell me about your project or what you need help with..."
          className="mb-6"
          required
          error={errors?.message?.message}
          {...register('message')}
        />
        <div className="mb-6">
          <p className="font-medium text-sm text-[#364153] mb-2">
            Preferred Contact Method
          </p>
          <div className="flex gap-6">
            <Radio
              id="email-radio"
              name="contact-method"
              label="Email"
              checked
              value="Email"
              {...register('contactMethod')}
            />
            <Radio
              id="phone-radio"
              name="contact-method"
              label="Phone"
              value="Phone"
              {...register('contactMethod')}
            />
            <Radio
              id="wa-radio"
              name="contact-method"
              label="Whatsapp"
              value="Whatsapp"
              {...register('contactMethod')}
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="font-medium text-sm text-[#364153] mb-2">
            Technologies Interested In
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {technologies.map((v, i) => {
              return (
                <div key={i} className="checkbox">
                  <input
                    type="checkbox"
                    id={i}
                    value={v}
                    {...register('technologies')}
                  />
                  <label htmlFor={i} className="text-sm">
                    {v}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <Button type="submit" className="mr-4">
          Send Message
        </Button>
        <Button type="button" variant="outline-2" onClick={() => reset()}>
          Reset Form
        </Button>
      </form>
    </section>
  );
}
