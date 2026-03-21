export default function PublicFooter() {
  return (
    <footer className="bg-[#faedff] text-center py-5 px-4">
      <p className="text-[#2c2c2c] text-xs sm:text-sm leading-relaxed">
        Copyright &copy; {new Date().getFullYear()}. Todos Direitos Reservados à Carapuça Presentes
        <span className="block sm:inline"> &mdash; Dev Samuelrcvp</span>
      </p>
    </footer>
  );
}
