const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-screen-2xl mx-auto h-full">{children}</div>;
};

export default ContentWrapper;
