import Image from "next/image";

import images from "./images/images";

export const Zagorje2022_Overview: BlogOverview = {
  title: "Zagorje",
  description: "Blog o izletu kroz Zagorje",
};

const Zagorje2022 = () => (
  <div className="h-full w-[85%]">
    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <h2 className="pb-12 text-center font-plus-jakarta-sans text-3xl italic tracking-wider text-lime-400 md:py-24 2xl:text-4xl 3xl:text-5xl">
          Hrvatsko Zagorje - nepravedno zanemarena hrvatska regija
        </h2>
        <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
          Mislim da većinu Hrvata Zagorje asocira na gemišt, štrukle i zagorske
          brege i tu većinom razgovori i razmišljanja o Zagorju staju. Po mom
          mišljenju, Zagorje je nepravedno zanemarena i nedovoljno istražena
          hrvatska regija, a to svaki pravi Zagorec zna. Nema ljepšeg osjećaja
          nego prošetati na friškom zagorskom zraku, uživati u pogledu na
          zagorske brege i vinograde, fino se napiti i najesti domaće hrane, ali
          i uživati u znamenitostima ovog kraja.
        </p>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="w-full px-1 text-start xl:max-w-[65%] xl:px-0 xl:pr-20">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              O bogatoj povijesti Zagorja svjedoče i većini poznati ostaci
              „krapinskog pračovjeka“, odnosno neandertalaca iz starijeg kamenog
              doba pronađeni na <strong>Hušnjakovom brdu</strong> kraj Krapine.
              Tijekom antike na ovom se području nastanjuju Rimljani, a Zagorje
              je bilo od iznimne važnosti i u ratovima s Osmanlijama. Naime zbog
              udaljenosti od granice prema Osmanskom Carstvu, upravo Zagorje
              postaje sigurni prostor za doseljavanje stanovništva, ali i
              plemića te kraljeva i kneževa koji ovdje grade brojne utvrde.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
            <Image
              className="image rounded-lg"
              src={images.RandomImg2}
              alt="Vinogradi"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="w-full px-1 text-start xl:max-w-[65%] xl:px-0 xl:pl-20">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Danas je Zagorje osim po hrani i piću poznato po brojim termalnim
              izvorima, zagorskim popevkama te prekrasnoj netaknutoj prirodi, a
              zanimljivo je da su dva prilično poznata politička lica bila
              upravo Zagorci. Naime <strong>Kumrovec</strong> je rodno mjesto
              Josipa Broza Tita, dok je Veliko Trgovišće rodno mjesto prvog
              hrvatskog predsjednika Franje Tuđmana.
            </p>
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Kako i prijateljica Iva i ja imamo zagorske krvi, odlučile smo se
              za mali izlet u Zagorje i to naravno na najtopliji dan ljeta, kad
              je vani bilo 42 stupnja pa smo na trenutke imale osjećaj da ćemo
              se srušiti od vrućine, ali hvala Bogu nismo.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
            <Image
              className="image rounded-lg"
              src={images.Kumrovec2}
              alt="Kumrovec"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:justify-between">
          <span className="w-full px-1 text-start">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Krenule smo iz Zagreba i prva postaja bila nam je dvorac{" "}
              <strong>Veliki Tabor</strong> u Desiniću. Trebalo nam je nekih sat
              i 20 minuta do odredišta. Auto smo ostavile na travnjaku ispred
              dvorca, a za obilazak nam je trebalo otprilike sat i pol. Čim smo
              ušle shvatile smo kako se iz dvorca pruža prekrasan pogled na
              zagorske brege i dio Slovenije te smo se divile prirodnim
              ljepotama, a onda smo odlučile razgledati sam dvorac.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-between xl:py-12 3xl:py-24">
            <div className="image-container pt-12 pb-4 xl:py-0">
              <Image
                className="image image-two_line-size-xl rounded-lg"
                src={images.VelikiTabor2}
                alt="Veliki Tabor"
                layout="fill"
              />
            </div>
            <div className="image-container pb-12 pt-4 xl:py-0">
              <Image
                className="image image-two_line-size-xl rounded-lg"
                src={images.VelikiTabor9}
                alt="Veliki Tabor"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <p className="w-full break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
          Dvorac ne radi ponedjeljkom, a od 1. travnja do 31. listopada radi od
          utorka do petka u terminu od 9:00-17:00, a vikendom od 10:00-18:00.
          Studentsku ulaznicu platile smo 15 kuna, iako sada na internetu vidim
          da je poskupjela na 32 kune.
        </p>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="w-full px-1 text-start xl:max-w-[65%] xl:px-0 xl:pr-20">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              <strong>Veliki Tabor</strong> zaštićeno je kulturno dobro te je
              jedan od najočuvanijih srednjovjekovnih dvoraca u Hrvatskoj.
              Sagrađen je u drugoj polovici 15. stoljeća kao srednjovjekovna
              utvrda po naredbi grofa Fridrika II. Celjskog, a tijekom 17. i 18.
              stoljeća pretvarao se u dvorac. Bio je u posjedu brojnih slavnih
              gospodara, a najduže obitelji Ratkaj.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
            <Image
              className="image rounded-lg"
              src={images.VelikiTabor}
              alt="Veliki Tabor"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="w-full px-1 text-start xl:max-w-[65%] xl:px-0 xl:pl-20">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Zanimljivo je, a istovremeno i tužno da je dvorac 1945. godine
              postao narodnom imovinom i koristio se kao sušionica mesa te
              skladište Poljoprivredne zadruge Desinić, a sitni radovi odrađeni
              su samo na najugroženijim dijelovima dvorca. Krajem osamdesetih
              godina prošlog stoljeća konačno su počela arheološka istraživanja
              i obnova dvorca. Tako danas <strong>Veliki Tabor</strong> nudi
              pregršt aktivnosti za odrasle, ali i za djecu.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
            <Image
              className="image rounded-lg"
              src={images.VelikiTabor3}
              alt="Veliki Tabor"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="w-full px-1 text-start xl:max-w-[65%] xl:px-0 xl:pr-20">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Naime, u dvorcu se održavaju razne predstave, festivali, advent,
              glazbeni nastupi, viteške borbe… Osim toga, stalni muzejski postav
              dvorca također je vrlo raznovrstan i zanimljiv. Najmlađima će se
              zasigurno najviše svidjeti sobe u kojim su prikaze povijest
              rođendana te staro oružje, sprave za mučenje i viteška oprema. A
              oni stariji uživat će u pričama o povijesti dvorca i obiteljima
              koje su ga posjedovale, a najzanimljivija je svakako legenda o{" "}
              <strong>Veroniki Desinićkoj</strong>.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
            <Image
              className="image rounded-lg"
              src={images.VelikiTabor8}
              alt="Veliki Tabor"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:justify-between">
          <span className="w-full px-1 text-start">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Naime, davno je ovim prostorima vladao grof Herman II. Celjski
              čiji se sin Fridrik II. Celjski jašući očevim posjedima zaljubio u
              djevojku zlatne kose Veroniku. Kako otac nije podržavao njihovu
              vezu, Veronika i Fridrik pobjegli su u Sloveniju gdje su se i
              vjenčali, ali je Henrik saznao za to i poslao vojsku da ih nađu.
              Fridrika su tada zatočili u Celjsku kulu koja je tada dobila ime
              Fridrikova kula, dok je Veronika zatvorena u Velikom Taboru. Tada
              je Henrik optužio Veroniku da je copernica (vještica) koja je
              zavela njegovog sina pa je stoga organizirano suđenje Veroniki i
              nakon dva dana odlučeno je da nije kriva, ali Hermanu se to nije
              svidjelo pa je naredio da ju pogube. U dvorištu dvorca donijeli su
              drvenu posudu punu vode i u njoj utopili Veroniku te ju uzidali u
              zid dvorca. Legenda kaže da se i danas tijekom noći u Velikom
              Taboru čuju jecaji nesretne Veronike…
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-between xl:py-12 3xl:py-24">
            <div className="image-container pt-12 pb-4 xl:py-0">
              <Image
                className="image image-two_line-size-xl rounded-lg"
                src={images.VelikiTabor6}
                alt="Veliki Tabor"
                layout="fill"
              />
            </div>
            <div className="image-container pb-12 pt-4 xl:py-0">
              <Image
                className="image image-two_line-size-xl rounded-lg"
                src={images.VelikiTabor7}
                alt="Veliki Tabor"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <p className="w-full break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
          Nakon razgleda dvorca već smo lagano ogladnile pa smo odlučile otići
          na ručak u obližnji restoran <strong>Grešna Gorica</strong>. Ovo
          seosko domaćinstvo nalazi se na samo pet minuta vožnje od Velikog
          Tabora, a s radom je započelo čak 1996. godine što ga čini prvim
          registriranim seoskim turizmom u Hrvatskoj.
        </p>

        <div className="flex h-full w-full flex-col items-center justify-center xl:justify-between">
          <span className="w-full px-1 text-start">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Na putu do dvorca možete vidjeti simpatične minijature dvoraca{" "}
              <strong>Veliki Tabor</strong> i <strong>Miljana</strong>,{" "}
              <strong>kapele sv. Magdalene</strong>, a u šumici malo ispod gdje
              smo ostavile auto nalaze se male kućice koje predstavljaju staro
              zagorsko selo.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-between xl:py-12 3xl:py-24">
            <div className="image-container pt-12 pb-4 xl:py-0">
              <Image
                className="image image-two_line-size-xl rounded-lg"
                src={images.GresnaGorica}
                alt="Grešna Gorica"
                layout="fill"
              />
            </div>
            <div className="image-container pb-12 pt-4 xl:py-0">
              <Image
                className="image image-two_line-size-xl rounded-lg"
                src={images.GresnaGorica2}
                alt="Grešna Gorica"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="w-full px-1 text-start xl:max-w-[65%] xl:px-0 xl:pl-20">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Osim u finoj autohtonoj hrani, ovdje možete uživati u pravom
              seoskom ugođaju jer se oko vas nalaze brojne životinjice,
              vinogradi i livade te stari seoski predmeti koji su iskorišteni
              kao stolovi, ukrasi ili čak kutak za goste izrađen od stare bačve.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
            <Image
              className="image rounded-lg"
              src={images.GresnaGorica5}
              alt="Grešna Gorica"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="w-full px-1 text-start xl:max-w-[65%] xl:px-0 xl:pr-20">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Možete sjediti unutra ili vani na terasama te ispod brajdi. Mi smo
              odlučile sjesti isprod brajdi i uživati u prirodnom zaklonu od
              sunca. U ponudi imaju brojna tradicionalna jela poput purice s
              mlincima, svinjskog pečenja, sira i vrhnja, raznih narezaka i
              namaza te naravno razne vrste štrukli.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
            <Image
              className="image rounded-lg"
              src={images.GresnaGorica9}
              alt="Grešna Gorica"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:justify-between">
          <span className="w-full px-1 text-start">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Mi smo se odlučile za platu seljački narezak koja je koštala 44
              kune, a na njoj se nalaze domaća salama, buđola, špek, prezvuršt i
              dvije vrste sira. Uz to dobijete i ukusni domaći kruh. Za desert
              smo uzele zapečene štrukle i kuhane štrukle. Oboje je koštalo 38
              kuna i meni su ukusniji bili kuhani, dok su se Ivi ipak više
              svidjeli zapečeni. Porcije su stvarno velike i zasitne tako da smo
              ostatak uzele za van. Koliko sam vidjela, cijene jesu malo veće,
              ali mislim da opravdavaju kvalitetu. Osoblje je iznimno simpatično
              i ljubazno.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-between xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:py-0">
              <Image
                className="image image-two_line-size-xl rounded-lg"
                src={images.GresnaGorica7}
                alt="Grešna Gorica"
                layout="fill"
              />
            </div>
            <div className="image-container">
              <Image
                className="image image-two_line-size-xl rounded-lg"
                src={images.GresnaGorica6}
                alt="Grešna Gorica"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:py-0">
              <Image
                className="image image-two_line-size-xl rounded-lg"
                src={images.GresnaGorica8}
                alt="Grešna Gorica"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <p className="w-full break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
          Nakon što smo se fino najele, odlučile smo posjetiti etno-selo{" "}
          <strong>Kumrovec</strong> koje se nalazi na 15-tak minuta udaljenosti.
          Ulaznicu smo također platile 15 kuna, iako je i ona sada poskupjela na
          32.
        </p>

        <div className="flex h-full w-full flex-col items-center justify-center xl:justify-between">
          <span className="w-full px-1 text-start">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Ovo etno-selo danas je najveći tradicijski uređeni prostor koji
              prikazuje autentičan izgled zagorskog sela s početka 20. stoljeća.
              Najpoznatija građevina u selu je{" "}
              <strong>rodna kuća Josipa Broza Tita</strong> koja sadrži
              etnografski i povijesni postav, ali vrijedi posjetiti i ostale
              kućice jer svaka priča svoju priču. Hodajući selom, možete saznati
              kako su nekad izgledali životi starih Zagoraca, odnosno kakve su
              im bile kuće i kojim su se sve obrtima bavili.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:flex-wrap xl:items-center xl:justify-center xl:py-12 2xl:justify-between 3xl:py-24">
            <div className="image-container image-container-w-half pt-12 pb-8 xl:py-0">
              <Image
                className="image image-two_line_landscape-size-xl rounded-lg"
                src={images.Kumrovec}
                alt="Kumrovec"
                layout="fill"
              />
            </div>
            <div className="image-container image-container-w-half">
              <Image
                className="image image-two_line_landscape-size-xl rounded-lg"
                src={images.Kumrovec4}
                alt="Kumrovec"
                layout="fill"
              />
            </div>
            <div className="image-container image-container-w-half pb-12 pt-8 xl:py-0">
              <Image
                className="image image-two_line_landscape-size-xl rounded-lg"
                src={images.Kumrovec5}
                alt="Kumrovec"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between 3xl:py-24">
          <span className="w-full px-1 text-start xl:max-w-[65%] xl:px-0 xl:pr-20">
            <p className="break-words py-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
              Nakon posjeta etno selu, posjetili smo Ivine baku, dedu i njihovu
              ljubimicu Loru koji žive u blizini te uživale u domaćem gemištu i
              veselom razgovoru s njima, a naravno i jele kod njih jer nijedan
              pravi Zagorec svoje goste ne ostavlja prazna želuca. Kasnije nas
              je Ivin deda traktorom odvezao do svoje kleti i vinograda iz kojeg
              se pruža pogled na <strong>Kumrovec</strong> i Sloveniju. Nakon
              lijepog druženja uputile smo se nazad za Zagreb pričajući o svemu
              što smo danas doživjele.
            </p>
          </span>
          <div className="image-container pt-12 xl:max-w-[35%]">
            <Image
              className="image rounded-lg"
              src={images.RandomImg}
              alt="Lora"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Zagorje2022;
