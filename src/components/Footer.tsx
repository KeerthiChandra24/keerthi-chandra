const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-muted/20">
      <div className="container-custom">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Keerthi Chandra. Built with passion for product thinking.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
