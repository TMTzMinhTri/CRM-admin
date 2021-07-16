import * as Yup from 'yup';

const signInSchema = () =>
  Yup.object().shape({
    phone: Yup.string().required('Vui lòng nhập số điện thoại'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
  });

export default signInSchema;
