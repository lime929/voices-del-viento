export const metadata = {
  title: "Voces del Viento | Tour",
  description: "Live performances and tour dates for Voces del Viento. Check out our upcoming concerts and events.",
    keywords: [
    "Voces del Viento",
    "Concert announcements",
    "Live performances",
    "Tour dates",
    "Music events",
    "Band tour",
    "Live music",
    "Concert schedule",
    "Tour updates",
    "Music tour"
  ]
}

export default function TourPage() {
    return (
    <>
    <div class="containerA">
      <h2>PAST DATES</h2>
      <div class="accordion">
        <div class="accordion-header">
          <p>October 3, 2024</p>
          <p>Shank Hall</p>
          <p>Milwaukee, WI</p>
        </div>
        <div class="accordion-content">
          <p>
            One of the most unexpected moments in our career was during a
            spontanious acoustic concert in Milkwaukee. We had just finished an
            amazing and high energy show, but the night still felt young. The
            crowd wasn’t ready for the night to end, and neither were we. We got
            our guitars and started playing a few of our songs acoustic, with
            just us and the audience. Fans gathered around the stage to listen,
            quiet lyrics rang through the air as the crowd sang. This is why we
            love small venues, it allows for an intimate and personal
            conversation between us and the crowd, giving the music more weight
            in that moment. The way the crowd listened and gathered made that
            night one of the most memorable of our entire career.
          </p>
        </div>
        <div class="accordion-header">
          <p>March 22, 2024</p>
          <p>Palacio de Bellas Artes</p>
          <p>Mexico City, Mexico</p>
        </div>
        <div class="accordion-content">
          <p>
            There are some shows where the energy in the room is on another
            level, and our sold-out show in Mexico City was one of those nights.
            We had been playing in smaller venues around the country, but this
            night was different—it felt like the entire city had come alive to
            support us in this small venue. The crowd was singing almost every
            word, their voices supporting with ours as we played. We played
            feeding off the energy of the crowd and the energy blasted us
            through the set. This night was a reminder of why we love music and
            touring-to create moments like these with people.
          </p>
        </div>

        <div class="accordion-header">
          <p>July 14, 2023</p>
          <p>The Red Lion</p>
          <p>Manhattan, NY</p>
        </div>
        <div class="accordion-content">
          <p>
            There’s something truly magical about playing in an intimate venue
            where the connection with the crowd is so personal. Our show in New
            York, at a small but packed venue, was a night that will always
            stand out. The atmosphere was cozy, and we could see the faces of
            the fans right in front of us, every smile, every nod, every shout
            of excitement. We played a lot of our more intimate tracks that
            night, and hearing the audience’s raw emotion as they sang along
            made it feel like we were sharing something incredibly special.
            There was a vulnerability in that space, and it felt like we were
            all just one group of people, connected by the music.
          </p>
        </div>
        <div class="accordion-header">
          <p>July 12, 2023</p>
          <p>The Owl Music Parlor</p>
          <p>Brooklyn, NY</p>
        </div>
        <div class="accordion-content">
          <p>
            This was one of our first shows and a milestone in our journey as a
            band. We were nervous, excited, and full of energy, but what made it
            special was seeing our fans in the crowd. That night, the small
            venue was packed, and the moment we stepped on stage we knew it
            would be a good show. It wasn’t just a show; it was the beginning of
            something we’d dreamed about for years. That night, we knew we had
            found our calling, and that sense of belonging has fueled us ever
            since.
          </p>
        </div>
        <div class="accordion-header">
          <p>August 8, 2023</p>
          <p>Golden Gate Park</p>
          <p>San Francisco, CA</p>
        </div>
        <div class="accordion-content">
          <p>
            Our performance at a California festival will always be etched in
            our minds as one of the most exhilarating experiences we’ve had yet.
            Thousands of music lovers were packed into the festival area, and as
            we stepped onto our small stage we felt like all of our hard work
            was worth it. It was like nothing we’d ever felt before—the sheer
            scale of the event, the sea of faces, and the overwhelming support
            that was right in front of us. We had the chance to play alongside
            some amazing artists, ones we've looked up to since teenagers, like
            a dream come true. Playing the festival reminded us that we’re all
            part of something much bigger than just a band.
          </p>
        </div>
      </div>
      <div class="containerT">
        <h2>Tour Gallery</h2>
        <div class="gallery">
          <img
            src="img/natalie-runnerstrom-nTTeP31uj58-unsplash.jpg"
            alt="Gallery Image 1"
          />
          <img
            src="img/jivko-georgiev-ocppUUae2GA-unsplash.jpg"
            alt="Gallery Image 2"
          />
          <img
            src="img/jessica-christian-4bwLk2ig3QE-unsplash.jpg"
            alt="Gallery Image 3"
          />
          <img
            src="img/tijs-van-leur-WiTisob-9dw-unsplash.jpg"
            alt="Gallery Image 4"
          />
          <img
            src="img/jc-gellidon-4OcQmlK2Los-unsplash.jpg"
            alt="Gallery Image 5"
          />
          <img src="img/pexels-jordanr93-20625257.jpg" alt="Gallery Image 6" />
          <img src="img/concert-3387324_640.jpg" alt="Gallery Image 7" />
          <img
            src="img/pexels-victorfreitas-1765712.jpg"
            alt="Gallery Image 8"
          />
          <img src="img/band-4823341_640.jpg" alt="Gallery Image 9" />
        </div>
        <!-- Overlay for enlarged image on click -->
        <div class="overlay" id="overlay">
          <img id="overlay-img" alt="Enlarged Tour Image" />
        </div>
      </div>
    </div>
    
    </>
     
    );
}