import { SMACKDOWN_2001_OVERRIDES } from "./data_smackdown_2001";
import { SMACKDOWN_2002_OVERRIDES } from "./data_smackdown_2002";
import { SMACKDOWN_2003_OVERRIDES } from "./data_smackdown_2003";
import { SMACKDOWN_2004_OVERRIDES } from "./data_smackdown_2004";
import { SMACKDOWN_2005_OVERRIDES } from "./data_smackdown_2005";
import { RAW_2001_OVERRIDES } from "./data_raw_2001";
import { RAW_2002_OVERRIDES } from "./data_raw_2002";
import { RAW_2003_OVERRIDES } from "./data_raw_2003";
import { RAW_2004_OVERRIDES } from "./data_raw_2004";
import { RAW_2005_OVERRIDES } from "./data_raw_2005";

export interface WWEEvent {
  id: string;
  title: string;          // e.g., "RAW #606", "SmackDown #282", "Royal Rumble 2005"
  show: 'RAW' | 'SmackDown' | 'PPV';
  date: string;          // YYYY-MM-DD
  month: string;         // Enero, Febrero, etc.
  year: number;
  season?: string;
  episode?: string;
  duration: string;      // e.g., "1h 42m", "2h 55m"
  thumbnail: string;     // Vertical poster aspect ratio
  background: string;    // Landscape widescreen high resolution
  video_url: string;     // YouTube embed URL
  description: string;   // Narrative teaser
  watched: boolean;
}

export const STATIC_WWE_EVENTS: WWEEvent[] = [
  {
    id: "wwe-ppv-backlash-2001",
    title: "Backlash 2001",
    show: "PPV",
    date: "2001-04-29",
    month: "Abril",
    year: 2001,
    season: "PPV Especial",
    episode: "Backlash",
    duration: "2h 45m",
    thumbnail: "https://i.etsystatic.com/42525148/r/il/0f4f6a/5207161365/il_1080xN.5207161365_n3sz.jpg",
    background: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ok.ru/video/3486414670434",
    description: "WWE Backlash 2001 presenta el histórico enfrentamiento 'Winner Take All' por todos los títulos. El Campeón de la WWF Stone Cold Steve Austin y el Campeón Intercontinental Triple H ('The Two-Man Power Trip') se miden contra The Brothers of Destruction (The Undertaker y Kane) por los Campeonatos Mundiales en Parejas de la WWF.",
    watched: false
  },
  {
    id: "wwe-raw-2005-01-03",
    title: "RAW #606",
    show: "RAW",
    date: "2005-01-03",
    month: "Enero",
    year: 2005,
    season: "Temporada 13",
    episode: "Episodio 1",
    duration: "1h 35m",
    thumbnail: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop", // Pro Wrestling Wrestling ring aesthetic
    background: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop", // Intense dark arena lighting
    video_url: "https://www.youtube.com/embed/Z6fH_hI5G7A", // RAW highlights
    description: "Comienza el camino hacia Royal Rumble 2005. Batista se enfrenta a un Christian desafiante mientras crecen las tensiones dentro de Evolution. Triple H intenta asegurar su dominio sobre el World Heavyweight Championship.",
    watched: false
  },
  {
    id: "wwe-sd-2005-01-06",
    title: "SmackDown #282",
    show: "SmackDown",
    date: "2005-01-06",
    month: "Enero",
    year: 2005,
    season: "Temporada 7",
    episode: "Episodio 1",
    duration: "1h 28m",
    thumbnail: "https://images.unsplash.com/photo-1561532734-181145176a5e?q=80&w=600&auto=format&fit=crop", // Blue athletic focus
    background: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop", // Blue neon arena scale
    video_url: "https://www.youtube.com/embed/34T_Z2nE_9U", // SmackDown classic highlights
    description: "JBL celebra su reinado de campeonato en SmackDown con una fastuosa fiesta presidencial. John Cena busca revancha y defiende su honor en un agitado show azul liderado por Theodore Long.",
    watched: false
  },
  {
    id: "wwe-raw-2005-01-10",
    title: "RAW #607",
    show: "RAW",
    date: "2005-01-10",
    month: "Enero",
    year: 2005,
    season: "Temporada 13",
    episode: "Episodio 2",
    duration: "1h 40m",
    thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop", // High contrast athletes
    background: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop", // Stadium spotlights
    video_url: "https://www.youtube.com/embed/zF6OOnq_3U0",
    description: "Randy Orton une fuerzas con Shawn Michaels para desafiar al imperio de Triple H y Ric Flair en un evento estelar que hace temblar los cimientos de la división roja.",
    watched: false
  },
  {
    id: "wwe-sd-2005-01-13",
    title: "SmackDown #283",
    show: "SmackDown",
    date: "2005-01-13",
    month: "Enero",
    year: 2005,
    season: "Temporada 7",
    episode: "Episodio 2",
    duration: "1h 30m",
    thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
    background: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop", // Cinematic screen
    video_url: "https://www.youtube.com/embed/Wlh6aZ9f688",
    description: "Kurt Angle organiza su famoso desafío por invitación para probar a los jóvenes talentos de SmackDown. Rey Mysterio y Eddie Guerrero forjan una alianza histórica y electrizante ante los campeones en pareja.",
    watched: false
  },
  {
    id: "wwe-rr-2005",
    title: "Royal Rumble 2005",
    show: "PPV",
    date: "2005-01-30",
    month: "Enero",
    year: 2005,
    season: "PPV Especial",
    episode: "Royal Rumble",
    duration: "2h 58m",
    thumbnail: "https://images.unsplash.com/photo-1471295263379-6ca4e4030990?q=80&w=600&auto=format&fit=crop", // Royal dynamic lights
    background: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop", // Giant stage explosion
    video_url: "https://www.youtube.com/embed/ZpPeeBvAnwQ", // Famous 2005 rumble clip
    description: "¡El evento que cambió todo! 30 superestrellas compiten por un boleto a WrestleMania. El electrizante final cara a cara entre John Cena y Batista obliga a Vince McMahon a irrumpir furioso en el ring tras un increíble empate.",
    watched: false
  },
  {
    id: "wwe-raw-2005-02-21",
    title: "RAW #613",
    show: "RAW",
    date: "2005-02-21",
    month: "Febrero",
    year: 2005,
    season: "Temporada 13",
    episode: "Episodio 8",
    duration: "1h 38m",
    thumbnail: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=600&auto=format&fit=crop", // Flame shadow style
    background: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop", // Rock concert atmosphere
    video_url: "https://www.youtube.com/embed/8t9mBswbZ-w", // Batista thumbs down segment
    description: "¡La decisión de Batista! Evolution planea engañar al 'Animal' para que firme con SmackDown, pero Batista revela que conoce el plan y hace la famosa señal de 'Pulgar Hacia Abajo' antes de destrozar a Triple H sobre una mesa.",
    watched: false
  },
  {
    id: "wwe-wm-21",
    title: "WrestleMania 21",
    show: "PPV",
    date: "2005-04-03",
    month: "Abril",
    year: 2005,
    season: "PPV Especial",
    episode: "WrestleMania 21",
    duration: "3h 48m",
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop", // Hollywood party gold spot
    background: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop", // Golden grand celebration
    video_url: "https://www.youtube.com/embed/Z0o2XNizW_Y", // WrestleMania classic MITB
    description: "WrestleMania va a Hollywood. Edge gana el primer maletín de Money in the Bank. John Cena derroca a JBL por el campeonato de WWE, y Batista se corona como World Heavyweight Champion destronando al Rey de Reyes, Triple H.",
    watched: false
  },
  {
    id: "wwe-raw-2006-01-08",
    title: "New Year's Revolution 2006",
    show: "PPV",
    date: "2006-01-08",
    month: "Enero",
    year: 2006,
    season: "PPV Especial",
    episode: "Canchazo Histórico",
    duration: "2h 40m",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop", // Red neon gaming console glow
    background: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop", // Dark red digital theme
    video_url: "https://www.youtube.com/embed/p1o1_0Aatv8", // First cash in clip
    description: "¡La primera canjeación de Money in the Bank en la historia! John Cena sobrevive con sangre una brutal Elimination Chamber, solo para ver a Vince McMahon anunciar que Edge canjea su contrato para coronarse campeón.",
    watched: false
  },
  {
    id: "wwe-ppv-judgment-day-2001",
    title: "Judgment Day 2001",
    show: "PPV",
    date: "2001-05-20",
    month: "Mayo",
    year: 2001,
    season: "PPV Especial",
    episode: "Judgment Day",
    duration: "2h 50m",
    thumbnail: "https://static.wikia.nocookie.net/prowrestling/images/1/1b/Judgmentday01.jpg/revision/latest?cb=20090928132347",
    background: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/05.-wwf-judgment-day-2001/05.%20WWF%20Judgment%20Day%20%282001%29.mp4",
    description: "WWE Judgment Day 2001 presenta el épico combate sin descalificación por el Campeonato de la WWF entre Stone Cold Steve Austin y The Undertaker, además del temible 'Chain Match' por el Campeonato Intercontinental entre Triple H y Kane.",
    watched: false
  },
  {
    id: "wwe-ppv-king-of-the-ring-2001",
    title: "King of the Ring 2001",
    show: "PPV",
    date: "2001-06-24",
    month: "Junio",
    year: 2001,
    season: "PPV Especial",
    episode: "King of the Ring",
    duration: "2h 55m",
    thumbnail: "https://tse3.mm.bing.net/th/id/OIP.jxQuFdDn-BE_HMUQUoT6BADREp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/06-wwf-king-of-the-ring-2001/06%20WWF%20King%20Of%20The%20Ring%202001.mp4",
    description: "WWE King of the Ring 2001 es un evento histórico que presenta la brutal y legendaria pelea callejera entre Kurt Angle y Shane McMahon. Además, Edge se consagra ganando la gran final del torneo del Rey de Ring, y Stone Cold Steve Austin defiende con ferocidad el Campeonato de la WWF en una electrizante Triple Amenaza frente a Chris Benoit y Chris Jericho.",
    watched: false
  },
  {
    id: "wwe-ppv-invasion-2001",
    title: "Invasion 2001",
    show: "PPV",
    date: "2001-07-22",
    month: "Julio",
    year: 2001,
    season: "PPV Especial",
    episode: "Invasion",
    duration: "2h 48m",
    thumbnail: "https://m.media-amazon.com/images/I/41JC0TSNEFL._AC_SY445_.jpg",
    background: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/06-wwf-king-of-the-ring-2001/07%20WWF%20Invasion%202001.mp4",
    description: "WWE Invasion 2001 marcó el caótico inicio de la guerra de marcas 'The Invasion', colisionando las superestrellas leales de la WWF contra la temible coalición WCW/ECW (The Alliance). En el estelar 'Inaugural Brawl', Stone Cold Steve Austin estremece al mundo de la lona traicionando sorpresivamente a la WWF para liderar las huestes invasoras.",
    watched: false
  },
  {
    id: "wwe-ppv-summerslam-2001",
    title: "SummerSlam 2001",
    show: "PPV",
    date: "2001-08-19",
    month: "Agosto",
    year: 2001,
    season: "PPV Especial",
    episode: "SummerSlam",
    duration: "2h 58m",
    thumbnail: "https://m.media-amazon.com/images/I/513ZDS1V9NL._AC_SY445_.jpg",
    background: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/06-wwf-king-of-the-ring-2001/08%20WWF%20SummerSlam%202001.mp4",
    description: "WWE SummerSlam 2001 se celebra bajo la densa atmósfera de la invasión de la Alianza de WCW/ECW. The Rock colisiona contra Booker T en un electrizante estelar consagrándose Campeón de la WCW, mientras Kurt Angle y Stone Cold Steve Austin se baten en un sangriento encuentro por el Campeonato de la WWF. Además, Rob Van Dam y Jeff Hardy deslumbran la noche en una spectacular lucha de escaleras por el Campeonato Hardcore.",
    watched: false
  },
  {
    id: "wwe-ppv-unforgiven-2001",
    title: "Unforgiven 2001",
    show: "PPV",
    date: "2001-09-23",
    month: "Septiembre",
    year: 2001,
    season: "PPV Especial",
    episode: "Unforgiven",
    duration: "2h 45m",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/6d/Unforgiven_2001.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/06-wwf-king-of-the-ring-2001/09%20WWF%20Unforgiven%202001.mp4",
    description: "WWE Unforgiven 2001 es un evento sumamente emotivo e histórico celebrado poco después de los atentados del 11 de septiembre. Kurt Angle hace vibrar a su estado natal al derrotar de forma limpia y conmovedora a Stone Cold Steve Austin para coronarse Campeón de la WWF, celebrando en el ring junto a toda su familia y el roster técnico. Además, Christian y Edge colisionan por el Campeonato Intercontinental, y Rob Van Dam defiende su título Hardcore ante Chris Jericho.",
    watched: false
  },
  {
    id: "wwe-ppv-no-mercy-2001",
    title: "No Mercy 2001",
    show: "PPV",
    date: "2001-10-21",
    month: "Octubre",
    year: 2001,
    season: "PPV Especial",
    episode: "No Mercy",
    duration: "2h 50m",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/517CA24S3JL._SY300_QL70_.jpg",
    background: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/06-wwf-king-of-the-ring-2001/10%20WWF%20No%20Mercy%202001.mp4",
    description: "WWE No Mercy 2001 presenta una noche repleta de hitos históricos de la Invasión. Chris Jericho alcanza la gloria máxima al derrotar al icónico The Rock para ganar su primer Campeonato Mundial de la WCW. En el estelar, Stone Cold Steve Austin retiene el Campeonato de la WWF en una espectacular Triple Amenaza frente a Kurt Angle y Rob Van Dam. Además, Edge y Christian se baten en una destructiva y memorable batalla de escaleras por el cetro Intercontinental.",
    watched: false
  },
  {
    id: "wwe-ppv-survivor-series-2001",
    title: "Survivor Series 2001",
    show: "PPV",
    date: "2001-11-18",
    month: "Noviembre",
    year: 2001,
    season: "PPV Especial",
    episode: "Survivor Series",
    duration: "3h 00m",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BNmM3ZjBjYTctNGI1ZS00NDZmLTg1OGItNTlhYTM5NGVlNzQzXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
    background: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/06-wwf-king-of-the-ring-2001/11%20WWF%20Survivor%20Series%202001.mp4",
    description: "WWE Survivor Series 2001 es uno de los eventos más trascendentales de la historia de la lucha libre profesional, marcando la culminación absoluta de la saga 'The Invasion'. En el legendario combate de eliminación de cinco contra cinco 'Winner Take All', el Team WWF (The Rock, Chris Jericho, The Undertaker, Kane y Big Show) se enfrenta a la Alianza de WCW/ECW (Stone Cold Steve Austin, Kurt Angle, Rob Van Dam, Booker T y Shane McMahon) por el control total y definitivo de la industria.",
    watched: false
  },
  {
    id: "wwe-ppv-vengeance-2001",
    title: "Vengeance 2001",
    show: "PPV",
    date: "2001-12-09",
    month: "Diciembre",
    year: 2001,
    season: "PPV Especial",
    episode: "Vengeance",
    duration: "2h 46m",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/2001Vengeance.jpg/250px-2001Vengeance.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/06-wwf-king-of-the-ring-2001/12%20WWF%20Vengeance%202001.mp4",
    description: "WWE Vengeance 2001 pasa a la posteridad por coronar al primer Campeón Indiscutido en la historia del entretenimiento deportivo. Chris Jericho logra la hazaña más legendaria al derrotar en una misma noche tanto a The Rock por el Campeonato de la WCW como a Stone Cold Steve Austin por el Campeonato de la WWF. Además, The Undertaker y Rob Van Dam batallan brutalmente por el Campeonato Hardcore, y Jeff Hardy se enfrenta a su hermano Matt Hardy con Lita como árbitro especial.",
    watched: false
  },
  {
    id: "wwe-ppv-royal-rumble-2002",
    title: "Royal Rumble 2002",
    show: "PPV",
    date: "2002-01-20",
    month: "Enero",
    year: 2002,
    season: "PPV Especial",
    episode: "Royal Rumble",
    duration: "2h 48m",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/f/f7/Royal_Rumble_2002.jpg",
    background: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-233385590_456239420",
    description: "WWE Royal Rumble 2002 es inmortalizado por el majestuoso regreso y victoria de Triple H en la tradicional Batalla Real tras superar una devastadora rotura de cuádriceps, eliminando a Kurt Angle en el tramo final. En el duelo por el Campeonato Indiscutido de la WWF, Chris Jericho retiene ante The Rock en una electrizante contienda. Además, Ric Flair derrota a Vince McMahon en una salvaje Pelea Callejera, y William Regal supera a Edge para colgarse el Campeonato Intercontinental.",
    watched: false
  },
  {
    id: "wwe-ppv-no-way-out-2002",
    title: "No Way Out 2002",
    show: "PPV",
    date: "2002-02-17",
    month: "Febrero",
    year: 2002,
    season: "PPV Especial",
    episode: "No Way Out",
    duration: "2h 39m",
    thumbnail: "https://i.ebayimg.com/images/g/hZYAAOxyqUpQ9GWm/s-l640.jpg",
    background: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-36672771_162364718",
    description: "WWE No Way Out 2002 pasa a la posteridad por marcar el legendario y caótico debut de la nWo (New World Order) en la WWF, con Hollywood Hulk Hogan, Kevin Nash y Scott Hall sembrando el terror. En la asombrosa lucha estelar, Chris Jericho retiene astutamente el Campeonato Indiscutido de la WWF frente a Stone Cold Steve Austin tras una tumultuosa intervención. Además, Kurt Angle derrota a Triple H despojándolo de su derecho por el título en WrestleMania, y The Rock vence a The Undertaker en una colosal batalla de titanes.",
    watched: false
  },
  {
    id: "wwe-ppv-wrestlemania-18",
    title: "WrestleMania X-8 (2002)",
    show: "PPV",
    date: "2002-03-17",
    month: "Marzo",
    year: 2002,
    season: "PPV Especial",
    episode: "WrestleMania X-8",
    duration: "3h 50m",
    thumbnail: "https://www.giantbomb.com/a/uploads/scale_medium/8/87790/2139903-box_wwewm18.png",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-222239091_456242648",
    description: "WWF WrestleMania X-8 (WrestleMania 18) es un evento legendario recordado eternamente por el choque intergeneracional 'Icon vs. Icon' entre The Rock y Hollywood Hulk Hogan en una atmósfera absolutamente electrizante. En el evento principal, Triple H derrota a Chris Jericho para coronarse como el nuevo Campeón Indiscutido de la WWF. Además, The Undertaker extiende su mítica racha imbatible a 10-0 superando a Ric Flair en una brutal lucha sin descalificación, y Stone Cold Steve Austin se impone ante Scott Hall.",
    watched: false
  },
  {
    id: "wwe-ppv-backlash-2002",
    title: "Backlash 2002",
    show: "PPV",
    date: "2002-04-21",
    month: "Abril",
    year: 2002,
    season: "PPV Especial",
    episode: "Backlash",
    duration: "2h 45m",
    thumbnail: "https://m.media-amazon.com/images/I/413J6319ZEL._AC_.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-45894656_456241034",
    description: "WWE Backlash 2002 es un show electrizante caracterizado por la consagración de Hulk Hogan al ganar su sexto Campeonato de la WWF derrotando a Triple H tras una encarnizada batalla. En un choque estelar de ensueño, The Undertaker se impone ante Stone Cold Steve Austin con Ric Flair como árbitro especial invitado bajo una intensa polémica de conteo. Además, Eddie Guerrero regresa por todo lo alto doblegando a Rob Van Dam para de paso conquistar el Campeonato Intercontinental, y Edge vence a Kurt Angle en una lucha de tremendo calibre técnico.",
    watched: false
  },
  {
    id: "wwe-ppv-judgment-day-2002",
    title: "Judgment Day 2002",
    show: "PPV",
    date: "2002-05-19",
    month: "Mayo",
    year: 2002,
    season: "PPV Especial",
    episode: "Judgment Day",
    duration: "2h 42m",
    thumbnail: "https://images.static-bluray.com/movies/dvdcovers/174395_large.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "",
    description: "WWE Judgment Day 2002 es recordado por la colosal batalla ruda donde The Undertaker destrona a la leyenda viva Hollywood Hulk Hogan para consagrarse como Campeón de la WWF de manera implacable. En una salvaje confrontación dentro de la temible estructura Hell in a Cell, Triple H liquida sus rencillas pendientes ante Chris Jericho. Además, Edge vence a Kurt Angle en un aclamado duelo de Cabellera contra Cabellera que culmina con la mítica cabeza rapada del héroe olímpico.",
    watched: false
  }
];

export const RAW_ARCHIVE_URLS: string[] = [
  "https://archive.org/download/WAR-2001/2001-01-01.mp4",
  "https://archive.org/download/2001.03.15/2001.01.04.mp4",
  "https://archive.org/download/WAR-2001/2001-01-08.mp4",
  "https://archive.org/download/2001.03.15/2001.01.11.mp4",
  "https://archive.org/download/WAR-2001/2001-01-15.mp4",
  "https://archive.org/download/2001.03.15/2001.01.18.mp4",
  "https://archive.org/download/WAR-2001/2001-01-22.mp4",
  "https://archive.org/download/2001.03.15/2001.01.25.mp4",
  "https://archive.org/download/WAR-2001/2001-01-29.mp4",
  "https://archive.org/download/2001.03.15/2001.02.01.mp4",
  "https://archive.org/download/WAR-2001/2001-02-05.mp4",
  "https://archive.org/download/2001.03.15/2001.02.08.mp4",
  "https://archive.org/download/WAR-2001/2001-02-12.mp4",
  "https://archive.org/download/2001.03.15/2001.02.15.mp4",
  "https://archive.org/download/WAR-2001/2001-02-19.mp4",
  "https://archive.org/download/2001.03.15/2001.02.22.mp4",
  "https://archive.org/download/WAR-2001/2001-02-26.mp4",
  "https://archive.org/download/2001.03.15/2001.03.01.mp4",
  "https://archive.org/download/WAR-2001/2001-03-05.mp4",
  "https://archive.org/download/2001.03.15/2001.03.08.mp4",
  "https://archive.org/download/WAR-2001/2001-03-12.mp4",
  "https://archive.org/download/2001.03.15/2001.03.15.mp4",
  "https://archive.org/download/WAR-2001/2001-03-19.mp4",
  "https://archive.org/download/2001.03.15/2001.03.22.mp4",
  "https://archive.org/download/WAR-2001/2001-03-26.mp4",
  "https://archive.org/download/2001.03.15/2001.03.29.mp4",
  "https://archive.org/download/WAR-2001/2001-04-02.mp4",
  "https://archive.org/download/2001.03.15/2001.04.05.mp4",
  "https://archive.org/download/WAR-2001/2001-04-09.mp4",
  "https://archive.org/download/2001.03.15/2001.04.12.mp4",
  "https://archive.org/download/WAR-2001/2001-04-16.mp4",
  "https://archive.org/download/2001.03.15/2001.04.19.mp4",
  "https://archive.org/download/WAR-2001/2001-04-23.mp4",
  "https://archive.org/download/2001.03.15/2001.04.26.mp4",
  "https://archive.org/download/WAR-2001/2001-04-30.mp4",
  "https://archive.org/download/2001.03.15/2001.05.03.mp4",
  "https://archive.org/download/WAR-2001/2001-05-07.mp4",
  "https://archive.org/download/2001.03.15/2001.05.10.mp4",
  "https://archive.org/download/WAR-2001/2001-05-14.mp4",
  "https://archive.org/download/2001.03.15/2001.05.17.mp4",
  "https://archive.org/download/WAR-2001/2001-05-21.mp4",
  "https://archive.org/download/2001.03.15/2001.05.24.mp4",
  "https://archive.org/download/WAR-2001/2001-05-28.mp4",
  "https://archive.org/download/2001.03.15/2001.05.31.mp4",
  "https://archive.org/download/WAR-2001/2001-06-04.mp4",
  "https://archive.org/download/2001.03.15/2001.06.07.mp4",
  "https://archive.org/download/WAR-2001/2001-06-11.mp4",
  "https://archive.org/download/2001.03.15/2001.06.14.mp4",
  "https://archive.org/download/WAR-2001/2001-06-18.mp4",
  "https://archive.org/download/2001.03.15/2001.06.21.mp4",
  "https://archive.org/download/WAR-2001/2001-06-25.mp4",
  "https://archive.org/download/2001.03.15/2001.06.28.mp4",
  "https://archive.org/download/WAR-2001/2001-07-02.mp4",
  "https://archive.org/download/2001.03.15/2001.07.05.mp4",
  "https://archive.org/download/WAR-2001/2001-07-09.mp4",
  "https://archive.org/download/2001.03.15/2001.07.12.mp4",
  "https://archive.org/download/WAR-2001/2001-07-16.mp4",
  "https://archive.org/download/2001.03.15/2001.07.19.mp4",
  "https://archive.org/download/WAR-2001/2001-07-23.mp4",
  "https://archive.org/download/2001.03.15/2001.07.26.mp4",
  "https://archive.org/download/WAR-2001/2001-07-30.mp4",
  "https://archive.org/download/2001.03.15/2001.08.02.mp4",
  "https://archive.org/download/WAR-2001/2001-08-06.mp4",
  "https://archive.org/download/2001.03.15/2001.08.09.mp4",
  "https://archive.org/download/WAR-2001/2001-08-13.mp4",
  "https://archive.org/download/2001.03.15/2001.08.16.mp4",
  "https://archive.org/download/WAR-2001/2001-08-20.mp4",
  "https://archive.org/download/2001.03.15/2001.08.23.mp4",
  "https://archive.org/download/WAR-2001/2001-08-27.mp4",
  "https://archive.org/download/2001.03.15/2001.08.30.mp4",
  "https://archive.org/download/WAR-2001/2001-09-03.mp4",
  "https://archive.org/download/2001.03.15/2001.09.04.mp4",
  "https://archive.org/download/WAR-2001/2001-09-10.mp4",
  "https://archive.org/download/2001.03.15/2001.09.13.mp4",
  "https://archive.org/download/WAR-2001/2001-09-17.mp4",
  "https://archive.org/download/2001.03.15/2001.09.20.mp4",
  "https://archive.org/download/WAR-2001/2001-09-24.mp4",
  "https://archive.org/download/2001.03.15/2001.09.27.mp4",
  "https://archive.org/download/WAR-2001/2001-10-01.mp4",
  "https://archive.org/download/2001.03.15/2001.10.04.mp4",
  "https://archive.org/download/WAR-2001/2001-10-08.mp4",
  "https://archive.org/download/2001.03.15/2001.10.11.mp4",
  "https://archive.org/download/WAR-2001/2001-10-15.mp4",
  "https://archive.org/download/2001.03.15/2001.10.18.mp4",
  "https://archive.org/download/WAR-2001/2001-10-22.mp4",
  "https://archive.org/download/2001.03.15/2001.10.25.mp4",
  "https://archive.org/download/WAR-2001/2001-10-29.mp4",
  "https://archive.org/download/2001.03.15/2001.11.01.mp4",
  "https://archive.org/download/WAR-2001/2001-11-05.mp4",
  "https://archive.org/download/2001.03.15/2001.11.08.mp4",
  "https://archive.org/download/WAR-2001/2001-11-12.mp4",
  "https://archive.org/download/2001.03.15/2001.11.15.mp4",
  "https://archive.org/download/WAR-2001/2001-11-19.mp4",
  "https://archive.org/download/2001.03.15/2001.11.22.mp4",
  "https://archive.org/download/WAR-2001/2001-11-26.mp4",
  "https://archive.org/download/2001.03.15/2001.11.29.mp4",
  "https://archive.org/download/WAR-2001/2001-12-03.mp4",
  "https://archive.org/download/2001.03.15/2001.12.06.mp4",
  "https://archive.org/download/WAR-2001/2001-12-10.mp4",
  "https://archive.org/download/2001.03.15/2001.12.13.mp4",
  "https://archive.org/download/WAR-2001/2001-12-17.mp4",
  "https://archive.org/download/2001.03.15/2001.12.20.mp4",
  "https://archive.org/download/WAR-2001/2001-12-24.mp4",
  "https://archive.org/download/2001.03.15/2001.12.27.mp4",
  "https://archive.org/download/WAR-2001/2001-12-31.mp4",
  "https://archive.org/download/2002.02.07/2002.01.03.mp4",
  "https://archive.org/download/2002.01.28/2002.01.07.mp4",
  "https://archive.org/download/2002.02.07/2002.01.10.mp4",
  "https://archive.org/download/2002.01.28/2002.01.14.mp4",
  "https://archive.org/download/2002.02.07/2002.01.17.mp4",
  "https://archive.org/download/2002.01.28/2002.01.21.mp4",
  "https://archive.org/download/2002.02.07/2002.01.24.mp4",
  "https://archive.org/2002.01.28/2002.01.28.mp4",
  "https://archive.org/download/2002.02.07/2002.01.31.mp4",
  "https://archive.org/download/2002.01.28/2002.02.04.mp4",
  "https://archive.org/download/2002.02.07/2002.02.07.mp4",
  "https://archive.org/download/2002.01.28/2002.02.11.mp4",
  "https://archive.org/download/2002.02.07/2002.02.14.mp4",
  "https://archive.org/download/2002.01.28/2002.02.18.mp4",
  "https://archive.org/download/2002.02.07/2002.02.21.mp4",
  "https://archive.org/download/2002.01.28/2002.02.25.mp4",
  "https://archive.org/download/2002.02.07/2002.02.28.mp4",
  "https://archive.org/download/2002.01.28/2002.03.04.mp4",
  "https://archive.org/download/2002.02.07/2002.03.07.mp4",
  "https://archive.org/download/2002.01.28/2002.03.11.mp4",
  "https://archive.org/download/2002.02.07/2002.03.14.mp4",
  "https://archive.org/download/2002.01.28/2002.03.18.mp4",
  "https://archive.org/download/2002.02.07/2002.03.21.mp4",
  "https://archive.org/download/2002.01.28/2002.03.25.mp4",
  "https://archive.org/download/2002.02.07/2002.03.28.mp4",
  "https://archive.org/download/2002.01.28/2002.04.01.mp4",
  "https://archive.org/download/2002.02.07/2002.04.04.mp4",
  "https://archive.org/download/2002.01.28/2002.04.08.mp4",
  "https://archive.org/download/2002.02.07/2002.04.11.mp4",
  "https://archive.org/download/2002.01.28/2002.04.15.mp4",
  "https://archive.org/download/2002.02.07/2002.04.18.mp4",
  "https://archive.org/download/2002.01.28/2002.04.22.mp4",
  "https://archive.org/download/2002.02.07/2002.04.25.mp4",
  "https://archive.org/download/2002.01.28/2002.04.29.mp4",
  "https://archive.org/download/2002.02.07/2002.05.02.mp4",
  "https://archive.org/download/2002.01.28/2002.05.06.mp4",
  "https://archive.org/download/2002.02.07/2002.05.09.mp4",
  "https://archive.org/download/2002.01.28/2002.05.13.mp4",
  "https://archive.org/download/2002.02.07/2002.05.16.mp4",
  "https://archive.org/download/2002.01.28/2002.05.20.mp4",
  "https://archive.org/download/2002.02.07/2002.05.23.mp4",
  "https://archive.org/download/2002.01.28/2002.05.27.mp4",
  "https://archive.org/download/2002.02.07/2002.05.30.mp4",
  "https://archive.org/download/2002.01.28/2002.06.03.mp4",
  "https://archive.org/download/2002.02.07/2002.06.06.mp4",
  "https://archive.org/download/2002.01.28/2002.06.10.mp4",
  "https://archive.org/download/2002.02.07/2002.06.13.mp4",
  "https://archive.org/download/2002.01.28/2002.06.17.mp4",
  "https://archive.org/download/2002.02.07/2002.06.20.mp4",
  "https://archive.org/download/2002.01.28/2002.06.24.mp4",
  "https://archive.org/download/2002.02.07/2002.06.27.mp4",
  "https://archive.org/download/2002.01.28/2002.07.01.mp4",
  "https://archive.org/download/2002.02.07/2002.07.04.mp4",
  "https://archive.org/download/2002.01.28/2002.07.08.mp4",
  "https://archive.org/download/2002.02.07/2002.07.11.mp4",
  "https://archive.org/download/2002.01.28/2002.07.15.mp4",
  "https://archive.org/download/2002.02.07/2002.07.18.mp4",
  "https://archive.org/download/2002.01.28/2002.07.22.mp4",
  "https://archive.org/download/2002.02.07/2002.07.25.mp4",
  "https://archive.org/download/2002.01.28/2002.07.29.mp4",
  "https://archive.org/download/2002.02.07/2002.08.01.mp4",
  "https://archive.org/download/2002.01.28/2002.08.05.mp4",
  "https://archive.org/download/2002.02.07/2002.08.08.mp4",
  "https://archive.org/download/2002.01.28/2002.08.12.mp4",
  "https://archive.org/download/2002.02.07/2002.08.15.mp4",
  "https://archive.org/download/2002.01.28/2002.08.19.mp4",
  "https://archive.org/download/2002.02.07/2002.08.22.mp4",
  "https://archive.org/download/2002.01.28/2002.08.26.mp4",
  "https://archive.org/download/2002.02.07/2002.08.29.mp4",
  "https://archive.org/download/2002.01.28/2002.09.02.mp4",
  "https://archive.org/download/2002.02.07/2002.09.05.mp4",
  "https://archive.org/download/2002.01.28/2002.09.09.mp4",
  "https://archive.org/download/2002.02.07/2002.09.12.mp4",
  "https://archive.org/download/2002.01.28/2002.09.16.mp4",
  "https://archive.org/download/2002.02.07/2002.09.19.mp4",
  "https://archive.org/download/2002.01.28/2002.09.23.mp4",
  "https://archive.org/download/2002.02.07/2002.09.26.mp4",
  "https://archive.org/download/2002.01.28/2002.09.30.mp4",
  "https://archive.org/download/2002.02.07/2002.10.03.mp4",
  "https://archive.org/download/2002.01.28/2002.10.07.mp4",
  "https://archive.org/download/2002.02.07/2002.10.10.mp4",
  "https://archive.org/download/2002.01.28/2002.10.14.mp4",
  "https://archive.org/download/2002.02.07/2002.10.17.mp4",
  "https://archive.org/download/2002.01.28/2002.10.21.mp4",
  "https://archive.org/download/2002.02.07/2002.10.24.mp4",
  "https://archive.org/download/2002.01.28/2002.10.28.mp4",
  "https://archive.org/download/2002.02.07/2002.10.31.mp4",
  "https://archive.org/download/2002.01.28/2002.11.04.mp4",
  "https://archive.org/download/2002.02.07/2002.11.07.mp4",
  "https://archive.org/download/2002.01.28/2002.11.11.mp4",
  "https://archive.org/download/2002.02.07/2002.11.14.mp4",
  "https://archive.org/download/2002.01.28/2002.11.18.mp4",
  "https://archive.org/download/2002.02.07/2002.11.21.mp4",
  "https://archive.org/download/2002.01.28/2002.11.25.mp4",
  "https://archive.org/download/2002.02.07/2002.11.28.mp4",
  "https://archive.org/download/2002.01.28/2002.12.02.mp4",
  "https://archive.org/download/2002.02.07/2002.12.05.mp4",
  "https://archive.org/download/2002.01.28/2002.12.09.mp4",
  "https://archive.org/download/2002.02.07/2002.12.12.mp4",
  "https://archive.org/download/2002.01.28/2002.12.16.mp4",
  "https://archive.org/download/2002.02.07/2002.12.19.mp4",
  "https://archive.org/download/2002.01.28/2002.12.23.mp4",
  "https://archive.org/download/2002.02.07/2002.12.26.mp4",
  "https://archive.org/download/2002.01.28/2002.12.30.mp4"
];

export const YEAR_2003_URLS: string[] = [
  "https://archive.org/download/2003.05.22/2003.01.02.mp4",
  "https://archive.org/download/2003.12.29/2003.01.06.mp4",
  "https://archive.org/download/2003.05.22/2003.01.09.mp4",
  "https://archive.org/download/2003.12.29/2003.01.13.mp4",
  "https://archive.org/download/2003.05.22/2003.01.16.mp4",
  "https://archive.org/download/2003.12.29/2003.01.20.mp4",
  "https://archive.org/download/2003.05.22/2003.01.23.mp4",
  "https://archive.org/download/2003.12.29/2003.01.27.mp4",
  "https://archive.org/download/2003.05.22/2003.01.30.mp4",
  "https://archive.org/download/2003.12.29/2003.02.03.mp4",
  "https://archive.org/download/2003.05.22/2003.02.06.mp4",
  "https://archive.org/download/2003.12.29/2003.02.10.mp4",
  "https://archive.org/download/2003.05.22/2003.02.13.mp4",
  "https://archive.org/download/2003.12.29/2003.02.17.mp4",
  "https://archive.org/download/2003.05.22/2003.02.20.mp4",
  "https://archive.org/download/2003.12.29/2003.02.24.mp4",
  "https://archive.org/download/2003.05.22/2003.02.27.mp4",
  "https://archive.org/download/2003.12.29/2003.03.03.mp4",
  "https://archive.org/download/2003.05.22/2003.03.06.mp4",
  "https://archive.org/download/2003.12.29/2003.03.10.mp4",
  "https://archive.org/download/2003.05.22/2003.03.13.mp4",
  "https://archive.org/download/2003.12.29/2003.03.17.mp4",
  "https://archive.org/download/2003.05.22/2003.03.20.mp4",
  "https://archive.org/download/2003.12.29/2003.03.24.mp4",
  "https://archive.org/download/2003.05.22/2003.03.27.mp4",
  "https://archive.org/download/2003.12.29/2003.03.31.mp4",
  "https://archive.org/download/2003.05.22/2003.04.03.mp4",
  "https://archive.org/download/2003.12.29/2003.04.07.mp4",
  "https://archive.org/download/2003.05.22/2003.04.10.mp4",
  "https://archive.org/download/2003.12.29/2003.04.14.mp4",
  "https://archive.org/download/2003.05.22/2003.04.17.mp4",
  "https://archive.org/download/2003.12.29/2003.04.21.mp4",
  "https://archive.org/download/2003.05.22/2003.04.24.mp4",
  "https://archive.org/download/2003.12.29/2003.04.28.mp4",
  "https://archive.org/download/2003.05.22/2003.05.01.mp4",
  "https://archive.org/download/2003.12.29/2003.05.05.mp4",
  "https://archive.org/download/2003.05.22/2003.05.08.mp4",
  "https://archive.org/download/2003.12.29/2003.05.12.mp4",
  "https://archive.org/download/2003.05.22/2003.05.15.mp4",
  "https://archive.org/download/2003.12.29/2003.05.19.mp4",
  "https://archive.org/download/2003.05.22/2003.05.22.mp4",
  "https://archive.org/download/2003.12.29/2003.05.26.mp4",
  "https://archive.org/download/2003.05.22/2003.05.29.mp4",
  "https://archive.org/download/2003.12.29/2003.06.02.mp4",
  "https://archive.org/download/2003.05.22/2003.06.05.mp4",
  "https://archive.org/download/2003.12.29/2003.06.09.mp4",
  "https://archive.org/download/2003.05.22/2003.06.12.mp4",
  "https://archive.org/download/2003.12.29/2003.06.16.mp4",
  "https://archive.org/download/2003.05.22/2003.06.19.mp4",
  "https://archive.org/download/2003.12.29/2003.06.23.mp4",
  "https://archive.org/download/2003.05.22/2003.06.26.mp4",
  "https://archive.org/download/2003.12.29/2003.06.30.mp4",
  "https://archive.org/download/2003.05.22/2003.07.03.mp4",
  "https://archive.org/download/2003.12.29/2003.07.07.mp4",
  "https://archive.org/download/2003.05.22/2003.07.10.mp4",
  "https://archive.org/download/2003.12.29/2003.07.14.mp4",
  "https://archive.org/download/2003.05.22/2003.07.17.mp4",
  "https://archive.org/download/2003.12.29/2003.07.21.mp4",
  "https://archive.org/download/2003.05.22/2003.07.24.mp4",
  "https://archive.org/download/2003.12.29/2003.07.28.mp4",
  "https://archive.org/download/2003.05.22/2003.07.31.mp4",
  "https://archive.org/download/2003.12.29/2003.08.04.mp4",
  "https://archive.org/download/2003.05.22/2003.08.07.mp4",
  "https://archive.org/download/2003.12.29/2003.08.11.mp4",
  "https://archive.org/download/2003.05.22/2003.08.14.mp4",
  "https://archive.org/download/2003.12.29/2003.08.18.mp4",
  "https://archive.org/download/2003.05.22/2003.08.21.mp4",
  "https://archive.org/download/2003.12.29/2003.08.25.mp4",
  "https://archive.org/download/2003.05.22/2003.08.28.mp4",
  "https://archive.org/download/2003.12.29/2003.09.01.mp4",
  "https://archive.org/download/2003.05.22/2003.09.04.mp4",
  "https://archive.org/download/2003.12.29/2003.09.08.mp4",
  "https://archive.org/download/2003.05.22/2003.09.11.mp4",
  "https://archive.org/download/2003.12.29/2003.09.15.mp4",
  "https://archive.org/download/2003.05.22/2003.09.18.mp4",
  "https://archive.org/download/2003.12.29/2003.09.22.mp4",
  "https://archive.org/download/2003.05.22/2003.09.25.mp4",
  "https://archive.org/download/2003.12.29/2003.09.29.mp4",
  "https://archive.org/download/2003.05.22/2003.10.02.mp4",
  "https://archive.org/download/2003.12.29/2003.10.06.mp4",
  "https://archive.org/download/2003.05.22/2003.10.09.mp4",
  "https://archive.org/download/2003.12.29/2003.10.13.mp4",
  "https://archive.org/download/2003.05.22/2003.10.16.mp4",
  "https://archive.org/download/2003.12.29/2003.10.20.mp4",
  "https://archive.org/download/2003.05.22/2003.10.23.mp4",
  "https://archive.org/download/2003.12.29/2003.10.27.mp4",
  "https://archive.org/download/2003.05.22/2003.10.30.mp4",
  "https://archive.org/download/2003.12.29/2003.11.03.mp4",
  "https://archive.org/download/2003.05.22/2003.11.06.mp4",
  "https://archive.org/download/2003.12.29/2003.11.10.mp4",
  "https://archive.org/download/2003.05.22/2003.11.13.mp4",
  "https://archive.org/download/2003.12.29/2003.11.17.mp4",
  "https://archive.org/download/2003.05.22/2003.11.20.mp4",
  "https://archive.org/download/2003.12.29/2003.11.24.mp4",
  "https://archive.org/download/2003.05.22/2003.11.27.mp4",
  "https://archive.org/download/2003.12.29/2003.12.01.mp4",
  "https://archive.org/download/2003.05.22/2003.12.04.mp4",
  "https://archive.org/download/2003.12.29/2003.12.08.mp4",
  "https://archive.org/download/2003.05.22/2003.12.11.mp4",
  "https://archive.org/download/2003.12.29/2003.12.15.mp4",
  "https://archive.org/download/2003.05.22/2003.12.18.mp4",
  "https://archive.org/download/2003.12.29/2003.12.22.mp4",
  "https://archive.org/download/2003.05.22/2003.12.25.mp4",
  "https://archive.org/download/2003.12.29/2003.12.29.mp4"
];

export const YEAR_2004_URLS: string[] = [
  "https://archive.org/download/2004.06.24/2004.01.01.mp4",
  "https://archive.org/download/2004.06.14/2004.01.05.mp4",
  "https://archive.org/download/2004.06.24/2004.01.08.mp4",
  "https://archive.org/download/2004.06.14/2004.01.12.mp4",
  "https://archive.org/download/2004.06.24/2004.01.15.mp4",
  "https://archive.org/download/2004.06.14/2004.01.19.mp4",
  "https://archive.org/download/2004.06.24/2004.01.22.mp4",
  "https://archive.org/download/2004.06.14/2004.01.26.mp4",
  "https://archive.org/download/2004.06.24/2004.01.29.mp4",
  "https://archive.org/download/2004.06.14/2004.02.02.mp4",
  "https://archive.org/download/2004.06.24/2004.02.05.mp4",
  "https://archive.org/download/2004.06.14/2004.02.09.mp4",
  "https://archive.org/download/2004.06.24/2004.02.12.mp4",
  "https://archive.org/download/2004.06.14/2004.02.16.mp4",
  "https://archive.org/download/2004.06.24/2004.02.19.mp4",
  "https://archive.org/download/2004.06.14/2004.02.23.mp4",
  "https://archive.org/download/2004.06.24/2004.02.26.mp4",
  "https://archive.org/download/2004.06.14/2004.03.01.mp4",
  "https://archive.org/download/2004.06.24/2004.03.04.mp4",
  "https://archive.org/download/2004.06.14/2004.03.08.mp4",
  "https://archive.org/download/2004.06.24/2004.03.11.mp4",
  "https://archive.org/download/2004.06.14/2004.03.15.mp4",
  "https://archive.org/download/2004.06.24/2004.03.18.mp4",
  "https://archive.org/download/2004.06.14/2004.03.22.mp4",
  "https://archive.org/download/2004.06.24/2004.03.25.mp4",
  "https://archive.org/download/2004.06.14/2004.03.29.mp4",
  "https://archive.org/download/2004.06.24/2004.04.01.mp4",
  "https://archive.org/download/2004.06.14/2004.04.05.mp4",
  "https://archive.org/download/2004.06.24/2004.04.08.mp4",
  "https://archive.org/download/2004.06.14/2004.04.12.mp4",
  "https://archive.org/download/2004.06.24/2004.04.15.mp4",
  "https://archive.org/download/2004.06.14/2004.04.19.mp4",
  "https://archive.org/download/2004.06.24/2004.04.22.mp4",
  "https://archive.org/download/2004.06.14/2004.04.26.mp4",
  "https://archive.org/download/2004.06.24/2004.04.29.mp4",
  "https://archive.org/download/2004.06.14/2004.05.03.mp4",
  "https://archive.org/download/2004.06.24/2004.05.06.mp4",
  "https://archive.org/download/2004.06.14/2004.05.10.mp4",
  "https://archive.org/download/2004.06.24/2004.05.13.mp4",
  "https://archive.org/download/2004.06.14/2004.05.17.mp4",
  "https://archive.org/download/2004.06.24/2004.05.20.mp4",
  "https://archive.org/download/2004.06.14/2004.05.24.mp4",
  "https://archive.org/download/2004.06.24/2004.05.27.mp4",
  "https://archive.org/download/2004.06.14/2004.05.31.mp4",
  "https://archive.org/download/2004.06.24/2004.06.03.mp4",
  "https://archive.org/download/2004.06.14/2004.06.07.mp4",
  "https://archive.org/download/2004.06.24/2004.06.10.mp4",
  "https://archive.org/download/2004.06.14/2004.06.14.mp4",
  "https://archive.org/download/2004.06.24/2004.06.17.mp4",
  "https://archive.org/download/2004.06.14/2004.06.21.mp4",
  "https://archive.org/download/2004.06.24/2004.06.24.mp4",
  "https://archive.org/download/2004.06.14/2004.06.28.mp4",
  "https://archive.org/download/2004.06.24/2004.07.01.mp4",
  "https://archive.org/download/2004.06.14/2004.07.05.mp4",
  "https://archive.org/download/2004.06.24/2004.07.08.mp4",
  "https://archive.org/download/2004.06.14/2004.07.12.mp4",
  "https://archive.org/download/2004.06.24/2004.07.15.mp4",
  "https://archive.org/download/2004.06.14/2004.07.19.mp4",
  "https://archive.org/download/2004.06.24/2004.07.22.mp4",
  "https://archive.org/download/2004.06.14/2004.07.26.mp4",
  "https://archive.org/download/2004.06.24/2004.07.29.mp4",
  "https://archive.org/download/2004.06.14/2004.08.02.mp4",
  "https://archive.org/download/2004.06.24/2004.08.05.mp4",
  "https://archive.org/download/2004.06.14/2004.08.09.mp4",
  "https://archive.org/download/2004.06.24/2004.08.12.mp4",
  "https://archive.org/download/2004.06.14/2004.08.16.mp4",
  "https://archive.org/download/2004.06.24/2004.08.19.mp4",
  "https://archive.org/download/2004.06.14/2004.08.23.mp4",
  "https://archive.org/download/2004.06.24/2004.08.26.mp4",
  "https://archive.org/download/2004.06.14/2004.08.30.mp4",
  "https://archive.org/download/2004.06.24/2004.09.02.mp4",
  "https://archive.org/download/2004.06.14/2004.09.06.mp4",
  "https://archive.org/download/2004.06.24/2004.09.09.mp4",
  "https://archive.org/download/2004.06.14/2004.09.13.mp4",
  "https://archive.org/download/2004.06.24/2004.09.16.mp4",
  "https://archive.org/download/2004.06.14/2004.09.20.mp4",
  "https://archive.org/download/2004.06.24/2004.09.23.mp4",
  "https://archive.org/download/2004.06.14/2004.09.27.mp4",
  "https://archive.org/download/2004.06.24/2004.09.30.mp4",
  "https://archive.org/download/2004.06.14/2004.10.04.mp4",
  "https://archive.org/download/2004.06.24/2004.10.07.mp4",
  "https://archive.org/download/2004.06.14/2004.10.11.mp4",
  "https://archive.org/download/2004.06.24/2004.10.14.mp4",
  "https://archive.org/download/2004.06.14/2004.10.18.mp4",
  "https://archive.org/download/2004.06.24/2004.10.21.mp4",
  "https://archive.org/download/2004.06.14/2004.10.25.mp4",
  "https://archive.org/download/2004.06.24/2004.10.28.mp4",
  "https://archive.org/download/2004.06.14/2004.11.01.mp4",
  "https://archive.org/download/2004.06.24/2004.11.04.mp4",
  "https://archive.org/download/2004.06.14/2004.11.08.mp4",
  "https://archive.org/download/2004.06.24/2004.11.11.mp4",
  "https://archive.org/download/2004.06.14/2004.11.15.mp4",
  "https://archive.org/download/2004.06.24/2004.11.18.mp4",
  "https://archive.org/download/2004.06.14/2004.11.22.mp4",
  "https://archive.org/download/2004.06.24/2004.11.25.mp4",
  "https://archive.org/download/2004.06.14/2004.11.29.mp4",
  "https://archive.org/download/2004.06.24/2004.12.02.mp4",
  "https://archive.org/download/2004.06.14/2004.12.06.mp4",
  "https://archive.org/download/2004.06.24/2004.12.09.mp4",
  "https://archive.org/download/2004.06.14/2004.12.13.mp4",
  "https://archive.org/download/2004.06.24/2004.12.16.mp4",
  "https://archive.org/download/2004.06.14/2004.12.20.mp4",
  "https://archive.org/download/2004.06.24/2004.12.23.mp4",
  "https://archive.org/download/2004.06.14/2004.12.27.mp4",
  "https://archive.org/download/2004.06.24/2004.12.30.mp4"
];

export const YEAR_2005_URLS: string[] = [
  "https://archive.org/download/2005.10.03/2005.01.03.mp4",
  "https://archive.org/download/2005.11.18/2005.01.06.mp4",
  "https://archive.org/download/2005.10.03/2005.01.10.mp4",
  "https://archive.org/download/2005.11.18/2005.01.13.mp4",
  "https://archive.org/download/2005.10.03/2005.01.17.mp4",
  "https://archive.org/download/2005.11.18/2005.01.20.mp4",
  "https://archive.org/download/2005.10.03/2005.01.24.mp4",
  "https://archive.org/download/2005.11.18/2005.01.27.mp4",
  "https://archive.org/download/2005.10.03/2005.01.31.mp4",
  "https://archive.org/download/2005.11.18/2005.02.03.mp4",
  "https://archive.org/download/2005.10.03/2005.02.07.mp4",
  "https://archive.org/download/2005.11.18/2005.02.10.mp4",
  "https://archive.org/download/2005.10.03/2005.02.14.mp4",
  "https://archive.org/download/2005.11.18/2005.02.17.mp4",
  "https://archive.org/download/2005.10.03/2005.02.21.mp4",
  "https://archive.org/download/2005.11.18/2005.02.24.mp4",
  "https://archive.org/download/2005.10.03/2005.02.28.mp4",
  "https://archive.org/download/2005.11.18/2005.03.03.mp4",
  "https://archive.org/download/2005.10.03/2005.03.07.mp4",
  "https://archive.org/download/2005.11.18/2005.03.10.mp4",
  "https://archive.org/download/2005.10.03/2005.03.14.mp4",
  "https://archive.org/download/2005.11.18/2005.03.17.mp4",
  "https://archive.org/download/2005.10.03/2005.03.21.mp4",
  "https://archive.org/download/2005.11.18/2005.03.24.mp4",
  "https://archive.org/download/2005.10.03/2005.03.28L.mp4",
  "https://archive.org/download/2005.11.18/2005.03.31.mp4",
  "https://archive.org/download/2005.10.03/2005.04.04.mp4",
  "https://archive.org/download/2005.11.18/2005.04.07.mp4",
  "https://archive.org/download/2005.10.03/2005.04.11.mp4",
  "https://archive.org/download/2005.11.18/2005.04.14.mp4",
  "https://archive.org/download/2005.10.03/2005.04.18.mp4",
  "https://archive.org/download/2005.11.18/2005.04.21.mp4",
  "https://archive.org/download/2005.10.03/2005.04.25..mp4",
  "https://archive.org/download/2005.11.18/2005.04.28.mp4",
  "https://archive.org/download/2005.10.03/2005.05.02.mp4",
  "https://archive.org/download/2005.11.18/2005.05.05.mp4",
  "https://archive.org/download/2005.10.03/2005.05.09.mp4",
  "https://archive.org/download/2005.11.18/2005.05.12.mp4",
  "https://archive.org/download/2005.10.03/2005.05.16.mp4",
  "https://archive.org/download/2005.11.18/2005.05.19.mp4",
  "https://archive.org/download/2005.10.03/2005.05.23.mp4",
  "https://archive.org/download/2005.11.18/2005.05.26.mp4",
  "https://archive.org/download/2005.10.03/2005.05.30.mp4",
  "https://archive.org/download/2005.11.18/2005.06.02.mp4",
  "https://archive.org/download/2005.10.03/2005.06.06.mp4",
  "https://archive.org/download/2005.11.18/2005.06.09.mp4",
  "https://archive.org/download/2005.10.03/2005.06.13.mp4",
  "https://archive.org/download/2005.11.18/2005.06.16.mp4",
  "https://archive.org/download/2005.10.03/2005.06.20.mp4",
  "https://archive.org/download/2005.11.18/2005.06.23.mp4",
  "https://archive.org/download/2005.10.03/2005.06.27.mp4",
  "https://archive.org/download/2005.11.18/2005.06.30.mp4",
  "https://archive.org/download/2005.10.03/2005.07.04.mp4",
  "https://archive.org/download/2005.11.18/2005.07.07.mp4",
  "https://archive.org/download/2005.10.03/2005.07.11.mp4",
  "https://archive.org/download/2005.11.18/2005.07.14.mp4",
  "https://archive.org/download/2005.10.03/2005.07.18.mp4",
  "https://archive.org/download/2005.11.18/2005.07.21.mp4",
  "https://archive.org/download/2005.10.03/2005.07.25.mp4",
  "https://archive.org/download/2005.11.18/2005.07.28.mp4",
  "https://archive.org/download/2005.10.03/2005.08.01.mp4",
  "https://archive.org/download/2005.11.18/2005.08.04.mp4",
  "https://archive.org/download/2005.10.03/2005.08.08.mp4",
  "https://archive.org/download/2005.11.18/2005.08.11.mp4",
  "https://archive.org/download/2005.10.03/2005.08.15.mp4",
  "https://archive.org/download/2005.11.18/2005.08.18.mp4",
  "https://archive.org/download/2005.10.03/2005.08.22.mp4",
  "https://archive.org/download/2005.11.18/2005.08.25.mp4",
  "https://archive.org/download/2005.10.03/2005.08.29.mp4",
  "https://archive.org/download/2005.11.18/2005.09.01.mp4",
  "https://archive.org/download/2005.10.03/2005.09.05.mp4",
  "https://archive.org/download/2005.11.18/2005.09.09.mp4",
  "https://archive.org/download/2005.10.03/2005.09.12.mp4",
  "https://archive.org/download/2005.11.18/2005.09.16.mp4",
  "https://archive.org/download/2005.10.03/2005.09.19.mp4",
  "https://archive.org/download/2005.11.18/2005.09.23.mp4",
  "https://archive.org/download/2005.10.03/2005.09.26.mp4",
  "https://archive.org/download/2005.11.18/2005.09.30.mp4",
  "https://archive.org/download/2005.10.03/2005.10.03.mp4",
  "https://archive.org/download/2005.11.18/2005.10.07.mp4",
  "https://archive.org/download/2005.10.03/2005.10.10.mp4",
  "https://archive.org/download/2005.11.18/2005.10.14.mp4",
  "https://archive.org/download/2005.10.03/2005.10.17.mp4",
  "https://archive.org/download/2005.11.18/2005.10.21.mp4",
  "https://archive.org/download/2005.10.03/2005.10.24.mp4",
  "https://archive.org/download/2005.11.18/2005.10.28.mp4",
  "https://archive.org/download/2005.10.03/2005.10.31.mp4",
  "https://archive.org/download/2005.11.18/2005.11.04.mp4",
  "https://archive.org/download/2005.10.03/2005.11.07.mp4",
  "https://archive.org/download/2005.11.18/2005.11.11.mp4",
  "https://archive.org/download/2005.10.03/2005.11.14.mp4",
  "https://archive.org/download/2005.11.18/2005.11.18.mp4",
  "https://archive.org/download/2005.10.03/2005.11.21.mp4",
  "https://archive.org/download/2005.11.18/2005.11.25.mp4",
  "https://archive.org/download/2005.10.03/2005.11.28.mp4",
  "https://archive.org/download/2005.11.18/2005.11.29.mp4",
  "https://archive.org/download/2005.11.18/2005.12.02.mp4",
  "https://archive.org/download/2005.10.03/2005.12.05.mp4",
  "https://archive.org/download/2005.11.18/2005.12.09.mp4",
  "https://archive.org/download/2005.10.03/2005.12.12.mp4",
  "https://archive.org/download/2005.11.18/2005.12.16.mp4",
  "https://archive.org/download/2005.10.03/2005.12.19.mp4",
  "https://archive.org/download/2005.11.18/2005.12.23.mp4",
  "https://archive.org/download/2005.10.03/2005.12.26.mp4",
  "https://archive.org/download/2005.11.18/2005.12.30.mp4"
];

const SPANISH_MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export function parseEventFromUrl(url: string): WWEEvent {
  // Extract file name
  const parts = url.split('/');
  const fileName = parts[parts.length - 1]; // "2001-01-01.mp4" or "2001.01.04.mp4"
  const dateSegment = fileName.replace('.mp4', ''); // "2001-01-01" or "2001.01.04"
  const dateStr = dateSegment.replace(/\./g, '-'); // "2001-01-01" or "2001-01-04"
  
  const cleanDateStr = dateStr.match(/^\d{4}-\d{2}-\d{2}/)?.[0] || dateStr;
  const [yearStr, monthStr, dayStr] = cleanDateStr.split('-');
  const year = parseInt(yearStr, 10);
  const monthNum = parseInt(monthStr, 10);
  const dayNum = parseInt(dayStr, 10);
  
  const monthName = SPANISH_MONTHS[monthNum - 1] || "Enero";
  
  // Determine if RAW or SmackDown
  let show: 'RAW' | 'SmackDown' = 'RAW';
  if (url.includes('2001.03.15') || url.includes('2002.02.07') || url.includes('2003.05.22') || url.includes('2004.06.24') || url.includes('2005.11.18')) {
    show = 'SmackDown';
  } else if (url.includes('WAR-2001') || url.includes('2002.01.28') || url.includes('2003.12.29') || url.includes('2004.06.14') || url.includes('2005.10.03')) {
    show = 'RAW';
  } else {
    // Fallback based on day of week
    const dateObj = new Date(cleanDateStr + 'T12:00:00');
    const dayOfWeek = dateObj.getDay(); // 1 = Mon, 4 = Thu
    if (dayOfWeek === 4) {
      show = 'SmackDown';
    } else {
      show = 'RAW';
    }
  }

  const showLabel = show === 'RAW' ? 'RAW' : 'SmackDown';
  const formattedDay = dayNum.toString();
  let title = `${showLabel} - ${formattedDay} de ${monthName}, ${year}`;
  
  // Custom official posters requested by user
  let thumbnail = "";
  if (year === 2002) {
    thumbnail = show === 'RAW' 
      ? "https://media.themoviedb.org/t/p/w130_and_h195_face/4yqu0RrLUA63h7biYmlnDGElWak.jpg"
      : "https://media.themoviedb.org/t/p/w130_and_h195_face/magLujH3BIhZqlLbRCXEOqLwOTg.jpg";
  } else if (year === 2003) {
    thumbnail = show === 'RAW' 
      ? "https://media.themoviedb.org/t/p/w130_and_h195_face/uAkpgNEm4lve8M8uxtq14DiYgKa.jpg"
      : "https://media.themoviedb.org/t/p/w130_and_h195_face/a95NYvLCiIfg9KT5uD5KOlRmomq.jpg";
  } else if (year === 2004) {
    thumbnail = show === 'RAW' 
      ? "https://media.themoviedb.org/t/p/w130_and_h195_face/9C7crJAU5Dq1wGx1Ihf89emho9J.jpg"
      : "https://media.themoviedb.org/t/p/w130_and_h195_face/vHAR4sewpDmrsK2PpNwsVVWyCqr.jpg";
  } else if (year === 2005) {
    thumbnail = show === 'RAW' 
      ? "https://media.themoviedb.org/t/p/w130_and_h195_face/hg8oWjvCFSzF1pgoUlyRVf7KVqL.jpg"
      : "https://media.themoviedb.org/t/p/w130_and_h195_face/fpLNMIsdUSE1wXn7DS3QrhLdgxK.jpg";
  } else {
    thumbnail = show === 'RAW' 
      ? "https://media.themoviedb.org/t/p/w130_and_h195_face/hWyxKRbOMzp1ng6QDzfJmoMeapT.jpg"
      : "https://media.themoviedb.org/t/p/w130_and_h195_face/2oj1HQg3CJrbORwX8Kj50jSvI6F.jpg";
  }

  // Dynamic high resolutions landscapes as backgrounds
  let background = show === 'RAW'
    ? "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop"
    : "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop";

  let seasonNum = show === 'RAW' ? 9 : 3;
  if (year === 2002) seasonNum = show === 'RAW' ? 10 : 4;
  else if (year === 2003) seasonNum = show === 'RAW' ? 11 : 5;
  else if (year === 2004) seasonNum = show === 'RAW' ? 12 : 6;
  else if (year === 2005) seasonNum = show === 'RAW' ? 13 : 7;
  const seasonStr = `Temporada ${seasonNum}`;

  const episodeStr = `Episodio del ${formattedDay} de ${monthName}`;
  let description = `Transmisión original de WWE ${showLabel} transmitido el ${formattedDay} de ${monthName} de ${year}. Revive toda la acción auténtica en el ring, las batallas legendarias y las superestrellas icónicas de la era dorada del deporte de entretenimiento.`;

  // Apply TMDB SmackDown Season 3 / Season 4 and RAW Season 9 overrides
  if (show === 'SmackDown') {
    if (year === 2001) {
      const override = SMACKDOWN_2001_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        background = override.background;
        thumbnail = override.thumbnail;
      }
    } else if (year === 2002) {
      const override = SMACKDOWN_2002_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        background = override.background;
        thumbnail = override.thumbnail;
      }
    } else if (year === 2003) {
      const override = SMACKDOWN_2003_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        background = override.background;
        thumbnail = override.thumbnail;
      }
    } else if (year === 2004) {
      const override = SMACKDOWN_2004_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        background = override.background;
        thumbnail = "https://media.themoviedb.org/t/p/w130_and_h195_face/vHAR4sewpDmrsK2PpNwsVVWyCqr.jpg";
      }
    } else if (year === 2005) {
      const override = SMACKDOWN_2005_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        background = override.background;
        thumbnail = "https://media.themoviedb.org/t/p/w130_and_h195_face/fpLNMIsdUSE1wXn7DS3QrhLdgxK.jpg";
      }
    }
  } else if (show === 'RAW') {
    if (year === 2001) {
      const override = RAW_2001_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        if (override.background) background = override.background;
        if (override.thumbnail) thumbnail = override.thumbnail;
      }
    } else if (year === 2002) {
      const override = RAW_2002_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        if (override.background) background = override.background;
        if (override.thumbnail) thumbnail = override.thumbnail;
      }
    } else if (year === 2003) {
      const override = RAW_2003_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        if (override.background) background = override.background;
        if (override.thumbnail) thumbnail = override.thumbnail;
      }
    } else if (year === 2004) {
      const override = RAW_2004_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        if (override.background) background = override.background;
        thumbnail = "https://media.themoviedb.org/t/p/w130_and_h195_face/9C7crJAU5Dq1wGx1Ihf89emho9J.jpg";
      }
    } else if (year === 2005) {
      const override = RAW_2005_OVERRIDES[cleanDateStr];
      if (override) {
        title = override.title;
        description = override.description;
        if (override.background) background = override.background;
        thumbnail = "https://media.themoviedb.org/t/p/w130_and_h195_face/hg8oWjvCFSzF1pgoUlyRVf7KVqL.jpg";
      }
    }
  }

  return {
    id: `wwe-${show.toLowerCase()}-${cleanDateStr}`,
    title,
    show,
    date: cleanDateStr,
    month: monthName,
    year,
    season: seasonStr,
    episode: episodeStr,
    duration: "1h 35m",
    thumbnail,
    background,
    video_url: url,
    description,
    watched: false
  };
}

const rawEventsList = [
  ...STATIC_WWE_EVENTS,
  ...RAW_ARCHIVE_URLS.map(parseEventFromUrl),
  ...YEAR_2003_URLS.map(parseEventFromUrl),
  ...YEAR_2004_URLS.map(parseEventFromUrl),
  ...YEAR_2005_URLS.map(parseEventFromUrl)
];

// Deduplicate and merge events by a normalized ID
const uniqueEventsMap = new Map<string, WWEEvent>();

for (const event of rawEventsList) {
  let normalizedId = event.id;
  if (normalizedId.startsWith("wwe-sd-")) {
    normalizedId = normalizedId.replace("wwe-sd-", "wwe-smackdown-");
  }

  if (uniqueEventsMap.has(normalizedId)) {
    const existing = uniqueEventsMap.get(normalizedId)!;
    const merged = { ...existing };
    if (event.video_url && event.video_url.includes("archive.org")) {
      merged.video_url = event.video_url;
    }
    merged.id = normalizedId;
    uniqueEventsMap.set(normalizedId, merged);
  } else {
    uniqueEventsMap.set(normalizedId, { ...event, id: normalizedId });
  }
}

export const INITIAL_WWE_EVENTS: WWEEvent[] = Array.from(uniqueEventsMap.values()).map(event => {
  if (event.show === 'SmackDown') {
    return {
      ...event,
      background: "https://www.postwrestling.com/wp-content/uploads/2024/09/smackdownlogo-e1726272661738-678x381.jpg"
    };
  }
  if (event.show === 'RAW') {
    return {
      ...event,
      background: "https://www.wrestleview.com/wp-content/uploads/2025/11/Raw-800x450.jpg"
    };
  }
  return event;
}).sort((a, b) => a.date.localeCompare(b.date));
