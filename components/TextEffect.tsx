import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a Web Devoloper',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'I am also a Problem Solver',
        1500,
        'Currently in MERN Devolopment',
        1500,
        'Upcoming Engineer',
        1500
      ]}
      
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#c9b831] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export  default TextEffect;