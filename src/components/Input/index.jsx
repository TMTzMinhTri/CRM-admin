import { TextFields } from '@material-ui/icons';
import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const Input = ({ control }) => {
  return (
    <Controller
      control={control}
      render={() => {
        return <TextFields />;
      }}
    />
  );
};

Input.propsType = {
  control: PropsTypes.object,
};

export default Input;
