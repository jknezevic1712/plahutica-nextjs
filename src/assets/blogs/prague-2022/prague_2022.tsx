import Image from "next/image";

import AuxiliaryIcon from "components/blog/icons/icons";
import { IconTypes } from "../../../../types/enums/icons";

import images from "./images/images";

export const Prague2022_Overview: BlogOverview = {
  title: "Prag",
  description: "Doživljaji s najdražeg putovanja do sada",
};

export const Prague2022 = () => (
  <div className="h-full w-[85%]">
    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <h2 className="pb-12 text-center font-plus-jakarta-sans text-3xl italic tracking-wider text-emerald-600 md:py-24 md:text-4xl 2xl:text-5xl 3xl:text-6xl">
          Prag - najdraže putovanje do sada
        </h2>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="xl:w-2/3">
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:pb-12 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Kada bi mi netko rekao da će mi putovanje u Prag biti najdraže i
              najljepše do sad, ne bih mu vjerovala. Po slikama i videima koje
              sam gledala činio se kao lijep grad pun sadržaja, ali u stvarnosti
              je nadmašio sva moja očekivanja. Možda nisam toliko objektivna s
              obzirom na to da smo ga posjetili sredinom prosinca, za vrijeme
              adventa kada je sve bilo prekrasno ukrašeno, a uz to je padao i
              snijeg što je dosta pridonijelo ugođaju.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.RandomStreet4.src}
              alt="Trg"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="xl:w-2/3">
            <p className="w-full break-words text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Na ovo putovanje otišli smo preko agencije Global travel s obzirom
              da smo se za njega odlučili dosta kasno da bismo se dobro stigli
              organizirati, ali smo imali i dosta obaveza na faksu. Putovanje je
              koštalo 970 kuna, a u to su uključeni prijevoz, 3 noćenja s
              doručkom u hotelu u Pragu te pratitelj putovanja. Mi smo uzeli i
              nadoplatu od 95 kuna po osobi kako bismo bili smještani u hotelu u
              zoni javnog prijevoza. U putovanje su uključeni i posjet Beči i
              Bratislavi koji su zapravo više stanice za odmor pa ako ih želite
              detaljno obići, predlažem vam da odete samostalno. Ja ću se u ovom
              blogu fokusirati na Prag s obzirom da smo u Beču i Bratislavi
              imali samo 3 sata slobodnog vremena.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.RandomStreet2.src}
              alt="Trdelnik"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h3 className="py-12 text-center font-plus-jakarta-sans text-2xl italic tracking-wider text-emerald-600 md:text-3xl 2xl:text-4xl">
            Zanimljivosti o Pragu
          </h3>
          <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
            <span className="w-full xl:w-2/4">
              <ul className="px-4">
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Najpoznatija crkva u Pragu - <strong>Tynska crkva</strong>,
                  kao i neke druge znamenitosti poput{" "}
                  <strong>Prašne brane</strong> i{" "}
                  <strong>Karlovog mosta</strong> imaju specifičnu „crnkastu“
                  boju zbog industrijalizacije i onečišćenja koja je nekad bila
                  vrlo izražena u Češkoj.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  U Pragu se nalazi <strong>brdo Petrin</strong> s istoimenim
                  vidikovcem koji je sagrađen po uzoru na Eiffelov toranj, ali
                  je visok samo 60 metara.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Babuške se često prodaju kao suveniri što je ostavština
                  komunizma i utjecaja Rusije, ali većinu lokalaca to živcira i
                  ljuti jer babuške nisu njihov simbol, a turisti ih kupuju.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  U Pragu se nalazi 3. najveći dvorski kompleks na svijetu -{" "}
                  <strong>Praški grad</strong> koji je pod zaštitom UNESCO -a.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Stanovnici Praga konzumiraju najviše piva po stanovniku na
                  svijetu, a pivo je ovdje dosta jeftinije nego kod nas, može se
                  naći po cijeni od već 0.50€ po limenci.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Do 2010. godine u Češkoj je bilo legalno posjedovati određene
                  količine droge poput kokaina, ectasya i kanabisa te i danas
                  tamo možete pronaći neke dućane gdje prodaju lizalice, pivo i
                  keksiće od kanabisa.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Pragu možete uživati u jedinstvenoj spa usluzi u kojoj se
                  umjesto vode u bazenima i kadama nalazi pivo.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  U Pragu se nalazi najveći klub Središnje Europe -{" "}
                  <strong>Karlovy Lázně</strong>.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Pragom teče najduža češka rijeka - Vltava.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Česi su poznati kao narod s velikim brojem ateista u usporedbi
                  s ostalim europskim zemljama.
                </li>
              </ul>
            </span>
            <div className="xl:flex xl:h-full xl:w-2/4 xl:flex-col xl:items-center xl:justify-center xl:py-12 3xl:py-24">
              <div className="image-container flex items-center justify-center py-12 xl:max-w-[50%] xl:py-0 xl:pb-48 2xl:max-w-[35%] 2xl:py-12 2xl:pb-20 3xl:pb-6">
                <Image
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image rounded-lg"
                  src={images.PraskiDvorac.src}
                  alt="Praški dvorac"
                  layout="fill"
                />
              </div>
              <div className="image-container flex items-center justify-center py-12 xl:max-w-[50%] xl:py-0 2xl:max-w-[35%] 2xl:py-12">
                <Image
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image rounded-lg"
                  src={images.KarlovMost4.src}
                  alt="Karlov most"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <AuxiliaryIcon
          title="Prijevoz i kretanje gradom"
          iconType={IconTypes.Car}
        />
        <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
          Ako ste u Pragu više dana, skoro sve znamenitosti možete obići
          pješice, a ako ste ovdje nešto kraće, možete koristiti i javni
          prijevoz kako biste uštedjeli vrijeme. Prag ima odličan javni
          prijevoz; tramvaje, buseve te metro kojima možete doći do svake
          atrakcije.
        </p>

        <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
          Cijena karte je 30 kruna, što je oko 0,38€ za 30 minuta te vrijedi za
          sva prijevozna sredstva. Postoje i druge opcije poput karte u trajanju
          od 90 minuta za 40 kruna, 24-satne karte za 120 kruna te 72-satne
          karte za 330 kruna. Mi smo se po gradu kretali tramvajima i pješice te
          smo kupili 30-minutnu kartu po potrebi.
        </p>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <AuxiliaryIcon title="Smještaj" iconType={IconTypes.Bed} />
        <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
          Bili smo smješteni u <strong>hotelu Abito</strong> koji se nalazi u
          zoni gradskog prijevoza na udaljenosti 20-tak minuta od centra Praga i
          dobra je opcija ako putujete na budžetu. Hotel je sasvim u redu za
          prespavati, a velika mu je prednost bogat i raznovrstan doručak.
        </p>
      </div>
    </div>

    <div className="h-fit w-full py-10 lg:pb-24">
      <div className="h-full w-full">
        <iframe
          className="h-full min-h-[50vh] w-full md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh] 2xl:min-h-[80vh]"
          title="Places to visit in Rome"
          src="https://www.google.com/maps/d/u/0/embed?mid=1wELiqawAscJ_vR3Ie-CHbLQ6EsTbxeM&ehbc=2E312F"
        ></iframe>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <AuxiliaryIcon title="Mjenjačnica" iconType={IconTypes.Money} />
        <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
          Mi smo novac mijenjali u mjenjačnici u{" "}
          <strong>Panskoj ulici 4</strong>. Mijenjali smo eure u krune.
        </p>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <AuxiliaryIcon title="Restorani" iconType={IconTypes.Restaurant} />

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              U Červeneho pava
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Mali autentičan češki restoran s tradicionalnim jelima. Mi smo za
              predjelo uzeli kobasicu uz koju dobijete njihovu tradicionalnu
              salatu koja je jedna od najfinijih salata koje sam probala te hren
              i senf. Cijena je bila 135 kruna/ 5.65€. Za glavno jelo uzeli smo
              svinjsku koljenicu koju služe uz vrlo slične dodatke koje služe i
              s kobasicom, a košta 300 kruna/12,5€ te goveđi gulaš s
              okruglicama/šniticama od kruha i krumpira za 250 kruna/10,45€. Uz
              sve to dobijete i dosta kruha i porcije su im zaista velike i
              dobro vas zasite. Sve je bilo jako fino, pa čak i koljenica koja
              me na prvu nije privlačila, a na kraju smo ju jeli svaki dan jer
              nam se baš svidjela. Osoblje je ljubazno i uslužno.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Pevac.src}
                alt="U Červeneho pava"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Pevac2.src}
                alt="U Červeneho pava"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Prague Beer Museum
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Restoran/ pivnica u kojoj možete isprobati preko 20 vrsti piva.
              Možete sami odabrati koje kombinacije i veličine (0.15, 0.3, 0.5)
              želite u paketu, ali naravno možete uzeti i pojedinačno pivo. Mi
              smo se odlučili za 10 vrsti piva po 0.15 dcl. Odabrali smo tamna i
              svjetla piva te pivo s višnjom pod nazivom Rohozec Visen koje nam
              se jako svidjelo pa samo naručili još jedno veće. Većina piva bila
              je ukusna, ali ipak su nam se više svidjela tamna. Uz to smo uzeli
              jednu koljenicu koja je bila jako ukusna. Sve zajedno platili smo
              866 kruna (37€).
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.BeerMuseum.src}
                alt="Prague Beer Museum"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.BeerMuseum2.src}
                alt="Prague Beer Museum"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Vytopna Railway Restaurant
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Jako sladak i autentičan restoran u kojem vam hranu i piće nakon
              što ste ih naručili od konobara dovoze vlakići do vašeg stola. Mi
              smo naručili svinjski kotlet uz kojeg dobijete umak/sos od peršina
              i ulja te ciklu, 4 piva te mesnu štrucu punjenu povrćem i
              krumpiriće. Sve zajedno platili smo 827 kruna (34,50 €). Svakako
              bih vam preporučila da posjetite ovaj restoran zbog doživljaja i
              ambijenta, ali mislim da su im cijene previsoke za veličinu
              porcija koju dobijete, a ni osoblje nije pretjerano ljubazno.
              Hrana je bila u redu, ali jeli smo i puno bolju u Pragu.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Vytopna.src}
                alt="Vytopna Railway restoran"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Vytopna2.src}
                alt="Vytopna Railway restoran"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Vytopna3.src}
                alt="Vytopna Railway restoran"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Restaurace V Cipu Michalska
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Ovaj restoran posjetili smo u sklopu agencije i bio je prezentiran
              kao tradicionalna češka večera za 20€. U tu cijenu uključeno je
              piće po izboru, juha, glavno jelo i desert. Za piće smo uzeli
              pivu, dok smo za jelo dobili povrtnu krem juhu koja je bila
              ukusna, ali glavno jelo i desert bili su veliko razočarenje. Kao
              glavno jelo dobili smo doslovno 2 mala komadića mesa, malo zelja i
              okruglica od krumpira i kruha, a za desert kuglicu sladoleda.
              Kasnije nam je bilo žao što smo uzeli ovu večeru jer se nikako ne
              isplati. Možda je restoran sam po sebi dobar, ali po meni ovaj
              omjer cijene i kvalitete je vrlo loš.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.VCipu.src}
                alt="Restoran V Cipu Michalska"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.VCipu2.src}
                alt="Restoran V Cipu Michalska"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <h3 className="w-full py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
            Terasa U Prince
          </h3>
          <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Restoran i kafić u istoimenom hotelu koji se nalazi u centru starog
            grada i s njegove terase pruža se pogled na{" "}
            <strong>trg Staromestske namesti</strong> i{" "}
            <strong>Tynsku crkvu</strong>. Imali smo u planu posjetiti ga, ali
            je bila velika gužva i nismo htjeli gubiti vrijeme čekajući u redu,
            tako da vam preporučam da dođete odmah u 9 ujutro kada se otvara
            kako biste izbjegli gužve. Cijene su nešto više od standardnih
            cijena u Pragu i po recenzijama ni osoblje nije baš preljubazno, ali
            ako želite lijepi fotografiju s nekim od glavnih znamenitosti Praga
            svakako preporučam posjetu.
          </p>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Trdelnik
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Trdelnik je inače rolano tijesto od umočeno u šećer i najčešće
              cimet koje se peče na valjkovima iznad vatre. Osim cimeta može
              biti umočen i u kokos, lješnjake, keks, kakao, lješnjake itd; a
              može se jesti prazan ili s dodacima nutelle, voća, sladoleda,
              kreme, vrhnja… Mi smo potpuno oduševljeni trdelnikom i zato smo ga
              svaki dan jeli, ponekad čak i više puta. Isprobali smo prazan, s
              nutellom, s vrhnjem i nutellom te s jagodama i sladoledom. Najviše
              nam se svidio s nutellom. Cijene se kreću od 80 kruna nadalje,
              ovisno o dodacima. Mi smo ga jeli na adventskim štandovima i u
              nekoliko slastičarnica (<strong>Trdlo</strong> koji se nalazi
              blizu Karlovog mosta te <strong>Old Czech Chimney Cake</strong> u
              Karlovoj ulici 25).
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Trdelnik.src}
                alt="Trdelnik"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Trdelnik3.src}
                alt="Trdelnik"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Ako tražite nešto jeftinija mjesta za jelo, preporučam vam
              restoran/menzu <strong>Jidelna Svetozor</strong> gdje većinom jedu
              lokalci. Mi smo ga htjeli posjetiti, ali nažalost rade od 10 do 15
              pa nismo stigli.
            </p>
          </span>
        </div>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <AuxiliaryIcon title="Znamenitosti" iconType={IconTypes.Camera} />

        <div className="flex h-full w-full flex-col items-center justify-center pt-8">
          <div>
            <span>
              <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
                Praški dvorac
              </h3>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Na brdu iznad starog grada Praga nalazi se{" "}
                <strong>Hradčany</strong>, odnosno kompleks{" "}
                <strong>Praškog dvorca</strong> koji gleda na rijeku Vltavu. Do
                1784. godine bio je samostalan grad, a kasnije postaje dio Praga
                te se danas tamo nalazi sjedište češkog predsjednika. U ovom
                kompleksu nalaze se brojne turističke atrakcije Praga, od kojih
                se ulaz u neke plaća (npr. <strong>Zlatna ulica</strong>), a
                ulaz u neke je besplatan. Najatraktivnija znamenitost je{" "}
                <strong>gotička katedrala sv. Vida</strong>, a značajne su i već
                spomenuta Zlatna ulica, <strong>bazilika</strong> i{" "}
                <strong>samostan sv. Jurja</strong>,{" "}
                <strong>predsjednička palača</strong>,{" "}
                <strong>palača Lobkowicz</strong>… Ako želite vidjeti smjenu
                straže morate doći u 12:00 ispred gradskih vrata.
              </p>
            </span>
            <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.PraskiDvorac3.src}
                  alt="Praški dvorac"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
                <Image
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.PraskiDvorac2.src}
                  alt="Praški dvorac"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.PraskiDvorac4.src}
                  alt="Praški dvorac"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Židovska četvrt
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              U ovom dijelu grada nekad je živio <strong>Franz Kafka</strong> i
              tamo se nalazi njegova zanimljiva skulptura. Uz{" "}
              <strong>skulpturu Franza Kafke</strong>, u Židovskoj četvrti
              svakako vrijedi posjetiti <strong>Staronovu sinagogu</strong>,{" "}
              <strong>Španjolsku sinagogu</strong>,{" "}
              <strong>staro židovsko groblje</strong>, te brojne zgrade
              ukrašenim kubističkim stilom. Za ulazak u brojne znamenitosti
              možete uzeti zajedničku ulaznicu, dok se ulaznica za Staronovu
              sinagogu kupuje posebno. Više informacija možete pronaći na{" "}
              <a
                className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                href="https://www.jewishmuseum.cz/en/info/visit/admission/"
              >
                linku
              </a>
              .
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.ZidovskaCetvrt.src}
                alt="Židovska četvrt"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.ZidovskaCetvrt2.src}
                alt="Židovska četvrt"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Franz Kafka - rotirajuća glava
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Nalazi se u novijem dijelu Praga, 10-tak minuta laganog hoda od
              centra, blizu shopping centra. To je zapravo čelična konstrukcija
              od 42 diska, visoka 10 metara u obliku glave Franza Kafke. Glava
              se rotira svakih sat vremena, a izradio ju je David Černy.
              Simbolizira neodlučan karakter Franza Kafke i njegovo životno
              djelo „Preobrazba“, ali je i svojevrsna poruka. Naime, postavljena
              je točno preko puta zgrade osiguravajućeg društva gdje je Kafka
              nekoć radio te je na taj način Černy želio postići da se ljudi
              prisjete Kafke kada su frustrirani nekompetentnošću gradskih
              službenika zaposlenih u vijećnici.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.FranzKafka.src}
              alt="Franz Kafka"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <div>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Vaclavski trg
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Ili na češkom <strong>Vaclavske namesti</strong> je živahan trg
              dug čak 750 metara te širok 60 metara na kojem se odvijaju brojne
              proslave i prosvjedi. U doba Karla IV. Trg se koristio kao tržnica
              konja, a danas ovdje možete pronaći razne trgovine, suvenirnice,
              restorane, hotele, barove… Na samom karaju trga nalazi se{" "}
              <strong>Narodni muzej</strong> koji je najstariji i najveći češki
              muzej. Upravo se na ovom trgu, ispred Narodnog muzeja, 1969.
              godine češki student Jan Palach zapalio u znak protesta Sovjetskom
              savezu i njihovom režimu koji se protivio liberalizaciji tadašnje
              Čehoslovačke (poznatije kao Praško proljeće).
            </p>
          </div>
          <div className="w-full xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.VaclavskiTrg.src}
                alt="Vaclavski Trg"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.VaclavskiTrg2.src}
                alt="Vaclavski Trg"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Trg Staromestske namesti
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Najstariji i najznačajniji trg u Pragu, na češkom Staromestske
              namesti. Na trgu se nalazi <strong>Tynska crkva</strong>,{" "}
              <strong>katedrala svetog Nikole</strong> i{" "}
              <strong>zgrada stare gradske vijećnice</strong> s tornjem visokim
              69,5 metara s kojeg se pruža pogled na cijeli Prag. Na zgradi
              vijećnice nalazi se još jedna zanimljiva atrakcija, a to je{" "}
              <strong>astronomski sat</strong>. Trgom inače dominira i{" "}
              <strong>spomenik Janu Husu</strong>, češkom reformatoru i borcu za
              prava češkog naroda. Tijekom adventa trg je pun brojnih štandova s
              tradicionalnim jelima poput trdelnika, kobasica s krumpirom i
              kupusom, gulaša, praške šunke…
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.TrgStaromestskeNamesti.src}
                alt="Trg Staromestske Namesti"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.TrgStaromestskeNamesti2.src}
                alt="Trg Staromestske Namesti"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Tynska crkva
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Ova crkva, svojevrsni je simbol Praga koji možete vidjeti na
              internetu i razglednicama. Ova crkva zove se punim nazivom{" "}
              <strong>Crkva Djevice Marije Tynske</strong> i sagrađena je u 14.
              stoljeću u gotičkom stilu. Crkva je visoka 80 metara i ima dva
              tornja. Ulaz je besplatan, samo na službenim stranicama provjerite
              radno vrijeme.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.TynskaCrkva.src}
                alt="Tynska Crkva"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.TynskaCrkva2.src}
                alt="Tynska Crkva"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Stara gradska vijećnica
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Jedna od najljepših atrakcija u povijesnoj jezgri Praga koja se
              sastoji od nekoliko prostorija, podruma te gotičke kapele na kojoj
              se nalazi <strong>astronomski sat</strong>. Danas je vijećnica
              često mjesto vjenčanja, ali i svojevrsni vidikovac jer se s tornja
              vijećnice visokog čak 69,5 metara pruža predivan pogled na grad.
              Ovu vijećnicu posjetile su brojne poznate osobe poput princeze
              Dijane i princa Charlesa, Toma Cruisea i Andree Bocellija, a
              gradonačelnik Praga i danas ovdje prima posebne goste. Ulaznica u
              kompleks kreće se od 6€ za studente i 10€ za odrasle.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.GradskaVijecnica.src}
              alt="Gradska vijećnica"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Stari astronomski sat - Orloj
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Jedna od najznačajnijih atrakcija na trgu, ujedno najstariji
              astronomski sat na svijetu koji i dalje funkcionira, datira iz 14.
              stoljeća. Na svaki puni sat, mnoštvo posjetitelja gleda 12
              apostola kako izlaze iz sata, a tu su i kostur koji zvoni
              (predstavlja smrt), škrtac s torbom punom novca, Taština koja se
              gleda u ogledalu (narcisoidnost) i Turčin koji odmahuje glavom.
              Osim vremena, sat pokazuje i položaje Sunce i Mjeseca, zvijezda,
              horoskopskih znakova, mjesece te godišnja doba. Legenda kaže da su
              graditelje sata oslijepili kako nikad ne bi ponovili gradnju sata,
              ali ipak replika sata postoji u Seulu. Orloj je poseban jer
              pokazuje staro germansko vrijeme rimskim brojkama, staro češko
              vrijeme zlatnim brojkama i astronomsko vrijeme na kalendarskom
              brojčaniku. Uz to on je jedini svjetski sat koji pokazuje
              babilonsko vrijeme kod kojeg dani traju od zore do sumraka.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[45%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.AstronomskiSat2.src}
                alt="Astronomski sat"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[45%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.AstronomskiSat3.src}
                alt="Astronomski sat"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="w-full py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Prašna brana / Barutna kula
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Toranj koji se nalazi u staroj gradskoj jezgri i nekada je bio
              jedan od 13 ulaza u grad, no danas je uz toranj kod Karlovog mosta
              jedini očuvan. Ime je dobio po tome što se u njemu nekad čuvao
              barut, a danas se s njega pruža odličan pogled s visine od 65
              metara.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.PrasnaBrana.src}
              alt="Prašna brana"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Najuža ulica
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Ova ulica „široka“ je samo 50 centimetara te duga 10 metara, a
              pješački promet njome reguliran je semaforima. Nalazi se u dijelu
              grada pod nazivom <strong>Mala strana</strong>, u blizini Karlovog
              mosta.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.NajuzaUlica.src}
              alt="Najuža ulica"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Muzej Franza Kafke - skulpture koje mokre po Češkoj
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Nalaze se u dijelu grada pod nazivom Mala Strana. Kafkin muzej
              opisuje život i djelo Fraza Kafke, a ulaznica je 260 kruna za
              odrasle i 170 kruna za studente. Skulpture koje mokre po Češkoj
              nalaze se ispred muzeja, izradio ih je David Černy , a zanimljive
              su jer predstavljaju dva muškarca koji mogu pomicati kukove te
              mokriti po obliku Češke. Osim toga, figure su programirane tako da
              mlazom vode mogu pisati češke književne citate i svoje ime, a i
              svatko tko pošalje poruku na broj +420724370770 koji se nalazi na
              ploči u blizini skulptura dobit će ispisanu poruku koju je poslao.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.FranzKafkaMuzej.src}
              alt="Franz Kafka muzej"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Karlov Most
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Prvi most koji je sagrađen na <strong>rijeci Vltavi</strong> koji
              povezuje dvije strane Praga - stari grad i Praški dvorac. Most je
              dug 661 metar, a ime je dobio po kralju Karlu IV. Most je zaista
              predivan u svako doba dana i s njega se pruža prekrasan pogled na
              dijelove Praga. Na mostu se nalaze brojni kipovi i skulpture od
              kojih je najzanimljiviji kip svetog Ivana Nepomuka. Naime, ovaj
              svećenik je nakon što kralju nije htio odati ispovjedne tajne
              njegove žene bio bačen s Karlovog mosta, a kada mu je tijelo
              dodirnulo vodu, na površini vode pokazalo se pet zvijezda.
            </p>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Od tada se smatra svecem i zaštitnikom Praga, a ako dodirnete
              njegov kip, ispunit će vam se želja. Također, zanimljiva legenda
              kaže da je Karlov most sagrađen od jaja, odnosno da su radnici
              prilikom izgradnje mosta, kako bi ga dodatno učvrstili, u cement
              ubacivali jaja. Postoji i treća legenda o mostu koja glasi da
              svatko tko se poljubi ispod velikog luka Karlovog mosta, ostaje
              zauvijek zajedno.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.KarlovMost.src}
                alt="Karlov most"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.KarlovMost2.src}
                alt="Karlov most"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.KarlovMost3.src}
                alt="Karlov most"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              „Krtek dućan“
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Ako ste ljubitelji ovog čehoslovačkog crtića, svakako posjetite
              Krtekov dućan. Cijene su dosta visoke, ali možete pronaći olovke,
              kemijske ili magnete do 5€ te plišance s likovima iz Krteka od
              10-tak € nadalje. Nalazi se u ulici blizu glavnog trga; u Google
              maps samo upišite <strong>Hračky v zlateho lva</strong> i doći
              ćete do ovog dućana.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.KrtekDucan.src}
                alt="Krtek dućan"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.KrtekDucan2.src}
                alt="Krtek dućan"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.KrtekDucan3.src}
                alt="Krtek dućan"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Šetnja Vltavom - Naplavka
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Svakako odvojite nekoliko sati za šetnju uz obalu rijeke Vltave
              jer je priroda prekrasna u svako doba. Šećući ćete vidjeti
              labudove i patkice, a možete uživati i u nekom od kafića i
              restorana uz rijeku ili napraviti piknik. Najznačajnija ulica je{" "}
              <strong>Naplavka</strong>.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-between xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[45%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Naplavka.src}
                alt="Naplavka"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[45%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Naplavka2.src}
                alt="Naplavka"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Prag nudi i brojne druge znamenitosti koje su nam bile na listi
              želja, ali nažalost nismo ih sve stigli obići. No, one su još
              jedan od razloga za ponovnu posjetu. Neke od njih su brdo Petrin,
              Vyšehrad, Lennonov zid, plešuća kuća, knjižnica Klementinum,
              Infinity Tower Book u gradskoj knjižnici, lift koji nikad ne
              staje, a nalazi se u gradskoj vijećnici (Nova Radnice), ZOO te
              muzeje poput muzeja meduza, muzeja seksualnih igračaka, muzeja
              piva, muzeja čokolade te muzeja voštanih figura. Osim toga,
              preporučam vam vožnju Vltavom oko koje smo se nećkali zbog snijega
              i maglovitog vremena, ali da je bilo proljeće ili ljeto zasigurno
              bi išli. Postoje brojne opcije, a rezervirati možete preko{" "}
              <a
                className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                href="https://www.getyourguide.com/-l4971/?cmp=ga&cq_src=google_ads&cq_cmp=6657881893&cq_con=79720045155&cq_term=vltava%20boat%20cruise&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=6657881893&adgroup_id=79720045155&target_id=kwd-562115234569&loc_physical_ms=1007612&match_type=e&ad_id=395215289725&keyword=vltava%20boat%20cruise&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gclid=Cj0KCQiAlKmeBhCkARIsAHy7WVsjGGkZUQpYMKQyRF6Vk6602jNeebLtlsTC4n7cqvo9CxfqMmg-vIgaAlEsEALw_wcB"
              >
                linka
              </a>
              .
            </p>
          </span>
          <div className="w-full xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.RandomStreet5.src}
                alt="Muzej čokolade"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.RandomStreet6.src}
                alt="Ducks"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <AuxiliaryIcon title="Izleti iz Praga" iconType={IconTypes.Excursion} />

        <div className="xl:w-11/12">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <span>
              <h3 className="w-full py-12 text-start font-plus-jakarta-sans text-lg font-extrabold italic tracking-wider 2xl:text-xl 3xl:text-2xl">
                Kutna Hora
              </h3>
              <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                Mi smo na ovaj jednodnevni izlet išli busom agencije, ali ako
                putujete samostalno, Kutnu Koru možete posjetiti uz neku lokalnu
                agenciju ili autobusom ili vlakom koji polaze s glavnog praškog
                kolodvora, a vožnja traje oko sat i 20 minuta.
              </p>
              <div>
                <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                  Kutna Hora je grad udaljen sat vremena vožnje od Praga, a
                  njezina povijesna jezgra nalazi se pod zaštitom UNESCO-a. U
                  srednjem vijeku, Kutna Hora bila je jedna od najvećih rudnika
                  srebra u 14. stoljeću te je iz tog razloga bila izrazito
                  gospodarski jaka i natjecala se s Pragom za glavni grad Češke.
                  S obzirom na bogatu povijest rudarstva i kovanja srebra, u
                  Kutnoj Hori možete posjetiti{" "}
                  <strong>
                    Češki muzej srebra i srednjovjekovni srebrni rudnik
                  </strong>
                  .
                </p>
                <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.KutnaHora4.src}
                      alt="Kutna Hora"
                      layout="fill"
                    />
                  </div>
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.KutnaHora9.src}
                      alt="Kutna Hora"
                      layout="fill"
                    />
                  </div>
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.KutnaHora5.src}
                      alt="Kutna Hora"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                  Jedna od najznačajnijih znamenitosti ovog grada je svakako{" "}
                  <strong>crkva svete Barbare</strong> koja je također pod
                  zaštitom UNESCO-a. Crkva je građena više od 500 godina i
                  pripada gotičkom stilu, a ime po svetoj Barbari dobila je jer
                  je sveta Barbara zaštitnica svih rudara. Ulaz u katedralu se
                  plaća 180 kruna za odrasle i 140 kruna za studente.
                </p>
                <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.KutnaHora7.src}
                      alt="Crkva sv. Barbare"
                      layout="fill"
                    />
                  </div>
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.KutnaHora6.src}
                      alt="Crkva sv. Barbare"
                      layout="fill"
                    />
                  </div>
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.KutnaHora8.src}
                      alt="Crkva sv. Barbare"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                  Osim toga, u Kutnoj Hori uživat ćete u šetnji povijesnom
                  jezgrom te brojnim prekrasnim uličicama, slatkim trgovima,
                  restoranima i kafićima. Mi smo jeli na adventskim štandovima s
                  obzirom na to da je bio vikend i svi kafići i restorani koje
                  smo željeli posjetiti radili su od 11 ili 12 sati. Ako se
                  nađete u Kutnoj Hori, svakako posjetite{" "}
                  <strong>kafić/bistro Blues Cafe</strong>.
                </p>
                <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.KutnaHora.src}
                      alt="Kutna Hora"
                      layout="fill"
                    />
                  </div>
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.KutnaHora2.src}
                      alt="Kutna Hora"
                      layout="fill"
                    />
                  </div>
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.KutnaHora3.src}
                      alt="Kutna Hora"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="xl:w-11/12">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <span>
              <h3 className="w-full py-12 text-start font-plus-jakarta-sans text-lg font-extrabold italic tracking-wider 2xl:text-xl 3xl:text-2xl">
                Sedlec
              </h3>
              <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                U predgrađu Kutne Hore nalazi se i mjesto Sedlec. U Sedlecu
                možete posjetiti <strong>kapelicu</strong> čija je unutrašnjost
                ukrašena sa 40.000 ljudskih kostiju, a nalazi se ispod{" "}
                <strong>groblja Crkve Svih Svetih</strong>.
              </p>
              <div>
                <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                  Ove kosti vežu se za 1278. godinu kada je kralj Otokar II.
                  poslao opata iz samostana u Sedlecu u Jeruzalem, a opat se
                  vratio s vrčem punim svete zemlje s Golgote i prosipao je po
                  samostanskom groblju. Nakon toga je velik broj ljudi želio
                  biti pokopan na ovom groblju i groblje se stoga trebalo
                  proširiti. Nakon epidemije kuge, još veći broj ljudi pokopan
                  je u Sedlecu i došlo je do ideje o izgradnji kosturnice. Prema
                  legendi, kosturnicu je trebao izgraditi poluslijepi redovnik
                  koji je uz to bio zadužen za raspored kostiju.
                </p>
                <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
                  <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.Sedlec.src}
                      alt="Sedlec"
                      layout="fill"
                    />
                  </div>
                  <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.Sedlec4.src}
                      alt="Sedlec"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                1870. godine lokalni drvosječa Frantisek Rindt je od obitelji
                Schwarzenberg dobio zadatak da gomilu kostiju lijepo rasporedi.
                Tada kosturnica poprima današnji oblik; brojne skulpture od
                kostiju, lustere, oltare, kaleže te obiteljski grb obitelji
                Schwarzenberg.
              </p>
              <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                Kosturnica je otvorena svaki dan od 9 do 17 sati, a cijena
                ulaznice za kosturnicu i <strong>katedralu u Sedlecu</strong> je
                120 kruna za studente i 160 kruna za odrasle. Ulaznice možete
                kupiti online ili u Informativnom centru koji se nalazi u
                blizini katedrale u Sedlecu. Mi nažalost nismo stigli ući u
                katedralu jer smo se predugo zadržali u kosturnici. Uz to, tamo
                možete kupiti i ulaznicu za ove dvije lokacije i katedralu svete
                Barbare u Kutnoj Hori po cijeni od 320 kruna za odrasle i 250
                kruna za studente čime ćete malo uštedjeti.
              </p>
              <div>
                <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                  Mi smo ovaj izlet preko agencije platili 20€ po osobi bez
                  ulaznica.
                </p>
                <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.Sedlec2.src}
                      alt="Sedlec"
                      layout="fill"
                    />
                  </div>
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.Sedlec3.src}
                      alt="Sedlec"
                      layout="fill"
                    />
                  </div>
                  <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                    <Image
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      }
                      placeholder="blur"
                      className="image image-two_line-size-xl rounded-lg"
                      src={images.Sedlec5.src}
                      alt="Sedlec"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="xl:w-11/12">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <span>
              <p className="w-full break-words pb-4 text-justify indent-6 leading-8 md:text-lg md:leading-9 2xl:text-xl 2xl:leading-10">
                Ako ste više dana u Češkoj svakako posjetite i{" "}
                <strong>Češki Krumlov</strong>, <strong>Brno</strong>,{" "}
                <strong>Karlovy Vary</strong>, <strong>Plzen</strong> te{" "}
                <strong>Češke Budejovice</strong> koje nam je naš vodič
                preporučio.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
