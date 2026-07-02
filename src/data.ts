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
  },
  {
    id: "wwe-ppv-king-of-the-ring-2002",
    title: "King of the Ring 2002",
    show: "PPV",
    date: "2002-06-23",
    month: "Junio",
    year: 2002,
    season: "PPV Especial",
    episode: "King of the Ring",
    duration: "2h 55m",
    thumbnail: "https://media.themoviedb.org/t/p/w220_and_h330_face/17get0BiuzGr2Dy0118syzHFhVm.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/king-of-the-ring-2002-hd/King_of_the_Ring_2002_HD.mp4",
    description: "WWE King of the Ring 2002 es un show histórico coronado por un joven y destructivo Brock Lesnar, quien derrota a Rob Van Dam en la final del torneo para coronarse Rey del Ring y ganar un boleto directo a SummerSlam. En el combate estelar, The Undertaker retiene el Campeonato Indiscutido de la WWE ante Triple H tras un polémico final. Además, Kurt Angle se lleva una espectacular victoria técnica sobre Hulk Hogan tras hacerlo rendir con el Ankle Lock, y Jamie Noble se adjudica el Campeonato de Peso Crucero superando a Hurricane.",
    watched: false
  },
  {
    id: "wwe-ppv-vengeance-2002",
    title: "Vengeance (2002)",
    show: "PPV",
    date: "2002-07-21",
    month: "Julio",
    year: 2002,
    season: "PPV Especial",
    episode: "Vengeance",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/lFcRnFXRho0zkr9lENw6wyNaOk0.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/vengeance-2002-hd/Vengeance_2002_HD.mp4",
    description: "WWE Vengeance 2002 es catalogado como uno de los mejores eventos de la historia gracias al espectacular combate estelar en triple amenaza donde The Rock derrota a Kurt Angle y a The Undertaker para consagrarse como el Campeón Indiscutido de la WWE en una acción frenética sin cesar. Además, Rob Van Dam unifica el Campeonato Intercontinental y el Campeonato Europeo derrotando a Jeff Hardy en una espectacular e intensa lucha de escaleras, y Shawn Michaels regresa para reunirse con Triple H en la refundación teórica de D-Generation X.",
    watched: false
  },
  {
    id: "wwe-ppv-summerslam-2002",
    title: "SummerSlam 2002",
    show: "PPV",
    date: "2002-08-25",
    month: "Agosto",
    year: 2002,
    season: "PPV Especial",
    episode: "SummerSlam",
    duration: "2h 58m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/pDI4Cd6BMYhfAQsAvvEWBqVrT7g.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/wwe-summer-slam-2002-hd/WWE_SummerSlam_2002_HD.mp4",
    description: "WWE SummerSlam 2002 es recordado eternamente como uno de los eventos de pague-por-ver más legendarios de todos los tiempos. En el combate estelar, un implacable y dominante Brock Lesnar destrona magistralmente a The Rock para convertirse en el Campeón Mundial indiscutido más joven de la historia de la WWE. En un encuentro ultraemotivo no sancionado de regreso tras cuatro años fuera, Shawn Michaels supera a Triple H en una asombrosa y brutal lucha callejera sin cuartel. Además, Edge supera a Eddie Guerrero, y Rey Mysterio deslumbra en su fantástico debut frente a Kurt Angle.",
    watched: false
  },
  {
    id: "wwe-ppv-unforgiven-2002",
    title: "Unforgiven 2002",
    show: "PPV",
    date: "2002-09-22",
    month: "Septiembre",
    year: 2002,
    season: "PPV Especial",
    episode: "Unforgiven",
    duration: "2h 40m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/dvrxamDXcTZFYDBlKckaYtuTJwU.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-57741721_456240354",
    description: "WWE Unforgiven 2002 presenta un dramático choque estelar donde el Campeón de la WWE, Brock Lesnar, defiende su título ante The Undertaker en una batalla sumamente destructiva que termina en doble descalificación. Además, Triple H retiene el recién creado Campeonato Mundial de Peso Completo ante Rob Van Dam con la polémica ayuda de Ric Flair. En otros grandes combates, Chris Jericho retiene el Campeonato Intercontinental derrotando al legendario Ric Flair, y Booker T, Goldust, Kane y Bubba Ray Dudley superan a The Un-Americans.",
    watched: false
  },
  {
    id: "wwe-ppv-no-mercy-2002",
    title: "No Mercy 2002",
    show: "PPV",
    date: "2002-10-20",
    month: "Octubre",
    year: 2002,
    season: "PPV Especial",
    episode: "No Mercy",
    duration: "2h 55m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/iBmujUWy4IT9JbA6pgVhj8Ywg30.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/no-mercy-2002-hd/No_Mercy_2002_HD.mp4",
    description: "WWE No Mercy 2002 es aclamado universalmente por albergar uno de los combates Hell in a Cell más brutales y sangrientos de la historia, donde Brock Lesnar retiene el Campeonato de la WWE ante un aguerrido The Undertaker. Además, se coronan los primeros Campeones en Parejas de la WWE de la marca SmackDown en una asombrosa obra de arte técnica donde Kurt Angle y Chris Benoit derrotan a Edge y Rey Mysterio. En la lucha de unificación, Triple H vence a Kane, sumando el Campeonato Intercontinental al Campeonato Mundial de Peso Completo.",
    watched: false
  },
  {
    id: "wwe-ppv-survivor-series-2002",
    title: "Survivor Series 2002",
    show: "PPV",
    date: "2002-11-17",
    month: "Noviembre",
    year: 2002,
    season: "PPV Especial",
    episode: "Survivor Series",
    duration: "2h 50m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/kQR06DgThC6CpzahL9uPPFdWLDz.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ok.ru/video/3494160697954",
    description: "WWE Survivor Series 2002 pasa a la historia como el escenario donde debuta la primera Cámara de la Eliminación (Elimination Chamber) por el Campeonato Mundial de Peso Completo, donde Shawn Michaels consuma un emotivo e impecable triunfo sobre Triple H, Booker T, Rob Van Dam, Kane y Chris Jericho para coronarse nuevo campeón. En el evento co-estelar, Big Show aprovecha la traición de Paul Heyman hacia Brock Lesnar para arrebatarle el Campeonato de la WWE en una impactante contienda. Asimismo, las leyendas por parejas chocan en una brutal triple amenaza de eliminación donde Los Guerreros conquistan el Campeonato en Parejas de la WWE de la marca SmackDown.",
    watched: false
  },
  {
    id: "wwe-ppv-armageddon-2002",
    title: "Armageddon 2002",
    show: "PPV",
    date: "2002-12-15",
    month: "Diciembre",
    year: 2002,
    season: "PPV Especial",
    episode: "Armageddon",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/4UaOflnDSr1U6n2ZQoCHYAwp1SU.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ia800108.us.archive.org/19/items/armageddon-2002/Armageddon%20%282002%29.mp4",
    description: "WWE Armageddon 2002 culmina el espectacular año con un brutal combate de 'Tres Niveles de Infierno' (Three Stages of Hell) donde Triple H derrota a Shawn Michaels para recuperar el Campeonato Mundial de Peso Completo. Además, Kurt Angle supera a Big Show con la ayuda sorpresa de Brock Lesnar para coronarse nuevo Campeón de la WWE. Booker T y Goldust conquistan finalmente los Campeonatos Mundiales en Parejas en una emocionante lucha fatal de cuatro esquinas, y Edge supera a A-Train en un choque lleno de acción.",
    watched: false
  },
  {
    id: "wwe-ppv-royal-rumble-2003",
    title: "Royal Rumble 2003",
    show: "PPV",
    date: "2003-01-19",
    month: "Enero",
    year: 2003,
    season: "PPV Especial",
    episode: "Royal Rumble",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/ioPPkXEufAUwNx9JFDyCXehQMER.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "",
    description: "WWE Royal Rumble 2003 da inicio a la ruta hacia WrestleMania XIX con un histórico Brock Lesnar que ingresa con el número 29 para ganar la Batalla Real de 30 hombres tras eliminar finalmente a Undertaker. En uno de los mejores combates de la historia por el Campeonato de la WWE, Kurt Angle retiene su corona ante un brillante Chris Benoit en una obra de arte cinematográfica y física sobre el ring. Por su parte, Triple H defiende con uñas y dientes el Campeonato Mundial de Peso Completo ante un destructivo Scott Steiner mediante una polémica descalificación.",
    watched: false
  },
  {
    id: "wwe-ppv-no-way-out-2003",
    title: "No Way Out 2003",
    show: "PPV",
    date: "2003-02-23",
    month: "Febrero",
    year: 2003,
    season: "PPV Especial",
    episode: "No Way Out",
    duration: "2h 40m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/qGX8vvfdXPeblbpKCBHR5MfYUZV.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/no-way-out-2003/No%20Way%20Out%20%282003%29.mp4",
    description: "WWE No Way Out 2003 presenta un choque estelar sumamente personal donde The Rock regresa para enfrentar nuevamente a la leyenda viviente Stone Cold Steve Austin en un dramático duelo. En un espectacular choque por el Campeonato Mundial de Peso Completo, Triple H defiende su corona ante Scott Steiner con la intervención ruda de Evolution. Asimismo, en un estelar de ensueño de SmackDown, Brock Lesnar y Chris Benoit unen fuerzas para encarar al temible Team Kurt Angle (Kurt Angle, Charlie Haas y Shelton Benjamin) en un choque de desventaja.",
    watched: false
  },
  {
    id: "wwe-ppv-wrestlemania-xix",
    title: "WrestleMania XIX",
    show: "PPV",
    date: "2003-03-30",
    month: "Marzo",
    year: 2003,
    season: "PPV Especial",
    episode: "WrestleMania",
    duration: "4h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/SWgrrg0uqxND5G3fobDurvNkv0.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "",
    description: "WWE WrestleMania XIX es considerado uno de los mejores eventos de la historia. Presenta la culminación de la legendaria trilogía entre Stone Cold Steve Austin y The Rock en lo que resultó ser la última lucha oficial de Austin en 19 años. Además, Kurt Angle defiende el Campeonato de la WWE ante Brock Lesnar en un enfrentamiento físico asombroso que culmina con una victoria épica de Lesnar. En otros eventos estelares, Shawn Michaels tiene un clásico absoluto contra Chris Jericho, y Triple H retiene el Campeonato Mundial de Peso Completo ante Booker T.",
    watched: false
  },
  {
    id: "wwe-ppv-backlash-2003",
    title: "Backlash 2003",
    show: "PPV",
    date: "2003-04-27",
    month: "Abril",
    year: 2003,
    season: "PPV Especial",
    episode: "Backlash",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/mbNmD1RC9ebxzgzKU44FX23NO7v.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ia600608.us.archive.org/21/items/backlash-2003-hd/Backlash_2003_HD.mp4",
    description: "WWE Backlash 2003 marca el sensacional debut oficial en el cuadrilátero de una de las mayores superestrellas y atracciones de la historia de la lucha libre: GOLDBERG, quien se ve las caras en un explosivo combate estelar y destructivo mano a mano contra 'The Rock' Dwayne Johnson. Además, Triple H se asocia con Ric Flair y Chris Jericho para batallar contra Shawn Michaels, Booker T y un renacido Kevin Nash en un electrizante duelo por equipos de seis hombres, y el destructivo Brock Lesnar defiende su Campeonato de la WWE ante un temible e imponente John Cena.",
    watched: false
  },
  {
    id: "wwe-ppv-judgment-day-2003",
    title: "Judgment Day 2003",
    show: "PPV",
    date: "2003-05-18",
    month: "Mayo",
    year: 2003,
    season: "PPV Especial",
    episode: "Judgment Day",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/beee6Dz660tHPoLwBk0h6Pr0pDf.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ia601305.us.archive.org/14/items/judgment-day-2003-hd/Judgment_Day_2003_HD.mp4",
    description: "WWE Judgment Day 2003 presenta un devastador combate de camillas donde el indestructible Brock Lesnar defiende el Campeonato de la WWE ante el coloso Big Show. Mientras tanto, en la marca RAW, Kevin Nash desafía a Triple H por el Campeonato Mundial de Peso Completo en una contienda sumamente física que culmina en descalificación. Además, se reactiva el legendario Campeonato Intercontinental en una emocionante batalla real histórica de la que Christian resulta triunfador, y el asombroso enfrentamiento en parejas de escaleras donde Eddie Guerrero y Tajiri conquistan el oro ante Team Angle.",
    watched: false
  },
  {
    id: "wwe-ppv-bad-blood-2003",
    title: "Bad Blood 2003",
    show: "PPV",
    date: "2003-06-15",
    month: "Junio",
    year: 2003,
    season: "PPV Especial",
    episode: "Bad Blood",
    duration: "2h 50m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/fZumE3oAhssLjPdIlfwM6jH0cjm.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://m.ok.ru/video/9185095584455",
    description: "WWE Bad Blood 2003 es un evento exclusivo de la marca RAW que presenta como evento estelar un brutal combate de Hell in a Cell donde Triple H defiende el Campeonato Mundial de Peso Completo ante su examigo Kevin Nash, con el legendario Mick Foley como árbitro especial invitado. Además, el imponente Goldberg se enfrenta en una guerra personal y física ante un astuto Chris Jericho, y el carismático Rob Van Dam une fuerzas con Kane para batallar contra la temible facción francesa La Résistance por los Campeonatos Mundiales en Parejas.",
    watched: false
  },
  {
    id: "wwe-ppv-vengeance-2003",
    title: "Vengeance 2003",
    show: "PPV",
    date: "2003-07-27",
    month: "Julio",
    year: 2003,
    season: "PPV Especial",
    episode: "Vengeance",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/afXB74hg3uaDrXW8W2qIDKZ1YJR.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-233385590_456239383",
    description: "WWE Vengeance 2003 es un evento histórico exclusivo de la marca SmackDown que presenta un espectacular combate estelar en triple amenaza por el Campeonato de la WWE donde Kurt Angle, Brock Lesnar y Big Show se enfrentan en un choque colosal. Además, el legendario Campeonato de los Estados Unidos se reactiva formalmente en una fantástica final de torneo de ensueño entre Eddie Guerrero y Chris Benoit, y John Cena batalla apasionadamente contra Undertaker en una contienda altamente física.",
    watched: false
  },
  {
    id: "wwe-ppv-summerslam-2003",
    title: "SummerSlam 2003",
    show: "PPV",
    date: "2003-08-24",
    month: "Agosto",
    year: 2003,
    season: "PPV Especial",
    episode: "SummerSlam",
    duration: "3h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/xsWIBKNFe35rmr1OV18yupESgEK.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "",
    description: "WWE SummerSlam 2003 presenta la temible segunda Elimination Chamber de la historia por el Campeonato Mundial de Peso Completo, donde Triple H defiende su corona contra Goldberg, Shawn Michaels, Kevin Nash, Chris Jericho y Randy Orton. Asimismo, en una revancha espectacular de WrestleMania XIX por el Campeonato de la WWE, Kurt Angle choca contra Brock Lesnar en un feroz duelo técnico sobre la lona, y el enigmático Undertaker se enfrenta a A-Train.",
    watched: false
  },
  {
    id: "wwe-ppv-unforgiven-2003",
    title: "Unforgiven 2003",
    show: "PPV",
    date: "2003-09-21",
    month: "Septiembre",
    year: 2003,
    season: "PPV Especial",
    episode: "Unforgiven",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/rZXbC2Qtq9ZNYAunwEsKskffhpV.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ok.ru/video/3496928348770",
    description: "WWE Unforgiven 2003 es un dramático evento exclusivo de la marca RAW donde el legendario Goldberg pone en juego su carrera al desafiar a Triple H por el Campeonato Mundial de Peso Completo en un enfrentamiento de poder a poder. Además, Shane McMahon choca salvajemente contra el monstruoso Kane en una inolvidable y peligrosa lucha de Último Hombre de Pie, y Randy Orton busca consolidarse enfrentando al ícono Shawn Michaels en una intensa contienda intergeneracional.",
    watched: false
  },
  {
    id: "wwe-ppv-no-mercy-2003",
    title: "No Mercy 2003",
    show: "PPV",
    date: "2003-10-19",
    month: "Octubre",
    year: 2003,
    season: "PPV Especial",
    episode: "No Mercy",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/k7ZwvfQp60ihmTJj5xV2uv68U17.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ok.ru/video/2953471068783",
    description: "WWE No Mercy 2003 es un prestigioso evento exclusivo de la marca SmackDown que presenta un brutal combate de Biker Chain por el Campeonato de la WWE donde el imponente Brock Lesnar choca contra un legendario Undertaker en el evento estelar. Además, el carismático Eddie Guerrero defiende con gran astucia su Campeonato de los Estados Unidos ante el peligroso Big Show, y Vince McMahon y su hija Stephanie McMahon se enfrentan en un polémico combate del tipo 'I Quit' donde solo uno saldrá victorioso.",
    watched: false
  },
  {
    id: "wwe-ppv-survivor-series-2003",
    title: "Survivor Series 2003",
    show: "PPV",
    date: "2003-11-16",
    month: "Noviembre",
    year: 2003,
    season: "PPV Especial",
    episode: "Survivor Series",
    duration: "3h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/8w4E92N9P8lJGhkxRlu2kJvz3bl.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/survivor-series-2003/Survivor%20Series%20%282003%29.mp4",
    description: "WWE Survivor Series 2003 presenta la clásica acción dramática de eliminación por equipos, destacando el combate clásico de Survivor Series entre el Team Bischoff y el Team Austin, donde la carrera de Stone Cold Steve Austin se encuentra en juego. Además, Goldberg defiende el Campeonato Mundial de Peso Completo frente a Triple H, y Undertaker choca contra Vince McMahon en una brutal lucha de Entierro Vivo (Buried Alive).",
    watched: false
  },
  {
    id: "wwe-ppv-armageddon-2003",
    title: "Armageddon 2003",
    show: "PPV",
    date: "2003-12-14",
    month: "Diciembre",
    year: 2003,
    season: "PPV Especial",
    episode: "Armageddon",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/5d7Pa5NImE1EUOmeeLcRR0O2dZm.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ia600703.us.archive.org/19/items/armageddon-2003/Armageddon%20%282003%29.mp4",
    description: "WWE Armageddon 2003 es un evento exclusivo de la marca RAW que pasa a la historia por el absoluto dominio del grupo Evolution. Triple H recupera el Campeonato Mundial de Peso Completo en una dura triple amenaza ante Goldberg y Kane; Randy Orton derrota a Rob Van Dam por el Campeonato Intercontinental con Mick Foley como árbitro, y la dupla de Batista y Ric Flair conquistan los Campeonatos Mundiales en Parejas.",
    watched: false
  },
  {
    id: "wwe-ppv-royal-rumble-2004",
    title: "Royal Rumble 2004",
    show: "PPV",
    date: "2004-01-25",
    month: "Enero",
    year: 2004,
    season: "PPV Especial",
    episode: "Royal Rumble",
    duration: "3h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/bvdDgsujyNEApNWQ9bwfxQUJzIU.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ia801600.us.archive.org/19/items/royal-rumble-2004-hd/Royal_Rumble_2004_HD.mp4",
    description: "WWE Royal Rumble 2004 presenta la legendaria batalla real de 30 hombres con implicaciones directas hacia WrestleMania XX, donde un competidor hace historia al entrar con el número 1 y resistir hasta el final. Además, Triple H y Shawn Michaels se enfrentan en un brutal y emotivo Last Man Standing Match por el Campeonato Mundial de Peso Completo, mientras que Brock Lesnar defiende el Campeonato de la WWE ante Hardcore Holly.",
    watched: false
  },
  {
    id: "wwe-ppv-no-way-out-2004",
    title: "No Way Out 2004",
    show: "PPV",
    date: "2004-02-15",
    month: "Febrero",
    year: 2004,
    season: "PPV Especial",
    episode: "No Way Out",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/bY52N0hiw7luomyyQzKdrY9lC1z.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "",
    description: "WWE No Way Out 2004 es un evento histórico exclusivo de la marca SmackDown donde el carismático y querido Eddie Guerrero desafía al imponente Brock Lesnar por el Campeonato de la WWE en un emotivo y legendario combate estelar. Además, Kurt Angle se enfrenta a Big Show y John Cena en una dramática triple amenaza para determinar al retador número uno al campeonato en WrestleMania XX.",
    watched: false
  },
  {
    id: "wwe-ppv-wrestlemania-xx",
    title: "WrestleMania XX",
    show: "PPV",
    date: "2004-03-14",
    month: "Marzo",
    year: 2004,
    season: "PPV Especial",
    episode: "WrestleMania",
    duration: "4h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/sOL5c0tagWsmgEyvYnvxiTnWb97.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "",
    description: "WWE WrestleMania XX es la histórica vigésima edición de la vitrina de los inmortales celebrada en el legendario Madison Square Garden, bajo el lema 'Donde todo comienza de nuevo'. Destaca el regreso de Undertaker como 'The Deadman' para enfrentar a Kane, y un extraordinario combate estelar por el Campeonato Mundial de Peso Completo en una triple amenaza de gran intensidad técnica.",
    watched: false
  },
  {
    id: "wwe-ppv-backlash-2004",
    title: "Backlash 2004",
    show: "PPV",
    date: "2004-04-18",
    month: "Abril",
    year: 2004,
    season: "PPV Especial",
    episode: "Backlash",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/dDTXCTISyef4Eq3PjGbEBYRcgB1.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ia601009.us.archive.org/30/items/wwe-backlash-2004-hd/WWE_Backlash_2004_HD.mp4",
    description: "WWE Backlash 2004 es un vibrante evento exclusivo de la marca RAW que presenta la dramática revancha en triple amenaza por el Campeonato Mundial de Peso Completo. Además, Randy Orton defiende el Campeonato Intercontinental en un sangriento, brutal e inolvidable Combate Súper Libre (No Holds Barred Match) contra la leyenda Cactus Jack.",
    watched: false
  },
  {
    id: "wwe-ppv-judgment-day-2004",
    title: "Judgment Day 2004",
    show: "PPV",
    date: "2004-05-16",
    month: "Mayo",
    year: 2004,
    season: "PPV Especial",
    episode: "Judgment Day",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/iWwMvzyUvAQHriKKgQsrXKQ5FQ3.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-23721454_166915772",
    description: "WWE Judgment Day 2004 es un brutal evento exclusivo de la marca SmackDown donde el carismático Campeón de la WWE Eddie Guerrero defiende su título ante el temible y despiadado John Bradshaw Layfield (JBL) en un sangriento e inolvidable combate estelar de gran dramatismo y controversia. Además, el legendario Undertaker se enfrenta a Booker T en un duelo de poder sobre la lona.",
    watched: false
  },
  {
    id: "wwe-ppv-bad-blood-2004",
    title: "Bad Blood 2004",
    show: "PPV",
    date: "2004-06-13",
    month: "Junio",
    year: 2004,
    season: "PPV Especial",
    episode: "Bad Blood",
    duration: "3h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/tTN1ok9clbIwKaO4xWxhakiLdFE.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-36672771_162371339",
    description: "WWE Bad Blood 2004 es un dramático evento exclusivo de la marca RAW que destaca por el sangriento, brutal e histórico Hell in a Cell Match de más de 47 minutos entre Triple H y Shawn Michaels para poner fin a su amarga rivalidad. Además, la fiera de la evolución Randy Orton defiende el Campeonato Intercontinental ante un aguerrido Edge, y Chris Benoit expone el Campeonato Mundial de Peso Completo ante el temible Kane.",
    watched: false
  },
  {
    id: "wwe-ppv-the-great-american-bash-2004",
    title: "The Great American Bash 2004",
    show: "PPV",
    date: "2004-07-11",
    month: "Julio",
    year: 2004,
    season: "PPV Especial",
    episode: "The Great American Bash",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/5ipnqK9eiMSCY9Aqkk1IRAlwIt6.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://archive.org/download/great-american-bash-2004/Great%20American%20Bash%20%282004%29.mp4",
    description: "WWE The Great American Bash 2004 es un notable evento exclusivo de la marca SmackDown que tiene lugar en Norfolk, Virginia. Cuenta con un impactante Live Concrete Crypt Match en el evento estelar donde Undertaker se mide ante los Dudley Boyz. Además, John Bradshaw Layfield defiende o disputa el Campeonato de la WWE frente al legendario Eddie Guerrero en un implacable Texas Bullrope Match, y John Cena defiende el título de los Estados Unidos en una emocionante batalla de cuatro esquinas.",
    watched: false
  },
  {
    id: "wwe-ppv-summerslam-2004",
    title: "SummerSlam 2004",
    show: "PPV",
    date: "2004-08-15",
    month: "Agosto",
    year: 2004,
    season: "PPV Especial",
    episode: "SummerSlam",
    duration: "3h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/pHxVoDAaEnS9u2oTYJnQcNaNXkv.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-192312565_456239073",
    description: "WWE SummerSlam 2004 es un espectacular e histórico evento donde Randy Orton hace historia al derrotar a Chris Benoit por el Campeonato Mundial de Peso Completo, convirtiéndose en el campeón mundial más joven en la historia de la WWE. Además, John Bradshaw Layfield (JBL) defiende el Campeonato de la WWE ante un amenazante Undertaker, y Kurt Angle se enfrenta a Eddie Guerrero en una esperada e intensa revancha técnica.",
    watched: false
  },
  {
    id: "wwe-ppv-unforgiven-2004",
    title: "Unforgiven 2004",
    show: "PPV",
    date: "2004-09-12",
    month: "Septiembre",
    year: 2004,
    season: "PPV Especial",
    episode: "Unforgiven",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/4e7oMiwiiGuM9RNIKncUKw3CnHY.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ia802802.us.archive.org/12/items/unforgiven-2004/Unforgiven%20%282004%29.mp4",
    description: "WWE Unforgiven 2004 es un emocionante evento exclusivo de la marca RAW que se celebra en Portland, Oregon, marcado por la amarga traición de Evolution. Triple H busca destronar a su antiguo protegido, Randy Orton, por el Campeonato Mundial de Peso Completo. Además, Shawn Michaels busca venganza contra su verdugo Kane en una lucha sin descalificación, y Chris Jericho se enfrenta a Christian en un espectacular combate de escaleras por el Campeonato Intercontinental.",
    watched: false
  },
  {
    id: "wwe-ppv-no-mercy-2004",
    title: "No Mercy 2004",
    show: "PPV",
    date: "2004-10-03",
    month: "Octubre",
    year: 2004,
    season: "PPV Especial",
    episode: "No Mercy",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/vTYtMyOW1mSAKVbjwkbwHW5Ej6k.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ok.ru/video/10002357619399",
    description: "WWE No Mercy 2004 es un memorable evento exclusivo de la marca SmackDown que se celebra en East Rutherford, Nueva Jersey. En el histórico combate estelar, John Bradshaw Layfield (JBL) defiende el Campeonato de la WWE frente al legendario Undertaker en una dramática Lucha de Último Viaje (Last Ride Match). Además, Eddie Guerrero se enfrenta a Luther Reigns, y Big Show lucha contra Kurt Angle en un intenso duelo de rivalidad.",
    watched: false
  },
  {
    id: "wwe-ppv-survivor-series-2004",
    title: "Survivor Series 2004",
    show: "PPV",
    date: "2004-11-14",
    month: "Noviembre",
    year: 2004,
    season: "PPV Especial",
    episode: "Survivor Series",
    duration: "3h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/7yDZf9a5buA4ruaQNtL9DV7xM2Y.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://ia803104.us.archive.org/13/items/survivor-series-2004/Survivor%20Series%20%282004%29.mp4",
    description: "WWE Survivor Series 2004 es la espectacular e histórica decimoctava edición del clásico de otoño donde el control de RAW está en juego en un electrizante Combate Clásico de Eliminación de Survivor Series entre el Team Triple H y el Team Orton. Además, el carismático Campeón de la WWE John Bradshaw Layfield (JBL) defiende su título ante el formidable Booker T, mientras que el legendario Undertaker busca silenciar al temible Heidenreich.",
    watched: false
  },
  {
    id: "wwe-ppv-armageddon-2004",
    title: "Armageddon 2004",
    show: "PPV",
    date: "2004-12-12",
    month: "Diciembre",
    year: 2004,
    season: "PPV Especial",
    episode: "Armageddon",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/yXkue0tG6R753ZiXmcmap9LzwuQ.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-26186274_162958765",
    description: "WWE Armageddon 2004 es un dramático e intenso evento exclusivo de la marca SmackDown celebrado en Duluth, Georgia. En el combate estelar, John Bradshaw Layfield (JBL) defiende el Campeonato de la WWE en una explosiva e impredecible lucha Fatal de Cuatro Esquinas ante Eddie Guerrero, Undertaker y Booker T. Además, Big Show combate en desventaja contra el Team Angle, y John Cena defiende el título de los Estados Unidos ante Jesús en una emocionante contienda callejera.",
    watched: false
  },
  {
    id: "wwe-ppv-royal-rumble-2005",
    title: "Royal Rumble 2005",
    show: "PPV",
    date: "2005-01-30",
    month: "Enero",
    year: 2005,
    season: "PPV Especial",
    episode: "Royal Rumble",
    duration: "3h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/tHYgCsr8XDyCEV0lEMmG1jLkNd7.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-192312565_456239066",
    description: "WWE Royal Rumble 2005 es la decimoctava edición del espectacular evento de eliminación por encima de la tercera cuerda, celebrado en Fresno, California, que ve nacer a dos superestrellas estelares del futuro inmediato en las marcas RAW y SmackDown (Batista y John Cena) en un polémico y dramático desenlace. Además, Triple H defiende el Campeonato Mundial de Peso Completo ante Randy Orton, y John Bradshaw Layfield defiende el Campeonato de la WWE en una triple amenaza extrema frente a Big Show y Kurt Angle.",
    watched: false
  },
  {
    id: "wwe-ppv-no-way-out-2005",
    title: "No Way Out 2005",
    show: "PPV",
    date: "2005-02-20",
    month: "Febrero",
    year: 2005,
    season: "PPV Especial",
    episode: "No Way Out",
    duration: "2h 45m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/kCb6UaSm3UAKFJh6U5MEd4XiRZS.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-192312565_456239078",
    description: "WWE No Way Out 2005 es un electrizante evento exclusivo de la marca SmackDown celebrado en Pittsburgh, Pensilvania. Presenta un peligroso e histórico Barbed Wire Steel Cage Match en el evento estelar, donde John Bradshaw Layfield (JBL) defiende el Campeonato de la WWE ante el temible Big Show en una de las celdas más brutales de todos los tiempos. Además, John Cena se enfrenta a Kurt Angle en la final de un torneo para determinar al retador número uno al Campeonato de la WWE en WrestleMania XXI, y el carismático Chavo Guerrero disputa el Campeonato de Peso Crucero en un caótico e intenso Cruiserweight Open.",
    watched: false
  },
  {
    id: "wwe-ppv-wrestlemania-21",
    title: "WrestleMania 21",
    show: "PPV",
    date: "2005-04-03",
    month: "Abril",
    year: 2005,
    season: "PPV Especial",
    episode: "WrestleMania",
    duration: "4h 00m",
    thumbnail: "https://www.themoviedb.org/t/p/w600_and_h900_face/4rQOid4Qc4nsZ5WS3WJ5DaxLW0z.jpg",
    background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://vkvideo.ru/video-192312565_456239088",
    description: "WWE WrestleMania 21 es la espectacular vigesimoprimera edición del magno evento de la WWE, celebrado en Los Ángeles, California, bajo la icónica temática de Hollywood. Consagra el ascenso definitivo de las dos superestrellas de la nueva era: John Cena, quien derrota a John Bradshaw Layfield (JBL) para ganar el Campeonato de la WWE, y Batista, quien derrota a Triple H en el evento estelar para capturar el Campeonato Mundial de Peso Completo. Además, el show presenta el primer e histórico combate de escaleras Money in the Bank y una aclamada obra de arte técnica de ensueño entre Shawn Michaels y Kurt Angle.",
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
      ? "https://media.themoviedb.org/t/p/w130_and_h195_face/fpLNMIsdUSE1wXn7DS3QrhLdgxK.jpg"
      : "https://media.themoviedb.org/t/p/w130_and_h195_face/hg8oWjvCFSzF1pgoUlyRVf7KVqL.jpg";
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
