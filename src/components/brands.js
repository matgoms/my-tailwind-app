
function Brands() {
  return (
    <>
      <section>
        <div className="py-16 mx-auto max-w-screen-2xl md:mb-16 md:mt-6 sm:py-16 lg:px-6 lg:gap-8 xl:gap-0 lg:py-16 md:ring-2 ring-slate-50 dark:ring-slate-700 transition-colors duration-1000 ease-in-out">
          <div className="lg:flex gap-10 max-w-screen-xl mx-auto px-6 items-center">
              <h2 className="py-8 lg:py-0 w-max text-2xl tracking-tight font-bold text-gray-900 dark:text-white">
                I've worked with:
              </h2>
            <div className="gap-4 md:flex columns-2 md:columns-0 *:w-3/5 md:*:w-20 *:h-max hover:*:scale-105 hover:*:transition-all dark:*:invert hover:*:ease-out hover:*:duration-50 *:object-contain space-y-8  md:gap-8 md:space-y-0">
              <img src="img/home/logos/genera.png" alt="genera" />
              <img src="img/home/logos/paypal.png" alt="paypal" />
              <img src="img/home/logos/yahoo.png" alt="yahoo" />
              <img src="img/home/logos/spotify.png" alt="spotify" />
              <img src="img/home/logos/ebay.png" alt="ebay" />
              <img src="img/home/logos/skp.png" alt="skp" />
              <img src="img/home/logos/cox.png" alt="cox" />
              <img src="img/home/logos/verizon.png" alt="verizon" />
              <img src="img/home/logos/marisa.png" alt="marisa" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brands;
