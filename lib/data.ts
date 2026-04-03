export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Tours", href: "/tours" },
  { name: "Visa Service", href: "/visa" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  { icon: "public", title: "International Tours", description: "Curated travel itineraries for premium global destinations with full logistics and concierge support." },
  { icon: "confirmation_number", title: "Ticket Booking", description: "Instant airline bookings for major international carriers worldwide with competitive global fares." },
  { icon: "article", title: "Visa Services", description: "Professional assistance for visa processing to major global destinations with high success rates." },
  { icon: "hotel", title: "Hotel Reservation", description: "Partnerships with luxury and boutique hotels ensuring the best rates and premium stays." },
  { icon: "directions_car", title: "Vehicle Rental", description: "Reliable fleet of modern vehicles for local sightseeing and long-distance mountain journeys." },
  { icon: "hiking", title: "Trekking & Expeditions", description: "Expert-led treks to Everest, Annapurna, and technical peak climbing for adventurers." },
  { icon: "helicopter", title: "Heli Tours", description: "Luxury helicopter tours to remote Himalayan landmarks for a once-in-a-lifetime view." },
  { icon: "support_agent", title: "24/7 Support", description: "Dedicated concierge service to assist you at every step of your journey, anytime, anywhere." },
];

export const destinations = [
  { category: "Adventure", title: "Trekking in Nepal", description: "Explore the roof of the world through legendary trails like Everest Base Camp and Annapurna Circuit.", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop" },
  { category: "Wildlife", title: "Safari in Chitwan", description: "Witness rhinos, tigers, and exotic birdlife in the jungles of Chitwan and Bardia National Parks.", image: "https://images.unsplash.com/photo-1647679147029-508c62f35c33?auto=format&fit=crop&q=80&w=1200" },
  { category: "Nature", title: "Camping in Valleys", description: "Connect with the raw wilderness under a blanket of stars in the most remote valleys of Nepal.", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop" },
  { category: "Expedition", title: "Peak Climbing", description: "Conquer challenging peaks with our certified mountain guides and professional safety gear.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" },
];

export const packages = [
  { 
    slug: "china",
    country: "China",
    name: "CHINA",
    duration: "7 Days",
    nights: "6 Nights",
    destinations: ["Beijing", "Shanghai", "Guangzhou"],
    description: "Explore the Great Wall, Forbidden City and Shanghai skyline on this cultural masterpiece tour through China's most iconic cities.",
    heroImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1600&q=80",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
    highlights: [
      { icon: "temple_buddhist", title: "Great Wall", description: "Walk the most beautiful Mutianyu section of the Great Wall near Beijing" },
      { icon: "apartment", title: "Forbidden City", description: "Explore the imperial palace of 24 emperors during Ming and Qing Dynasties" },
      { icon: "train", title: "Bullet Train", description: "High speed train journey from Beijing to Shanghai to Guangzhou" },
      { icon: "park", title: "Yuyuan Garden", description: "Classic Chinese garden in Shanghai downtown with nearby old street" }
    ],
    itinerary: [
      { day: 1, title: "Beijing: Arrival and Transfer", description: "Upon arrival at Beijing PEK Airport, meet and transfer to hotel. Check-in starts at 14:00hrs. Day free on your own." },
      { day: 2, title: "Beijing: Great Wall & Olympic Park", description: "After breakfast, drive 75km to visit Great Wall at Mutianyu section — the most beautiful section around Beijing. Choose to hike or take cable car. Post visit, short stop at Beijing Olympic Park to see the Bird Nest Stadium and Water Cube." },
      { day: 3, title: "Beijing to Shanghai (Bullet Train ~6hrs)", description: "After breakfast, half day sightseeing: Tiananmen Square, Forbidden City outside view, and Jingshan Park. Transfer to railway station for 6hr high speed train to Shanghai." },
      { day: 4, title: "Shanghai: City Tour", description: "Visit Yuyuan Garden and old street. Silk factory visit and shopping at Nanjing Road. See the famous Bund waterfront and Oriental TV Tower outside view." },
      { day: 5, title: "Shanghai to Guangzhou (Bullet Train ~7hrs)", description: "Check-out and transfer to train station for 7hr bullet train to Guangzhou. Check-in and free for relaxation." },
      { day: 6, title: "Guangzhou: Full Day Sightseeing", description: "Dr. Sun Yat-sen Memorial Hall, Chen Clan Academy, Temple of the Six Banyan Trees, Shamian Island. Free time for shopping at Beijing Road." },
      { day: 7, title: "Tour Ends", description: "After breakfast, check-out and transfer to airport for your flight back home." }
    ],
    inclusions: [
      "Round-trip airfare from Kathmandu",
      "4-star accommodation (Twin sharing)",
      "Daily breakfast included",
      "Private AC transfers throughout",
      "English speaking guide",
      "All entry tickets as per itinerary",
      "High speed train tickets Beijing-Shanghai-Guangzhou"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
      "https://images.unsplash.com/photo-1537531393629-b52f535b7c16?w=800&q=80",
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&q=80"
    ]
  },
  { 
    slug: "vietnam",
    country: "Vietnam",
    name: "VIETNAM",
    duration: "6 Days",
    nights: "5 Nights",
    destinations: ["Da Nang", "Hoi An", "Hanoi", "Halong Bay"],
    description: "Cruise Ha Long Bay, explore Hoi An lantern streets and taste the best pho in Hanoi on this unforgettable Vietnam heritage trail.",
    heroImage: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    highlights: [
      { icon: "sailing", title: "Halong Bay Cruise", description: "UNESCO World Heritage cruise through thousands of limestone karst islands" },
      { icon: "temple_buddhist", title: "Hoi An Ancient Town", description: "Living museum of old-town architecture with magical lantern boat ride" },
      { icon: "landscape", title: "Bana Hills & Golden Bridge", description: "Iconic Golden Bridge held by giant stone hands with panoramic city views" },
      { icon: "restaurant", title: "Vietnamese Cuisine", description: "Fresh seafood on Halong Bay cruise and authentic Vietnamese street food" }
    ],
    itinerary: [
      { day: 1, title: "Da Nang: Arrival", description: "Upon arrival at Da Nang Airport, meet and transfer to hotel. Check-in at 14:00hrs. Late afternoon visit to Hoi An Ancient Town with magical lantern boat ride." },
      { day: 2, title: "Da Nang: Bana Hills & Golden Bridge", description: "After breakfast, full day trip to Bana Hills and Golden Bridge with lunch. Cable car ride with panoramic city views. Visit French Village, Linh Chua Linh Tu Temple. Free time at Fantasy Park indoor games zone." },
      { day: 3, title: "Da Nang to Hanoi (By Air)", description: "After breakfast, check-out and fly to Hanoi. Afternoon Hanoi city tour: Hoan Kiem Lake, Tran Quoc Pagoda, Dong Xuan Market and famous Train Street." },
      { day: 4, title: "Hanoi to Halong Bay", description: "After breakfast, drive to Halong Bay — UNESCO World Heritage. Board cruise ship through limestone karst islands. Fresh seafood lunch on board. Visit Surprising Grotto, swimming, kayaking, floating villages. Overnight on board." },
      { day: 5, title: "Halong Bay to Hanoi", description: "Morning Taichi on sundeck. After light breakfast, visit Luon Cave by boat. Return to Halong Wharf and transfer back to Hanoi hotel." },
      { day: 6, title: "Tour Ends", description: "After breakfast, check-out and transfer to airport for your flight back home." }
    ],
    inclusions: [
      "Round-trip airfare from Kathmandu",
      "4-star hotel + 1 night Halong Bay cruise cabin",
      "Daily breakfast + seafood lunch on cruise",
      "Private AC transfers throughout",
      "English speaking guide",
      "All entry tickets as per itinerary",
      "Internal flight Da Nang to Hanoi"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
      "https://images.unsplash.com/photo-1540543903561-bcc706e7b2fd?w=800&q=80",
      "https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?w=800&q=80"
    ]
  },
  { 
    slug: "london-england-scotland",
    country: "London, England & Scotland",
    name: "LONDON ENGLAND AND SCOTLAND",
    duration: "7 Days",
    nights: "6 Nights",
    destinations: ["London", "Cambridge", "York", "Edinburgh", "Glasgow"],
    description: "From London iconic landmarks to the Scottish Highlands — discover Britains finest history, castles and breathtaking landscapes.",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    highlights: [
      { icon: "castle", title: "Edinburgh Castle", description: "UNESCO World Heritage city tour of Scotland magnificent capital" },
      { icon: "history", title: "London Landmarks", description: "Buckingham Palace, Tower of London, Westminster Abbey and Thames" },
      { icon: "water", title: "Loch Ness", description: "Boat trip on the legendary Loch Ness and Urquhart Castle ruins" },
      { icon: "school", title: "Cambridge & York", description: "Beautiful university colleges of Cambridge and Roman walls of York" }
    ],
    itinerary: [
      { day: 1, title: "London: Arrival", description: "Upon arrival at London LHR Airport, meet and transfer to hotel. Check-in at 15:00hrs. Day free on your own." },
      { day: 2, title: "London: City Tour", description: "After breakfast, half day London guided city tour: Hyde Park, Oxford Street, St Pauls Cathedral, Tower of London, Thames, Piccadilly Circus, Houses of Parliament, Westminster Abbey, Buckingham Palace. Evening walk through Leicester Square, China Town and Soho." },
      { day: 3, title: "London to Cambridge to York to Durham", description: "After breakfast, drive to Cambridge to admire beautiful residential colleges. Continue to York — admire Sherwood Forest, visit cathedral and Roman walls. Drive to Durham for check-in." },
      { day: 4, title: "Durham to Alnwick to Edinburgh", description: "After breakfast, drive to Alnwick — medieval castle used in Harry Potter films. Continue to Edinburgh for 2hr guided tour of Scotland UNESCO World Heritage capital city." },
      { day: 5, title: "Edinburgh to Glasgow via Scottish Highlands", description: "After breakfast, drive through Pitlochry, Cairngorms National Park and Inverness. Boat trip on Loch Ness included. Visit Urquhart Castle ruins. Pass Fort William and scenic Glencoe. Arrive Glasgow late evening." },
      { day: 6, title: "Glasgow to London via Lichfield", description: "After breakfast, drive south through Scotland and England. Stop at Lichfield — charming cathedral city with cobbled streets. Arrive London late evening." },
      { day: 7, title: "Tour Ends", description: "After breakfast, check-out and transfer to airport for your flight back home." }
    ],
    inclusions: [
      "Round-trip airfare from Kathmandu",
      "4-star hotel accommodation (Twin sharing)",
      "Daily breakfast included",
      "Private coach transfers throughout Britain",
      "Professional English speaking guide",
      "Loch Ness boat trip included",
      "All entry tickets as per itinerary"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
      "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80",
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80"
    ]
  },
  { 
    slug: "europe",
    country: "Europe",
    name: "EUROPE",
    duration: "10 Days",
    nights: "9 Nights",
    destinations: ["Rome", "Florence", "Venice", "Zurich", "Paris"],
    description: "Paris, Rome, Barcelona and more — experience the best of European culture, cuisine and architecture across 4 stunning countries.",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600&q=80",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    highlights: [
      { icon: "museum", title: "Rome & Vatican", description: "Colosseum, Sistine Chapel, St Peters Basilica and ancient Roman forums" },
      { icon: "photo_camera", title: "Paris & Eiffel Tower", description: "Eiffel Tower, Seine River cruise, Versailles Palace and Champs Elysees" },
      { icon: "landscape", title: "Swiss Alps", description: "Cable car to Grindelwald First mountain with stunning Alpine views and lunch" },
      { icon: "directions_boat", title: "Venice by Boat", description: "Boat ride to the Island of Venice and Murano Glass Factory visit" }
    ],
    itinerary: [
      { day: 1, title: "Rome: Arrival", description: "Upon arrival at Rome FCO Airport, meet and transfer to hotel. Check-in at 15:00hrs. Evening transfer to Via Cavour area for dinner exploration." },
      { day: 2, title: "Rome: City Tour & Vatican", description: "After breakfast, scenic Rome city tour: Arch of Constantine, Colosseum exterior, Imperial Forums, Piazza Venezia, Circus Maximus. Afternoon free time in Vatican City — St Peters Basilica, Vatican Museums, Sistine Chapel." },
      { day: 3, title: "Rome to Florence", description: "After breakfast, drive to Florence through Tiber Valley. Visit Piazzale Michelangelo viewpoint. Guided walking tour: Ponte Vecchio, the Duomo, Plaza della Signoria." },
      { day: 4, title: "Florence to Venice", description: "After breakfast, cross Apennine Mountains to Venice. Boat to Island of Venice. Guided visit of St Marks Square. Murano Glass Factory visit." },
      { day: 5, title: "Venice to Innsbruck to Zurich", description: "After breakfast, drive to Austria — stroll in Innsbruck historic center. Cross into Switzerland through beautiful Tyrolean landscapes." },
      { day: 6, title: "Zurich to Grindelwald to Lucerne", description: "After breakfast, cable car to Grindelwald First mountain (ticket included) with lunch on the mountain. Visit Lucerne — Kapellbrucke bridge, Town Hall and charming pedestrian streets." },
      { day: 7, title: "Zurich to Strasbourg to Paris", description: "After breakfast, scenic drive through Rhine Valley to Strasbourg. Continue to Paris arriving late evening." },
      { day: 8, title: "Paris: Versailles & Montmartre", description: "After breakfast, visit Versailles Palace. Return to Paris for Montmartre — Sacre Coeur Basilica. Scenic guided tour: Arc de Triomphe, Champs-Elysees, Louvre, Notre-Dame." },
      { day: 9, title: "Paris: Eiffel Tower & Seine Cruise", description: "After breakfast, Eiffel Tower visit to 2nd floor (ticket included). Boat cruise along River Seine. Free time for shopping and exploration." },
      { day: 10, title: "Tour Ends", description: "After breakfast, check-out and transfer to airport for your flight back home." }
    ],
    inclusions: [
      "Round-trip airfare from Kathmandu",
      "4-star hotels in Rome, Florence, Venice, Zurich, Paris",
      "Daily breakfast included",
      "Private coach transfers throughout Europe",
      "Professional multilingual guide",
      "Eiffel Tower 2nd floor ticket included",
      "Grindelwald First cable car and lunch included",
      "All entry tickets as per itinerary"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800&q=80",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
      "https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?w=800&q=80"
    ]
  },
  { 
    slug: "japan-osaka",
    country: "Japan",
    name: "JAPAN OSAKA",
    duration: "6 Days",
    nights: "5 Nights",
    destinations: ["Osaka", "Kyoto", "Tokyo", "Mt Fuji"],
    description: "Cherry blossoms, ancient temples, bullet trains and the neon-lit streets of Osaka and Tokyo await you on this unforgettable Japan journey.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    highlights: [
      { icon: "temple_buddhist", title: "Kyoto Temples", description: "Kiyomizu-Dera, Fushimi Inari Shrine, Sagano Bamboo Forest and Kinkaku-ji" },
      { icon: "train", title: "Bullet Train", description: "Iconic Shinkansen bullet train experience from Osaka to Tokyo" },
      { icon: "landscape", title: "Mount Fuji", description: "Visit Mt Fuji 5th Station, Hakone and scenic Lake Ashi cruise" },
      { icon: "location_city", title: "Tokyo Highlights", description: "Tokyo Skytree, Meiji Shrine, Asakusa temples and Akihabara district" }
    ],
    itinerary: [
      { day: 1, title: "Osaka: Arrival", description: "Upon arrival at Osaka KIX Airport, meet and transfer to hotel. Check-in and free for relaxation." },
      { day: 2, title: "Osaka: Full Day Kyoto Tour", description: "After breakfast, full day Kyoto city tour: Kiyomizu-Dera Temple, Fushimi Inari Shrine, Sagano Bamboo Forest and Kinkaku-ji Golden Pavilion Temple." },
      { day: 3, title: "Osaka to Tokyo (Bullet Train)", description: "After breakfast, check-out and transfer to Shin-Osaka station for Shinkansen bullet train to Tokyo. Upon arrival, meet and transfer to hotel." },
      { day: 4, title: "Tokyo: Full Day City Tour", description: "After breakfast, full day Tokyo tour: Matcha experience, Tokyo Skytree admission, Tokyo Bay ferry. Meiji Shrine, Akihabara, Ueno, Imperial Palace. Explore Asakusa temples and shopping. Evening 360-degree view from Tokyo Skytree and Tokyo Bay Cruise." },
      { day: 5, title: "Tokyo: Mount Fuji & Hakone", description: "After breakfast, full day Mt Fuji and Hakone tour. Visit 5th Station of Mt Fuji. Explore Ninja House and Japanese Garden. Owakudani Great Boiling Valley. Sky gondola ride and Lake Ashi cruise." },
      { day: 6, title: "Tour Ends", description: "After breakfast, check-out and transfer to Tokyo NRT Airport for your flight back home." }
    ],
    inclusions: [
      "Round-trip airfare from Kathmandu",
      "4-star hotel in Osaka and Tokyo (Twin sharing)",
      "Daily breakfast included",
      "Private AC transfers throughout",
      "English speaking guide",
      "Bullet train ticket Osaka to Tokyo",
      "Tokyo Skytree admission included",
      "Lake Ashi cruise included",
      "All entry tickets as per itinerary"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80"
    ]
  },
  { 
    slug: "bali",
    country: "Bali",
    name: "BALI",
    duration: "5 Days",
    nights: "4 Nights",
    destinations: ["Tanjung Benoa", "Uluwatu", "Ubud", "Tanah Lot"],
    description: "Rice terraces, sacred temples, luxury villas and stunning sunsets in the worlds most magical island — Bali, Island of the Gods.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    highlights: [
      { icon: "surfing", title: "Water Sports", description: "Banana boat, parasailing and jet ski at Tanjung Benoa Beach" },
      { icon: "temple_buddhist", title: "Uluwatu Temple", description: "Ancient Balinese sea temple perched 70 metres above the Indian Ocean" },
      { icon: "landscape", title: "Kintamani Volcano", description: "Kintamani Volcano with Ubud Art Village and Tegenungan Waterfall" },
      { icon: "water", title: "Tanah Lot Temple", description: "Iconic Hindu temple located on a rock inside the ocean at sunset" }
    ],
    itinerary: [
      { day: 1, title: "Bali: Arrival", description: "Upon arrival at Bali DPS Airport, meet and transfer to hotel. Check-in and free on your own." },
      { day: 2, title: "Bali: Water Sports & Uluwatu Temple", description: "After breakfast, Tanjung Benoa Beach water sports: Banana Boat, Adventure Parasailing and Jet Ski. Continue to Uluwatu Temple — 11th century Balinese sea temple on a 70m cliff above the Indian Ocean." },
      { day: 3, title: "Bali: Kintamani & Ubud", description: "After breakfast, full day tour: Kintamani Volcano, Ubud Art Village, Ubud Palace, Tegenungan Waterfall, Coffee Plantation and Bali Jungle Swing (7 swings + 5 nests)." },
      { day: 4, title: "Bali: Bedugul & Tanah Lot", description: "After breakfast, full day tour: Ulundanu Bedugul, Lake Beratan with spectacular Hindu temple inside the lake. Continue to Tanah Lot — iconic Hindu temple inside the ocean above a rock at stunning sunset." },
      { day: 5, title: "Tour Ends", description: "After breakfast, check-out and transfer to airport for your flight back home." }
    ],
    inclusions: [
      "Round-trip airfare from Kathmandu",
      "4-star resort accommodation (Twin sharing)",
      "Daily breakfast included",
      "Private AC transfers throughout",
      "English speaking guide",
      "Water sports (Banana Boat, Parasailing, Jet Ski)",
      "Jungle Swing ticket (7 swings + 5 nests)",
      "All entry tickets as per itinerary"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
      "https://images.unsplash.com/photo-1559628233-100c798642d7?w=800&q=80"
    ]
  },
  { 
    slug: "southeast-asia",
    country: "Thailand · Singapore · Malaysia",
    name: "THAILAND + SINGAPORE + MALAYSIA",
    duration: "10 Days",
    nights: "9 Nights",
    destinations: ["Kuala Lumpur", "Genting Highland", "Singapore", "Pattaya", "Bangkok"],
    description: "Three iconic destinations in one epic journey — Bangkok streets, Singapore skyline and Kuala Lumpur towers in one premium combo package.",
    heroImage: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1600&q=80",
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
    highlights: [
      { icon: "apartment", title: "Petronas Towers", description: "Genting Highland tour and iconic Petronas Twin Towers in Kuala Lumpur" },
      { icon: "rocket_launch", title: "Singapore Sentosa", description: "Sentosa Island with cable car, Madame Tussauds and Wings of Time show" },
      { icon: "temple_buddhist", title: "Bangkok Temples", description: "Half day Bangkok city and temples tour including Grand Palace area" },
      { icon: "beach_access", title: "Coral Island Pattaya", description: "Coral Island speed boat tour with fresh local seafood lunch included" }
    ],
    itinerary: [
      { day: 1, title: "Kuala Lumpur: Arrival", description: "Upon arrival at Kuala Lumpur airport, meet and transfer to hotel. Check-in at 15:00hrs. Free for relaxation." },
      { day: 2, title: "Kuala Lumpur: Genting Highland Tour", description: "After breakfast, full day Genting Highland tour including scenic cable car ride and en-route photo stop at iconic Batu Caves." },
      { day: 3, title: "Kuala Lumpur: City Tour & Shopping", description: "After breakfast, half day Kuala Lumpur city tour exploring key landmarks. Afternoon leisure shopping." },
      { day: 4, title: "Kuala Lumpur to Singapore (By Coach)", description: "After breakfast, check-out and transfer to coach terminal for bus to Singapore. Upon arrival, meet and transfer to hotel." },
      { day: 5, title: "Singapore: City Tour & Sentosa Island", description: "After breakfast, half day Singapore city tour. Afternoon Sentosa Island: 1-way cable car, 4D Adventureland, Madame Tussauds 4-in-1 combo and Wings of Time show." },
      { day: 6, title: "Singapore to Bangkok/Pattaya", description: "After breakfast, transfer to Singapore airport for flight to Bangkok. Upon arrival, transfer directly to hotel in Pattaya." },
      { day: 7, title: "Pattaya: Coral Island Tour", description: "After breakfast, half day Coral Island tour by sharing speed boat with local seafood lunch." },
      { day: 8, title: "Pattaya to Bangkok: City & Temples Tour", description: "Check-out and transfer to Bangkok. En-route half day Bangkok City and Temples tour. Check-in and day free on your own." },
      { day: 9, title: "Bangkok: Free Day", description: "After breakfast, full day free for shopping or exploring the vibrant streets of Bangkok on your own." },
      { day: 10, title: "Tour Ends", description: "After breakfast, check-out and transfer to airport for your flight back home." }
    ],
    inclusions: [
      "Round-trip airfare from Kathmandu",
      "4-star boutique accommodation (Twin sharing)",
      "Daily breakfast and guided dinner experiences",
      "Private AC transfers throughout the journey",
      "All entry tickets to listed attractions",
      "Sentosa combo (cable car + Madame Tussauds + Wings of Time)",
      "Coral Island speed boat with lunch",
      "Coach transfer Kuala Lumpur to Singapore"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
      "https://images.unsplash.com/photo-1601925228008-f4e29b05fafc?w=800&q=80"
    ]
  },
  { 
    slug: "thailand",
    country: "Thailand",
    name: "THAILAND",
    duration: "5 Days",
    nights: "4 Nights",
    destinations: ["Bangkok", "Pattaya", "Coral Island"],
    description: "Golden temples in Bangkok and crystal clear waters of Pattaya — Thailand best highlights in one perfect short escape package.",
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600&q=80",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    highlights: [
      { icon: "beach_access", title: "Coral Island", description: "Speed boat tour to Coral Island with crystal clear waters and seafood lunch" },
      { icon: "temple_buddhist", title: "Bangkok Temples", description: "Half day Bangkok city and temples tour including iconic Grand Palace" },
      { icon: "shopping_bag", title: "Bangkok Shopping", description: "Full free day for shopping at Bangkok legendary markets and malls" },
      { icon: "restaurant", title: "Thai Street Food", description: "Authentic Thai cuisine throughout Pattaya and vibrant Bangkok streets" }
    ],
    itinerary: [
      { day: 1, title: "Bangkok/Pattaya: Arrival", description: "Upon arrival at Bangkok Airport, meet and transfer to Pattaya. Check-in and free for relaxation." },
      { day: 2, title: "Pattaya: Coral Island Tour", description: "After breakfast, half day Coral Island tour by sharing speed boat with local seafood lunch included." },
      { day: 3, title: "Pattaya to Bangkok: City & Temples", description: "After breakfast, check-out from Pattaya hotel and transfer to Bangkok. En-route half day Bangkok City and Temples tour. Check-in Bangkok hotel." },
      { day: 4, title: "Bangkok: Free Day", description: "After breakfast, full day free for shopping or explore Bangkok vibrant streets and hidden gems on your own." },
      { day: 5, title: "Tour Ends", description: "After breakfast, check-out and transfer to airport for your flight back home." }
    ],
    inclusions: [
      "Round-trip airfare from Kathmandu",
      "4-star hotel in Pattaya and Bangkok (Twin sharing)",
      "Daily breakfast included",
      "Coral Island speed boat with lunch",
      "Private AC transfers throughout",
      "English speaking guide",
      "Half day Bangkok City and Temples tour"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80"
    ]
  },
];

export const stats = [
  { value: "2012", label: "Established Year" },
  { value: "Thamel, Kathmandu", label: "Our Base" },
  { value: "50,000+", label: "Happy Travelers" },
  { value: "4.9★", label: "Rating" },
  { value: "200+", label: "Global Partners" },
  { value: "12+", label: "Years of Expertise" },
];
