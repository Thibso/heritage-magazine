import Image from "next/image";
import logo from "../../img/logo-heritage-magazine.png";

export default function Footer() {
  return (
    <footer>
      <div className="myContainer bg-mainBlue text-white grid grid-cols-4">
        <div className="col-span-2 flex">
          <div className="w-[70%] space-y-4">
            <Image
              src={logo}
              alt="Illustration esthétique"
              className="w-[200px]"
            />

            <p className="text-lg">
              Votre nouveau rendez-vous incontournable dans l&apos;univers
              vibrant de l&apos;innovation en chirurgie et médecine esthétique.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 col-span-2">
          <div className="space-y-4">
            <h2 className="h2 text-lg">
              <a href="">Heritage magazine</a>
            </h2>
            <ul>
              <li>
                <a href="" className="h3 text-white text-lg">
                  A propos
                </a>
              </li>
              <li>
                <a href="" className="h3 text-white text-lg">
                  Media kit / Prestations
                </a>
              </li>
              <li>
                <a href="" className="h3 text-white text-lg">
                  Informations
                </a>
              </li>
              <li>
                <a href="" className="h3 text-white text-lg">
                  Articles
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="h2 text-center text-lg ">
              <a href="">Contact</a>
            </h2>

            <div className="flex gap-4 justify-center col-span-1">
              {/* instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-auto stroke-orange"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>

              {/* Facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-auto fill-orange stroke-orange"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>

              {/* LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-auto fill-orange stroke-orange"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#131a33] text-white text-center space-y-1 py-4">
        <p className="text-sm">
          Copyright 2025 | (H)ERITAGE Magazine | Mentions légales
        </p>
        <p className="text-sm">
          HEALTHCIE | Le créateur digital des professions médicales
        </p>
      </div>
    </footer>
  );
}
