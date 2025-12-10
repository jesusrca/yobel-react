const fondoHorizontalVideo = '/videos/fondo-horizontal.mp4';

export interface HeroContent {
  title: string;
  subtitle: string;
  videoUrl: string;
  posterUrl: string;
}

export const heroContent: HeroContent = {
  title: "Yobel, el movimiento que impulsa tu negocio",
  subtitle: "Tecnología, talento y experiencia para que tu cadena de suministro avance sin límites",
  videoUrl: fondoHorizontalVideo,
  posterUrl: "https://fal-cdn.batou.cloud/f0d5539c-890c-44fa-9783-86ef15709a14/image.png"
};