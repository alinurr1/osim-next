import "./globals.css";

export const metadata = {
  title: "Osim",
  description: "Макаронная фабрика Семей",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
