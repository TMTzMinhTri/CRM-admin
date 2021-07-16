import { TextField } from '@material-ui/core';
import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const Input = ({ control, name, errors, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            variant="outlined"
            size="small"
            fullWidth
            value={field.value || ''}
            error={Boolean(errors?.message)}
            helperText={errors?.message}
            InputLabelProps={{
              ...props.InputLabelProps,
              shrink: true,
            }}
            InputProps={{
              ...props.InputProps,
              notched: false,
            }}
            {...props}
          />
        );
      }}
    />
  );
};

Input.propsType = {
  control: PropsTypes.object.isRequired,
  name: PropsTypes.string.isRequired,
  errors: PropsTypes.object,
};

export default Input;
