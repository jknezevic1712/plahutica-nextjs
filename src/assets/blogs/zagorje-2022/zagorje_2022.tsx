import Image from "next/image";

import { IconTypes } from "../../../../types/enums/icons";

import AuxiliaryIcon from "components/blog/icons/icons";
import images from "./images/images";

export const Zagorje2022_Overview: BlogOverview = {
  title: "Zagorje",
  description: "Blog o izletu kroz Zagorje",
};

const Zagorje2022 = () => (
  <div className="blog_container">
    <div className="blog_container-card">
      <div className="blog_container-card_content">
        <h2>Hrvatsko Zagorje - nepravedno zanemarena hrvatska regija</h2>
        <p>
          Mislim da većinu Hrvata Zagorje asocira na gemišt, štrukle i zagorske
          brege i tu većinom razgovori i razmišljanja o Zagorju staju. Po mom
          mišljenju, Zagorje je nepravedno zanemarena i nedovoljno istražena
          hrvatska regija, a to svaki pravi Zagorec zna. Nema ljepšeg osjećaja
          nego prošetati na friškom zagorskom zraku, uživati u pogledu na
          zagorske brege i vinograde, fino se napiti i najesti domaće hrane, ali
          i uživati u znamenitostima ovog kraja.
        </p>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content">
            <span className="px-1 text-start">
              <p>
                O bogatoj povijesti Zagorja svjedoče i većini poznati ostaci
                „krapinskog pračovjeka“, odnosno neandertalaca iz starijeg
                kamenog doba pronađeni na <strong>Hušnjakovom brdu</strong> kraj
                Krapine. Tijekom antike na ovom se području nastanjuju Rimljani,
                a Zagorje je bilo od iznimne važnosti i u ratovima s
                Osmanlijama. Naime zbog udaljenosti od granice prema Osmanskom
                Carstvu, upravo Zagorje postaje sigurni prostor za doseljavanje
                stanovništva, ali i plemića te kraljeva i kneževa koji ovdje
                grade brojne utvrde.
              </p>
            </span>
            <Image
              src={images.RandomImg2}
              alt="Vinogradi"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content alternate">
            <span className="px-1 text-start">
              <p>
                Danas je Zagorje osim po hrani i piću poznato po brojim
                termalnim izvorima, zagorskim popevkama te prekrasnoj netaknutoj
                prirodi, a zanimljivo je da su dva prilično poznata politička
                lica bila upravo Zagorci. Naime <strong>Kumrovec</strong> je
                rodno mjesto Josipa Broza Tita, dok je Veliko Trgovišće rodno
                mjesto prvog hrvatskog predsjednika Franje Tuđmana.
              </p>
              <p>
                Kako i prijateljica Iva i ja imamo zagorske krvi, odlučile smo
                se za mali izlet u Zagorje i to naravno na najtopliji dan ljeta,
                kad je vani bilo 42 stupnja pa smo na trenutke imale osjećaj da
                ćemo se srušiti od vrućine, ali hvala Bogu nismo.
              </p>
            </span>
            <Image
              src={images.Kumrovec2}
              alt="Kumrovec"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content two_line">
            <span className="px-1 text-start">
              <p>
                Krenule smo iz Zagreba i prva postaja bila nam je dvorac{" "}
                <strong>Veliki Tabor</strong> u Desiniću. Trebalo nam je nekih
                sat i 20 minuta do odredišta. Auto smo ostavile na travnjaku
                ispred dvorca, a za obilazak nam je trebalo otprilike sat i pol.
                Čim smo ušle shvatile smo kako se iz dvorca pruža prekrasan
                pogled na zagorske brege i dio Slovenije te smo se divile
                prirodnim ljepotama, a onda smo odlučile razgledati sam dvorac.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.VelikiTabor2}
                alt="Veliki Tabor"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.VelikiTabor9}
                alt="Veliki Tabor"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>

        <p>
          Dvorac ne radi ponedjeljkom, a od 1. travnja do 31. listopada radi od
          utorka do petka u terminu od 9:00-17:00, a vikendom od 10:00-18:00.
          Studentsku ulaznicu platile smo 15 kuna, iako sada na internetu vidim
          da je poskupjela na 32 kune.
        </p>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content">
            <span className="px-1 text-start">
              <p>
                <strong>Veliki Tabor</strong> zaštićeno je kulturno dobro te je
                jedan od najočuvanijih srednjovjekovnih dvoraca u Hrvatskoj.
                Sagrađen je u drugoj polovici 15. stoljeća kao srednjovjekovna
                utvrda po naredbi grofa Fridrika II. Celjskog, a tijekom 17. i
                18. stoljeća pretvarao se u dvorac. Bio je u posjedu brojnih
                slavnih gospodara, a najduže obitelji Ratkaj.
              </p>
            </span>
            <Image
              src={images.VelikiTabor}
              alt="Veliki Tabor"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content alternate">
            <span className="px-1 text-start">
              <p>
                Zanimljivo je, a istovremeno i tužno da je dvorac 1945. godine
                postao narodnom imovinom i koristio se kao sušionica mesa te
                skladište Poljoprivredne zadruge Desinić, a sitni radovi
                odrađeni su samo na najugroženijim dijelovima dvorca. Krajem
                osamdesetih godina prošlog stoljeća konačno su počela arheološka
                istraživanja i obnova dvorca. Tako danas{" "}
                <strong>Veliki Tabor</strong> nudi pregršt aktivnosti za
                odrasle, ali i za djecu.
              </p>
            </span>
            <Image
              src={images.VelikiTabor3}
              alt="Veliki Tabor"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content">
            <span className="px-1 text-start">
              <p>
                Naime, u dvorcu se održavaju razne predstave, festivali, advent,
                glazbeni nastupi, viteške borbe… Osim toga, stalni muzejski
                postav dvorca također je vrlo raznovrstan i zanimljiv.
                Najmlađima će se zasigurno najviše svidjeti sobe u kojim su
                prikaze povijest rođendana te staro oružje, sprave za mučenje i
                viteška oprema. A oni stariji uživat će u pričama o povijesti
                dvorca i obiteljima koje su ga posjedovale, a najzanimljivija je
                svakako legenda o <strong>Veroniki Desinićkoj</strong>.
              </p>
            </span>
            <Image
              src={images.VelikiTabor8}
              alt="Veliki Tabor"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content two_line">
            <span className="px-1 text-start">
              <p>
                Naime, davno je ovim prostorima vladao grof Herman II. Celjski
                čiji se sin Fridrik II. Celjski jašući očevim posjedima zaljubio
                u djevojku zlatne kose Veroniku. Kako otac nije podržavao
                njihovu vezu, Veronika i Fridrik pobjegli su u Sloveniju gdje su
                se i vjenčali, ali je Henrik saznao za to i poslao vojsku da ih
                nađu. Fridrika su tada zatočili u Celjsku kulu koja je tada
                dobila ime Fridrikova kula, dok je Veronika zatvorena u Velikom
                Taboru. Tada je Henrik optužio Veroniku da je copernica
                (vještica) koja je zavela njegovog sina pa je stoga organizirano
                suđenje Veroniki i nakon dva dana odlučeno je da nije kriva, ali
                Hermanu se to nije svidjelo pa je naredio da ju pogube. U
                dvorištu dvorca donijeli su drvenu posudu punu vode i u njoj
                utopili Veroniku te ju uzidali u zid dvorca. Legenda kaže da se
                i danas tijekom noći u Velikom Taboru čuju jecaji nesretne
                Veronike…
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.VelikiTabor6}
                alt="Veliki Tabor"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.VelikiTabor7}
                alt="Veliki Tabor"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>

        <p>
          Nakon razgleda dvorca već smo lagano ogladnile pa smo odlučile otići
          na ručak u obližnji restoran <strong>Grešna Gorica</strong>. Ovo
          seosko domaćinstvo nalazi se na samo pet minuta vožnje od Velikog
          Tabora, a s radom je započelo čak 1996. godine što ga čini prvim
          registriranim seoskim turizmom u Hrvatskoj.
        </p>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content two_line">
            <span className="px-1 text-start">
              <p>
                Na putu do dvorca možete vidjeti simpatične minijature dvoraca{" "}
                <strong>Veliki Tabor</strong> i <strong>Miljana</strong>,{" "}
                <strong>kapele sv. Magdalene</strong>, a u šumici malo ispod
                gdje smo ostavile auto nalaze se male kućice koje predstavljaju
                staro zagorsko selo.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.GresnaGorica}
                alt="Grešna Gorica"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.GresnaGorica2}
                alt="Grešna Gorica"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content alternate">
            <span className="px-1 text-start">
              <p>
                Osim u finoj autohtonoj hrani, ovdje možete uživati u pravom
                seoskom ugođaju jer se oko vas nalaze brojne životinjice,
                vinogradi i livade te stari seoski predmeti koji su iskorišteni
                kao stolovi, ukrasi ili čak kutak za goste izrađen od stare
                bačve.
              </p>
            </span>
            <Image
              src={images.GresnaGorica5}
              alt="Grešna Gorica"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content">
            <span className="px-1 text-start">
              <p>
                Možete sjediti unutra ili vani na terasama te ispod brajdi. Mi
                smo odlučile sjesti isprod brajdi i uživati u prirodnom zaklonu
                od sunca. U ponudi imaju brojna tradicionalna jela poput purice
                s mlincima, svinjskog pečenja, sira i vrhnja, raznih narezaka i
                namaza te naravno razne vrste štrukli.
              </p>
            </span>
            <Image
              src={images.GresnaGorica9}
              alt="Grešna Gorica"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content two_line">
            <span className="px-1 text-start">
              <p>
                Mi smo se odlučile za platu seljački narezak koja je koštala 44
                kune, a na njoj se nalaze domaća salama, buđola, špek, prezvuršt
                i dvije vrste sira. Uz to dobijete i ukusni domaći kruh. Za
                desert smo uzele zapečene štrukle i kuhane štrukle. Oboje je
                koštalo 38 kuna i meni su ukusniji bili kuhani, dok su se Ivi
                ipak više svidjeli zapečeni. Porcije su stvarno velike i zasitne
                tako da smo ostatak uzele za van. Koliko sam vidjela, cijene
                jesu malo veće, ali mislim da opravdavaju kvalitetu. Osoblje je
                iznimno simpatično i ljubazno.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.GresnaGorica7}
                alt="Grešna Gorica"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.GresnaGorica6}
                alt="Grešna Gorica"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.GresnaGorica8}
                alt="Grešna Gorica"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>

        <p>
          Nakon što smo se fino najele, odlučile smo posjetiti etno-selo{" "}
          <strong>Kumrovec</strong> koje se nalazi na 15-tak minuta udaljenosti.
          Ulaznicu smo također platile 15 kuna, iako je i ona sada poskupjela na
          32.
        </p>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content two_line">
            <span className="px-1 text-start">
              <p>
                Ovo etno-selo danas je najveći tradicijski uređeni prostor koji
                prikazuje autentičan izgled zagorskog sela s početka 20.
                stoljeća. Najpoznatija građevina u selu je{" "}
                <strong>rodna kuća Josipa Broza Tita</strong> koja sadrži
                etnografski i povijesni postav, ali vrijedi posjetiti i ostale
                kućice jer svaka priča svoju priču. Hodajući selom, možete
                saznati kako su nekad izgledali životi starih Zagoraca, odnosno
                kakve su im bile kuće i kojim su se sve obrtima bavili.
              </p>
            </span>
            <div className="two_line_images">
              <Image
                src={images.Kumrovec}
                alt="Kumrovec"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.Kumrovec4}
                alt="Kumrovec"
                height={"auto"}
                width={"auto"}
              />
              <Image
                src={images.Kumrovec5}
                alt="Kumrovec"
                height={"auto"}
                width={"auto"}
              />
            </div>
          </div>
        </div>

        <div className="blog_container-card_content-inner w-full p-0">
          <div className="blog_container-card_content-image_content">
            <span className="px-1 text-start">
              <p>
                Nakon posjeta etno selu, posjetili smo Ivine baku, dedu i
                njihovu ljubimicu Loru koji žive u blizini te uživale u domaćem
                gemištu i veselom razgovoru s njima, a naravno i jele kod njih
                jer nijedan pravi Zagorec svoje goste ne ostavlja prazna želuca.
                Kasnije nas je Ivin deda traktorom odvezao do svoje kleti i
                vinograda iz kojeg se pruža pogled na <strong>Kumrovec</strong>{" "}
                i Sloveniju. Nakon lijepog druženja uputile smo se nazad za
                Zagreb pričajući o svemu što smo danas doživjele.
              </p>
            </span>
            <Image
              src={images.RandomImg}
              alt="Lora"
              height={"auto"}
              width={"auto"}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Zagorje2022;
