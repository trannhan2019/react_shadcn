export default function AuthLayout({ children }) {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex">
          <div className="h-full bg-[url('/images/bg-book.jpg')] bg-no-repeat bg-center bg-cover"></div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[450px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                SignIn to account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
