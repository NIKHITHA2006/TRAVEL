// Enhanced destination data with all 28 districts
const destinations = {
    ariyalur: [
        {
            name: "Gangaikonda Cholapuram",
            description: "Ancient temple built by Rajendra Chola I",
            image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/gangaikonda-cholapuram-1654195233_edc270922cb801fa6c5f.webp",
            distance: "15 km",
            rating: 4.6

        },
        {
            name: "Jayankondam Fort",
            description: "An ancient fortress that holds historical significance and showcases the architectural prowess of the past.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/GangaiKonda_Cholapuram%28Front_View%29.JPG/1920px-GangaiKonda_Cholapuram%28Front_View%29.JPG",
            distance: "10 km",
            rating: 4.4
        },
        {
            "name": "Soundaresvarar Temple",
            "description": "This temple is known for its stunning bronze images and intricate sculptures, reflecting the artistic heritage of the region.",
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeXZQtbsLgw-0TEHPRwwWY8eG9Yuod_SwCTqaMJa6hyAW7ZuEY9IcEuLoyKxF3dd53wxGY8z9F4ZXra2jjVTzhBkf9tB3uws25qf4-URuZU0WRX9dpD9rSs9N1SbBzbo9DsxxnTWXbKzs/s1600/2018-06-10+%25284%2529.jpg",
            "distance": "12 km",
            "rating": 4.5
        },
        
            {
              "name": "Hotel Laya Inn",
              "description": "Cozy hotel with excellent service.",
              "image": "https://th.bing.com/th/id/OIP.Ry_n7YAg0LXuAvFAbSRF2AHaE7?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              "distance": "1 km",
              "rating": 4.5
            },
            {
              "name": "MSR Residency",
              "description": "Clean rooms with essential amenities.",
              "image": "https://newprojects.99acres.com/projects/msr_developers_bangalore/msr_residency/images/4i9imybw.jpg",
              "distance": "2 km",
              "rating": 4.3
            },
            {
              "name": "Cholaa Dynasty – A Bergamont Hotel",
              "description": "Luxury stay with regional cuisine.",
              "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/c4/46/bb/frontal-view.jpg?w=500&h=-1&s=1",
              "distance": "3 km",
              "rating": 4.7
            }
          
          
    ],
    chengalpattu: [
        {
            name: "Mamallapuram",
            description: "UNESCO World Heritage site with ancient temples",
            image: "https://www.tripsavvy.com/thmb/0GfEl3bewIa33o74mRxmqm1r9Ow=/2122x1413/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-621158540-166c67d82d6d4039ab1e2a533b6a599f.jpg",
            distance: "0 km",
            rating: 4.8
        },
        {
            "name": "Sri Maha Bhairavar Rudhra Alayam",
            "description": "A powerful temple dedicated to Bhairavar",
            "image": "https://as2.ftcdn.net/v2/jpg/04/89/29/65/1000_F_489296557_359rFwElG9yNMnwShMSF3pIV7QlGQRDU.jpg",
            "distance": "5 km",
            "rating": 4.7
        },
       
        {
            "name": "Vedanthangal Bird Sanctuary",
            "description": "Famous for migratory bird watching",
            "image": "https://www.holidify.com/images/attr_wiki/compressed/attr_wiki_2734.jpg",
            "distance": "12 km",
            "rating": 4.6
        },
        
            {
              "name": "Fairfield by Marriott Chennai Mahindra World City",
              "description": "Modern hotel offering comfortable rooms and amenities.",
              "image": "https://y.cdrst.com/foto/hotel-sf/12319a56/granderesp/foto-hotel-12318fac.jpg",
              "distance": "10 km",
              "rating": 4.5
            },
            {
              "name": "Welcomhotel by ITC Hotels",
              "description": "Luxury hotel with excellent service and facilities.",
              "image": "https://www.itchotels.com/content/dam/itchotels/in/umbrella/welcomHotel/hotels/welcomhotelgstroad-chennai/images/overview/headmast-desktop/Courtyard_1440x600.png",
              "distance": "12 km",
              "rating": 4.6
            },
            {
              "name": "Bakya Slot - Luxury Rooms",
              "description": "Comfortable rooms with essential amenities.",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8jMxaBAH0q1maPAw4a8wdBjLsMEKbWiXZA&s",
              "distance": "8 km",
              "rating": 4.3
            }
          
          
    ],
    chennai: [
        {
            name: "Marina Beach",
            description: "The second-longest urban beach in the world",
            image: "https://preview.redd.it/gz6r0pqpb7c11.jpg?width=1080&crop=smart&auto=webp&s=e33c2473e29d16cfd50bedf845e35a2c21f3dbab",
            distance: "0 km",
            rating: 4.5
        },
        {
            name: "Guindy National Park",
            description: "Chennai's only national park",
            image: "https://guindypark.com/img/Video.png",
            distance: "3 km",
            rating: 4.8
        },
        {
            name: "Kapaleeshwarar Temple",
            description: "Ancient Dravidian architecture temple",
            image: "https://live.staticflickr.com/4106/5043796675_5333ba8d20_b.jpg",
            distance: "3 km",
            rating: 4.8
        },
        {
            "name": "The Leela Palace Chennai",
            "description": "Luxurious 5-star hotel with sea views.",
            "image": "https://www.theleela.com/prod/content/assets/styles/tl_840_604_webp/public/2024-01/Swimming-Pool_0.jpg.webp?VersionId=OW62I4aQvLp7fNEjCSZMQk2WFaHpIGdJ&itok=xS5wGGHx",
            "distance": "3 km",
            "rating": 4.6
          },
          {
            "name": "ITC Grand Chola, Chennai",
            "description": "Grand architecture with luxury amenities.",
            "image": "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/headmast-desktop/pool-long-dusk.png",
            "distance": "8 km",
            "rating": 4.5
          },
          {
            "name": "Taj Coromandel Chennai",
            "description": "Classic elegance with modern comforts.",
            "image": "https://foto.hrsstatic.com/fotos/0/2/800/458/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2Fdms%2F217175%2FVFML%2Fchipstead_3_s.jpg/f496a373421f2d63d70d0bd344589c7e/1024%2C681/6/Taj_Coromandel_Chennai-Chennai-Hotel_bar-7-217175.jpg",
            "distance": "4 km",
            "rating": 4.4
          }
        

    ],
    coimbatore: [
        {
            name: "Dhyanalinga Temple",
            description: "Peaceful meditation space",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "12 km",
            rating: 4.7
        },
       
        {
            name: " Perur Pateeswarar Temple",
            description: "A significant Hindu temple dedicated to Lord Shiva",
            image: "https://www.transindiatravels.com/wp-content/uploads/pateeswaram-perur-coimbatore.jpg",
            distance: "12 km",
            rating: 4.7
        },
        {
            name: "Isha Yoga Center",
            description: "A spiritual retreat and yoga center founded by Sadhguru Jaggi Vasudev.",
            image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/e4/12/b9.jpg",
            distance: "12 km",
            rating: 4.7
        },
        {
            name: "Marudhamalai Hill Temple",
            description: "A popular Hindu temple dedicated to Lord Murugan",
            image: "https://img.traveltriangle.com/blog/wp-content/uploads/2024/05/A-Guide-to-the-Marudhamalai-Temple-Unveiling-the-Abode-of-Lord-Murugan.jpg",
            distance: "12 km",
            rating: 4.7
        },
        {
            name: "Velliangiri Hills",
            description: "A scenic hill range with temples and trekking trails",
            image: "https://static.sadhguru.org/d/46272/1635801564-1635801563537.jpg",
            distance: "12 km",
            rating: 4.7
        },
        {
            name: "Singanallur Lake",
            description: "A large lake in the city",
            image: "https://cdn.tripuntold.com/media/photos/location/2018/12/27/0bd908bd-4f43-410a-8f46-274b2d370368.jpg",
            distance: "12 km",
            rating: 4.7
        }
    ],
    cuddalore: [
        {
            name: "Silver Beach",
            description: "Beautiful beach with silver-like sand",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3YzKqJbpMwXoaI-uNkrjde8sdmKxzfR9_Q&s",
            distance: "0 km",
            rating: 4.3
        },
        
          

    ],
    dharmapuri: [
        {
            name: "Hogenakkal Falls",
            description: "The Niagara of India",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNuzDralQ1tezqq7hMN7JtEmDDp3B0ETFJWw&s",
            distance: "20 km",
            rating: 4.7
        }
    ],
    dindigul: [
        {
            name: "Dindigul Fort",
            description: "Historic fort with panoramic views",
            image: "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Dindigul_Dindigul_rock_fort_1_l_361_640.jpg?im=Resize=(288,162)",
            distance: "0 km",
            rating: 4.4
        }
    ],
    erode: [
        {
            name: "Bhavani Sangamam",
            description: "Confluence of three rivers",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bhavani-Kaveri-Sangamam.JPG/1024px-Bhavani-Kaveri-Sangamam.JPG",
            distance: "10 km",
            rating: 4.5
        }
        
    ],
    
    kallakurichi: [
        {
            name: "Gomuki Dam",
            description: "Scenic dam and reservoir",
            image: "https://th-i.thgim.com/public/news/national/tamil-nadu/bq3x3e/article32742143.ece/alternates/FREE_1200/01OCTTH--Damjpg",
            distance: "25 km",
            rating: 4.2
        }
    ],
    kancheepuram: [
        {
            name: "Kailasanathar Temple",
            description: "Oldest temple in Kanchipuram",
            image: "https://preview.redd.it/nhvef7xyuku21.jpg?auto=webp&s=3e8546340eb06fe121fac153a259d743271488aa",
            distance: "0 km",
            rating: 4.8
        }
    ],
    karur: [
        {
            name: "Pasupathipalayam",
            description: "Ancient temple complex",
            image: "https://content3.jdmagicbox.com/comp/karur/x8/9999p4324.4324.180906191317.n6x8/catalogue/sri-sivaguru-studio-pasupathipalayam-karur-photographers-vqkcprpw2u.jpg",
            distance: "8 km",
            rating: 4.3
        }
    ],
    krishnagiri: [
        {
            name: "Krishnagiri Dam",
            description: "Scenic dam and garden",
            image: "https://www.hlimg.com/images/things2do/738X538/ttd_201811221309251542872365885173t.jpg",
            distance: "5 km",
            rating: 4.4
        }
    ],
    madurai: [
        {
            name: "Meenakshi Amman Temple",
            description: "Historic Hindu temple with stunning architecture",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/71/bf/0e/madurai-meenakshi-temple.jpg?w=1200&h=1200&s=1",
            distance: "0 km",
            rating: 4.9
        },
        {
            "name": "Thirumalai Nayakkar Mahal",
            "description": "Grand palace known for its Dravidian style",
            "image": "https://maduraitourism.co.in/images/places-to-visit/headers/thirumalai-nayak-palace-madurai-entry-fee-timings-holidays-reviews-header.jpg",
            "distance": "2 km",
            "rating": 4.6
        },
        {
            "name": "Gandhi Memorial Museum",
            "description": "Museum showcasing Gandhi's life and history",
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/19/0b/5f/7d/gandhi-memorial-museum.jpg",
            "distance": "3 km",
            "rating": 4.5
        },
        {
            "name": "Vandiyur Mariamman Teppakulam",
            "description": "Large temple tank with a floating shrine",
            "image": "https://th.bing.com/th/id/OIP.XCGon57mib8l3zFZYUJ4kgHaHa?rs=1&pid=ImgDetMain",
            "distance": "5 km",
            "rating": 4.4
        },
        {
            "name": "Alagar Kovil",
            "description": "Scenic hilltop temple dedicated to Vishnu",
            "image": "https://maduraitourism.co.in/images/tourist-places/azhagar-kovil-alagar-koyil-temple-madurai/azhagar-kovil-alagar-koyil-temple-madurai-tourism-opening-time-closing.jpg",
            "distance": "21 km",
            "rating": 4.7
        },
        {
            "name": "Samanar Hills",
            "description": "Ancient Jain caves with rock carvings",
            "image": "https://2.bp.blogspot.com/-8nBn3Np5udo/W3rlgtGHq3I/AAAAAAABJ3s/fYb-l4gB3QwxwXqqoPxc2KU0_J1KR8lagCEwYBhgL/s1600/2017-11-24.jpg",
            "distance": "10 km",
            "rating": 4.5
        }
    ],
    mayiladuthurai: [
        {
            name: "Mayiladuthurai Temple",
            description: "Ancient temple with unique architecture",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgFpTJoeicXG5hgxphMmTizdMWw9PnqAJTQ&s",
            distance: "0 km",
            rating: 4.5
        }
    ],
    nagapattinam: [
        {
            name: "Nagore Dargah",
            description: "Famous Muslim shrine",
            image: "https://thanjavur.info/wp-content/uploads/2019/05/nagore-dargah-temple.jpg",
            distance: "0 km",
            rating: 4.6
        }
    ],
    namakkal: [
        {
            name: "Namakkal Fort",
            description: "Historic rock fort",
            image: "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2025/01/Namakkal-Fort-view.jpg?resize=1104%2C736&ssl=1",
            distance: "0 km",
            rating: 4.4
        }
    ],
    nilgiris: [
        {
            name: "Ooty Lake",
            description: "Artificial lake surrounded by Eucalyptus trees",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/3d/de/fd/upper-bhavani-lake.jpg?w=900&h=500&s=1",
            distance: "2 km",
            rating: 4.7
        }
    ],
    perambalur: [
        {
            name: "Ranjankudi Fort",
            description: "18th-century fort",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ranjankudi_Fort-Perambalur_district-Tamil_Nadu.jpg",
            distance: "15 km",
            rating: 4.2
        }
    ],
    pudukkottai: [
        {
            name: "Pudukkottai Palace",
            description: "Historic palace with museum",
            image: "https://www.southindiatoursandtravels.com/SittPhotos/Tamilnadu/Pudukkottai/Pudukottai-1.jpg",
            distance: "0 km",
            rating: 4.5
        }
    ],
    ramanathapuram: [
        {
            name: "Ramanathaswamy Temple",
            description: "One of the twelve Jyotirlinga temples",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifRgHxIqMEe_ZDbUHADKM3ubViiFo7P7vwA&s",
            distance: "0 km",
            rating: 4.8
        }
    ],
    ranipet: [
        {
            name: "Ranipet Fort",
            description: "Historic fort with colonial architecture",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXwT40cI3nhZonldkEbqqkX6D9OWBuUWbXzyy039Y_OnPaoy20P1tbmKkGWnWK4RbZAo&usqp=CAU",
            distance: "0 km",
            rating: 4.3
        }
    ],
    salem: [
        {
            name: "Yercaud",
            description: "Hill station known as poor man's Ooty",
            image: "https://static.toiimg.com/thumb/59593450/wARANGAL-Fort-2.jpg?width=1200&height=900",
            distance: "30 km",
            rating: 4.6
        }
    ],
    sivaganga: [
        {
            name: "Sivaganga Palace",
            description: "Historic palace with unique architecture",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "0 km",
            rating: 4.4
        }
    ],
    tenkasi: [
        {
            name: "Courtallam Falls",
            description: "Therapeutic waterfalls",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "5 km",
            rating: 4.7
        }
    ],
    thanjavur: [
        {
            name: "Brihadeeswarar Temple",
            description: "UNESCO World Heritage site",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "0 km",
            rating: 4.9
        }
    ],
    theni: [
        {
            name: "Meghamalai",
            description: "High Wavy Mountains",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "40 km",
            rating: 4.6
        }
    ],
    thoothukudi: [
        {
            name: "Our Lady of Snows Basilica",
            description: "Historic church near the seashore",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "0 km",
            rating: 4.5
        }
    ],
    tiruchirappalli: [
        {
            name: "Rock Fort Temple",
            description: "Ancient rock-cut temple complex",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "0 km",
            rating: 4.7
        }
    ],
    tirunelveli: [
        {
            name: "Nellaiappar Temple",
            description: "Ancient Dravidian temple",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "0 km",
            rating: 4.6
        }
    ],
    tirupathur: [
        {
            name: "Yelagiri Hills",
            description: "Hill station with adventure activities",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "25 km",
            rating: 4.5
        }
    ],
    tiruppur: [
        {
            name: "Thirumoorthy Temple",
            description: "Temple near Thirumoorthy Dam",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "20 km",
            rating: 4.4
        }
    ],
    vellore: [
        {
            name: "Vellore Fort",
            description: "16th-century fort with museum",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "0 km",
            rating: 4.7
        }
    ],
    viluppuram: [
        {
            name: "Gingee Fort",
            description: "Tripartite fort complex",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "30 km",
            rating: 4.6
        }
    ],
    virudhunagar: [
        {
            name: "Srivilliputtur Temple",
            description: "Famous for its 192-foot tower",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
            distance: "0 km",
            rating: 4.5
        }
    ]
};

// DOM Elements
const citySelect = document.getElementById('citySelect');
const destinationGrid = document.querySelector('.destination-grid');
const exploreBtn = document.getElementById('exploreBtn');
const navLinks = document.querySelector('.nav-links');

// Populate city select with all districts
function populateCitySelect() {
    const districts = Object.keys(destinations).sort();
    citySelect.innerHTML = '<option value="">Select a District</option>' +
        districts.map(district => 
            `<option value="${district}">${district.charAt(0).toUpperCase() + district.slice(1)}</option>`
        ).join('');
}

// Function to create destination card with enhanced animation
function createDestinationCard(destination) {
    return `
        <div class="destination-card">
            <div class="destination-image">
                <img src="${destination.image}" alt="${destination.name}">
            </div>
            <div class="destination-info">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="destination-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${destination.distance}</span>
                    <span><i class="fas fa-star"></i> ${destination.rating}</span>
                </div>
            </div>
        </div>
    `;
}

// Function to display destinations with enhanced animations
function displayDestinations(city) {
    const cityDestinations = destinations[city] || [];
    destinationGrid.innerHTML = cityDestinations.map(createDestinationCard).join('');
    
    // Add staggered animation to cards
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
    });
}

// Event Listeners
exploreBtn.addEventListener('click', () => {
    const selectedCity = citySelect.value;
    if (selectedCity) {
        displayDestinations(selectedCity);
        document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    }
});

citySelect.addEventListener('change', () => {
    const selectedCity = citySelect.value;
    if (selectedCity) {
        displayDestinations(selectedCity);
    }
});

// Enhanced smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Update active link
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Enhanced navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Navbar hide/show effect
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Initialize
populateCitySelect();
displayDestinations('chennai');