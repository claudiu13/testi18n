const { NextResponse } = require('next/server');

function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasDotLocale = /^\/[a-z]{2}(\/|$)/.test(pathname);

  if (pathnameHasDotLocale) {
    const locale = pathname.split('/')[1];
    if (!['en', 'ro'].includes(locale)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

module.exports = {
  middleware,
  config: {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
  }
};