import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PirateChatbot = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
    useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Get current language from i18n
  const getCurrentLanguage = () => {
    const lang = i18n.language;
    // Ensure we have a supported language
    if (['en', 'nl', 'de'].includes(lang)) {
      return lang;
    }
    return 'en'; // Default fallback
  };
  // Initialize welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const currentLang = getCurrentLanguage();
      const welcomeMessages = {
        en: "Hello there! I'm Captain Brug, your nautical guide for all things related to our catamaran charters. Whether you're curious about our boats, locations, pricing, or just want to know more about sailing on the IJsselmeer, I'm here to help! What would you like to know?",
        nl: "Hallo daar! Ik ben Captain Brug, je nautische gids voor alles wat te maken heeft met onze catamaran charters. Of je nu nieuwsgierig bent naar onze boten, locaties, prijzen, of gewoon meer wilt weten over zeilen op het IJsselmeer, ik ben er om te helpen! Wat wil je weten?",
        de: "Hallo! Ich bin Captain Brug, Ihr nautischer Führer für alles rund um unsere Katamaran-Charter. Ob Sie sich für unsere Boote, Standorte, Preise interessieren oder einfach mehr über das Segeln auf dem IJsselmeer erfahren möchten, ich bin hier, um zu helfen! Was möchten Sie wissen?"
      };
      
      const welcomeMessage = {
        text: welcomeMessages[currentLang] || welcomeMessages.en,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setTimeout(() => {
        setMessages([welcomeMessage]);
      }, 500);
    }
  }, [isOpen, messages.length, i18n.language, getCurrentLanguage]);  // Enhanced FAQ knowledge base with all real company information
  const faqKnowledge = {
    location: {
      keywords: ['location', 'where', 'address', 'marina', 'lelystad', 'deko', 'waar', 'adres', 'locatie', 'wo', 'adresse', 'standort', 'jetty', 'office', 'restaurant'],
      answer: {
        en: "Our boats are located at Parkhaven 3, 8243 PE Lelystad at the B-jetty in Deko Marina. You must first register at our floating office, which can be found directly at the B-jetty in front of the restaurant. The marina offers free parking, free WiFi, showers, toilets, and the delicious Italian restaurant 'Gusto del Porto'.",
        nl: "Onze boten liggen aan Parkhaven 3, 8243 PE Lelystad aan de B-steiger in Deko Marina. Je moet je eerst melden bij ons drijvende kantoor, dat direct aan de B-steiger voor het restaurant te vinden is. De marina biedt gratis parkeren, gratis WiFi, douches, toiletten en het heerlijke Italiaanse restaurant 'Gusto del Porto'.",
        de: "Unsere Boote befinden sich am Parkhaven 3, 8243 PE Lelystad am B-Steg in der Deko Marina. Sie müssen sich zuerst in unserem schwimmenden Büro anmelden, das direkt am B-Steg vor dem Restaurant zu finden ist. Der Yachthafen bietet kostenlose Parkplätze, kostenloses WLAN, Duschen, Toiletten und das köstliche italienische Restaurant 'Gusto del Porto'."
      }
    },
    license: {
      keywords: ['license', 'permit', 'sailing license', 'boat license', 'qualification', 'competentie', 'vaarbewijs', 'vergunning', 'führerschein', 'lizenz', 'berechtigung', '15 meter', 'wadden'],
      answer: {
        en: "A boating license is not necessary for our sailing yachts as they are all shorter than 15 meters and cannot exceed 20 km/h. However, you need sufficient experience sailing equivalent cabin sailing yachts. For the Wadden Sea, you need a boat license 2 and tide experience. A North Sea package is mandatory for North Sea sailing.",
        nl: "Een vaarbewijs is niet nodig voor onze zeilyachten omdat ze allemaal korter zijn dan 15 meter en niet sneller kunnen dan 20 km/u. Je hebt wel voldoende ervaring nodig met vergelijkbare kajuitzeilyachten. Voor de Waddenzee heb je vaarbewijs 2 en getijdenervaring nodig. Een Noordzeepakket is verplicht voor de Noordzee.",
        de: "Ein Bootsführerschein ist für unsere Segelyachten nicht erforderlich, da sie alle kürzer als 15 Meter sind und 20 km/h nicht überschreiten können. Sie benötigen jedoch ausreichende Erfahrung mit vergleichbaren Kabinensegelyachten. Für das Wattenmeer benötigen Sie Bootsführerschein 2 und Gezeitenerfahrung. Ein Nordseepaket ist für die Nordsee obligatorisch."
      }
    },
    deposit: {
      keywords: ['deposit', 'security', 'payment', 'money', 'cost', 'borg', 'prijs', 'kosten', 'betaling', 'kaution', 'anzahlung', 'geld', 'cash', 'credit card', 'damage'],
      answer: {
        en: "The deposit must be paid in cash or by credit card at the start of the rental (transfer), or transferred by bank 1 day before departure. You'll receive the full deposit back upon return if there's no damage. In case of damage, the entire deposit is withheld. If damage prevents the next tenant from sailing, additional consequential damage up to €500 applies. You can reduce your deposit risk with 85% coverage insurance from Unigarant.",
        nl: "De borg moet contant of met creditcard bij aanvang van de verhuur (overdracht) worden betaald, of 1 dag voor vertrek worden overgemaakt. Je krijgt de volledige borg terug bij terugkeer zonder schade. Bij schade wordt de hele borg ingehouden. Als schade verhindert dat de volgende huurder kan uitvaren, geldt extra gevolgschade tot €500. Je kunt je borgrisico verlagen met 85% dekking verzekering van Unigarant.",
        de: "Die Kaution muss bei Mietbeginn (Übergabe) bar oder per Kreditkarte bezahlt oder 1 Tag vor Abfahrt überwiesen werden. Sie erhalten die volle Kaution bei schadensfreier Rückgabe zurück. Bei Schäden wird die gesamte Kaution einbehalten. Wenn Schäden den nächsten Mieter am Auslaufen hindern, fallen zusätzliche Folgeschäden bis €500 an. Sie können Ihr Kautionsrisiko mit 85% Deckungsversicherung von Unigarant reduzieren."
      }
    },
    bedlinen: {
      keywords: ['bed', 'linen', 'bedding', 'pillow', 'duvet', 'towel', 'beddengoed', 'kussen', 'dekbed', 'handdoek', 'bettwäsche', 'kissen', 'bettdecke', 'handtuch'],
      answer: {
        en: "There is no bed linen on board. You can rent bed linen for €35 per person, which includes: pillow with cover, duvet, duvet cover, bottom sheet, towel and washcloth. You can also rent a washing-up package for €5 consisting of: tea towel, towel, dishcloth, washing-up brush and washing-up liquid.",
        nl: "Er is geen beddengoed aan boord. Je kunt beddengoed huren voor €35 per persoon, bestaande uit: kussen met hoes, dekbed, dekbedhoes, onderlaken, handdoek en washandje. Je kunt ook een afwaspakket huren voor €5 bestaande uit: theedoek, handdoek, vaatdoek, afwasborstel en afwasmiddel.",
        de: "Es gibt keine Bettwäsche an Bord. Sie können Bettwäsche für €35 pro Person mieten, bestehend aus: Kissen mit Bezug, Bettdecke, Bettbezug, Spannbettlaken, Handtuch und Waschlappen. Sie können auch ein Abwaschpaket für €5 mieten bestehend aus: Geschirrtuch, Handtuch, Spültuch, Spülbürste und Spülmittel."
      }
    },
    damage: {
      keywords: ['damage', 'breakdown', 'emergency', 'contact', 'schade', 'storing', 'noodgeval', 'schaden', 'panne', 'notfall'],
      answer: {
        en: "In case of damage, breakdown, or emergency, contact us immediately at: 06 5384 8268 or 06-45416015. Report any damage immediately upon return to avoid surprises. Our yachts are All-Risk insured with a deductible equal to the deposit (€55 insurance cost).",
        nl: "Bij schade, storing of noodgeval, neem direct contact op via: 06 5384 8268 of 06-45416015. Meld schade direct bij terugkomst om verrassingen te voorkomen. Onze yachten zijn All-Risk verzekerd met een eigen risico gelijk aan de borg (€55 verzekeringskosten).",
        de: "Bei Schäden, Pannen oder Notfällen kontaktieren Sie uns sofort unter: 06 5384 8268 oder 06-45416015. Melden Sie Schäden sofort bei der Rückgabe, um Überraschungen zu vermeiden. Unsere Yachten sind All-Risk versichert mit einem Selbstbehalt gleich der Kaution (€55 Versicherungskosten)."
      }
    },
    cancellation: {
      keywords: ['cancel', 'cancellation', 'rebook', 'refund', 'annuleren', 'annulering', 'omboeken', 'terugbetaling', 'stornieren', 'stornierung', 'umbuchung', 'rückerstattung'],
      answer: {
        en: "Cancellation fees: 15% (up to 3 months before), 50% (up to 2 months), 75% (up to 1 month), 100% (within 1 month). Additional €30 administration costs apply. You can take out cancellation insurance for approximately 4.65% of total booking (not valid for Corona-related cancellations).",
        nl: "Annuleringskosten: 15% (tot 3 maanden vooraf), 50% (tot 2 maanden), 75% (tot 1 maand), 100% (binnen 1 maand). Daarnaast €30 administratiekosten. Je kunt een annuleringsverzekering afsluiten voor ongeveer 4,65% van de totale boeking (niet geldig voor Corona-gerelateerde annuleringen).",
        de: "Stornierungsgebühren: 15% (bis 3 Monate vorher), 50% (bis 2 Monate), 75% (bis 1 Monat), 100% (innerhalb 1 Monat). Zusätzlich €30 Verwaltungskosten. Sie können eine Stornierungsversicherung für etwa 4,65% der Gesamtbuchung abschließen (nicht gültig für Corona-bedingte Stornierungen)."
      }
    },
    age: {
      keywords: ['age', 'minimum', 'young', 'old', 'leeftijd', 'minimaal', 'jong', 'oud', 'alter', 'mindestalter', 'jung', 'alt', 'sneekweek'],
      answer: {
        en: "You must be at least 21 years old to rent our sailing yachts. You can always hire a skipper from us. For Sneekweek, a minimum age of 23 years applies for both tenant and skipper.",
        nl: "Je moet minimaal 21 jaar oud zijn om onze zeilyachten te huren. Je kunt altijd een schipper bij ons inhuren. Voor de Sneekweek geldt een minimumleeftijd van 23 jaar voor zowel huurder als schipper.",
        de: "Sie müssen mindestens 21 Jahre alt sein, um unsere Segelyachten zu mieten. Sie können jederzeit einen Skipper bei uns engagieren. Für die Sneekweek gilt ein Mindestalter von 23 Jahren für Mieter und Skipper."
      }
    },
    id: {
      keywords: ['id', 'identity', 'passport', 'driver', 'license', 'identification', 'identiteit', 'paspoort', 'rijbewijs', 'legitimatie', 'ausweis', 'reisepass', 'führerschein', 'identifikation'],
      answer: {
        en: "You can only rent a sailing yacht with valid proof of identity (driver's license, identity card, or passport). We make a copy of your ID that will be destroyed immediately after the rental period.",
        nl: "Je kunt alleen een zeilboot huren met een geldig identiteitsbewijs (rijbewijs, identiteitskaart of paspoort). We maken een kopie van je ID die direct na de huurperiode wordt vernietigd.",
        de: "Sie können nur mit gültigem Ausweis (Führerschein, Personalausweis oder Reisepass) eine Segelyacht mieten. Wir machen eine Kopie Ihres Ausweises, die sofort nach der Mietzeit vernichtet wird."
      }
    },
    insurance: {
      keywords: ['insurance', 'verzekering', 'versicherung', 'all-risk', 'deposit insurance', 'storm', 'fog', 'unigarant'],
      answer: {
        en: "Our yachts are All-Risk insured (€55 cost) with deductible equal to deposit. You can get 85% deposit coverage with Unigarant insurance. Storm/fog coverage available for wind force 7+ or fog (must be taken 30 days before departure). Cancellation insurance available for ~4.65% of booking.",
        nl: "Onze yachten zijn All-Risk verzekerd (€55 kosten) met eigen risico gelijk aan borg. Je kunt 85% borgdekking krijgen met Unigarant verzekering. Storm/mist dekking beschikbaar voor windkracht 7+ of mist (moet 30 dagen voor vertrek worden afgesloten). Annuleringsverzekering beschikbaar voor ~4,65% van boeking.",
        de: "Unsere Yachten sind All-Risk versichert (€55 Kosten) mit Selbstbehalt gleich Kaution. Sie können 85% Kautionsdeckung mit Unigarant Versicherung erhalten. Sturm-/Nebeldeckung verfügbar für Windstärke 7+ oder Nebel (muss 30 Tage vor Abfahrt abgeschlossen werden). Stornierungsversicherung für ~4,65% der Buchung verfügbar."
      }
    },
    handover: {
      keywords: ['handover', 'return', 'checkout', 'late', 'time', 'overdracht', 'inleveren', 'terugbrengen', 'laat', 'tijd', 'übergabe', 'rückgabe', 'verspätung', 'zeit'],
      answer: {
        en: "Return the yacht at the agreed time and place in the same condition as received. Late return incurs €50 per half hour. The boat must be returned with: full diesel tank (refuel at Flevo Marina or Batavia harbor), full drinking water tanks, shore power connected, clean kitchen inventory in cupboards, empty and clean waste bins.",
        nl: "Lever de yacht in op de afgesproken tijd en plaats in dezelfde staat als ontvangen. Te laat inleveren kost €50 per half uur. De boot moet worden ingeleverd met: volle dieseltank (tanken bij Flevo Marina of Batavia haven), volle drinkwatertanks, walstroom aangesloten, schone keukeninventaris in kastjes, lege en schone afvalbakken.",
        de: "Geben Sie die Yacht zur vereinbarten Zeit und am vereinbarten Ort im gleichen Zustand wie erhalten zurück. Verspätete Rückgabe kostet €50 pro halbe Stunde. Das Boot muss zurückgegeben werden mit: vollem Dieseltank (tanken bei Flevo Marina oder Batavia Hafen), vollen Trinkwassertanks, angeschlossenem Landstrom, sauberer Küchenausstattung in Schränken, leeren und sauberen Mülleimern."
      }
    },
    experience: {
      keywords: ['experience', 'beginner', 'sailing experience', 'skills', 'ervaring', 'beginner', 'zeilervaring', 'vaardigheden', 'erfahrung', 'anfänger', 'segelerfahrung', 'fähigkeiten', 'skipper'],
      answer: {
        en: "Before booking, we ask what type of sailing yachts you've sailed as skipper. You need sufficient experience with equivalent cabin sailing yachts. We don't give individual sailing courses - only in combination with boat rental. Skipper available: 1 day €275, half day €160.",
        nl: "Voor de boeking vragen we welke type zeilyachten je als schipper hebt gezeild. Je hebt voldoende ervaring nodig met vergelijkbare kajuitzeilyachten. We geven geen individuele zeilcursussen - alleen in combinatie met bootverhuur. Schipper beschikbaar: 1 dag €275, halve dag €160.",
        de: "Vor der Buchung fragen wir, welche Art von Segelyachten Sie als Skipper gesegelt haben. Sie benötigen ausreichende Erfahrung mit vergleichbaren Kabinensegelyachten. Wir geben keine individuellen Segelkurse - nur in Kombination mit Bootsvermietung. Skipper verfügbar: 1 Tag €275, halber Tag €160."
      }
    },
    vhf: {
      keywords: ['vhf', 'radio', 'communication', 'certificate', 'ais', 'marifoon', 'certificaat', 'funkgerät', 'zertifikat'],
      answer: {
        en: "Our yachts are equipped with registered VHF (some with AIS receiver). You may only use the VHF if you are in possession of a VHF certificate.",
        nl: "Onze yachten zijn uitgerust met een geregistreerde marifoon (sommige met AIS ontvanger). Je mag de marifoon alleen gebruiken als je in het bezit bent van een marifooncertificaat.",
        de: "Unsere Yachten sind mit registrierten VHF-Funkgeräten ausgestattet (einige mit AIS-Empfänger). Sie dürfen das VHF-Funkgerät nur verwenden, wenn Sie ein VHF-Zertifikat besitzen."
      }
    },
    pets: {
      keywords: ['dog', 'pet', 'animal', 'bring dog', 'hond', 'huisdier', 'dier', 'hund', 'haustier', 'tier', 'small dog', 'cleaning'],
      answer: {
        en: "You can only bring a small dog in consultation with us. We must check with the yacht owner first. If agreed, additional cleaning costs of €70 apply. Dogs are not allowed inside on couches or in sleeping cabins - you must bring a basket or dog bench.",
        nl: "Je kunt alleen een kleine hond meenemen in overleg met ons. We moeten dit eerst checken met de eigenaar van de yacht. Bij akkoord gelden extra schoonmaakkosten van €70. Honden mogen niet binnen op banken of in slaaphutten - je moet een mand of hondenbank meenemen.",
        de: "Sie können nur einen kleinen Hund in Absprache mit uns mitbringen. Wir müssen dies zuerst mit dem Yachteigentümer prüfen. Bei Zustimmung fallen zusätzliche Reinigungskosten von €70 an. Hunde dürfen nicht drinnen auf Sofas oder in Schlafkabinen - Sie müssen einen Korb oder eine Hundebank mitbringen."
      }
    },
    diesel: {
      keywords: ['fuel', 'gas', 'petrol', 'diesel', 'brandstof', 'benzine', 'kraftstoff', 'benzin', 'tank', 'refuel'],
      answer: {
        en: "Diesel and water tanks are full at rental start. You must return the yacht with full diesel and water tanks, or we charge a fee. You can refuel at Flevo Marina or Batavia harbor.",
        nl: "Diesel- en watertanks zijn vol bij start verhuur. Je moet de yacht terugbrengen met volle diesel- en watertanks, anders rekenen we kosten. Je kunt tanken bij Flevo Marina of Batavia haven.",
        de: "Diesel- und Wassertanks sind bei Mietbeginn voll. Sie müssen die Yacht mit vollen Diesel- und Wassertanks zurückgeben, sonst berechnen wir Gebühren. Sie können bei Flevo Marina oder Batavia Hafen tanken."
      }
    },
    lifejackets: {
      keywords: ['life jacket', 'safety', 'lifeline', 'reddingsvest', 'veiligheid', 'lifeline', 'rettungsweste', 'sicherheit', 'sicherheitsleine'],
      answer: {
        en: "On board are sufficient approved automatic life jackets and at least two lifelines for your safety.",
        nl: "Aan boord zijn voldoende goedgekeurde automatische reddingsvesten en ten minste twee lifelines voor je veiligheid.",
        de: "An Bord sind ausreichend zugelassene automatische Rettungswesten und mindestens zwei Sicherheitsleinen für Ihre Sicherheit."
      }
    },
    smoking: {
      keywords: ['smoke', 'smoking', 'cigarette', 'roken', 'sigaret', 'rauchen', 'zigarette'],
      answer: {
        en: "Smoking inside the boat is forbidden. Make sure to smoke outside only.",
        nl: "Roken binnen in de boot is verboden. Zorg ervoor dat je alleen buiten rookt.",
        de: "Rauchen im Boot ist verboten. Stellen Sie sicher, dass Sie nur draußen rauchen."
      }
    },
    seasickness: {
      keywords: ['seasick', 'seasickness', 'nausea', 'sick', 'zeeziek', 'zeeziekte', 'misselijk', 'seekrank', 'seekrankheit', 'übelkeit', 'scopolamine', 'cinnarizine', 'ginger'],
      answer: {
        en: "For seasickness: Scopolamine patches (prescription, behind ear 6-15 hours before departure, lasts 3 days), Cinnarizine 25 PCH (prescription, start before trip), Sea-Band wristbands (pressure on wrists), or ginger. Always eat something before departure.",
        nl: "Voor zeeziekte: Scopolamine pleisters (recept, achter oor 6-15 uur voor vertrek, 3 dagen werkzaam), Cinnarizine 25 PCH (recept, start voor reis), Sea-Band polsbandjes (druk op polsen), of gember. Eet altijd iets voor vertrek.",
        de: "Gegen Seekrankheit: Scopolamin-Pflaster (Rezept, hinter Ohr 6-15 Stunden vor Abfahrt, 3 Tage wirksam), Cinnarizin 25 PCH (Rezept, vor Reise beginnen), Sea-Band Armbänder (Druck auf Handgelenke), oder Ingwer. Immer etwas essen vor Abfahrt."
      }
    },
    electricity: {
      keywords: ['electricity', 'power', 'charging', 'socket', 'elektriciteit', 'stroom', 'opladen', 'stopcontact', 'strom', 'aufladen', 'steckdose'],
      answer: {
        en: "Free electricity is available at Deko Marina rental jetty. Take the cable when sailing away. Other ports often offer shore power (for a fee). Regular sockets work on shore power. 12V plug (cigarette lighter style) can charge phones while underway.",
        nl: "Gratis elektriciteit beschikbaar bij Deko Marina verhuursteiger. Neem de kabel mee als je wegzeilt. Andere havens bieden vaak walstroom (tegen betaling). Gewone stopcontacten werken op walstroom. 12V stekker (sigarettenaansteker type) kan telefoons opladen onderweg.",
        de: "Kostenloser Strom verfügbar am Deko Marina Mietsteg. Nehmen Sie das Kabel mit beim Segeln. Andere Häfen bieten oft Landstrom (gegen Gebühr). Normale Steckdosen funktionieren mit Landstrom. 12V-Stecker (Zigarettenanzünder-Stil) kann Telefone unterwegs aufladen."
      }
    },
    marina: {
      keywords: ['marina', 'facilities', 'parking', 'wifi', 'shower', 'toilet', 'restaurant', 'faciliteiten', 'parkeren', 'douche', 'einrichtungen', 'parken', 'dusche'],
      answer: {
        en: "Deko Marina offers: free parking lot with EV charging stations, free luggage carts, free WiFi, free showers and toilets in harbor building, laundry room with washing machine, free shore power and private mooring, water hoses on jetties, delicious Italian restaurant 'Gusto del Porto'.",
        nl: "Deko Marina biedt: gratis parkeerterrein met EV laadstations, gratis bagagewagens, gratis WiFi, gratis douches en toiletten in havengebouw, wasruimte met wasmachine, gratis walstroom en eigen ligplaats, waterslangen op steigers, heerlijk Italiaans restaurant 'Gusto del Porto'.",
        de: "Deko Marina bietet: kostenlosen Parkplatz mit EV-Ladestationen, kostenlose Gepäckwagen, kostenloses WLAN, kostenlose Duschen und Toiletten im Hafengebäude, Waschraum mit Waschmaschine, kostenlosen Landstrom und privaten Liegeplatz, Wasserschläuche an Stegen, köstliches italienisches Restaurant 'Gusto del Porto'."
      }
    },
    parking: {
      keywords: ['parking', 'car', 'parkeren', 'auto', 'parken', 'fahrzeug', 'charging', 'ev', 'elektrisch'],
      answer: {
        en: "There is a free parking lot at Deko Marina with enough parking spaces. Two EV charging stations are available to charge your electric car.",
        nl: "Er is een gratis parkeerterrein bij Deko Marina met voldoende parkeerplaatsen. Twee EV laadstations zijn beschikbaar om je elektrische auto op te laden.",
        de: "Es gibt einen kostenlosen Parkplatz bei Deko Marina mit ausreichend Parkplätzen. Zwei EV-Ladestationen sind verfügbar, um Ihr Elektroauto aufzuladen."
      }
    },
    supermarket: {
      keywords: ['supermarket', 'shop', 'shopping', 'groceries', 'food', 'supermarkt', 'winkel', 'boodschappen', 'eten', 'einkaufen', 'lebensmittel', 'jumbo', 'aldi', 'lidl'],
      answer: {
        en: "Nearby supermarkets: Jumbo/Aldi at Jol 37-01, 8243 HP Lelystad (3 km), Albert Heijn at Kempenaar 03 41, 8242 BD Lelystad (2 km), Lidl at Passage 1, 8223 AJ Lelystad (5 km).",
        nl: "Supermarkten in de buurt: Jumbo/Aldi op Jol 37-01, 8243 HP Lelystad (3 km), Albert Heijn op Kempenaar 03 41, 8242 BD Lelystad (2 km), Lidl op Passage 1, 8223 AJ Lelystad (5 km).",
        de: "Supermärkte in der Nähe: Jumbo/Aldi bei Jol 37-01, 8243 HP Lelystad (3 km), Albert Heijn bei Kempenaar 03 41, 8242 BD Lelystad (2 km), Lidl bei Passage 1, 8223 AJ Lelystad (5 km)."
      }
    },
    northsea: {
      keywords: ['north sea', 'noordzee', 'nordsee', 'sea', 'zee', 'meer', 'package', 'pakket', 'liferaft', 'reddingsvlot', 'rettungsfloss'],
      answer: {
        en: "For North Sea sailing, a North Sea package is mandatory (€250). Not possible to sail to non-EU countries like England. Offshore sailing requires agreement with Brug Jachtverhuur - no consultation means no insurance coverage. Package includes: life raft, current North Sea map, emergency signals, searchlight, lifelines for all passengers.",
        nl: "Voor Noordzee zeilen is een Noordzeepakket verplicht (€250). Niet mogelijk om naar niet-EU landen zoals Engeland te zeilen. Offshore zeilen vereist afspraak met Brug Jachtverhuur - geen overleg betekent geen verzekeringsdekking. Pakket bevat: reddingsvlot, actuele Noordzeekaart, noodsignalen, zoeklicht, lifelines voor alle passagiers.",
        de: "Für Nordsee-Segeln ist ein Nordseepaket obligatorisch (€250). Segeln in Nicht-EU-Länder wie England nicht möglich. Offshore-Segeln erfordert Vereinbarung mit Brug Jachtverhuur - keine Absprache bedeutet keine Versicherungsdeckung. Paket enthält: Rettungsfloss, aktuelle Nordseekarte, Notsignale, Suchscheinwerfer, Sicherheitsleinen für alle Passagiere."
      }
    },
    regatta: {
      keywords: ['regatta', 'race', 'competition', 'wedstrijd', 'wedrennen', 'regatta', 'rennen', 'wettbewerb'],
      answer: {
        en: "If you want to participate in a regatta/sailing competition, indicate this when booking. Permission may not be granted in some cases. With permission, the deposit is doubled.",
        nl: "Als je wilt deelnemen aan een regatta/zeilwedstrijd, geef dit aan bij het boeken. In sommige gevallen wordt geen toestemming gegeven. Met toestemming wordt de borg verdubbeld.",
        de: "Wenn Sie an einer Regatta/Segelwettbewerb teilnehmen möchten, geben Sie dies bei der Buchung an. In einigen Fällen wird keine Erlaubnis erteilt. Mit Erlaubnis wird die Kaution verdoppelt."
      }
    },
    skipper: {
      keywords: ['skipper', 'instructor', 'training', 'course', 'schipper', 'instructeur', 'training', 'cursus', 'ausbilder', 'kurs'],
      answer: {
        en: "You can hire a skipper or instructor for one or more days. The instructor teaches practical maneuvering and sailing with your chosen yacht. We don't give individual sailing courses - only combined with boat rental. Prices: 1 day skipper €275, half day skipper €160.",
        nl: "Je kunt een schipper of instructeur inhuren voor een of meerdere dagen. De instructeur leert je praktisch manoeuvreren en zeilen met je gekozen yacht. We geven geen individuele zeilcursussen - alleen gecombineerd met bootverhuur. Prijzen: 1 dag schipper €275, halve dag schipper €160.",
        de: "Sie können einen Skipper oder Ausbilder für einen oder mehrere Tage engagieren. Der Ausbilder lehrt praktisches Manövrieren und Segeln mit Ihrer gewählten Yacht. Wir geben keine individuellen Segelkurse - nur kombiniert mit Bootsvermietung. Preise: 1 Tag Skipper €275, halber Tag Skipper €160."
      }
    },
    weather: {
      keywords: ['weather', 'wind', 'storm', 'cancel', 'insurance', 'weer', 'wind', 'storm', 'annuleren', 'verzekering', 'wetter', 'sturm', 'stornieren', 'versicherung', 'force 6', 'force 7'],
      answer: {
        en: "Sailing above wind force 6 is not allowed (from force 7 you're not insured). Always contact us if unsure about sailing conditions. No financial compensation for bad weather, but you can take storm/wind and fog insurance (must be taken 30 days before departure) to reclaim lost days.",
        nl: "Zeilen boven windkracht 6 is niet toegestaan (vanaf kracht 7 ben je niet verzekerd). Neem altijd contact op als je twijfelt over zeilomstandigheden. Geen financiële compensatie bij slecht weer, maar je kunt storm/wind en mist verzekering nemen (moet 30 dagen voor vertrek afgesloten) om verloren dagen terug te claimen.",
        de: "Segeln über Windstärke 6 ist nicht erlaubt (ab Stärke 7 sind Sie nicht versichert). Kontaktieren Sie uns immer bei Unsicherheit über Segelbedingungen. Keine finanzielle Kompensation bei schlechtem Wetter, aber Sie können Sturm-/Wind- und Nebelversicherung nehmen (muss 30 Tage vor Abfahrt abgeschlossen werden), um verlorene Tage zurückzufordern."
      }
    },
    contact: {
      keywords: ['contact', 'phone', 'email', 'call', 'contacteren', 'telefoon', 'bellen', 'kontakt', 'telefon', 'anrufen'],
      answer: {
        en: "Contact us at +31 (0) 612 47 90 72 or email info@brug-jachtverhuur.nl. For emergencies during rental: 06 5384 8268 or 06-45416015.",
        nl: "Neem contact op via +31 (0) 612 47 90 72 of mail naar info@brug-jachtverhuur.nl. Voor noodgevallen tijdens verhuur: 06 5384 8268 of 06-45416015.",
        de: "Kontaktieren Sie uns unter +31 (0) 612 47 90 72 oder senden Sie eine E-Mail an info@brug-jachtverhuur.nl. Für Notfälle während der Miete: 06 5384 8268 oder 06-45416015."
      }
    }
  };const findBestAnswer = (userMessage) => {
    const message = userMessage.toLowerCase();
    const currentLang = getCurrentLanguage();
    
    // Look for keyword matches
    for (const faq of Object.values(faqKnowledge)) {
      if (faq.keywords.some(keyword => message.includes(keyword))) {
        return faq.answer[currentLang] || faq.answer.en;
      }
    }

    // Check for common greetings
    const greetings = {
      en: "Hello there! Welcome to Brug Yacht Charter. I'm here to help you with any questions about our catamarans, locations, booking, or anything else you need to know!",
      nl: "Hallo daar! Welkom bij Brug Yacht Charter. Ik ben hier om je te helpen met vragen over onze catamarans, locaties, boeken, of alles wat je wilt weten!",
      de: "Hallo! Willkommen bei Brug Yacht Charter. Ich bin hier, um Ihnen bei Fragen zu unseren Katamaranen, Standorten, Buchungen oder allem anderen zu helfen, was Sie wissen möchten!"
    };
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || 
        message.includes('hallo') || message.includes('hoi') || message.includes('guten')) {
      return greetings[currentLang] || greetings.en;
    }

    // Check for thanks
    const thanks = {
      en: "You're very welcome! I'm happy to help. Feel free to ask if you have any other questions about our sailing charters!",
      nl: "Graag gedaan! Ik help je graag. Voel je vrij om te vragen als je nog andere vragen hebt over onze zeilcharters!",
      de: "Gern geschehen! Ich helfe gerne. Zögern Sie nicht zu fragen, wenn Sie weitere Fragen zu unseren Segelchartern haben!"
    };
    
    if (message.includes('thank') || message.includes('thanks') || 
        message.includes('dank') || message.includes('bedankt') || message.includes('danke')) {
      return thanks[currentLang] || thanks.en;
    }

    return null; // Return null to trigger OpenAI call
  };  const callOpenAI = async (message, language = 'en') => {
    try {
      let systemPrompt;
      
      if (language === 'nl') {
        systemPrompt = `Je bent Captain Brug van Brug Yacht Charter. Je bent een deskundige en vriendelijke gids voor catamarancharters op het IJsselmeer. Je mag vrij denken en redeneren, maar gebruik altijd de onderstaande bedrijfsinformatie als basis voor je antwoorden.

BEDRIJFSINFORMATIE BRUG YACHT CHARTER:
- Locatie: Deko Marina, Parkhaven 38, 8242 PE Lelystad, Nederland  
- Seizoen: 1 maart tot 1 november
- Vloot: Bavaria zeilboten, Hanse zeilboten, Jeanneau zeilboten, Bali Catamarans, Beneteau zeilboten, RM SailYachts
- Vaargebied: IJsselmeer en Markermeer
- Contact: +31 (0) 612 47 90 72, info@brug-jachtverhuur.nl

BELANGRIJKE FAQ ONDERWERPEN:
- Boot locatie en ligplaats details
- Vaarbewijzen en licenties 
- Borg en extra kosten
- Schade en annulering
- Minimumleeftijd en identificatie
- Verzekering en boottransfer
- Benodigde ervaring en VHF licentie
- Beddengoed en huisdieren aan boord
- Diesel, reddingsvesten en elektriciteit
- Marina faciliteiten en parkeren
- Supermarkten in de buurt
- Zeilen naar Noordzee en regatta's
- Zeiltraining en weersomstandigheden
- Zeiltips en zeeziekte

Je mag creative en behulpzame antwoorden geven, maar blijf altijd professioneel en gebruik de juiste contactgegevens. Antwoord in het Nederlands.`;
      } else if (language === 'de') {
        systemPrompt = `Sie sind Captain Brug von Brug Yacht Charter. Sie sind ein sachkundiger und freundlicher Führer für Katamaran-Charter auf dem IJsselmeer. Sie dürfen frei denken und argumentieren, aber verwenden Sie immer die folgenden Firmeninformationen als Basis für Ihre Antworten.

FIRMENINFORMATIONEN BRUG YACHT CHARTER:
- Standort: Deko Marina, Parkhaven 38, 8242 PE Lelystad, Niederlande
- Saison: 1. März bis 1. November  
- Flotte: Bavaria Segelboote, Hanse Segelboote, Jeanneau Segelboote, Bali Katamarane, Beneteau Segelboote, RM SailYachts
- Segelgebiet: IJsselmeer und Markermeer
- Kontakt: +31 (0) 612 47 90 72, info@brug-jachtverhuur.nl

WICHTIGE FAQ THEMEN:
- Bootslage und Liegeplatz Details
- Bootsführerscheine und Lizenzen
- Kaution und zusätzliche Kosten  
- Schäden und Stornierung
- Mindestalter und Ausweis
- Versicherung und Bootstransfer
- Benötigte Erfahrung und VHF Lizenz
- Bettwäsche und Haustiere an Bord
- Diesel, Rettungswesten und Elektrizität
- Marina Einrichtungen und Parken
- Supermärkte in der Nähe
- Segeln zur Nordsee und Regatten
- Segeltraining und Wetterbedingungen
- Segeltipps und Seekrankheit

Sie dürfen kreative und hilfreiche Antworten geben, aber bleiben Sie immer professionell und verwenden Sie die richtigen Kontaktdaten. Antworten Sie auf Deutsch.`;
      } else {
        systemPrompt = `You are Captain Brug from Brug Yacht Charter. You are a knowledgeable and friendly guide for catamaran charters on the IJsselmeer. You may think freely and reason, but always use the company information below as the foundation for your answers.

BRUG YACHT CHARTER COMPANY INFO:
- Location: Deko Marina, Parkhaven 38, 8242 PE Lelystad, Netherlands
- Season: March 1 to November 1
- Fleet: Bavaria sailboats, Hanse sailboats, Jeanneau sailboats, Bali Catamarans, Beneteau sailboats, RM SailYachts  
- Sailing area: IJsselmeer and Markermeer
- Contact: +31 (0) 612 47 90 72, info@brug-jachtverhuur.nl

IMPORTANT FAQ TOPICS:
- Boat location and berth details
- Boat licenses and permits
- Deposit and additional costs
- Damage and cancellation  
- Minimum age and ID requirements
- Insurance and ship transfer
- Required experience and VHF license
- Bed linen and pets on board
- Diesel, life jackets and electricity
- Marina facilities and parking
- Nearby supermarkets  
- Sailing to North Sea and regattas
- Sail training and weather conditions
- Sailing tips and seasickness

You may give creative and helpful answers, but always stay professional and use the correct contact details. Respond in English.`;
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 250,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        console.error('OpenAI API Error:', response.status, response.statusText);
        throw new Error(`OpenAI API call failed: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI Error:', error);
      const errorMessages = {
        en: "I'm having some trouble connecting right now. Please contact our team directly at +31 (0) 612 47 90 72 or info@brug-jachtverhuur.nl for immediate assistance!",
        nl: "Ik heb momenteel wat verbindingsproblemen. Neem direct contact op met ons team via +31 (0) 612 47 90 72 of info@brug-jachtverhuur.nl!",
        de: "Ich habe gerade Verbindungsprobleme. Kontaktieren Sie unser Team direkt unter +31 (0) 612 47 90 72 oder info@brug-jachtverhuur.nl!"
      };
      return errorMessages[language] || errorMessages.en;
    }
  };const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    const currentLang = getCurrentLanguage();
    console.log('Using language:', currentLang, 'for input:', currentInput);

    // First try local FAQ
    let result = findBestAnswer(currentInput);
    let botResponse;
    
    if (result) {
      botResponse = result;
    } else {
      // No FAQ match, try OpenAI with current language
      console.log('Calling OpenAI with language:', currentLang);
      botResponse = await callOpenAI(currentInput, currentLang);
    }

    const botMessage = {
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div 
      id="pirate-chatbot-container"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <style>
        {`
          #pirate-chatbot-container * {
            box-sizing: border-box;
          }
          
          .pirate-float {
            animation: pirateFloat 3s ease-in-out infinite;
          }
          
          @keyframes pirateFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }
          
          .pirate-btn-hover:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 6px 20px rgba(21,91,119,0.3) !important;
          }
          
          .pirate-input:focus {
            outline: none !important;
            border-color: #fcbf8e !important;
            box-shadow: 0 0 0 2px rgba(252,191,142,0.2) !important;
          }
          
          .pirate-input::placeholder {
            color: rgba(21,91,119,0.6) !important;
          }
          
          .pirate-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .pirate-scrollbar::-webkit-scrollbar-track {
            background: rgba(21,91,119,0.1);
            border-radius: 3px;
          }
          
          .pirate-scrollbar::-webkit-scrollbar-thumb {
            background: #fcbf8e;
            border-radius: 3px;
          }
          
          .pirate-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(252,191,142,0.8);
          }
        `}
      </style>

      {/* Toggle Button with Chat Icon */}
      <button 
        className="pirate-float pirate-btn-hover"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#fcbf8e',
          border: '3px solid #155b77',
          color: '#155b77',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(21,91,119,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          fontWeight: 'bold'
        }}
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with Captain Brug"
        aria-label="Open pirate chatbot"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      </button>
      
      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          width: '380px',
          height: '520px',
          background: '#f2f8f8',
          border: '2px solid #155b77',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(21,91,119,0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease-out'
        }}>
          <style>
            {`
              @keyframes slideUp {
                from { transform: translateY(15px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
            `}
          </style>
          
          {/* Header */}
          <div style={{
            background: '#fcbf8e',
            color: '#155b77',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '600',
            fontSize: '16px',
            borderBottom: '2px solid #155b77',
            position: 'relative'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Captain Brug's Quarters
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginLeft: '8px', verticalAlign: 'middle'}}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>            <button 
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#155b77',
                fontSize: '20px',
                cursor: 'pointer',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 0.2s ease',
                fontWeight: 'bold'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(21,91,119,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
              onClick={() => setIsOpen(false)}
              title="Close chat"
            >
              ×
            </button>
          </div>
          
          {/* Messages */}
          <div 
            className="pirate-scrollbar"
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              background: '#f2f8f8',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {messages.map((message, index) => (
              <div 
                key={index}
                style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  wordWrap: 'break-word',
                  border: '1px solid #155b77',
                  ...(message.sender === 'bot' ? {
                    background: '#f2f8f8',
                    color: '#155b77',
                    alignSelf: 'flex-start',
                    borderBottomLeftRadius: '6px'
                  } : {
                    background: '#fcbf8e',
                    color: '#155b77',
                    alignSelf: 'flex-end',
                    borderBottomRightRadius: '6px'
                  })
                }}
              >
                {message.text}
                <div style={{
                  fontSize: '11px', 
                  opacity: 0.7, 
                  marginTop: '6px', 
                  textAlign: message.sender === 'bot' ? 'left' : 'right'
                }}>
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{
                maxWidth: '85%',
                padding: '12px 16px',
                borderRadius: '16px',
                fontSize: '14px',
                background: '#f2f8f8',
                color: '#155b77',
                alignSelf: 'flex-start',
                borderBottomLeftRadius: '6px',
                border: '1px solid #155b77'
              }}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#fcbf8e',
                    animation: 'pirateThink 1.4s ease-in-out infinite'
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#fcbf8e',
                    animation: 'pirateThink 1.4s ease-in-out infinite 0.2s'
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#fcbf8e',
                    animation: 'pirateThink 1.4s ease-in-out infinite 0.4s'
                  }}></div>                  <span style={{marginLeft: '8px'}}>
                    {(() => {
                      const currentLang = getCurrentLanguage();
                      const loadingMessages = {
                        en: 'Captain Brug is thinking...',
                        nl: 'Captain Brug denkt na...',
                        de: 'Captain Brug denkt nach...'
                      };
                      return loadingMessages[currentLang] || loadingMessages.en;
                    })()}
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <style>
            {`
              @keyframes pirateThink {
                0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
                30% { transform: translateY(-8px); opacity: 1; }
              }
            `}
          </style>
          
          {/* Input */}
          <div style={{
            padding: '16px',
            background: '#f2f8f8',
            borderTop: '2px solid #155b77',
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            <input
              className="pirate-input"
              style={{
                flex: 1,
                padding: '12px 16px',
                border: '2px solid #155b77',
                borderRadius: '24px',
                background: '#f2f8f8',
                color: '#155b77',
                fontSize: '14px',
                outline: 'none',
                fontFamily: 'inherit',
                transition: 'all 0.3s ease'
              }}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={(() => {
                const currentLang = getCurrentLanguage();
                const placeholders = {
                  en: 'Ask me anything...',
                  nl: 'Vraag me wat je wilt...',
                  de: 'Fragen Sie mich alles...'
                };
                return placeholders[currentLang] || placeholders.en;
              })()}
              disabled={isLoading}
              maxLength={500}
            />
            <button
              className="pirate-btn-hover"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#fcbf8e',
                border: '2px solid #155b77',
                color: '#155b77',
                cursor: isLoading || !inputValue.trim() ? 'not-allowed' : 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                fontWeight: 'bold',
                opacity: isLoading || !inputValue.trim() ? 0.5 : 1
              }}
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              title="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PirateChatbot;
