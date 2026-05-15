export default function Footer() {
  return (
    <footer className="px-12 py-6 border-t border-gray-100 bg-white flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase font-bold text-gray-400">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-center md:text-left">
        <span>EMAIL: santhoshkumarv36173@gmail.com</span>
        <span>LOC: CHENNAI, IN</span>
      </div>
      <div className="mt-4 md:mt-0 italic serif">
        &copy; {new Date().getFullYear()} DESIGNED BY SKV / SANTHOSH KUMAR V
      </div>
    </footer>
  );
}
