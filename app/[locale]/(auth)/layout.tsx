export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full">
        {children}
      </div>
    );
  };
  