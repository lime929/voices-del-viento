import '../app/globals.css';
import Footer from '../app/components/Footer';
import NavBar from '../app/components/NavBar';


export const metadata = {
  title: "Voces del Viento",
  description:
    "Voces del Viento is a Mexican indie rock band from Michoacán, blending classic Latin rock influences with modern sounds inspired by Caifanes, Juanes, and Los Enanitos Verdes. Discover their heartfelt music, cultural roots, and energetic live performances.",
  keywords: [
    "Voces del Viento",
    "Mexican indie rock",
    "Michoacán, Mexico",
    "Latin rock",
    "Alternative music",
    "band from Mexico",
    "indie music",
  ],
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}