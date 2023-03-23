import Image from "next/image";

import AuxiliaryIcon from "components/blog/icons/icons";
import { IconTypes } from "../../../../types/enums/icons";

import images from "./images/images";

export const Rim2022_Overview: BlogOverview = {
  title: "Rim",
  description: "Što sve vrijedi posjetiti u Rimu u 72 sata?",
};

export const Rim2022 = () => (
  <div className="h-full w-[85%]">
    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <h2 className="pb-12 text-center font-plus-jakarta-sans text-3xl italic tracking-wider text-emerald-600 md:py-24 md:text-4xl 2xl:text-5xl 3xl:text-6xl">
          Rim - svi putevi vode u vječni grad
        </h2>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="xl:w-2/3">
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:pb-12 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              S deset godina počela sam gledati Inspektora Rexa na talijanskom i
              tada sam se zaljubila u talijanski jezik i gradove te počela
              slušati talijanske pjesme. Kasnije sam talijanski učila preko
              Duolinga te upisala jezičnu gimnaziju velikim dijelom jer sam ga
              htjela još bolje naučiti što se baš i nije dogodilo zbog korone,
              online nastave i nekih drugih okolnosti, ali u budućnosti svakako
              to planiram promijeniti kroz online tečajeve i putovanja.
              Uglavnom, da se vratimo na temu…
            </p>
            <p className="w-full break-words text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Već u toj dobi imala sam veliku želju posjetiti Rim i ostale
              talijanske gradove jer sam do tada posjetila jedino Trst. Ta želja
              mi se i ostvarila kad sam u srednjoj školi posjetila nekoliko
              gradova na izletima, ali sam i samostalno obišla dosta gradova. Do
              dvadesete godine obišla sam petnaestak talijanskih gradova, ali
              nekako se Rim nikad nije uklopio u moje planove, sve do prije
              nekoliko mjeseci.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.RandomStreet.src}
              alt="Random Street"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="xl:w-2/3">
            <p className="w-full break-words text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Dečko i ja smo u lipnju pronašli relativno jeftine karte za rujan
              i odlučili konačno posjetiti Rim. Kad smo kupili karte bila sam
              jako uzbuđena i bilo mi je nevjerojatno da ću posjetiti taj dugo
              očekivani Rim. Moj entuzijazam su smanjili štrajkovi u avionskom
              prijevozu i nisam se previše nadala da ćemo uopće otići na put.
              Ali eto, došao je i taj deveti mjesec, let nije bio otkazan i mi
              smo se uputili na trodnevno putovanje u Rim.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.RandomStreet2.src}
              alt="Random Street"
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
            Zanimljivosti o Rimu
          </h3>
          <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
            <span className="xl:w-2/4">
              <ul className="px-4">
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  U Rimu se na svim fontanama nalazi pitka voda što je vrlo
                  korisno ako putujete ljeti kada je jako vruće, a osim toga i
                  uštedjet ćete. Samo uz sebe imajte bočicu i lako ćete ju moći
                  nadopuniti jer po gradu zaista ima dosta fontana.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Iz poznate Fontane di Trevi svaki dan se izvadi oko 3500€ koje
                  se doniraju u dobrotvorne svrhe.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Neki od obeliska koji se nalaze tamo, Rimljani su uzeli iz
                  Egipta nakon što su ga osvojili te su ih prenijeli u Rim.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  U Rimu se nalazi više od 900 crkava i 280 fontana.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Rim je prvi grad na svijetu koji je imao milijun stanovnika.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Nijedna građevina u Rimu ne smije biti viša od bazilike sv.
                  Petra u Vatikanu.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  U Rimu možete posjetiti <strong>Muzej o tjestenini</strong>.
                </li>
                <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                  Ako ste fleksibilni s vremenom, posjetite Rim prve nedjelje u
                  mjesecu jer je tada ulaz u mnoge muzeje i znamenitosti
                  besplatan.
                </li>
              </ul>
            </span>
            <div className="image-container py-12 xl:max-w-[40%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image rounded-lg"
                src={images.RandomStreet3.src}
                alt="Random Street"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center justify-center text-justify leading-6 xl:flex-row-reverse xl:justify-between">
        <span className="xl:w-2/4">
          <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            S obzirom na to da smo bili samo 3 dana, odlučili smo se fokusirati
            na najbitnije atrakcije i istražiti ih kako treba, no još dosta
            stvari nam je ostalo na listi i odlučili smo se definitivno vratiti.
          </p>
          <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Postoje brojni epiteti kojima se već stoljećima opisuje Rim: vječni
            grad, glavni grad svijeta, grad na sedam brežuljaka, grad s dušom…
          </p>
          <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Mnogi kažu da je Rim najprljaviji grad u kojem su bili, ali mislim
            da je svaki veći europski grad u određenim kvartovima prljaviji, pa
            tako na primjer i Zagreb. Istina je da ima smeća po ulicama, a
            pogotovo ujutro jer je grad prepun turista koji partijaju tijekom
            noći i kante su jednostavno premale, ali mi smo nekoliko puta
            vidjeli kako peru ulice s crijevom za vodu tako da se ne može reći
            da ne rade ništa po pitanju čistoće, ali da bi moglo biti čišće, bi.
          </p>
          <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Za mene je Rim živ, brz, raznovrstan, pomalo kaotičan, pun
            skulptura, crkava i bazilika, raznih slatkih uličica, prefine hrane
            i temperamentnih ljudi koji voze kao luđaci. Nitko vam neće stati na
            zebri tako da ako vam auto nije previše blizu, samo krenite jer ćete
            u suprotnom vječno čekati da prijeđete cestu.
          </p>
          <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Ipak smatram da se Rim ne može vjerno opisati riječima i što god
            pročitali o njemu i koliko god slika pogledali, Rim se jednostavno
            treba doživjeti.
          </p>
        </span>
        <div className="image-container py-12 xl:max-w-[40%] 3xl:py-24">
          <Image
            loading="eager"
            blurDataURL={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            }
            placeholder="blur"
            className="image rounded-lg"
            src={images.RandomStreet4.src}
            alt="Random Street"
            layout="fill"
          />
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
          Karte smo kupili preko Ryanaira i koštale su 48€ po osobi u oba smjera
          s uključenom malom ručnom prtljagom. Letjeli smo u petak iz Zagreba do
          aerodroma <strong>Roma Fiumicino</strong> u 12:10 i let je trajao oko
          sat i pol. Kad smo sletjeli, na aerodromu je bio kaos i gužva jer su
          štrajkali u željezničkom prometu te vlakovi do grada nisu vozili.
          Prvotni plan nam je bio ići do grada vlakom jer je puno brže i
          udobnije, ali smo se na kraju zbog štrajka odlučili za bus čije cijene
          se kreću od 6 do 8€.
        </p>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="xl:w-2/3">
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Na aerodromu će vas oznake voditi do mjesta s kojeg idu shuttle
              busevi i tamo ćete naći tri štanda različitih prijevoznika koji
              prodaju karte do stanice <strong>Roma Termini</strong> koja je
              odlično povezana metroom i autobusnim linijama s bilo kojim
              dijelom Rima. Karte možete kupiti i online preko ove stranice{" "}
              <a
                className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                href="http://www.sitbusshuttle.it/"
              >
                http://www.sitbusshuttle.it/
              </a>{" "}
              ako vam je tako lakše. Busevi idu dosta često, ali je najbolje da
              se raspitate na svakom štandu kad je sljedeći bus i onda kupite
              kartu kod tog prijevoznika. Mi smo kartu platili 6€ preko
              kompanije <strong>Terravision</strong>, a bus je kretao za nekih
              15-ak minuta. Vožnja do grada, odnosno do stanice Roma Termini
              inače traje oko sat vremena, ali nama je trajala oko sat i pol
              zbog velike prometne gužve.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.Avion1.src}
              alt="Slika iz aviona"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="xl:w-2/3">
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Ako se odlučite za putovanje vlakom do centra, što vam je moja
              preporuka, imate dvije opcije. Prva opcija je direktan brzi vlak
              Leonardo da Vinci s kojim ste za pola sata na stanici Roma Termini
              i košta 14€. Druga opcija je normalan vlak koji vozi 50 minuta do
              Roma Termini i košta 8€. Mi smo se pri povratku za Zagreb odlučili
              upravo za drugu opciju jer je jeftinija, a 15 minuta ne čini nam
              veliku razliku. Karte smo kupili direktno na kolodvoru i prije
              ulaska u vlak na peronu skenirali donji dio karte na zelenim
              uređajima. Let za Zagreb bio je u 14:10 u ponedjeljak.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.Avion3.src}
              alt="Slika iz aviona"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="xl:w-2/3">
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Što se tiče kretanja gradom, sve najbitnije atrakcije mogu se
              obići i pješice ako imate smještaj u centru i ako ste tu barem 4
              ili 5 dana, ali ako ste kraće i ako vam je smještaj malo izvan
              grada kao što je nama bio, predlažem da kupite karte za javni
              prijevoz. Ove karte vrijede za metro, busove i tramvaje, a kupuju
              se na automatima koji se nalaze na svakoj stanici metroa. Ovi
              aparati često ne prihvaćaju krupne novčanice tako da ako ne želite
              nepotrebno izgubiti vrijeme, pripremite točan iznos ili
              jednostavno platite karticom. Karte se skeniraju na uređajima koji
              se nalaze u pothodnicima metroa ili na žutim uređajima u busu.
              Pojedinačna karta košta 1,5€ i vrijedi za vožnju od 100 minuta.
              Postoje i karte od 24 h (7€), 48 h (12.50€) i 72 h (18€) te za 7
              dana (24€). Svaka karta vrijedi od trenutka kad ste ju skenirali
              na uređaju, a karte za više dana mogu se koristiti neograničeno.
              Mi smo kupili kartu za 72 sata te smo se po gradu kretali{" "}
              <a
                className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                href="https://www.rome.net/metro"
              >
                metroom
              </a>{" "}
              i to većinom linijom A, dok smo liniju B koristili samo kad smo
              išli do Koloseuma. Metro vozi od 5:30 do 11:30, a subotom do 1:30.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.Avion2.src}
              alt="Slika iz aviona"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <AuxiliaryIcon title="Smještaj" iconType={IconTypes.Bed} />
        <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
          Iako bi nam bilo puno praktičnije pronaći smještaj u centru, cijene su
          u tom periodu bile stvarno previsoke za ono što se nudi, a svi
          smještaji koji su nam se činili dobri, bili su rasprodani 3 mjeseca
          unaprijed. Tada smo se odlučili uzeti smještaj izvan grada, ali blizu
          stanice vlaka i metroa te smo tako uštedjeli dosta novca. Ako i vi
          putujete sa studentskim budžetom, predlažem vam da pogledate smještaje
          u kvartu <strong>San Giovanni</strong> jer su puno povoljniji, a
          svejedno ste u centru Rima za 20-tak minuta. Mi smo 3 noćenja s
          doručkom platili 1400 kuna.
        </p>
      </div>
    </div>

    <div className="h-fit w-full py-10 lg:pb-24">
      <div className="h-full w-full">
        <iframe
          className="h-full min-h-[50vh] w-full md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh] 2xl:min-h-[80vh]"
          title="Places to visit in Rome"
          src="https://www.google.com/maps/d/u/0/embed?mid=1cgyR5TZzBseKNK9Veq76LsbFhsyhwoE&ehbc=2E312F"
        ></iframe>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <AuxiliaryIcon title="Restorani" iconType={IconTypes.Restaurant} />

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Pastificio Guerra
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Ručno rađena tjestenina za samo 4,5€ koju serviraju u plastičnim
              posudama za van. Nalazi se u blizini Španjolskih stepenica i svaki
              dan nude 2 vrste tjestenine s umakom, a možete kupiti i paket
              tjestenine kao suvenir. Mi smo isprobali tjesteninu s tikvicama te
              špagete s tunom i oboje je bilo stvarno ukusno, a porcije su
              velike. Rade svakim danom od 13 do 21 sat. Oko 13 počinje gužva pa
              vam savjetujem doći kasno popodne.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.PastificioGuerra.src}
              alt="Pastificio Guerra"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Tonarello
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Presladak restoran koji se nalazi u šarmantnoj i šarenoj četvrti{" "}
              <strong>Trastevere</strong>. Nažalost, stol se ne može rezervirati
              unaprijed pa ćete vjerojatno morati čekati u redu, ali imaju
              stvarno velik vanjski i unutarnji prostor tako da se red zaista
              brzo kreće. Mi smo došli na red za nekih 15-ak minuta iako je
              ispred nas bilo sigurno 10 osoba. Svakako vam preporučujem da
              dođete prije 19:00 jer je tada red postao zaista dug. Naručili smo
              dva aperol spritza, tradicionalnu tjesteninu cacio e pepe te
              carbonaru. Obje tjestenine bile su preukusne, kremaste i pune
              okusa, ali možda nam je malo bolja ipak bila cacio e pepe.
              Servirane su malim tavama što je baš fora i uklapa se u cjelokupni
              ambijent restorana. Osoblje je izuzetno ljubazno i brzo, a porcije
              su manje nego kod nas, ali nama su bile taman. Cacio e pepe koštao
              je 9€, carbonara 9,5€, a aperol 6,5€.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.Tonarello.src}
              alt="Tonarello"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Pompi
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Iako smo htjeli posjetiti i slastičarnice{" "}
              <strong>Giolitti</strong> i <strong>Venchi</strong>, uvijek smo se
              nekako našli blizu Pompija kad smo se zaželjeli sladoleda ili
              tiramisua. Giolitti je inače najpoznatija slastičarnica u Rimu i
              žao mi je što ju nismo posjetili jer je bila gužva kad smo prvi
              put došli, ali za nju sam naišla na zaista dosta preporuka. U
              Venchiju sam bila nekoliko puta u Firenzi, Veroni i Bologni i
              stvarno imaju ukusan te kremast sladoled (odnosno gelato) iako
              mislim da su im cijene nešto više.
            </p>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Mi smo u Pompiju isprobali 3 vrste tiramisua - obični, s keksima i
              s lješnjakom te smo naravno probali i gelato. Sve je bilo
              preukusno, ali meni se ipak nekako najviše svidio obični tiramisu.
              Tiramisu košta 5€, dok cijena gelata ovisi o broju kuglica koje
              uzmete. Dvije kuglice su 2,50€, tri su 3,50€, dok je pet kuglica
              4,50€. Osim toga, možete isprobati brojne druge kolače, a između
              ostalog i maritozzo koji je inače tipičan rimski kolač, odnosno
              meko pecivo punjeno vrhnjem za koji smo nažalost saznali tek kad
              smo se vratili.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Pompi.src}
                alt="Pompi"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Pompi2.src}
                alt="Pompi"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              All&apos;Antico Vinaio
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Mjesto s tradicionalnim talijanskim sendvičima koje postoji u još
              nekoliko talijanskih gradova. Nažalost, na sendviče se skoro
              uvijek mora čekati u redu, ali se isplati. Mi smo čekali nekih
              15-tak minuta.
            </p>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Uzeli smo La Boss sendvič u kojem je krema od tartufa, rukola,
              pršut i sir za 7€ te La Paradiso s kremom od pistacije, sirom
              stracciatella, goveđim carpacciom i komadićima lješnjaka za 11€.
              Iako se ovo čini jako puno novaca za sendvič, zapravo i nije jer
              je sendvič ogroman i nećete ga moći pojesti odjednom tako da
              zapravo imate dva obroka. Bio nam je puno ukusniji La Boss jer je
              bio baš sočan i kombinacija punjenja je puno bolja nego kod La
              Paradisa. Jedino je La Boss malo intenzivnijeg okusa zbog tartufa,
              ali nama nije smetalo. Focaccia u kojoj se peciva nalaze također
              je jako fina.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.AllAnticoVinaio.src}
              alt="All'Antico Vinaio"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Vulio
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Tradicionalni talijanski sendviči čije se cijene kreću od 4€ pa
              nadalje, a nalaze se u blizini Vatikana. Mi smo isprobali tri
              vrste: Negramaro, Al Bano i Caparezza i svaki od njih koštao je
              6€. Za tu cijenu dobijete veliku šnitu kruha koji je sličan
              brusketima i tradicionalne dodatke kao što su npr. mortadela,
              šunka, pršut, mozzarella, namaz od pistacije… Iako su svi ovi
              dodaci nešto skuplji od uobičajenih sastojaka sendviča, mislim da
              je cijena ipak previsoka jer porcije nisu toliko velike i kruh je
              bio jako suh te smo ga jedva pojeli. Uzeli smo i 3 dcl piva koje
              košta 3,50€. Dosta ljudi preporučuje ovo mjesto i imaju zaista
              visoke recenzije, ali nas se osobno nije naročito dojmilo.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.Vulio.src}
              alt="Vulio"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Pinsa &apos;mpò - pinseria romana
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Pinsa je zapravo preteča pizze i ako ste njezin ljubitelj,
              definitivno morate posjetiti ovo mjesto. Nalazi se u blizini
              Vatikana te u ponudi imaju pinse različitih vrsta, a cijene se
              kreću od 5,50 €. Mi smo nažalost isprobali samo carbonaru jer smo
              prije toga išli na ručak u Vulio pa nismo bili toliko gladni, ali
              sljedeći put ćemo definitivno probati još vrsta. Pizze se nalaze u
              izlogu i kad odaberete koju želite, oni ju podgriju u krušnoj
              peći. Možete uzeti za van ili ako nije gužva sjesti ispred jer
              imaju samo 4 stola. Ovo je zasigurno najfinija pinsa/pizza koju
              sam ikad jela jer je korica jako hrskava, a opet nije suha i
              nadjev je preukusan.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Pinsa.src}
                alt="Pinsa"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Pinsa2.src}
                alt="Pinsa"
                layout="fill"
              />
            </div>
          </div>
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
                Koloseum
              </h3>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Mislim da svi već znaju da je <strong>Koloseum</strong> jedan od
                najprepoznatljivijih simbola Rima te jedna od najposjećenijih
                turističkih atrakcija koja je služila za borbe gladijatora i
                životinja. Također, Koloseum je 2007. uvršten na popis sedam
                modernih svjetskih čuda. Iako je izvana stvarno prekrasan i
                impresivnih dimenzija, savjetujem vam, ako niste veliki
                ljubitelji povijesti, ne ulazite u Koloseum jer zaista nemate
                što pretjerano vidjeti. Čak mi se čini da je naša arena u Puli
                bolje očuvana.
              </p>
            </span>
            <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
              <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.Koloseum.src}
                  alt="Koloseum"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.Koloseum2.src}
                  alt="Koloseum"
                  layout="fill"
                />
              </div>
            </div>
          </div>

          <div>
            <span>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Osim što nećete vidjeti ništa jer je pola Koloseuma zatvoreno,
                gužve su ogromne i morate rezervirati ulaznice unaprijed. Mi smo
                rezervirali 2 mjeseca ranije i već tada nije bilo puno izbora
                termina. Mi smo odlučili ući jer nismo vjerovali sličnim
                recenzijama kao što je i moja sada i hvala Bogu što smo
                studentsku ulaznicu za Koloseum, <strong>Forum Romanum</strong>{" "}
                i <strong>brdo Palatin</strong> platili oko 50-ak kuna tako da
                nam nije bilo žao jer smo svakako htjeli ući na Forum i Palatin.
              </p>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Ako se pak ipak odlučite za posjet Koloseumu, svoje ulaznice
                možete rezervirati preko ovog{" "}
                <a
                  className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                  href="https://www.getyourguide.com/colosseum-l2619/rome-colosseum-roman-forum-palatine-hill-entry-tickets-t127592/"
                >
                  linka
                </a>
              </p>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Ulaznice isprintajte i samo ih skenirajte na lokacijama koje su
                uključene u vašu ulaznicu.
              </p>
            </span>
            <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
              <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.Koloseum3.src}
                  alt="Koloseum"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.Koloseum4.src}
                  alt="Koloseum"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Palatin
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Brdo Palatin najpoznatiji je brežuljak od sedam brežuljaka na
              kojima je sagrađen Rim. U antičko doba bio je dom rimskih careva i
              aristokracije, a danas se s njega pruža prekrasan pogled na
              Koloseum i ostatke rimskog foruma te na sam grad Rim.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Palatin.src}
                alt="Palatin"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Palatin2.src}
                alt="Palatin"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Rimski forum
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Nekadašnji glavni trg starog grada Rima na kojem su se nalazili
              brojni hramovi, palače, slavoluci, kurija u kojoj se sastajao
              Senat, spomenici od mramora, a danas su tu njihovi ostaci. Bio je
              okupljalište i bogatih i siromašnih, mjesto održavanja borbi
              gladijatora (jer još nije bilo Koloseuma), ali i mjesto gdje je
              vučica dojila Romula i Rema.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.RimskiForum.src}
                alt="Rimski Forum"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.RimskiForum3.src}
                alt="Rimski Forum"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.RimskiForum2.src}
                alt="Rimski Forum"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <div>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Fontana di Trevi
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Jedan od najprepoznatljivijih simbola Rima, sagrađena u 18.
              stoljeću. Uvijek sam mislila da ljudi pretjeruju u opisima njene
              ljepote, ali zapravo sam bila u krivu. Fontana je uistinu
              prekrasna i veličanstvena te je puno veća nego što sam ju
              zamišljala.
            </p>
          </div>

          <div>
            <span>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Ako želite imati lijepu sliku bez doslovno tisuću ljudi u kadru,
                ali i ako želite uživati u ovoj jedinstvenoj fontani u miru,
                savjetujem vam da ju posjetite što ranije ujutro. Iza 9 se već
                počinju stvarati velike gužve, a kasnije tijekom dana je još
                više krcato, osobito predvečer.
              </p>
            </span>
            <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.FontanaDiTrevi2.src}
                  alt="Fontana Di Trevi"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.FontanaDiTrevi.src}
                  alt="Fontana Di Trevi"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.FontanaDiTrevi3.src}
                  alt="Fontana Di Trevi"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row-reverse xl:justify-between">
          <span className="xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Panteon
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Prekrasan veliki antički hram u kojem su pokopani veliki slikar
              Rafael te otac Italije Viktor Emanuel II. Ulaz je besplatan, samo
              se vikendom mora rezervirati termin preko službene stranice.
              Nažalost, mi nismo ušli jer nismo stigli iako nam je bilo u planu.
              Svakako ga posjetite jer se barem na internetu čini prelijep.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.Panteon.src}
              alt="Panteon"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span className="w-full">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Piazza Navona
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Još jedan od brojnih trgova u Rimu na kojem se nalaze 3 fontane:{" "}
              <strong>Fontana del Moro</strong>,{" "}
              <strong>Fontana di Nettuno</strong> i najpoznatija{" "}
              <strong>Fontana dei Quattro Fiumi</strong>. Na trgu i oko njega
              nalaze se brojni slatki kafići i restorani te ulični svirači.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.PiazzaNavona.src}
                alt="Piazza Navona"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.PiazzaNavona2.src}
                alt="Piazza Navona"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Bazilika sv. Petra
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              U 16. stoljeću sagrađena je na mjestu gdje je{" "}
              <strong>sveti Petar</strong> razapet na križ. Bazilika je
              sagrađena upravo njemu u čast i danas je jedna od najpoznatijih i
              najveličanstvenijih katoličkih crkava na svijetu. Ovo je najveća
              bazilika na svijetu u koju može stati čak 60 000 ljudi. Ulaz je
              besplatan, ali u redu se čeka i do 2 sata tako da mi nismo ulazili
              jer je red bio stvarno ogroman, a nismo imali vremena za
              gubljenje. U bazilici se plaća penjanje na kupolu s koje se pruža
              predivan pogled na Vatikan i Rim. Uspon pješice je 8€, dok je
              liftom 10€.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Vatikan.src}
                alt="Vatikan"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Vatikan2.src}
                alt="Vatikan"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <div>
            <span>
              <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
                Vatikanski muzeji
              </h3>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                U muzejima se nalaze zbirke djela koje su sakupili brojni pape
                kroz povijest. Sastoje se od 1400 soba u kojima možete vidjeti
                djela nekih od najpoznatijih autora na svijetu kao što su{" "}
                <strong>Rafael</strong>, <strong>Michelangelo</strong>,{" "}
                <strong>Caravaggio</strong>, <strong>Bernini</strong>… Uživat
                ćete u brojnim kipovima, oslikanim stropovima, biblijskim
                prizorima na tepisima, detaljima po zidovima i stropovima…
              </p>
            </span>
            <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.VatikanskiMuzej.src}
                  alt="Vatikanski muzeji"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.VatikanskiMuzej3.src}
                  alt="Vatikanski muzeji"
                  layout="fill"
                />
              </div>
            </div>
          </div>

          <div>
            <span>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Muzeji ne rade nedjeljom. Ulaznice smo kupili preko interneta
                kako bismo izbjegli čekanja u redu. Inače je studentska ulaznica
                8€ i 4€ je naknada za rezervaciju, ali kako je bilo srce sezone,
                ulaznice su bile rasprodane, kao i termin koji smo prvo željeli
                odabrati. Na kraju smo ulaznice s vodičem platili 25€ po osobi.
              </p>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Razgled je trajao oko 2 sata i ako ste kratko u Rimu kao i mi te
                ste ga odlučili posjetiti tijekom velikih gužvi, preporučam vam
                da ostavite muzeje za drugi put jer ih nećete doživjeti kako
                treba i htjet ćete što prije izaći. Iako je zbirka stvarno
                prekrasna i vrijedi ju posjetiti, nas je razgled stvarno umorio
                jer je bilo previše ljudi, 40+ stupnjeva i 0% zraka u
                prostorijama.
              </p>
            </span>
            <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.VatikanskiMuzej2.src}
                  alt="Vatikanski muzeji"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.VatikanskiMuzej4.src}
                  alt="Vatikanski muzeji"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <h3 className="w-full py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
            Sikstinska kapela
          </h3>
          <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Nakon dugotrajnog razgleda <strong>Vatikanskih muzeja</strong>,
            Sikstinska kapela nije nas posebno oduševila iako znam da će se
            mnogi zasigurno uvrijediti na to. Detalji su prekrasni i čuli smo od
            vodiča koliko je Michelangelu bilo teško naslikati sve prizore iz
            Biblije, ali meni su osobno neka djela iz muzeja puno ljepša i
            zanimljivija. Nikako nemojte pokušati slikati jer je zabranjeno i
            uhvatit će vas osiguranje.
          </p>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="w-full">
            <span>
              <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
                Piazza del Popolo
              </h3>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Trg s obeliskom, gradskim vratima, fontanama i dvije prekrasne
                barokne crkve.
              </p>
            </span>
            <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.PiazzaDiPopolo3.src}
                  alt="Piazza Di Popolo"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.PiazzaDiPopolo2.src}
                  alt="Piazza Di Popolo"
                  layout="fill"
                />
              </div>
            </div>
          </div>

          <div>
            <span>
              <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
                Meni najdraži trg u cijelom Rimu. Svidio mi se jer je baš velik
                i prostran te nema toliko turista jer se ne nalazi u užem
                centru. S obzirom na to, možete vidjeti kako Talijani provode
                večeri družeći se uz sladoled i pića. Tako smo i mi uzeli
                tjesteninu za van i odlučili sjediti upijajući atmosferu.
              </p>
            </span>
            <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.PiazzaDiPopolo.src}
                  alt="Piazza Di Popolo"
                  layout="fill"
                />
              </div>
              <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
                <Image
                  loading="eager"
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  }
                  placeholder="blur"
                  className="image image-two_line-size-xl rounded-lg"
                  src={images.PiazzaDiPopolo4.src}
                  alt="Piazza Di Popolo"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Villa Borghese
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Najveći park u centru Rima koji obavezno morate posjetiti i
              provozati se brodićem po jezeru ili sjesti na klupicu i uživati u
              prirodi. Također ćete uživati u antičkim hramovima i muzejima te
              botaničkom vrtu. Mi smo ga nažalost posjetili navečer jer smo
              kasnili zbog štrajka prijevoznika, ali i noću je također čaroban
              na svoj način.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.VillaBorghese.src}
                alt="Villa Borghese"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.VillaBorghese2.src}
                alt="Villa Borghese"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Piazza di Spagna
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Ili na hrvatskom <strong>Španjolski trg</strong>, jedan je od
              najpoznatijih trgova na svijetu. Na njemu se nalaze također vrlo
              poznate Španjolske stube na čijem se vrhu nalazi{" "}
              <strong>crkva Trinita dei Monti</strong>, a u podnožju je
              Berninijeva <strong>fontana Baraccia</strong>.
            </p>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Na Španjolskim stubama zabranjeno je sjedenje i ako vas ulovi
              policija koja je tamo svaki dan, možete platiti kaznu od čak 250€
              za sjedenje i 400€ ako jedete ili pijete na stubama.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.PiazzaDiSpagna2.src}
                alt="Piazza Di Spagna"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.PiazzaDiSpagna.src}
                alt="Piazza Di Spagna"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.PiazzaDiSpagna3.src}
                alt="Piazza Di Spagna"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center xl:flex-row xl:justify-between">
          <span className="w-full xl:w-2/3">
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Bazilika di Sant&apos;Andrea della Valle
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Prekrasna barokna bazilika koja se nalazi u centru Rima na koju
              smo sasvim slučajno naletjeli i u nju svakako vrijedi ući jer su
              freske unutra zaista zadivljujuće. Ulaz je besplatan.
            </p>
          </span>
          <div className="image-container py-12 xl:max-w-[25%] 3xl:py-24">
            <Image
              loading="eager"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              }
              placeholder="blur"
              className="image rounded-lg"
              src={images.StAndreaDellaValle.src}
              alt="Bazilika di Sant'Andrea della Valle"
              layout="fill"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center pt-8">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Trastevere
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Četvrt Rima koja me najviše oduševila. Totalno je drugačija
              energija od one u centru Rima; ljudi su nekako opušteniji i
              veseliji, čuje se glazba iz brojnih restorana i kafića, fasade
              zgrada su u živahnim bojama i sve je prepuno preslatkih uličica.
              Definitivno odvojite nekoliko sati za šetnju ovom četvrti koja se
              nalazi nekih 25 minuta od centra Rima te sjednite u neki od
              restorana.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Trastevere.src}
                alt="Trastevere"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Trastevere3.src}
                alt="Trastevere"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[35%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Trastevere2.src}
                alt="Trastevere"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="w-full py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Campo de&apos; Fiori
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Živahna talijanska tržnica na kojoj će vam svi nuditi da isprobate
              njihove proizvode i naravno kupite ih. Kako su bili vrlo
              uvjerljivi, i mi smo isprobali neke od njihovih tradicionalnih
              likera kao što su limoncelo, liker od pistacije i čokolade te
              namaze od tartufa, sira i čili papričica koji su bili ukusni, ali
              nismo ništa kupili. Cijene su nam se činile malo previsoke, ali
              ako volite kupovati hranu kao suvenire, definitivno posjetite ovu
              tržnicu na kojoj možete pronaći razne vrste tjestenina, namaza,
              likera, ulja, začina…
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Trznica2.src}
                alt="Trznica"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.Trznica.src}
                alt="Trznica"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Most Sant&apos; Angelo i utvrda Sant&apos; Angelo
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Antički most na rijeci Tiber koji je 134. sagradio car Hadrijan
              kako bi lakše došao do svoje buduće grobnice koja je tada još bila
              u izgradnji, odnosno današnja utvrde Sant&apos;Angelo. Ovim mostom
              ćete prijeći ako iz centra idete do Vatikana.
            </p>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Utvrda Sant&apos;Angelo dobila je naziv po brojim anđelima koji
              krase most, ali i anđelu koji se nalazi na njezinom samom vrhu.
              Imala je brojne namjene kroz povijest (vojarna, tamnica, arsenal,
              riznica…), a danas je muzej.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.TvrdavaStAngelo.src}
                alt="Tvrdava St Angelo"
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.TvrdavaStAngelo2.src}
                alt="Tvrdava St Angelo"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>
            <h3 className="py-12 text-center font-plus-jakarta-sans text-lg font-bold italic tracking-wider md:text-start md:text-xl xl:text-2xl 3xl:text-2xl">
              Piazza Venezia i spomenik Viktoru Emanuelu II.
            </h3>
            <p className="w-full break-words pb-4 text-justify indent-6 text-lg leading-8 md:text-xl md:leading-9 2xl:leading-9 3xl:text-2xl 3xl:leading-relaxed">
              Veliki trg u centru Rima, u blizini Koloseuma. Trgom dominira
              spomenik Viktoru Emanuelu II., prvom kralju Kraljevine Italije.
              Zbog gradnje ovog spomenika srušene su brojne antičke građevine na
              početku 20. stoljeća čemu su negodovali brojni građani, a još se
              naziva i Oltar domovine. Ulaz je besplatan i svakako ga
              preporučujem jer se pruža pogled na ulicu{" "}
              <strong>Via dei Fori Imperiali</strong> koja povezuje Piazzu
              Veneziu i Koloseum te brojne okolne forume.
            </p>
          </span>
          <div className="xl:flex xl:h-full xl:w-full xl:items-center xl:justify-center xl:py-12 3xl:py-24">
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.VittorioEmanuele.src}
                alt="Spomenik Viktoru Emanuelu II."
                layout="fill"
              />
            </div>
            <div className="image-container py-12 xl:max-w-[50%] 3xl:py-24">
              <Image
                loading="eager"
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }
                placeholder="blur"
                className="image image-two_line-size-xl rounded-lg"
                src={images.VittorioEmanuele2.src}
                alt="Spomenik Viktoru Emanuelu II."
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="h-fit w-full py-10">
      <div className="flex h-full w-full flex-col items-center text-justify leading-6">
        <AuxiliaryIcon title="Budžet" iconType={IconTypes.Money} />
        <ul className="px-4">
          <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Let s uključenim ruksakom 48€ po osobi
          </li>
          <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Prijevoz od/do grada s aerodroma busom 6-8€ po osobi
          </li>
          <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Prijevoz od/do grada s aerodroma vlakom 8€ po osobi
          </li>
          <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            3 noćenja u apartmanu s doručkom 194€
          </li>
          <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Ulaznica za Koloesum, brdo Palatin i Rimski forum 7,5€
          </li>

          <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Studentska ulaznica za Vatikanske muzeje i Sikstinsku kapelu s
            vodičem i online rezervacijom 25€, bez vodiča s rezervacijom 12€ po
            osobi
          </li>
          <li className="list-disc break-words py-4 indent-6 text-lg leading-8 md:text-xl md:leading-9 3xl:text-2xl 3xl:leading-relaxed">
            Magneti se mogu naći za 1€-2€, platnene torbe i male staklene kugle
            su 5€, privjesci i otvarači piva su od 2€ nadalje
          </li>
        </ul>
      </div>
    </div>
  </div>
);
