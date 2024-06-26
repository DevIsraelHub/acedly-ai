const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full w-full bg-[#131313] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
  );
}

export default LandingLayout;