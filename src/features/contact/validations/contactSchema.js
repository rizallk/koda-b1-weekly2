import * as yup from 'yup';

export const contactSchema = yup.object({
  fullname: yup.string().required('Nama harus diisi'),
  email: yup.string().required('Email harus diisi').email('Email harus valid'),
  subject: yup.string().required('Subject harus diisi'),
  message: yup.string().required('Pesan harus diisi'),
});
