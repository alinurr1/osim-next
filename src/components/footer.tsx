export const Footer = () => {
  return (
    <section className="py-24 bg-blue-800">
      <div className="container mx-auto px-4 mb-10">
        <div className="max-w-2xl mx-auto text-center">
          <a
            className="inline-block mb-10 text-white text-lg font-semibold"
            href="#"
          >
            Өсім
          </a>
          <ul className="mb-8 flex flex-wrap space-x-10 items-center justify-center text-sm">
            <li className="mb-2 md:mb-0">
              <a className="text-white hover:text-blue-100" href="#">
                О нас
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a className="text-white hover:text-blue-100" href="#">
                Продукция
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a className="text-white hover:text-blue-100" href="#">
                Галерея
              </a>
            </li>
            <li className="mb-2 md:mb-0">
              <a className="text-white hover:text-blue-100" href="#">
                Контакты
              </a>
            </li>
          </ul>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center w-12 h-12 mr-4 bg-blue-900"
              href="#"
            >
              <svg
                className="mx-auto text-yellow-500 h-4 w-4"
                viewBox="0 0 10 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.63482 17.7272V9.766H9.35818L9.76676 6.66243H6.63482V4.68126C6.63482 3.78299 6.88809 3.17083 8.20285 3.17083L9.877 3.17015V0.394215C9.58748 0.357312 8.59366 0.272705 7.43696 0.272705C5.02158 0.272705 3.36797 1.71878 3.36797 4.37389V6.66243H0.636353V9.766H3.36797V17.7272H6.63482Z"
                />
              </svg>
            </a>
            <a
              className="inline-flex items-center w-12 h-12 mr-4 bg-blue-900"
              href="#"
            >
              <svg
                className="mx-auto text-yellow-500 h-4 w-4"
                viewBox="0 0 19 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.8182 2.14598C18.1356 2.44844 17.4032 2.65356 16.6337 2.74513C17.4194 2.27462 18.0209 1.52831 18.3059 0.641769C17.5689 1.0775 16.7553 1.39389 15.8885 1.56541C15.1943 0.82489 14.207 0.363647 13.1118 0.363647C11.0108 0.363647 9.30725 2.06719 9.30725 4.16707C9.30725 4.46489 9.34086 4.75577 9.40577 5.03392C6.24437 4.87513 3.44107 3.3605 1.56486 1.05895C1.23689 1.61986 1.05031 2.27344 1.05031 2.9711C1.05031 4.29107 1.72246 5.45574 2.74228 6.13713C2.1188 6.11628 1.5324 5.94477 1.01904 5.65968V5.70719C1.01904 7.5498 2.33089 9.08762 4.07034 9.43762C3.75164 9.52337 3.41558 9.57089 3.06792 9.57089C2.82225 9.57089 2.58468 9.54656 2.35174 9.50019C2.83613 11.0125 4.24071 12.1123 5.90486 12.1424C4.60343 13.1623 2.96246 13.7683 1.18013 13.7683C0.873039 13.7683 0.570554 13.7498 0.272736 13.7162C1.95658 14.7974 3.95564 15.4279 6.10419 15.4279C13.1026 15.4279 16.9281 9.63116 16.9281 4.60398L16.9153 4.11147C17.6628 3.57834 18.3094 2.90853 18.8182 2.14598Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-blue-300 pt-8 px-4 border-t border-blue-500">
        All rights reserved © Osim 2023
      </p>
    </section>
  )
}