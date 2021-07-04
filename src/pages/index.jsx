import React from 'react';
import { Button } from '@material-ui/core';
import Cookies from 'js-cookie';
import { doWithServerSide } from '@/ultilities';
import reduxWrapper from '@/store';

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Button variant="contained" color="primary">
        safad
      </Button>
    </div>
  );
}

// export const getServerSideProps = reduxWrapper.getServerSideProps((store) => {
//   return function (ctx) {
//     return doWithServerSide(ctx, () => {
//       // console.log(ctx);
//     });
//   };
// });
