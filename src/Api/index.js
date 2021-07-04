import Cookies from 'js-cookie';
import { getCookieFromCtx } from '@/ultilities';

const apiUrl = 'http://localhost:3000/';
const ACCESS_TOKEN = 'Authorization';

export function getSessionToken(ctx) {
  return getCookieFromCtx(ctx, ACCESS_TOKEN);
}

export function getSessionTokenClient() {
  return Cookies.get(ACCESS_TOKEN);
}

export function removeSessionToken() {
  Cookies.remove(ACCESS_TOKEN);
}

function request({
  url, method, body, ctx = null,
}) {
  return new Promise((resolve, reject) => {
    const headers = {};
    if (ctx) {
      const AuthorizationValue = getSessionToken(ctx);
      if (AuthorizationValue) {
        headers.Authorization = `Bearer ${AuthorizationValue}`;
      }
    } else {
      const AuthorizationValue = getSessionTokenClient();
      if (AuthorizationValue) {
        headers.Authorization = `Bearer ${AuthorizationValue}`;
      }
    }
    fetch(`${apiUrl}${url}`, {
      method,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: typeof body === 'object' ? JSON.stringify(body) : body,
    })
      .then((res) => {
        if (res.headers.has('Refresh-Token')) {
          Cookies.set('RefreshToken', res.headers.get('Refresh-Token'));
        }
        if (
          res.headers.has('Access-Token')
          && res.headers.has('Expire-At')
          && res.headers.has('Refresh-Token')
        ) {
          Cookies.set('Authorization', res.headers.get('Access-Token'), {
            expires: new Date(res.headers.get('Expire-At')),
          });
        }
        return res.json();
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export async function GET(props) {
  return request({ ...props, method: 'GET' });
}

export async function POST(props) {
  return request({ ...props, method: 'POST' });
}

export async function PUT(props) {
  return request({ ...props, method: 'PUT' });
}

export async function DELETE(props) {
  return request({ ...props, method: 'DELETE' });
}
