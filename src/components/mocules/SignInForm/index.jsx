import { Button, Grid, CircularProgress, InputAdornment, IconButton } from '@material-ui/core';
import { Input } from '@/components';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useState } from 'react';

const SignInForm = ({ control, errors, isSubmitting }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Input control={control} name="phone" label="Số điện thoại" errors={errors['phone']} />
      </Grid>
      <Grid item xs={12}>
        <Input
          control={control}
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          errors={errors['password']}
          InputProps={{
            notched: false,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  aria-label="toggle password visibility">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" fullWidth variant="contained" color="primary" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress color="inherit" size={24} /> : 'Sign In'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
