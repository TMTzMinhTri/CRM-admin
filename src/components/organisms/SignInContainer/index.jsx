import { Grid, Paper, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInForm } from '../../mocules';
import schema from './signInSchema';

const SignInContainer = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema()),
  });

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid container justify="center">
      <Grid item md={4} sm={6}>
        <Paper variant="outlined">
          <Typography align="center" color="primary" variant="h4" gutterBottom>
            Đăng nhập
          </Typography>
          <form onSubmit={handleSubmit(onsubmit)}>
            <SignInForm control={control} errors={errors} isSubmitting={isSubmitting} />
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignInContainer;
