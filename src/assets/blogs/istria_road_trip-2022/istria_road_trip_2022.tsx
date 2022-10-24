import Image from "next/image";

import { IconTypes } from "../../../../types/enums/icons";

import AuxiliaryIcon from "components/blog/icons/icons";
import images from "./images/images";

export const IstriaRoadTrip2022_Overview: BlogOverview = {
  title: "Putovanje Istrom",
  description: "Slikoviti blog koji opisuje putovanje kroz Istru",
};

const IstriaRoadTrip2022 = () => (
  <div className="blog_container">
    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <h2>Istra - mini road trip</h2>
        <p>
          Ovog ljeta sam dva puta posjetila Istru, odnosno Pulu i okolicu na
          nekoliko dana. Na početku smo željeli obići više mjesta kao što su{" "}
          <strong>Brijuni</strong>, <strong>Vodnjan</strong> i{" "}
          <strong>Park kažuna</strong>, ali bilo je toliko vruće da smo se
          umorili samo putujući na plažu. Ako ništa drugo, bar smo obišli dosta
          plaža i uživali u suncu i moru, a detaljniji obilazak Istre ostavit
          ćemo za jesen ili proljeće kada će vrućine, a i gužve, biti znatno
          manje.
        </p>
        <p>
          Središte za obilazak bila nam je Pula i tamo smo zapravo proveli
          najviše vremena, a ostala mjesta posjetili smo na putu od i do Pule.
          Pulu smo doživjeli na malo drugačiji način jer smo većinom
          razgledavali predvečer ili noću, a uz to dogodile su nam se i brojne
          zanimljive i neobične situacije o kojima ćete saznati nastavite li
          čitati ovaj blog.
        </p>
      </div>
    </div>

    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <h2>Pula - što sve nudi osim Arene</h2>
        <p>
          Kad se u razgovoru spomene Pula, prvo na što svi pomislimo je{" "}
          <strong>pulska Arena</strong> , ali Pula nudi i brojne druge sadržaje.
          Pula je grad star više od 3000 godina čiju su bogatu povijest
          oblikovali Histri, Rimljani, Slaveni, Mlečani, Napoleon, Habsburgovci,
          Austro-Ugarska i mnogi drugi. Danas je Pula najveći istarski grad
          poznat po turizmu, brodogradnji, ribarstvu i vinarstvu.
        </p>
        <div className="blog_container-card_content-inner">
          <h3>Zanimljivosti o Puli</h3>
          <p>
            Za početak bih vas voljela upoznati s nekoliko zanimljivih činjenica
            o Puli.
          </p>
          <ul>
            <li>
              Kratko razdoblje svog života, u Puli je živio poznati irski
              književnik <strong>James Joyce</strong> koji je radio kao
              nastavnik engleskog jezika za oficire austro-ugarske mornarice.
              Joyce nije volio Pulu i nazivao ju je „pomorskim Sibirom Bogu iza
              nogu“ pa se nakon 4 mjeseca preselio u Trst. Danas se u zgradi u
              kojoj je on živio nalazi <strong>kafić Uliks</strong>, nazvan po
              njegovom poznatom romanu, a ispred kafića nalazi se spomenik njemu
              u čast. Nedavno su u Puli pronađeni dosad nepoznati manuskripti
              Jamesa Joycea, u podu zgrade dok su mijenjali parkete. Dio
              manuskripta ostat će izložen u Uliksu, dok će većina biti poslana
              u Nacionalni muzej Irske.
            </li>
            <li>
              Kroz povijest je pulskoj Areni nekoliko puta prijetila opasnost
              izumiranja. Naime, ljudi su koristili kamene blokove ugrađene u
              Arenu za gradnju i obnovu svojih kuća. Kasnije su Mlečani uzimali
              kamen iz Arene za gradnju svojih palača i trgova, a u 16. stoljeću
              su čak htjeli razmontirati Arenu i ponovno ju sastaviti u
              Veneciji. U 18. stoljeću kamen je pak korišten pri gradnji zvonika
              katedrale u Puli, a koristio se i za gradnju Stonskih zidina.
            </li>
            <li>
              Tijekom Prvog svjetskog rata, u podzemlju Pule izgrađeni su tuneli
              pod nazivom <strong>Zerostrasse</strong> koji su služili za
              skladištenje oružja, ali i kao utočište za stanovništvo u slučaju
              rata. Nakon rata, Talijani šire i nadograđuju tunele pa danas u
              njih može stati više od 50 000 ljudi.
            </li>
            <li>
              Postoji legenda o gradnji pulske Arene, prema kojoj su Arenu
              sagradile vile graditeljice noseći kamenje svaku noć s planine
              Učke. Kad je došlo jutro, vile su se sakrile u svoja skrovišta od
              ljudi te su tako ostavile za sobom kamenje od Učke do mora, a
              Arena je ostala bez krova. Narod je bio zadivljen ljepotom Arene i
              njezino nastajanje mogli su objasniti jedino kao djelo
              tajanstvenih sila pa su ju nazvali <strong>Divić-grad</strong> (na
              staroslavenskom divić znači čudo).
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <AuxiliaryIcon
          title="Prijevoz, parking i kretanje gradom"
          iconType={IconTypes.Car}
        />
        <p>
          Odlučili smo se za putovanje starom cestom s obzirom na to da je
          istarski ipsilon dosta skup. Putem je na nekoliko mjesta bilo radova
          pa je put trajao nekih 5 i pol sati. Na kraju nam je bilo drago jer
          smo sve skupa uštedjeli 300 kuna, a i uživali u predivnoj prirodi.
          Nakon što prođete Rijeku, cijelo vrijeme vozite se uz more pa tako
          možete stati i odmoriti uz kavu s pogledom ili na kupanje da se malo
          rashladite. Na putu doma susreli smo krave na cesti nakon Rijeke što
          je bilo vrlo zabavno iskustvo, ali naravno i opasno pa zato pripazite.
        </p>
        <p>
          Ako se odlučite za put autobusom kao što sam i ja drugi put išla,
          cijena povratne karte kreće se od 280 kuna nadalje s tim da je u
          sezoni dosta gužva pa je karte bolje kupiti nekoliko dana unaprijed. U
          sezoni je do Pule potrebno otprilike 4 sata ako nisu gužve.
        </p>
        <p>
          Što se tiče parkinga, na svim plažama gdje smo bili je besplatan, dok
          se u gradu plaća 4 kune po satu do 22 sata tijekom ljetnih mjeseci, a
          u užem centru sat je 15 kuna. Mi smo većinom parkirali na besplatnom
          parkingu koji je par minuta hoda od grada, a kad nije bilo mjesta
          parkirali smo malo dalje za 4 kune po satu.
        </p>
        <p>
          Kretanje gradom je stvarno jednostavno jer se sve nalazi dosta blizu
          pa se može obići pješice. Ako želite iskusiti malo drugačiji način
          razgledavanja grada, možete unajmiti električne romobile ili bicikle.
          Mi smo se vozili romobilima koji su do 30. srpnja bili besplatni jer
          su tek došli u Pulu. Za korištenje romobila trebate instalirati
          aplikaciju TIER i skenirati romobil koji želite koristiti. Na
          aplikaciji vam piše koliko koji romobil ima kilometara te gdje vam se
          u blizini nalaze dostupni romobili.
        </p>
      </div>
    </div>

    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <AuxiliaryIcon title="Smještaj" iconType={IconTypes.Bed} />
        <p>
          Kako putujemo sa studentskim budžetom, pronašli smo smještaj malo
          udaljeniji od centra grada, na Šišanskoj cesti, ali zato je cijena
          bila dosta niža od cijene apartmana u centru. Iako smo već prvi dan
          sami sebi povisili cijenu najma apartmana za 200 kuna jer smo imali
          nezgodu wc školjkom, ali to ćemo ignorirati. Lokacija nam i nije bila
          toliki problem jer su sve stvari koje smo željeli razgledati bile
          dosta udaljene jedna od druge pa bismo tako i tako morali ići autom.
        </p>
      </div>
    </div>

    <div className="blog_container-card">
      <div className="blog_container-card-map">
        <iframe
          title="Places to visit in Istria"
          src="https://www.google.com/maps/d/u/0/embed?mid=1vqfT084uftcSJS6xS-8NtrAzs6r3AiY&ehbc=2E312F"
        ></iframe>
      </div>
    </div>

    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <AuxiliaryIcon
          title="Restorani i kafići"
          iconType={IconTypes.Restaurant}
        />
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content">
            <span>
              <h3>Restoran Furia</h3>
              <p>
                Pretežito riblji restoran u koji većinom idu domaći gosti. Osim
                ribe nude i hamburger, ćevape te piletinu i pomfrit. Mi smo jeli
                morskog psa s blitvom i krumpirom, tunu s blitvom i krumpirom te
                salatu od hobotnice. Tuna i morski pas bili su stvarno ukusni i
                odlično pripremljeni, kao i blitva i krumpir, dok je salata od
                hobotnice bila dosta bezukusna, a hobotnica žilava. Cijene su
                pristojne (morski pas je oko 60 kuna, tuna je 75 kuna, a salata
                od hobotnice je 50 kuna). Osoblje je uslužno i ljubazno.
              </p>
            </span>
            <Image
              src={images.RestaurantFuria}
              alt="Restaurant Furia"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content alternate">
            <span>
              <h3>Pizzeria Jupiter</h3>
              <p>
                Odličan obiteljski restoran, terasa je ogromna, ali navečer je
                bila gužva i čekali smo slobodan stol. Bez obzira na to, osoblje
                je jako susretljivo i ljubazno i u roku 10-ak minuta pronašli su
                nam stol. Kako nismo bili jako gladni, uzeli smo srednju pizzu
                quattro formaggi i palačinku s Nutellom i keksima. Pizza je bila
                60-ak kuna, a palačinka 40, ali stvarno vrijede toliko jer su
                porcije velike i ukusne. Sve pohvale za hranu i osoblje!
              </p>
            </span>
            <Image
              src={images.RestaurantJupiter}
              alt="Restaurant Jupiter"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content two_line">
            <span>
              <h3>Lounge Bar Mares</h3>
              <p>
                Lijep kafić za popiti jutarnju kavu u uvali Valovine, nalazi se
                u moru koje je predivne tirkizne boje, a na dnu je pijesak pa je
                idealno za picigin i slične aktivnosti. Dok pijete kavu imat
                ćete pogled na skijače na vodi, odnosno wakeboarding što je
                također vrlo zanimljivo za vidjeti. Iako ovaj kafić ima dosta
                loše recenzije zbog navodne spore usluge i prljavih stolova, mi
                nismo imali nikakvih neugodnih iskustava, a i cijene su sasvim u
                redu za more (kava je 14 kuna).
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.LoungeBar}
                alt="Lounge Bar"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.LoungeBar2}
                alt="Lounge Bar 2"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <h3>Slastičarnica Fortuna</h3>
          <p>
            Slastičarnica koja je navodno otvorena još od 1948. godine. Kuglica
            je 12 kuna i ne daju pola-pola, a kugla koju daju je premalena za tu
            cijenu. Nema baš velik izbor okusa. Isprobali smo crnu čokoladu i
            cappuccino. Okus crne čokolade je fin i kremast, dok je cappuccino
            pomalo umjetan.
          </p>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content">
            <span>
              <h3>Sereny Ice Cream-concept shop</h3>
              <p>
                Lijepo uređena slastičarnica, velik izbor okusa, probali smo
                Kinder bueno, Lino ladu, Rocher i Kinder maxi. Prva tri su
                preukusna i kremasta, dok je Kinder maxi solidan. Kuglica je 15
                kuna i daju pola-pola.
              </p>
            </span>
            <Image
              src={images.SerenyIceCreamShop}
              alt="Sereny Ice Cream Shop"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <AuxiliaryIcon title="Plaže" iconType={IconTypes.Beach} />
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content two_line">
            <span>
              <h3>Gortanova uvala</h3>
              <p>
                Ova plaža je možda i najljepša od svih na kojima smo bili u
                Puli. Nalazi se na šetalištu <strong>Lungomare</strong>, u
                sklopu kojeg se nalazi dosta plaža, većinom stjenovitih. Parking
                je besplatan duž cijelog šetališta i kad god smo išli, našli smo
                mjesto. Plaža je šljunčana, u moru je također šljunak te malo
                veće kamenje. More je tirkizne boje i čisto je, a uokolo plaže
                ima dosta hlada od borova u kojima se možete sakriti od sunca.
                Ako želite biti direktno na plaži, postoje i ležaljke i
                suncobrani za najam, a iznad uvale postoji i beach bar. Mane ove
                plaže su to što je dosta mala pa lako postane krcata, kao što je
                bio i slučaj kad smo ju mi posjetili, a još nije bila ni prava
                sezona. Osim toga, zadnji dan kad smo išli na plažu, u moru je
                bilo nekoliko meduza, srećom crne boje pa se lako uoče. Sve u
                svemu, ova plaža je po meni vrijedna posjete zbog predivne boje
                mora i okoliša oko plaže.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.GortanovaUvala}
                alt="Gortanova Uvala"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.GortanovaUvala2}
                alt="Gortanova Uvala 2"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <h3>Havajska plaža</h3>
          <p>
            Lijepa, ali dosta mala šljunčana plaža na kojoj je u sezoni dosta
            gužva. Nalazi se na poluotoku Verudela i nažalost baš i nema
            dovoljno velik parking, ali barem je besplatan. More je tirkizne
            boje, čisto, ali smo čuli da također zna biti meduza, iako ih mi
            nismo vidjeli. Na samoj plaži nema hlada, ali malo iznad je borova
            šuma u kojoj postoje madraci za najam. S obje strane plaže su kamene
            litice, odlične za one koji vole skakanje, a ako uz to volite velike
            valove, ova plaža je savršena za vas.
          </p>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content">
            <span>
              <h3>Kanjon Verudela</h3>
              <p>
                Ovaj kanjon nalazi se na par minuta udaljenosti od{" "}
                <strong>Havajske plaže</strong>. Prilaz do kanjona je dosta
                nezgodan jer je strmo i sklisko, tako da je možda najbolje ući
                kajakom.
              </p>
            </span>
            <Image
              src={images.CanyonVerudela}
              alt="Canyon Verudela"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content two_line">
            <span>
              <h3>Galebove stijene</h3>
              <p>
                Izvorni naziv plaže je <strong>Golubove stijene</strong>, ali se
                naziv s vremenom iskrivio u Galebove stijene jer su turisti
                povezivali galeba s morem. Malo drugačija plaža, stjenovita je
                pa definitivno nije za obitelji s djecom jer je ulazak u more
                dosta zeznut pa je zapravo najlakše skočiti u more. Mi smo ušli
                u japankama pa smo plivali s njima jer su stijene dosta skliske
                i hrapave, a nismo htjeli skakati jer smo bili vrući od sunca.
                More je čisto, bistro i tirkizno. Tamo se nalazi i predivna{" "}
                <strong>špilja Galebijana</strong>, koju smo posjetili na izletu
                kajacima pri drugom posjetu Puli. Više o tome saznat ćete u
                nastavku bloga.
              </p>
              <p>
                Prvi put nismo se usudili uplivati u špilju jer smo nažalost
                opet susreli meduze što nije bilo najugodnije iskustvo s obzirom
                na to da smo već bili dosta daleko od obale i nismo mogli baš
                brzo izići. Na kraju smo se odlučili doplivati do obližnjih
                stijena i doći do plaže hodajući jer nam se tako činilo brže.
                Sve je bilo super i zabavno dok nismo shvatili da stijene
                postaju preuske i da ćemo opet morati skočiti u more i moliti se
                da nam se ne približi meduza. Hvala Bogu, preplivali smo mali
                dio i popeli se opet na stijene i sigurno legli na ručnike. Tad
                nam je ovo sve postalo jako smiješno, ali moram priznati da nije
                bilo toliko zabavno plivati u dubokom moru s meduzama.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.GaleboveStijene}
                alt="Galebove Stijene"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.GaleboveStijene2}
                alt="Galebove Stijene 2"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content">
            <span>
              <h3>Ciklonska plaža</h3>
              <p>
                Plaža na početku <strong>Galebovih stijena</strong>, šljunčana
                je, ali vrlo mala. More je isto lijepo i čisto i na jednom
                mjestu se može skakati sa stijena. Parking je također vrlo
                blizu, par minuta hoda od same plaže.
              </p>
            </span>
            <Image
              src={images.CiklonskaPlaza}
              alt="Ciklonska Plaza"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <h3>Valsaline</h3>
          <p>
            Ovu plažu nismo posjetili, ali smo prolazeći osjetili užasan smrad
            kanalizacije, tako da savjetujem da izbjegavate ovu plažu. Iako
            izgleda lijepo i dosta je velika, smrad je stvarno bio nepodnošljiv.
          </p>
        </div>
      </div>
    </div>

    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <AuxiliaryIcon title="Znamenitosti" iconType={IconTypes.Camera} />
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content two_line">
            <span>
              <h3>Pulska Arena</h3>
              <p>
                Po veličini je na 6. mjestu među rimskim amfiteatrima na
                svijetu, a u Hrvatskoj je najveći i najsačuvaniji spomenik
                antičkog graditeljstva. Danas se koristi za razne festivale i
                koncerte i može primiti 5000 posjetitelja. Cijene ulaznica su 70
                kuna za odrasle i 35 kuna za studente, a ući se može od 8 do 23,
                s tim da je u 22 zadnji ulaz. Mi nismo ulazili jer se tada
                održavao Pula music week pa nam nije baš imalo smisla jer ne
                bismo uspjeli ništa vidjeti od pozornice i skela.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.Colosseum3}
                alt="Colosseum"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.Colosseum4}
                alt="Colosseum 2"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content">
            <span>
              <h3>Slavoluk Sergijevaca</h3>
              <p>
                Još se naziva i <strong>Zlatna vrata</strong>, sagrađen je
                krajem 1. stoljeća prije Krista u spomen obitelji Sergi.
              </p>
            </span>
            <Image
              src={images.ArchOfSergii}
              alt="Arch of Sergii"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content alternate">
            <span>
              <h3>Augustov hram</h3>
              <p>
                Nalazi se na glavnom gradskom trgu <strong>Forumu</strong> te je
                posvećen božici Romi i caru Augustu. Primarno je bio korišten
                kao crkva, kasnije kao skladište žita, a danas je muzej kamenih
                spomenika. Radi od 9 do 22 sata, a ulaz se plaća 10 kuna za
                odrasle te 5 kuna za studente.
              </p>
            </span>
            <Image
              src={images.TempleOfAugustus}
              alt="Temple of Augustus"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content two_line">
            <span>
              <h3>Forum</h3>
              <p>
                Središnji gradski trg još od antičkih vremena kada je Pula bila
                rimska kolonija pod nazivom Pola. Na njemu se nalazi i{" "}
                <strong>Gradska vijećnica</strong>. Ako s Foruma uđete u bilo
                koju uličicu, naići ćete na brojne zgrade predivnih boja, izloge
                trgovina s fora proizvodima te kafiće i restorane maštovitih
                naziva.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.RandomStreet4}
                alt="Beautiful street on Forum"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.RandomStreet5}
                alt="Beautiful street on Forum 2"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content">
            <span>
              <h3>Dvojna vrata</h3>
              <p>
                Jedna od dvanaestero gradskih vrata Pule nastala u razdoblju
                antike. Nalaze se ispod zgrade{" "}
                <strong>Arheološkog muzeja Istre</strong>.
              </p>
            </span>
            <Image
              src={images.DvojnaVrata}
              alt="Dvojna Vrata"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <h3>Pulski Kaštel</h3>
          <p>
            Mletačka utvrda nastala na ruševinama rimske utvrde. Nalazi se na
            brežuljku iznad centra Pule i s njega se pruža predivan pogled na
            cijeli grad, a od nedavno je i liftom povezan s podzemnim tunelima{" "}
            <strong>Zerostrasse</strong>.
          </p>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content">
            <span>
              <h3>Svjetleći divovi</h3>
              <p>
                Dizalice brodogradilišta <strong>Uljanik</strong> koje svijetle
                u raznim bojama uz pomoć reflektora, a mogu se vidjeti s pulske
                rive. Svaki puni sat svijetle po 15 minuta od sumraka do ponoći
                kroz ljetne mjesece.
              </p>
            </span>
            <Image
              src={images.SvjetleciDivovi}
              alt="Svjetleci Divovi"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <div className="blog_container-card_content-image_content two_line">
            <span>
              <h3>Spomenik Jamesu Joyce-u</h3>
              <p>
                Napravljen u čast poznatog pisca Jamesa Joycea koji je kratko
                vrijeme živio u Puli. Nalazi se u starom dijelu grada pored{" "}
                <strong>Slavoluka Sergijevaca</strong> na terasi kafića Uliks.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.JamesJoyce}
                alt="James Joyce"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.JamesJoyce2}
                alt="James Joyce 2"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>
        <div className="blog_container-card_content-inner">
          <h3>Zerostrasse</h3>
          <p>
            Podzemni austrougarski tuneli koji se nalaze ispod{" "}
            <strong>Kaštela</strong> te se iz sredine račvaju na 4 kraka. Ljeti
            rade od 9 do 21. Cijena ulaznica 40 kuna za odrasle i 25 kuna za
            studente. U cijenu ulaznica uključen je posjet tunelima te
            Povijesnom i pomorskom muzeju Istre.
          </p>
        </div>
        <div className="blog_container-card_content-inner">
          <h3>Akvarij Pula</h3>
          <p>
            Ljeti radi od 9 do 22, a zadnji ulaz je u 21. Cijena ulaznica je 130
            kuna za odrasle, dok je za studente 100 kuna.
          </p>
        </div>
      </div>
    </div>

    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <AuxiliaryIcon title="Izleti iz Pule" iconType={IconTypes.Excursion} />
        <div className="blog_container-card_content-excursions">
          <div className="blog_container-card_content-image_content">
            <span>
              <h3>Labin</h3>
              <p>
                Labin je simpatični mali grad okružen zidinama čija je stara
                gradska jezgra puna zgrada sa šarenim fasadama savršenim za
                predivne fotografije. Nalazi se samo 45 minuta od Pule. Labin je
                nastao na mjestu <strong>rimskog naselja Albona</strong> te je
                kroz povijest bio pod vlašću pazinskih grofova, Venecije,
                Austrije, Italije i na kraju Jugoslavije, odnosno Hrvatske.
              </p>
              <p>
                Iako nikad prije nisam smatrala Labin gradom u kojem ima
                sadržaja za cjelodnevni izlet, ovaj posjet pokazao mi je da sam
                bila u krivu. Ako se nađete u Labinu, svakako posjetite i
                obližnji Rabac do kojeg, osim autom, možete stići i pješice
                <strong> Stazom božanskih izvora</strong>. Za obići stazu trebat
                će vam oko sat i pol te ćete putem vidjeti mnoge prirodne
                slapove, sedrene barijere i <strong>Negrijevu špilju</strong>.
                Mi nažalost ovaj put nismo imali dovoljno vremena za to, a i
                bilo je stvarno prevruće za hodanje po suncu.
              </p>
            </span>
            <Image
              src={images.Labin}
              alt="Labin"
              height={"auto"}
              width={"auto"}
            />
          </div>
          <div className="blog_container-card_content-excursions-inner">
            <AuxiliaryIcon
              title="Parking"
              excursionIcon
              iconType={IconTypes.Car}
            />
            <p>
              Parkirali smo blizu starog grada, na parkingu koji se plaća 5 kuna
              po satu.
            </p>
          </div>
          <div className="blog_container-card_content-excursions-inner">
            <AuxiliaryIcon
              title="Znamenitosti"
              excursionIcon
              iconType={IconTypes.Camera}
            />
            <div className="blog_container-card_content-excursions-inner_content">
              <h5>Gradska vrata sveta Flora</h5>
              <p>
                Ulaz u stare gradske zidine, izgrađene su za vrijeme mletačke
                vladavine krajem 16. stoljeća.
              </p>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content">
                <span>
                  <h5>Galerija Alvona</h5>
                  <p>
                    Nalazi se u starom gradu i u njoj se održavaju izložbe
                    brojnih poznatih umjetnika.
                  </p>
                </span>
                <Image
                  src={images.Labin3}
                  alt="Gallery Alvona & Negri palace"
                  height={"auto"}
                  width={"auto"}
                />
              </div>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content alternate">
                <span>
                  <h5>Vidikovac Fortica</h5>
                  <p>
                    S vidikovca se pruža predivan pogled na Rabac, Učku te otoke
                    Krk i Cres.
                  </p>
                </span>
                <Image
                  src={images.VidikovacFortica}
                  alt="Vidikovac Fortica"
                  height={"auto"}
                  width={"auto"}
                />
              </div>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content">
                <span>
                  <h5>Crkva Rođenja Blažene Djevice Marije</h5>
                  <p>
                    Crkva sagrađena u 14. stoljeću te se također nalazi u starom
                    gradu Labinu.
                  </p>
                </span>
                <Image
                  src={images.CrkvaRodenjaBlazeneDjeviceMarije}
                  alt="Crkva Rođenja Blažene Djevice Marije"
                  height={"auto"}
                  width={"auto"}
                />
              </div>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content two_line">
                <span>
                  <h5>Palača Battiala-Lazzarini</h5>
                  <p>
                    Prekrasna palača s pročeljem tamno crvene boje u kojoj se
                    danas nalazi <strong>Narodni muzej Labin</strong>. Njezini
                    prvi vlasnici bili su tursko-albanska obitelj Battiala koji
                    su imali nekoliko posjeda u Istri, a od 19. stoljeća kada se
                    Margherita Battiala udala za Lodovica Lazzarinija, započela
                    je labinska loza obitelji Battiala Lazzarini.
                  </p>
                </span>
                <div className="two_line_images">
                  <Image
                    src={images.BattialaLazzariniPalace}
                    alt="Battiala Lazzarini Palace"
                    height={"auto"}
                    width={"auto"}
                  />
                  <Image
                    src={images.BattialaLazzariniPalace2}
                    alt="Battiala Lazzarini Palace 2"
                    height={"auto"}
                    width={"auto"}
                  />
                </div>
              </div>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content two_line">
                <span>
                  <h5>Narodni muzej Labin</h5>
                  <p>
                    U muzeju je izložena memorijalna zbirka Giuseppine
                    Martinuzzi, istarske učiteljice, novinarke i revolucionarke,
                    događaji vezani uz proglašenje Labinske republike te možda i
                    najzanimljivije od svega, povijest rudarstva u Labinu.
                  </p>
                  <p>
                    Labin ima povijest rudarskih djelatnosti dugu čak 400 godina
                    koja je nažalost prestala 1988. kada je rudnik zatvoren.
                    Nakon toga je nastupila velika gospodarska kriza jer je
                    gospodarstvo prvenstveno ovisilo o rudarstvu, dok se danas
                    temelji pretežito na turizmu.
                  </p>
                  <p>
                    Svakako preporučam posjet muzeju odraslima, ali i malo
                    starijoj djeci jer je u sklopu muzeja i mali rudnik pa tako
                    možete doživjeti kako je rudarima u Labinu nekad bilo. Na
                    ulasku u rudnik uzmite kacigu, pogotovo ako ste jako visoki
                    jer je rudnik na nekim mjestima dosta nizak pa ćete se
                    sigurno udariti u glavu.
                  </p>
                  <p>
                    Ulaznice su 25 kuna za odrasle, 20 kuna za studente i 15
                    kuna za djecu.
                  </p>
                </span>
                <div className="two_line_images">
                  <Image
                    src={images.NarodniMuzejLabin}
                    alt="Narodni Muzej Labin"
                    height={"auto"}
                    width={"auto"}
                  />
                  <Image
                    src={images.NarodniMuzejLabin2}
                    alt="Narodni Muzej Labin 2"
                    height={"auto"}
                    width={"auto"}
                  />
                  <Image
                    src={images.NarodniMuzejLabin3}
                    alt="Narodni Muzej Labin 3"
                    height={"auto"}
                    width={"auto"}
                  />
                </div>
              </div>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <h5>Art gastro galleria Negri</h5>
              <p>
                Nalazi se u <strong>palači Negri</strong>. Ako ste gurmani,
                svakako preporučam posjet ovoj galeriji jer ovdje možete
                isprobati autohtone hrvatske proizvode ovog kraja. Na ovoj
                degustaciji kušat ćete ekstradjevičansko maslinovo ulje Negri
                koje je uvršteno među najbolja svjetska ekstradjevičanska
                maslinova ulja, labinski pršut, sir Gligora te slane srdele.
                Osim toga, uživat ćete u čaši istarskog terana, likera od
                terana, biski te medici.
              </p>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content">
                <span>
                  <h5>Prozori labinskih legendi</h5>
                  <p>
                    Radi se o šest murala osoba koje su obilježile povijest
                    grada Labina koji su postavljeni u slijepim otvorima prozora
                    labinskih palača i zgrada. Na njih ćete naići šećući ulicama
                    Labina.
                  </p>
                  <p>
                    Ova ideja mi se jako svidjela jer, osim što će na ovaj način
                    labinske legende biti zapamćene i ljude će možda potaknuti
                    da saznaju više o njima, portreti se izvrsno uklapaju u
                    šarenu staru gradsku jezgru i zbog njih je još simpatičnija.
                  </p>
                </span>
                <Image
                  src={images.ProzoriLabinskihLegendi}
                  alt="Prozori Labinskih Legendi"
                  height={"auto"}
                  width={"auto"}
                />
              </div>
            </div>
          </div>
          <div className="blog_container-card_content-excursions-inner">
            <AuxiliaryIcon
              title="Restorani i kafići"
              excursionIcon
              iconType={IconTypes.Restaurant}
            />
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content alternate">
                <span>
                  <h5>Pizzeria Rumore</h5>
                  <p>
                    Ručali smo u <strong>pizzeriji Rumore</strong> za koju mnogi
                    kažu da nudi jednu od najboljih pizza u Hrvatskoj pa smo
                    odlučili isprobati je li to uistinu tako. Restoran ima
                    veliku terasu s koje se pruža predivan pogled na Rabac i
                    Kvarnerski zaljev. U ponudi imaju 12 vrsta pizza koje su
                    pripremljene na autentičan napolitanski način. Osim pizza,
                    nude i burgere, salate i deserte, ali smo se mi ipak
                    odlučili za pizzu. Odabrali smo pizzu Napoletanu koja je
                    bila 64 kune i pizzu Tonninu koja je bila 67 kuna i malo nam
                    je bolja Tonnina. Iako su cijene malo skuplje, smatram da
                    opravdavaju kvalitetu jer su zaista ukusne. Po prvi put sam
                    uspjela sama pojesti pizzu što inače nikad nije slučaj jer
                    me zasite brzo, ali ove pizze su lagane, a opet te taman
                    zasite i osjećaš da si pojeo nešto svježe i kvalitetno.
                    Osoblje je susretljivo i ljubazno.
                  </p>
                </span>
                <Image
                  src={images.PizzeriaRumore}
                  alt="Pizzeria Rumore"
                  height={"auto"}
                  width={"auto"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="blog_container-card_content-excursions">
          <div className="blog_container-card_content-image_content two_line">
            <span>
              <h3>Rt Kamenjak - Premantura</h3>
              <p>
                Rt Kamenjak poznat je kao i najjužniji dio Istre čija je obala
                izrazito razvedena te dugačka gotovo 4 kilometara. Krase ga
                brojne prekrasne uvale te skrivene plaže, ali i bogat i raznolik
                biljni i životinjski svijet te je stoga 1996. godine proglašen
                zaštićenim područjem.
              </p>
              <p>
                Ako vas više zanimaju prirodne ljepote ili geološki ostaci stopa
                dinosaura koji se nalaze u <strong>uvali Pinižule</strong>,
                možda je najbolja opcija doći na proljeće ili jesen te unajmiti
                bicikl i tako obići cijeli rt. A ako ste pak više za kupanje u
                čistom i tirkiznom moru i izležavanje na plažama s prekrasnim
                pogledom na obližnje otočiće, ovdje ćete pronaći preporuke
                upravo za to.
              </p>
              <p>
                Mene je Kamenjak oduševio zbog prekrasne boje mora i lijepih
                uvala te <strong> Safari bara </strong>koji je uistinu
                originalan i nudi sadržaje i za odrasle, ali i za djecu. Jedina
                je mana što su biljke i drveće u prašini zbog auta koji prolaze
                i smatram da bi se to trebalo smanjiti kako bi se očuvala
                priroda, ali definitivno bih se opet vratila.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.RtKamenjak}
                alt="Rt Kamenjak"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.SafariBar4}
                alt="Safari Bar 4"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.RtKamenjak3}
                alt="Rt Kamenjak 3"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
          <div className="blog_container-card_content-excursions-inner">
            <AuxiliaryIcon
              title="Parking"
              excursionIcon
              iconType={IconTypes.Car}
            />
            <p>
              Ulaz se ne naplaćuje za bicikliste i pješake, dok je dnevna karta
              za automobil 80 kuna. Prvi puta odlučili smo ući kao pješaci i
              parkirati auto ispred ulaza na besplatnom parkingu. To i nije bila
              baš dobra odluka jer je bilo stvarno vruće i jedva smo došli do
              plaže do koje ima 40 minuta hoda od ulaza.
            </p>
            <p>
              Drugi puta nas je bilo više pa smo ipak odlučili ne biti škrti i
              platiti ulaz. Vožnja autom također nije najidealnija opcija jer je
              cijelim putem makadam i ne možete voziti brže od 20 km/h. Zbog
              mnoštva auta koji prolaze stvara se dosta prašine pa će vam se i
              auto uprljati tako da se pripremite i na to.
            </p>
            <p>Kraj svake plaže nalazi se parking.</p>
          </div>
          <div className="blog_container-card_content-excursions-inner">
            <AuxiliaryIcon
              title="Plaže"
              excursionIcon
              iconType={IconTypes.Beach}
            />
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content two_line">
                <span>
                  <h5>Beach Radovica</h5>
                  <p>
                    Nalazi se na kraju samog rta, u blizini Safari bara. Jako
                    mala plaža s oblutcima, ali ju okružuju stijene na kojima
                    smo se i mi smjestili kako bismo se malo maknuli od ljudi.
                    Pristup do plaže nije baš za obitelji s malom djecom jer se
                    do plaže treba spuštati po stijenama. Meni je ovo jedna od
                    najljepših plaža na Kamenjaku jer je more kristalno čisto,
                    nije tolika gužva, a ima i hlada ispod borova.
                  </p>
                </span>
                <div className="two_line_images">
                  <Image
                    src={images.RadovicaBeach}
                    alt="Radovica Beach"
                    height={"auto"}
                    width={"auto"}
                  />
                  <Image
                    src={images.RadovicaBeach2}
                    alt="Radovica Beach 2"
                    height={"auto"}
                    width={"auto"}
                  />
                  <Image
                    src={images.RadovicaBeach3}
                    alt="Radovica Beach 3"
                    height={"auto"}
                    width={"auto"}
                  />
                </div>
              </div>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content two_line">
                <span>
                  <h5>Beach Plovanije</h5>
                  <p>
                    Iako sam se na ovoj plaži skoro utopila, i dalje mi je je uz{" "}
                    <strong>Radovicu</strong> najdraža plaža od svih koje sam
                    posjetila na Kamenjaku. Ljeti je dosta gužva, ali ima mjesta
                    na stijenama i u borovoj šumi iznad plaže. Plaža je od
                    bijelih oblutaka, more je tirkizno i čisto te često znaju
                    biti ogromni valovi. Kada smo ju posjetili, i mi smo imali
                    tu sreću uživati u valovima nekih 2 sata, ali nakon toga
                    postali su baš veliki i snažni. Kada se zaredalo 5 velikih
                    valova nisam mogla doći do zraka i jedva sam se zaustavila i
                    otplivala da me ne bace na stijene. To iskustvo bilo je malo
                    traumatično jer nisam imala dovoljno zraka da toliko dugo
                    budem pod vodom i natukla sam cijele noge, ali svejedno je
                    bilo zanimljivo.
                  </p>
                </span>
                <div className="two_line_images">
                  <Image
                    src={images.PlovanijeBeach}
                    alt="Plovanije Beach"
                    height={"auto"}
                    width={"auto"}
                  />
                  <Image
                    src={images.PlovanijeBeach2}
                    alt="Plovanije Beach 2"
                    height={"auto"}
                    width={"auto"}
                  />
                </div>
              </div>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content two_line">
                <span>
                  <h5>Njive beach</h5>
                  <p>
                    Mislim da je ovo najpoznatija i najnapučenija plaža na
                    Kamenjaku. Šljunčana je, okružena borovom šumom i u blizini
                    se nalazi beach bar. More je čisto.
                  </p>
                </span>
                <div className="two_line_images">
                  <Image
                    src={images.NjiveBeach}
                    alt="Njive Beach"
                    height={"auto"}
                    width={"auto"}
                  />
                  <Image
                    src={images.NjiveBeach2}
                    alt="Njive Beach 2"
                    height={"auto"}
                    width={"auto"}
                  />
                </div>
              </div>
            </div>
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content alternate">
                <span>
                  <h5>Uvala Portić</h5>
                  <p>
                    Uvala koja izgleda vrlo lijepo kad hodate stazama Kamenjaka,
                    ali se osobno ne bih kupala u njoj zbog velikog broja
                    brodova i jedrilica koji su tamo usidreni.
                  </p>
                </span>
                <Image
                  src={images.UvalaPortic}
                  alt="Uvala Portić"
                  height={"auto"}
                  width={"auto"}
                />
              </div>
            </div>
          </div>
          <div className="blog_container-card_content-excursions-inner">
            <AuxiliaryIcon
              title="Restorani i kafići"
              excursionIcon
              iconType={IconTypes.Restaurant}
            />
            <div className="blog_container-card_content-excursions-inner_content">
              <div className="blog_container-card_content-image_content two_line">
                <span>
                  <h5>Safari bar</h5>
                  <p>
                    Potpuno drugačiji i originalno osmišljen restoran/kafić u
                    retro stilu. Imate dojam kao da ste na Baliju ili u džungli.
                    Postoji velika ljuljačka savršena za lijepe fotografije, ali
                    i tobogan za djecu napravljen od drveta koji se savršeno
                    uklopio u ambijent.Ne nude pretjerano velik izbor hrane, ali
                    je gyros koji smo jeli bio fin. Platili smo ga 45 kuna, a
                    osim gyrosa, u ponudi imaju i lignje, ćevape, sireve i
                    masline te voće i sladoled. Osoblje je ljubazno i ne čeka se
                    dugo na red. Na nekim plažama nalaze se i beach barovi koje
                    ovaj puta nismo posjetili, ali ako se nađete u blizini plaže
                    Njive, posjetite obližnji beach bar. Mi smo ga vidjeli samo
                    u prolazu, ali čini se fora jer ime ležaljke i u borovoj je
                    šumi iz koje se pruža predivan pogled na more.
                  </p>
                </span>
                <div className="two_line_images">
                  <Image
                    src={images.SafariBar}
                    alt="Safari Bar"
                    height={"auto"}
                    width={"auto"}
                  />
                  <Image
                    src={images.SafariBar2}
                    alt="Safari Bar 2"
                    height={"auto"}
                    width={"auto"}
                  />
                  <Image
                    src={images.SafariBar3}
                    alt="Safari Bar 3"
                    height={"auto"}
                    width={"auto"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog_container-card_content-excursions">
          <div className="blog_container-card_content-image_content two_line">
            <span>
              <h3>Kožljak - Pijana pruga</h3>
              <p>
                Ako se nađete na potezu od Rabca do Opatije, svakako posjetite
                pijanu prugu koja je dio pruge Lupoglav-Štalije, a nalazi se u
                blizini <strong>sela Kožljak</strong>. Jedna dionica te pruge
                dobila je ovakav naziv zbog urušavanja terena na kojem se pruga
                nalazi.
              </p>
              <p>
                Danas je ovo mjesto zanimljiva turistička atrakcija, ali
                povijest njezine gradnje i nije tako sretna. Naime, kada je
                1948. iz Beograda došla naredba da se započne gradnja pruge na
                relaciji Lupoglav-Štalije, nije bilo puno dobrovoljaca koji bi
                sudjelovali u njezinoj gradnji. Tako je pruga sagrađena
                prinudnim radom Istrijana, ali i ljudi iz ostataka Jugoslavije u
                teškim uvjetima. Zadnji vlak prugom je prošao 2009. godine.
              </p>
              <p>
                S pruge se pruža prekrasan pogled na{" "}
                <strong>Čepićko polje</strong> koje je do 1932. godine bilo
                jezero, a danas je pretvoreno u obradive površine.
              </p>
              <p>
                Auto ostavite kod crkve Svetog Križa u Zagradu od kojeg imate
                15-ak minuta hoda do pijane pruge.
              </p>
              <p>
                U blizini mjesta gdje ćete ostaviti auto nalazi se i{" "}
                <strong>dvorac Kožljak</strong> koji nažalost nismo stigli
                posjetiti, ali ako ste tamo svakako svratite.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.PijanaPruga}
                alt="Pijana Pruga"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.CepickoPoljePijanaPruga}
                alt="Cepicko Polje Pijana Pruga"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>

        <div className="blog_container-card_content-excursions">
          <h3>
            Izlet kajacima - Galebove stijene, špilja Galebijana, kanjon Muzil
          </h3>
          <div className="blog_container-card_content-image_content">
            <span>
              <p>
                Pri drugom posjetu Puli odlučila sam s prijateljicama otići na
                izlet kajacima na <strong>Galebove stijene</strong>. Išle smo
                preko agencije <strong>Pulse events</strong> i iako je cijena
                inače 340 kuna, kao domaći gosti mi smo platile 200 kuna po
                osobi. Tura traje oko 4 sata i u cijenu su, osim najma kajaka,
                vesla i prsluka za spašavanje, uključeni i nepropusni ruksak u
                koji možete odložiti stvari, maska za ronjenje, voda ili pivo te
                slikanje GoPro kamerom. U grupi nas je bilo 13-ak i vodič. Na
                početku vam vodič objasni kako ući u kajak, kako držati vesla i
                voziti kajak.
              </p>
            </span>
            <Image
              src={images.Kayaks}
              alt="Kayaks"
              height={"auto"}
              width={"auto"}
            />
          </div>
          <div className="blog_container-card_content-image_content alternate">
            <span>
              <p>
                Nama se ova tura jako svidjela ponajprije zbog odličnog vodiča
                koji je komunikativan i ljubazan te nas je naučio koje su meduze
                opasne, a koje ne. Zapravo je većina meduza s kojima smo se
                susretale do sada potpuno bezopasno, a u to smo se uvjerile i
                držeći ih, tako da je naš strah zapravo bio nepotreban. Vodič
                nam je objasnio kako su meduze s ljubičastim točkicama te
                bijele/prozirne meduze bezopasne, dok su smeđe/crne opasne.
              </p>
            </span>
            <Image
              src={images.Kayaks2}
              alt="Kayaks 2"
              height={"auto"}
              width={"auto"}
            />
          </div>
          <p>
            Tura kreće iz <strong>uvale Stoja</strong> (točno mjesto označeno je
            na karti) iz koje veslate nekih 2 i pol kilometra do Galebovih
            stijena. Kad smo došli na Galebove stijene, prvo smo kajacima ušli u
            špilju gdje smo se slikali i osvježili uz vodu i pivo. Nakon toga,
            kupali smo se na Galebovim stijenama, ronili i skakali sa stijena.
            Vodič je cijelu turu slikao tako da smo dobile fora slike iz špilje
            i ispod mora. Najviše mi se svidjelo što je vodič sa sobom ponio
            kruh koji je bacio u more pa se oko njega se skupilo puno riba što
            je naše fotografije učinilo još ljepšim.
          </p>
          <div className="blog_container-card_content-image_content">
            <span>
              <p>
                Nakon Galebovih stijena uputili smo se prema{" "}
                <strong>kanjonu Muzil</strong> u koji smo ušli kajacima koje smo
                ostavili u maloj špilji. Onda smo se uputili do stijene za
                skakanje do koje smo morali ići kroz uski prolaz kroz veliku
                stijenu što je bilo pomalo klaustrofobično.
              </p>
              <p>
                Kad smo završili sa skakanjem i kupanjem u kanjonu, uputili smo
                se natrag prema uvali iz koje smo krenuli i tamo završile svoju
                avanturu kajacima.
              </p>
              <p>
                Ovu turu preporučam svima koji vole isprobavati nove i drugačije
                stvari, a istovremeno uživati sa svojim najbližima u prirodnim
                ljepotama.
              </p>
            </span>
            <Image
              src={images.Kayaks3}
              alt="Kayaks 3"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <AuxiliaryIcon title="Budžet" iconType={IconTypes.Money} />
        <ul>
          <li>
            Za gorivo od Zagreba do Pule starom cestom i skretanja do ostalih
            mjesta (700-tinjak kilometara) platili smo oko 600 kuna
          </li>
          <li>Povratna karta za bus iz Zagreba s prtljagom je 300 kuna</li>
          <li>Smještaj za 5 noći platili smo 1400 kuna</li>
          <li>
            Za ulaznice u Narodni muzej Labin smo potrošili 40 kuna (20 kuna je
            studentska ulaznica)
          </li>
          <li>Ulaz u rt Kamenjak 80 kuna</li>
          <li>Tura s kajacima je 200 kuna</li>
        </ul>
      </div>
    </div>
  </div>
);

export default IstriaRoadTrip2022;
